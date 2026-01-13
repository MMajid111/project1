import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'en');
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setLanguage(langCode);
    setIsRTL(langCode === 'ar');
    document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('i18nextLng', langCode);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng') || 'en';
    changeLanguage(savedLanguage);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext; 