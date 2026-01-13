import React from 'react';
import { useTheme } from '../../ThemeContext';
import ModeratorSidebar from '../../components/moderator/Sidebar';
import { FaUsers, FaBuilding, FaChartLine, FaExclamationTriangle } from 'react-icons/fa';

const ModeratorDashboard = () => {
  const { isDark } = useTheme();

  return (
    <div className={`p-6 transition-colors ${isDark ? "bg-[#1B2431] text-white" : "bg-white text-black"}`}>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className={`p-6 rounded-xl shadow-lg transition-colors ${
          isDark ? "bg-[#1B2431] border border-gray-700" : "bg-white border border-gray-200"
        }`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-500"}`}>Total Users</p>
              <h3 className={`text-2xl font-bold mt-1 ${isDark ? "text-white" : "text-black"}`}>1,234</h3>
            </div>
            <div className={`p-3 rounded-full ${isDark ? "bg-[#323D4E]" : "bg-gray-100"}`}>
              <FaUsers className={`text-xl ${isDark ? "text-blue-400" : "text-blue-600"}`} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-xl shadow-lg transition-colors ${
          isDark ? "bg-[#1B2431] border border-gray-700" : "bg-white border border-gray-200"
        }`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-500"}`}>Active Businesses</p>
              <h3 className={`text-2xl font-bold mt-1 ${isDark ? "text-white" : "text-black"}`}>567</h3>
            </div>
            <div className={`p-3 rounded-full ${isDark ? "bg-[#323D4E]" : "bg-gray-100"}`}>
              <FaBuilding className={`text-xl ${isDark ? "text-green-400" : "text-green-600"}`} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-xl shadow-lg transition-colors ${
          isDark ? "bg-[#1B2431] border border-gray-700" : "bg-white border border-gray-200"
        }`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-500"}`}>Total Reviews</p>
              <h3 className={`text-2xl font-bold mt-1 ${isDark ? "text-white" : "text-black"}`}>8,901</h3>
            </div>
            <div className={`p-3 rounded-full ${isDark ? "bg-[#323D4E]" : "bg-gray-100"}`}>
              <FaChartLine className={`text-xl ${isDark ? "text-purple-400" : "text-purple-600"}`} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-xl shadow-lg transition-colors ${
          isDark ? "bg-[#1B2431] border border-gray-700" : "bg-white border border-gray-200"
        }`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-500"}`}>Pending Reports</p>
              <h3 className={`text-2xl font-bold mt-1 ${isDark ? "text-white" : "text-black"}`}>23</h3>
            </div>
            <div className={`p-3 rounded-full ${isDark ? "bg-[#323D4E]" : "bg-gray-100"}`}>
              <FaExclamationTriangle className={`text-xl ${isDark ? "text-red-400" : "text-red-600"}`} />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`p-6 rounded-xl shadow-lg transition-colors ${
          isDark ? "bg-[#1B2431] border border-gray-700" : "bg-white border border-gray-200"
        }`}>
          <h3 className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-800"}`}>
            User Growth
          </h3>
          {/* Add your chart component here with dark mode support */}
          <div className={`h-64 rounded-lg ${
            isDark ? "bg-[#323D4E] border border-gray-700" : "bg-gray-50 border border-gray-200"
          }`}>
            {/* Chart placeholder */}
          </div>
        </div>

        <div className={`p-6 rounded-xl shadow-lg transition-colors ${
          isDark ? "bg-[#1B2431] border border-gray-700" : "bg-white border border-gray-200"
        }`}>
          <h3 className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-800"}`}>
            Review Distribution
          </h3>
          {/* Add your chart component here with dark mode support */}
          <div className={`h-64 rounded-lg ${
            isDark ? "bg-[#323D4E] border border-gray-700" : "bg-gray-50 border border-gray-200"
          }`}>
            {/* Chart placeholder */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModeratorDashboard;