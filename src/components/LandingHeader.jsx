// LandingHeader.js
import React, { useState } from "react";
import rating from "../assets/rating.png";
// 1) Import icons from react-icons
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../ThemeContext";

const LandingHeader = () => {
  const { isDark, setIsDark } = useTheme();
  // For language selection
  const [language, setLanguage] = useState("English");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <header
      className={`
        flex 
        justify-between 
        items-center 
        rounded-[21px] 
        mx-auto 
        w-[80%] 
        p-4 
        ${isDark 
            ? "bg-[#323D4E] text-white border-none" 
            : "bg-white text-black border border-[#E6E6E6]"
          }
      `}
    >
      {/* Logo */}
      <div className='w-20 h-12'>
        <img src={rating} alt="logo" className='w-full h-full object-contain' />
      </div>

      {/* Navigation */}
      <div>
        <ul className='flex justify-between items-center gap-10 pt-1 text-gray-400 hover:cursor-pointer'>
          <li className='hover:text-black dark:hover:text-white'>Home</li>
          <li className='hover:text-black dark:hover:text-white'>Categories</li>
          <li className='hover:text-black dark:hover:text-white'>Reviews</li>
          <li className='hover:text-black dark:hover:text-white'>About us</li>
        </ul>
      </div>

      {/* Language Selector + Buttons + Dark/Light Toggle */}
      <div className='flex items-center gap-4'>
        {/* Language Selector */}
        <div className='relative'>
          <select
            className="
              bg-transparent
              appearance-none
              outline-none
              border-none
              p-2
              pr-8
              cursor-pointer
              text-gray-400
            "
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="English">English</option>
            <option value="Arabic">Arabic</option>
          </select>
          <span
            className="
              pointer-events-none 
              absolute 
              right-2 
              top-1/2 
              -translate-y-1/2 
              text-sm
            "
          >
            ▼
          </span>
        </div>

        {/* Auth + Business Buttons */}
        <div className='flex items-center gap-2'>
          <button
            onClick={() => { }}
            className={`
              bg-[#E6E6E6] 
              rounded-xl 
              w-[130px] 
              h-[42px] 
              ${isDark ? "text-black" : "text-[#4461F2]"}
            `}
          >
            Sign in
          </button>
          <button
            onClick={() => { }}
            className={`
              bg-[#4461F2] 
              rounded-xl 
              w-[130px] 
              h-[42px] 
              text-white
            `}
          >
            For Businesses
          </button>
        </div>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 text-xl"
          aria-label="Toggle dark mode"
        >
          {/* If isDark is true, show sun icon, else show moon icon */}
          {isDark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
};

export default LandingHeader;
