import React, { useState } from "react";

export default function AdminLoginHeader() {
  const [language, setLanguage] = useState("English");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-9 bg-white relative">
      {/* Back Button */}
      <button className="flex items-center text-gray-500">
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
        </svg>
        Back
      </button>

      {/* Language Selector */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center text-gray-500"
        >
          {language}
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-24 bg-white border rounded-lg shadow-lg">
            <ul className="text-gray-700">
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => { setLanguage("English"); setIsOpen(false); }}
              >
                English
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => { setLanguage("العربية"); setIsOpen(false); }}
              >
                العربية
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
