import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../ThemeContext';

import registerbusiness from "../../assets/business/registerbusiness.svg";
import BusinessCard from '../../components/business/BusinessCard';
import { useState } from 'react';

const BusinessRegistration = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen p-8 ${isRTL ? 'text-right' : 'text-left'}`}>
      <h1 className="text-3xl font-bold mb-8">{t('business.registration.title')}</h1>
      
      <form className="max-w-2xl mx-auto space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">{t('business.registration.name')}</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            dir={isRTL ? 'rtl' : 'ltr'}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">{t('business.registration.email')}</label>
          <input
            type="email"
            className="w-full p-2 border rounded-md"
            dir={isRTL ? 'rtl' : 'ltr'}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">{t('business.registration.phone')}</label>
          <input
            type="tel"
            className="w-full p-2 border rounded-md"
            dir={isRTL ? 'rtl' : 'ltr'}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">{t('business.registration.address')}</label>
          <textarea
            className="w-full p-2 border rounded-md"
            rows="3"
            dir={isRTL ? 'rtl' : 'ltr'}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">{t('business.registration.description')}</label>
          <textarea
            className="w-full p-2 border rounded-md"
            rows="4"
            dir={isRTL ? 'rtl' : 'ltr'}
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-[#22304A] text-white py-2 rounded-md hover:bg-[#2a3954] transition-colors"
        >
          {t('business.registration.submit')}
        </button>
      </form>
    </div>
  );
};

export default BusinessRegistration;
