import React from 'react';
import { useTheme } from '../../ThemeContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';

const AdminDashboard = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <div className={`flex flex-col gap-6 px-10 py-8 ${isRTL ? 'text-right' : 'text-left'}`}>
      {/* Welcome Card */}
      <div className="rounded-2xl bg-[#22304A] p-8 mb-2">
        <h2 className="text-2xl font-bold text-white">
          {t('welcome.greeting')} <span className="text-[#4169E1]">Rehman,</span>
        </h2>
        <p className="text-gray-400 mt-2">{t('welcome.message')}</p>
      </div>
      
      {/* CTA Card */}
      <div
        className="rounded-2xl bg-[#22304A] p-6 flex items-center justify-between cursor-pointer hover:bg-[#2a3954] transition-colors"
        onClick={() => navigate('/business-dashboard/business')}
      >
        <span className="text-lg text-white">{t('business.setupProfile')}</span>
        <span className={`text-2xl text-gray-400 ${isRTL ? 'rotate-180' : ''}`}>→</span>
      </div>
    </div>
  );
};

export default AdminDashboard;