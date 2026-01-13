import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import AdminLoginHeader from '../../components/admin/AdminLoginHeader';

const BusinessLogin = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>
      <h1 className="text-3xl font-bold mb-8">{t('business.login')}</h1>
      <AdminLoginHeader />
    </div>
  );
};

export default BusinessLogin;