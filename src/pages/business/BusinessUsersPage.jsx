import React from 'react'
import { useTheme } from '../../ThemeContext'

const AdminUsersPage = () => {
  const { isDark } = useTheme()

  return (
    <div className={`transition-colors ${isDark ? "bg-[#1B2431] text-white" : "bg-white text-black"}`}>
      <div className="p-6">
        <h1 className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}>
          User Management
        </h1>
        {/* Add user management content here */}
      </div>
    </div>
  )
}

export default AdminUsersPage