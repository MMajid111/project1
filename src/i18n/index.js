import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
const resources = {
  en: {
    translation: {
      common: {
        logout: 'Logout',
        save: 'Save',
        cancel: 'Cancel',
        delete: 'Delete',
        edit: 'Edit',
        back: 'Back',
        next: 'Next',
        previous: 'Previous',
        submit: 'Submit',
        upload: 'Upload',
        search: 'Search here'
      },
      months: {
        january: 'January',
        february: 'February',
        march: 'March',
        april: 'April',
        may: 'May',
        june: 'June',
        july: 'July',
        august: 'August',
        september: 'September',
        october: 'October',
        november: 'November',
        december: 'December'
      },
      welcome: {
        greeting: 'Hi',
        message: 'Have a good day!',
      },
      admin: {
        login: {
          title: 'Reviewer',
          subtitle: 'Admin Dashboard',
          enterAccountInfo: 'Enter Your Account Information to Sign In',
          enterNumber: 'Enter Your Number',
          password: 'Password',
          recoverPassword: 'Recover Password?',
          signIn: 'Sign In'
        },
        dashboard: {
          title: 'Dashboard',
          welcome: 'Hi, Admin Welcome back to the admin Dashboard',
          registeredUsers: 'Registered User',
          registeredBusinesses: 'Registered Businesses',
          businessRequests: 'Business Request',
          registrationAnalytics: 'Registration Analytics',
          upFromYesterday: '+8.5% Up from yesterday',
          downFromYesterday: '-4.3% Down from yesterday'
        },
        business: {
          businessName: 'Business Name',
          businessRank: 'Business Rank',
          rating: 'Business Rating',
          rank: 'Rank',
          businessReviews: 'Business Reviews',
          category: 'Business Category',
          website: 'Business Website',
          dateJoined: 'Date Joined',
          actionPerform: 'Actions',
          reviews: 'Reviews',

          setupProfile: 'Setup your business profile so, client can review',
          dashboard: 'Dashboard',
          reviews: 'Reviews',
          leaderboard: 'Leaderboard',
          registeredBusinesses: 'Registered Businesses',
          registrationRequest: 'Registration Request',
          year: 'Year',
          weekly: 'Weekly',
          viewMoreInfo: 'View More Info.',
          block: 'Block',
          blocked: 'Blocked',
          warning: 'Warning',
          blockConfirm: 'The business will be blocked. Do you want to continue?',
          cancel: 'Cancel',
          confirm: 'Confirm',
          businessBlocked: 'Business has been blocked.',
          businessApproved: 'Business approved.',
          businessRejected: 'Business rejected.'
        },
        users: {
          sNo: 'S.No',
          fullname: 'Full Name',
          number: 'Number',
          location: 'Location',
          profession: 'Profession',
          givenReview: 'Reviews',
          dateJoined: 'Date Joined',
          actionPerform: 'Actions',
          title: 'Users',
          year: 'Year',
          block: 'Block',
          unblock: 'Unblock',
          blocked: 'Blocked',
          warning: 'Warning',
          blockConfirm: 'The user will be blocked. Do you want to continue?',
          unblockConfirm: 'The user will be unblocked. Do you want to continue?',
          userBlocked: 'User has been blocked.',
          userUnblocked: 'User has been unblocked.'
        },
        roles: {
          title: 'Manage Roles',
          all: 'All',
          addEmployee: 'Add Employee',
          back: 'Back',
          addNewEmployee: 'Add New Employee',
          assignRole: 'Assign role',
          enterNumber: 'Enter Number',
          enterPassword: 'Enter Password',
          register: 'Register',
          employeeRemoved: 'Employee removed.',
          employeeRegistered: 'Employee registered.'
        },
        leaderboard: {
          title: 'Business Leaderboard',
          reviews: 'Reviews',
          rank: 'Rank',
          rating: 'Rating',
          category: 'Category',
          website: 'Website',
          dateJoined: 'Date Joined'
        }
      },
      business: {
        businessName: 'Business Name',
        businessRank: 'Business Rank',
        businessRating: 'Business Rating',
        businessReviews: 'Business Reviews',
        businessCategory: 'Business Category',

        setupProfile: 'Setup your business profile so, client can review',
        dashboard: 'Dashboard',
        reviews: 'Reviews',
        leaderboard: 'Leaderboard',
        businessProfile: 'Business Profile',
        users: 'Users',
        manageRoles: 'Manage Roles',
        login: 'Business Login',
        registration: {
          title: 'Business Registration',
          name: 'Business Name',
          email: 'Business Email',
          phone: 'Phone Number',
          address: 'Address',
          description: 'Business Description',
          submit: 'Register Business',
        },
        profile: {
          businessInfo: 'Business Information',
          dragDropLogo: 'Drag and drop Business Logo',
          selectCategory: 'Select your Business category',
          enterBusinessName: 'Enter Your Business name',
          enterWebsite: 'Enter Your website Link',
          enterDescription: 'Enter Description',
          verification: 'Business Verification',
          dragDropCert: 'Drag and drop Business Authentication certificate',
          verified: 'Verified',
          productsInfo: 'Products Information',
          enterProductName: 'Enter Your Product Name',
          selectProductCategory: 'Enter Your Product category',
          category1: 'Category 1',
          category2: 'Category 2',
          uploadMedia: 'Upload media',
          addMoreProducts: 'Add More Products'
        },
        onboarding: {
          title: 'Business Onboarding',
          step1: 'Step 1: Basic Information',
          step2: 'Step 2: Business Details',
          step3: 'Step 3: Verification',
          next: 'Next',
          previous: 'Previous',
          complete: 'Complete Setup',
        },
        reviewsPage: {
          title: 'Customer Reviews',
          filter: 'Filter Reviews',
          sort: 'Sort By',
          rating: 'Rating',
          date: 'Date',
          response: 'Respond to Review',
          noReviews: 'No reviews yet',
          latestReview: 'Latest Customer Review',
          customerSays: 'What Customer Says About You..',
          giveReply: 'Give Reply',
          writeReply: 'Write a Reply',
          send: 'Send',
          customerReview: 'Customer Review',
          positiveReview: 'Positive Review',
          negativeReview: 'Negative Review',
          upFromYesterday: '+8.5% Up from yesterday',
          downFromYesterday: '-4.3% Down from yesterday'
        },
        leaderboardPage: {
          title: 'Business Leaderboard',
          rank: 'Rank',
          business: 'Business',
          rating: 'Rating',
          reviews: 'Reviews',
          score: 'Score'
        }
      }
    }
  },
  ar: {
    translation: {
      common: {
        logout: 'تسجيل الخروج',
        save: 'حفظ',
        cancel: 'إلغاء',
        delete: 'حذف',
        edit: 'تعديل',
        back: 'رجوع',
        next: 'التالي',
        previous: 'السابق',
        submit: 'إرسال',
        upload: 'رفع',
        search: 'ابحث هنا'
      },

      months: {
        "january": "يناير",
        "february": "فبراير",
        "march": "مارس",
        "april": "أبريل",
        "may": "مايو",
        "june": "يونيو",
        "july": "يوليو",
        "august": "أغسطس",
        "september": "سبتمبر",
        "october": "أكتوبر",
        "november": "نوفمبر",
        "december": "ديسمبر"
      },

      welcome: {
        greeting: 'مرحباً',
        message: 'أتمنى لك يوماً سعيداً!',
      },
      admin: {
        login: {
          title: 'المراجع',
          subtitle: 'لوحة تحكم المسؤول',
          enterAccountInfo: 'أدخل معلومات حسابك للتسجيل',
          enterNumber: 'أدخل رقمك',
          password: 'كلمة المرور',
          recoverPassword: 'استعادة كلمة المرور؟',
          signIn: 'تسجيل الدخول'
        },
        dashboard: {
          title: 'لوحة التحكم',
          welcome: 'مرحباً بك في لوحة تحكم المسؤول',
          registeredUsers: 'المستخدمون المسجلون',
          registeredBusinesses: 'الأعمال المسجلة',
          businessRequests: 'طلبات التسجيل',
          registrationAnalytics: 'تحليلات التسجيل',
          upFromYesterday: '+8.5% زيادة عن الأمس',
          downFromYesterday: '-4.3% انخفاض عن الأمس'
        },
        business: {
          businessName: "اسم النشاط التجاري",
          businessRank: "ترتيب النشاط التجاري",
          rating: "تقييم النشاط التجاري",
          rank: "الترتيب",
          businessReviews: "مراجعات النشاط التجاري",
          category: "فئة النشاط التجاري",
          website: "موقع النشاط التجاري",
          dateJoined: "تاريخ الانضمام",
          actionPerform: "الإجراءات",
          registeredBusinesses: 'الأعمال المسجلة',
          registrationRequest: 'طلبات التسجيل',
          year: 'السنة',
          weekly: 'أسبوعي',
          viewMoreInfo: 'عرض المزيد من المعلومات',
          block: 'حظر',
          blocked: 'محظور',
          warning: 'تحذير',
          blockConfirm: 'سيتم حظر العمل. هل تريد المتابعة؟',
          cancel: 'إلغاء',
          confirm: 'تأكيد',
          businessBlocked: 'تم حظر العمل.',
          businessApproved: 'تمت الموافقة على العمل.',
          businessRejected: 'تم رفض العمل.',
          reviews: "المراجعات"

        },
        // users: {
        //   title: 'المستخدمون',
        //   year: 'السنة',
        //   block: 'حظر',
        //   unblock: 'إلغاء الحظر',
        //   blocked: 'محظور',
        //   warning: 'تحذير',
        //   blockConfirm: 'سيتم حظر المستخدم. هل تريد المتابعة؟',
        //   unblockConfirm: 'سيتم إلغاء حظر المستخدم. هل تريد المتابعة؟',
        //   userBlocked: 'تم حظر المستخدم.',
        //   userUnblocked: 'تم إلغاء حظر المستخدم.'
        // },
        users: {
          "sNo": "الرقم التسلسلي",
          "fullname": "الاسم الكامل",
          "number": "الرقم",
          "location": "الموقع",
          "profession": "المهنة",
          "givenReview": "المراجعات",
          "dateJoined": "تاريخ الانضمام",
          "actionPerform": "الإجراءات",
          "title": "المستخدمون",
          "year": "السنة",
          "block": "حظر",
          "unblock": "إلغاء الحظر",
          "blocked": "محظور",
          "warning": "تحذير",
          "blockConfirm": "سيتم حظر المستخدم. هل ترغب في المتابعة؟",
          "unblockConfirm": "سيتم إلغاء حظر المستخدم. هل ترغب في المتابعة؟",
          "userBlocked": "تم حظر المستخدم.",
          "userUnblocked": "تم إلغاء حظر المستخدم."
        },
        roles: {
          title: 'إدارة الأدوار',
          all: 'الكل',
          addEmployee: 'إضافة موظف',
          back: 'رجوع',
          addNewEmployee: 'إضافة موظف جديد',
          assignRole: 'تعيين دور',
          enterNumber: 'أدخل الرقم',
          enterPassword: 'أدخل كلمة المرور',
          register: 'تسجيل',
          employeeRemoved: 'تمت إزالة الموظف.',
          employeeRegistered: 'تم تسجيل الموظف.'
        },
        leaderboard: {
          title: 'تصنيف الأعمال',
          reviews: 'المراجعات',
          rank: 'الرتبة',
          rating: 'التقييم',
          category: 'الفئة',
          website: 'الموقع الإلكتروني',
          dateJoined: 'تاريخ الانضمام'
        }
      },
      business: {
        setupProfile: 'قم بإعداد ملف عملك حتى يتمكن العملاء من المراجعة',
        dashboard: 'لوحة التحكم',
        reviews: 'المراجعات',
        leaderboard: 'المتصدرون',
        businessProfile: 'الملف الشخصي للعمل',
        users: 'المستخدمون',
        manageRoles: 'إدارة الأدوار',
        login: 'تسجيل دخول العمل',
        registration: {
          title: 'تسجيل العمل',
          name: 'اسم العمل',
          email: 'البريد الإلكتروني للعمل',
          phone: 'رقم الهاتف',
          address: 'العنوان',
          description: 'وصف العمل',
          submit: 'تسجيل العمل',
        },
        profile: {
          businessInfo: 'معلومات العمل',
          dragDropLogo: 'اسحب وأفلت شعار العمل',
          selectCategory: 'اختر فئة عملك',
          enterBusinessName: 'أدخل اسم عملك',
          enterWebsite: 'أدخل رابط موقعك',
          enterDescription: 'أدخل الوصف',
          verification: 'التحقق من العمل',
          dragDropCert: 'اسحب وأفلت شهادة مصادقة العمل',
          verified: 'تم التحقق',
          productsInfo: 'معلومات المنتجات',
          enterProductName: 'أدخل اسم المنتج',
          selectProductCategory: 'اختر فئة المنتج',
          category1: 'الفئة 1',
          category2: 'الفئة 2',
          uploadMedia: 'رفع الوسائط',
          addMoreProducts: 'إضافة المزيد من المنتجات'
        },
        onboarding: {
          title: 'إعداد العمل',
          step1: 'الخطوة 1: المعلومات الأساسية',
          step2: 'الخطوة 2: تفاصيل العمل',
          step3: 'الخطوة 3: التحقق',
          next: 'التالي',
          previous: 'السابق',
          complete: 'إكمال الإعداد',
        },
        reviewsPage: {
          title: 'مراجعات العملاء',
          filter: 'تصفية المراجعات',
          sort: 'ترتيب حسب',
          rating: 'التقييم',
          date: 'التاريخ',
          response: 'الرد على المراجعة',
          noReviews: 'لا توجد مراجعات بعد',
          latestReview: 'أحدث مراجعة للعميل',
          customerSays: 'ماذا يقول العملاء عنك..',
          giveReply: 'أعط رداً',
          writeReply: 'اكتب رداً',
          send: 'إرسال',
          customerReview: 'مراجعة العميل',
          positiveReview: 'مراجعة إيجابية',
          negativeReview: 'مراجعة سلبية',
          upFromYesterday: '+8.5% زيادة عن الأمس',
          downFromYesterday: '-4.3% انخفاض عن الأمس'
        },
        leaderboardPage: {
          title: 'تصنيف الأعمال',
          rank: 'الرتبة',
          business: 'العمل',
          rating: 'التقييم',
          reviews: 'المراجعات',
          score: 'النتيجة'
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 