import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { changeLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => changeLanguage('en')}
        className="px-3 py-1 rounded-md bg-[#22304A] text-white hover:bg-[#2a3954] transition-colors"
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('ar')}
        className="px-3 py-1 rounded-md bg-[#22304A] text-white hover:bg-[#2a3954] transition-colors"
      >
        عربي
      </button>
    </div>
  );
};

export default LanguageSwitcher; 