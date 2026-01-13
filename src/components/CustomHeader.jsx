import React from 'react'

const CustomHeader = ({ title }) => {
  return (
      <header className="flex justify-between items-center px-10 py-5">
            <div className="w-20 h-20">
              <img
                src={rating}
                alt="icon"
                className="w-full h-full object-contain"
              />
            </div>
    
            <div className="flex items-center gap-4">
              {/* THEME TOGGLE */}
              <button
                onClick={toggleDarkMode}
                className="border border-gray-300 px-3 py-1 rounded-md 
                           hover:bg-gray-100 dark:hover:bg-gray-400 hover:cursor-pointer"
              >
                {isDark ? SunIcon : MoonIcon}
              </button>
    
              {/* LANGUAGE SELECT */}
              <div className="relative">
                <select
                  className="
                    bg-transparent
                    appearance-none
                    outline-none
                    border-none
                    p-2
                    pr-8
                    cursor-pointer
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
    
              <button
                onClick={() => {}}
                className="bg-[#4461F2] rounded-xl w-[169px] h-[48px] text-white"
              >
               {title || "Register"}
              </button>
            </div>
          </header>
  )
}

export default CustomHeader