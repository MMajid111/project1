# BACKEND API CONTRACT

## AUTHENTICATION

### Strategy
The system uses **JWT (JSON Web Tokens)** for stateless authentication, paired with **Refresh Tokens** for secure session management.

### Credentials
- **Storage**: Passwords MUST be hashed using **bcrypt** with a work factor (cost) of at least **10**.
- **Transmission**: All authentication requests MUST be sent over **HTTPS**.

### Tokens

#### Access Token
- **Format**: JWT (RS256 signed).
- **Payload**:
  ```json
  {
    "sub": "user_uuid",
    "email": "user@example.com",
    "role": "business_owner",
    "org_id": "org_uuid",
    "exp": 1735689600
  }
  ```
- **Lifespan**: Short-lived (e.g., **15 minutes**).
- **Transmission**: Sent in the `Authorization` header as `Bearer <token>`.

#### Refresh Token
- **Format**: Opaque high-entropy string or signed JWT.
- **Lifespan**: Long-lived (e.g., **7 days**).
- **Storage**: Stored in an **HttpOnly, Secure, SameSite=Strict** cookie to prevent XSS.
- **Rotation**: **Rotation is enforced**. usage of a refresh token invalidates it and issues a new pair (Access + Refresh).
    - *Security*: If a reused refresh token is detected, invalidate the entire token family (sign out the user).

### API Endpoints

#### `POST /api/auth/login`
- **Request**: `{ "email": "...", "password": "..." }`
- **Response**:
    - **Body**: `{ "accessToken": "jwt...", "user": { ... } }`
    - **Headers**: `Set-Cookie: refreshToken=...; HttpOnly; Secure; SameSite=Strict`

#### `POST /api/auth/refresh`
- **Request**: Cookie `refreshToken`
- **Response**:
    - **Body**: `{ "accessToken": "new_jwt..." }`
    - **Headers**: `Set-Cookie: refreshToken=new_token...`

#### `POST /api/auth/logout`
- **Request**: Cookie `refreshToken`
- **Action**: Invalidate refresh token server-side (blacklist/deletion).
- **Response**: 204 No Content, Clear Cookie.

---

## AUTHORIZATION

### Role-Based Access Control (RBAC)
Authorization is strictly enforced based on the user's assigned role.

| Role | Description | Access Scope |
| :--- | :--- | :--- |
| **Admin** | Platform administrator | Full access to all resources and organizations. |
| **Business Owner** | Owner of a specific business/org | Manage own business profile, view reviews, reply to reviews. |
| **Reviewer** | End-user writing reviews | Create/Edit own reviews, View public businesses. |

### Organization-Level Isolation (Multi-Tenancy)
- All data access for **Business Owner** role MUST be scoped by `org_id`.
- The `org_id` is extracted from the verified Access Token (JWT), **NOT** from the request body or parameters (to prevent IDOR).
- **Reviewer** actions are scoped by `user_id` (e.g., can only edit their own reviews).

### Middleware Logic
1.  **Verify Token**: Decode and verify JWT signature.
2.  **Extract Context**: Attach `user_id`, `role`, and `org_id` to the request context.
3.  **Check Role**: specific endpoints require specific roles (e.g., `@Roles('ADMIN')`).
4.  **Scope Query**:
    - If `role == BUSINESS_OWNER`, force filter `WHERE organization_id = user.org_id`.
    - If `role == REVIEWER`, force filter `WHERE user_id = user.id` (for own resources).

---

## SUBSCRIPTIONS & BILLING

### 1. Domain Models

#### Subscription
Represents a customer's subscription to a plan.
*   `id`: UUID
*   `organization_id`: UUID (Foreign Key)
*   `status`: Enum (`trialing`, `active`, `past_due`, `canceled`, `incomplete`, `incomplete_expired`)
*   `plan_id`: String (Foreign Key to Plan)
*   `current_period_start`: Timestamp
*   `current_period_end`: Timestamp
*   `cancel_at_period_end`: Boolean
*   `stripe_subscription_id`: String (Provider Reference)
*   `trial_end`: Timestamp (Nullable)

