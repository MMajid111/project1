import React from 'react'
import { useTheme } from '../../ThemeContext'
import BusinessTable from '../business/BusinessTable'

const Business = () => {
  const { isDark } = useTheme()

  return (
    <div className={`transition-colors ${isDark ? "bg-[#1B2431] text-white" : "bg-white text-black"}`}>
      <div className="p-6">
        <h1 className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}>
          Business Management
        </h1>
        <p className={`mb-6 ${isDark ? "text-gray-300" : "text-gray-500"}`}>
          Manage and monitor all registered businesses
        </p>
        <div className={`rounded-lg ${isDark ? "bg-[#1B2431] border border-gray-700" : "bg-white border border-gray-200"}`}>
          <BusinessTable />
        </div>
      </div>
    </div>
  )
}

export default Business