import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaEye, FaEyeSlash, FaTimes } from 'react-icons/fa';
import illu from '../../assets/illu.png';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from 'react-i18next';

export default function AdminLogin() {
  const [role, setRole] = useState('Admin');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const { language, setLanguage, isRTL } = useLanguage();
  const { t } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' }
  ];

  // Get the current language name
  const currentLanguage = languages.find(lang => lang.code === language)?.name || 'English';

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    setShowLanguageDropdown(false);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-[#181F2A] relative ${isRTL ? 'text-right' : 'text-left'}`}>
      {/* Back Button */}
      <button className="absolute top-8 left-8 text-gray-400 flex items-center gap-2 hover:text-white">
        <span className="text-lg">&#8592;</span> {t('common.back')}
      </button>
      {/* Language Dropdown */}
      <div className="absolute top-8 right-16">
        <div className="relative">
          <button 
            className="flex items-center gap-2 text-gray-300 hover:text-white"
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
          >
            {currentLanguage}
            <FaChevronDown className={`ml-1 text-xs transition-transform ${showLanguageDropdown ? 'rotate-180' : ''}`} />
          </button>
          {showLanguageDropdown && (
            <div className="absolute right-0 mt-2 w-32 bg-[#22304A] rounded-lg shadow-lg py-1 z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-[#1B2431] ${
                    language === lang.code ? 'text-white' : 'text-gray-400'
                  }`}
                  onClick={() => handleLanguageChange(lang.code)}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Main Content */}
      <div className="flex w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl bg-transparent">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center items-center p-12">
          <div className="mb-8">
            <span className="block text-4xl font-bold text-white">{t('admin.login.title')}</span>
            <span className="block text-4xl font-bold text-[#2563eb] mt-2">{t('admin.login.subtitle')}</span>
            <span className="block text-lg text-gray-300 mt-4">{t('admin.login.enterAccountInfo')}</span>
          </div>
          <div className="flex flex-col items-center gap-6 mt-8">
            <img src={illu} alt="illustration" className="w-72 h-48 object-contain" />
            {/* Avatars overlayed on illustration */}
            <div className="relative w-72 h-0">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="absolute -top-16 right-0 w-16 h-16 rounded-full border-4 border-white" />
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" className="absolute -top-8 left-0 w-10 h-10 rounded-full border-2 border-white" />
            </div>
          </div>
        </div>
        {/* Right Side (Form) */}
        <div className="flex-1 flex flex-col justify-center items-center p-12">
          <form className="w-full max-w-sm space-y-6">
            {/* Role Dropdown */}
            <div className="relative">
              <select
                className="w-full bg-[#22304A] text-white rounded-lg px-4 py-3 pr-10 focus:outline-none appearance-none"
                value={role}
                onChange={e => setRole(e.target.value)}
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <option>Admin</option>
                <option>Moderator</option>
                <option>Staff</option>
              </select>
              <FaChevronDown className={`absolute ${isRTL ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none`} />
            </div>
            {/* Number Input */}
            <div className="relative">
              <input
                type="text"
                className="w-full bg-[#22304A] text-white rounded-lg px-4 py-3 pr-10 focus:outline-none"
                placeholder={t('admin.login.enterNumber')}
                value={number}
                onChange={e => setNumber(e.target.value)}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
              {number && (
                <button 
                  type="button" 
                  className={`absolute ${isRTL ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 text-gray-400 hover:text-white`} 
                  onClick={() => setNumber('')}
                >
                  <FaTimes />
                </button>
              )}
            </div>
            {/* Password Input */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full bg-[#22304A] text-white rounded-lg px-4 py-3 pr-10 focus:outline-none"
                placeholder={t('admin.login.password')}
                value={password}
                onChange={e => setPassword(e.target.value)}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
              <button
                type="button"
                className={`absolute ${isRTL ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 text-gray-400 hover:text-white`}
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={-1}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="flex justify-end">
              <a href="#" className="text-gray-400 text-sm hover:underline">{t('admin.login.recoverPassword')}</a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#4169E1] text-white rounded-lg py-3 font-semibold text-lg hover:bg-blue-700 transition"
            >
              {t('admin.login.signIn')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 