#### Plan
Defines available service tiers.
*   `id`: String (e.g., 'free', 'pro_monthly', 'business_annual')
*   `name`: String
*   `price`: Integer (in smallest currency unit, e.g., cents)
*   `currency`: String (ISO code)
*   `interval`: Enum (`month`, `year`)
*   `entitlements`: JSONB (Feature limits, e.g., `{ "seats": 5, "api_access": true }`)

#### Organization (Extension)
*   `billing_email`: String
*   `stripe_customer_id`: String
*   `subscription_id`: UUID (Current active subscription)

### 2. Subscription Lifecycle

*   **Free Trial**: New organizations start in `trialing` state for 14 days. No credit card required initially.
    *   *Transition*: `trialing` -> `active` (on payment method add) OR `trialing` -> `canceled` (on expiry).
*   **Active**: Organization has a valid payment method and is within a paid period.
    *   *Access*: Full access to plan features.
*   **Past Due**: Recurring payment failed. System retries for X days (Smart Retries).
    *   *Access*: Grace period active (full access), but UI shows distinct warning.
    *   *Transition*: `past_due` -> `active` (success) OR `past_due` -> `canceled`/`unpaid` (final failure).
*   **Canceled**: Customer manually canceled.
    *   *Access*: Access continues until `current_period_end`.
    *   *Transition*: Becomes effectively inactive after period end.
*   **Incomplete**: Initial payment attempt failed (requires SCA/authentication).

### 3. Payment Provider Abstraction (IPaymentProvider)

We wrap external provider (Stripe) logic to isolate dependencies.

```typescript
interface IPaymentProvider {
  // Customer Management
  createCustomer(email: string, name: string, metadata: any): Promise<string>; // returns externalId
  
  // Checkout / Portal
  createCheckoutSession(customerId: string, priceId: string, successUrl: string, cancelUrl: string): Promise<string>; // returns URL
  createBillingPortalSession(customerId: string, returnUrl: string): Promise<string>; // returns URL

  // Subscription Management
  getSubscriptionStatus(subscriptionId: string): Promise<SubscriptionStatus>;
  updateSubscription(subscriptionId: string, priceId: string): Promise<Subscription>;
}
```

### 4. Webhook Events & Handlers

We expose a single webhook endpoint: `POST /api/webhooks/billing`.
Signature verification is **mandatory**.

| Provider Event (Stripe) | Internal Action | Handler Logic |
| :--- | :--- | :--- |
| `checkout.session.completed` | **Activate Subscription** | 1. Retrieve `customer_id` and `subscription_id` from payload.<br>2. Update Organization `stripe_customer_id`.<br>3. Create/Update local `Subscription` record.<br>4. Set status to `active`. |
| `invoice.payment_succeeded` | **Renew Period** | 1. Find Subscription by external ID.<br>2. Update `current_period_end`.<br>3. Set status to `active`.<br>4. Send receipt email (handled by Stripe or internal). |
| `invoice.payment_failed` | **Handle Delinquency** | 1. Find Subscription.<br>2. Set status to `past_due`.<br>3. Trigger internal alert to user (email/in-app). |
| `customer.subscription.updated` | **Sync State** | 1. Sync local `Subscription` fields (plan, status, trial_end) with payload. |
| `customer.subscription.deleted` | **Cancel Access** | 1. Set local Subscription status to `canceled`.<br>2. Remove `entitlements` cache. |

### 5. Integration with User Access (Feature Gating)

Billing status and Plan determine access. This is enforced via middleware/guards.

#### Middleware Logic
1.  **Resolve Context**: Fetch `Organization` types and included `Subscription` for the current user.
2.  **Check Status**:
    *   If `status` is `active` or `trialing` -> Proceed to entitlement check.
    *   If `status` is `past_due` -> Allow access but inject "Payment Required" warning headers/metadata.
    *   If `status` is `canceled` (and past period end) or `incomplete` -> Redirect to Billing/Upgrade page.

#### Entitlement Check (Guard)
```typescript
function hasAccess(org: Organization, featureKey: string): boolean {
  const plan = PLANS[org.subscription.plan_id];
  if (!plan) return false;
  
  const limit = plan.entitlements[featureKey];
  const usage = getUsage(org.id, featureKey);
  
  if (typeof limit === 'boolean') return limit;
  if (typeof limit === 'number') return usage < limit;
  return false;
}
```
