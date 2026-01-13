import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from "recharts";
import { useState, useEffect } from "react";
import { useTheme } from "../../ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTranslation } from "react-i18next";

export default function RegistrationAnalytics() {
  const { isDark } = useTheme();
  const { isRTL } = useLanguage();
  const { t, i18n } = useTranslation();

  // Update data when language changes
  const data = [
    { month: t('months.january'), value: 100 },
    { month: t('months.february'), value: 1500 },
    { month: t('months.march'), value: 2300 },
    { month: t('months.april'), value: 2100 },
    { month: t('months.may'), value: 1800 },
    { month: t('months.june'), value: 1000 },
    { month: t('months.july'), value: 700 },
    { month: t('months.august'), value: 600 },
    { month: t('months.september'), value: 650 },
    { month: t('months.october'), value: 800 },
    { month: t('months.november'), value: 2000 },
    { month: t('months.december'), value: 4000 },
  ];

  return (
    <div className={`p-6 rounded-lg shadow-lg w-full transition-colors ${
      isDark ? "bg-[#1B2431] border border-gray-700" : "bg-white border border-gray-200"
    }`}>
      <h2 className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-800"}`}>
        {t('admin.dashboard.registrationAnalytics')}
      </h2>
      <div className="w-full h-[400px] relative" dir="ltr">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} width={null} height={null}>
            {/* Light border only, removed inner grid lines */}
            <CartesianGrid 
              strokeDasharray="0" 
              strokeOpacity={isDark ? 0.1 : 0.2} 
              stroke={isDark ? "#4B5563" : "#ddd"} 
            />
            
            {/* Axis Styling */}
            <XAxis 
              dataKey="month" 
              tick={{ fill: isDark ? "#9CA3AF" : "#666" }} 
              stroke={isDark ? "#4B5563" : "#ddd"}
              padding={{ left: 10, right: 10 }}
              tickMargin={10}
              minTickGap={20}
            />
            <YAxis 
              tick={{ fill: isDark ? "#9CA3AF" : "#666" }} 
              stroke={isDark ? "#4B5563" : "#ddd"}
              padding={{ top: 10, bottom: 10 }}
              tickMargin={10}
              width={60}
            />

            {/* Tooltip */}
            <Tooltip 
              contentStyle={{ 
                backgroundColor: isDark ? "#323D4E" : "white",
                border: isDark ? "1px solid #4B5563" : "1px solid #ddd",
                borderRadius: "5px",
                color: isDark ? "white" : "black"
              }} 
            />

            {/* Smooth Line with Shadow */}
            <defs>
              <linearGradient id="lineShadow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366F1" stopOpacity={isDark ? 0.2 : 0.3} />
                <stop offset="100%" stopColor="#6366F1" stopOpacity={0} />
              </linearGradient>
            </defs>

            {/* Shadow Fill */}
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="none" 
              fill="url(#lineShadow)" 
            />
            
            {/* Main Line */}
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#6366F1" 
              strokeWidth={3} 
              dot={false} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
