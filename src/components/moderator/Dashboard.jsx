import React from 'react'
import { useTheme } from '../../ThemeContext'
import BusinessStatsCard from '../common/BusinessStatsCard'
import RegistrationAnalytics from '../common/RegistrationAnalytics'

const Dashboard = () => {
  const { isDark } = useTheme()

  return (
    <div className={`transition-colors ${isDark ? "bg-[#1B2431] text-white" : "bg-white text-black"}`}>
      <div className='min-h-screen p-6'>
        {/* <ModeratorDashboardHeader /> */}
        <h1 className={`font-bold text-2xl ${isDark ? "text-white" : "text-black"}`}>Dashboard</h1>
        <p className={`pt-2 ${isDark ? "text-gray-300" : "text-[#A3A3A3]"}`}>Hi, admin! Welcome back to the moderator dashboard</p>

        <div className='mt-5'>
          <BusinessStatsCard />
        </div>

        <div className='mt-5'>
          <RegistrationAnalytics />
        </div>
      </div>
    </div>
  )
}

export default Dashboard