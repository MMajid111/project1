import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import './i18n';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Otp from './pages/Otp';
import Landing from './pages/Landing';
import Onboarding from './pages/business/Onboarding';
import BusinessRegistration from './pages/business/BusinessRegistration';
import BusinessDashboard from './pages/business/BusinessDashboard';
import ModeratorLogin from './pages/moderator/Login';
import ModeratorLayout from './components/moderator/ModeratorLayout';
import Dashboard from './components/moderator/Dashboard';
import Business from './components/moderator/Business';
import Logout from './components/moderator/Logout';
import BusinessLogin from './pages/business/BusinessLogin';
import BusinessBusinessPage from './pages/business/BusinessBusinessPage';
import BusinessUsersPage from './pages/business/BusinessUsersPage';
import BusinessLeaderBoardPage from './pages/business/BusinessLeaderBoardPage';
import BusinessManageRoles from './pages/business/BusinessManageRoles';
import SupportStaffLayout from './components/staffDashboard/supportStaffLayout';
import StaffDashboard from './pages/staffDashboard/staffDashboard';
import Issues from './components/staffDashboard/Issues';
import Users from './components/staffDashboard/StaffUsers';
import BusinessLayout from './components/business/BusinessLayout';
import BusinessReviewsPage from './pages/business/BusinessReviewsPage';
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsersPage from './pages/admin/AdminUsersPage';
import AdminBusinessPage from './pages/admin/AdminBusinessPage';
import AdminBusinessDetailsPage from './pages/admin/AdminBusinessDetailsPage';
import AdminLeaderBoardPage from './pages/admin/AdminLeaderBoardPage';
import AdminManageRoles from './pages/admin/AdminManageRoles';
import StaffBusiness from './components/staffDashboard/StaffBusiness';
import StaffBusinessDetails from './components/staffDashboard/StaffBusinessDetails';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <Routes>
            {/* Public Routes */}
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<Signup />} />
            <Route path='/otp' element={<Otp />} />

            {/* Business Routes */}
            <Route path='/business-onboarding' element={<Onboarding />} />
            <Route path='/register-business' element={<BusinessRegistration />} />
            <Route path='/business-dashboard' element={<BusinessDashboard />} />

            {/* Moderator Authentication */}
            <Route path='/moderator-login' element={<ModeratorLogin />} />
            
            {/* Moderator Dashboard with Sidebar */}
            <Route path='/moderator-dashboard' element={<ModeratorLayout />}>
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='business' element={<Business />} />
              <Route path='logout' element={<Logout />} />
            </Route>

            {/* Business Auth */}
            <Route path='/business-login' element={<BusinessLogin />} />
            <Route path='/business-dashboard' element={<BusinessLayout />} >
                <Route path='dashboard' element={<BusinessDashboard />} />
                <Route path='business' element={<BusinessBusinessPage />} />
                <Route path='reviews' element={<BusinessReviewsPage />} />
                <Route path='leaderboard' element={<BusinessLeaderBoardPage />} />
            </Route>

            {/* Support Staff Dashboard with Sidebar */}
            <Route path='/supportStaff-dashboard' element={<SupportStaffLayout />}>
              <Route path='dashboard' element={<StaffDashboard />} />
              <Route path='issues' element={<Issues />} />
              <Route path='users' element={<Users />} />
              <Route path='business' element={<StaffBusiness />} />
              <Route path='business/:id' element={<StaffBusinessDetails />} />
              <Route path='logout' element={<Logout />} />
            </Route>

            <Route path='/admin-login' element={<AdminLogin />} />
            <Route path='/admin-dashboard' element={<AdminLayout />} >
                <Route path='dashboard' element={<AdminDashboard />} />
                <Route path='users' element={<AdminUsersPage />} />
                <Route path='business' element={<AdminBusinessPage />} />
                <Route path='business/:id' element={<AdminBusinessDetailsPage />} />
                <Route path='leaderboard' element={<AdminLeaderBoardPage />} />
                <Route path='manage-roles' element={<AdminManageRoles />} />
            </Route>
          </Routes>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
