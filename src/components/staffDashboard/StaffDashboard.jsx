// src/pages/supportStaff/StaffDashboard.jsx
import React, { useEffect, useState } from 'react';
import { useTheme } from '../../ThemeContext';

const statCards = [
  {
    label: 'Technical issue',
    value: '12',
    icon: <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    change: '+8.5% Up from yesterday',
    changeColor: 'text-green-400',
  },
  {
    label: 'Registered User',
    value: '4,000',
    icon: <svg className="w-7 h-7 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 10a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 1114 0H3z" /></svg>,
    change: '+8.5% Up from yesterday',
    changeColor: 'text-green-400',
  },
  {
    label: 'Registered Businesses',
    value: '2,800',
    icon: <svg className="w-7 h-7 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M4 3a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm0 2h12v12H4V5zm2 2v2h2V7H6zm4 0v2h2V7h-2z" /></svg>,
    change: '+8.5% Up from yesterday',
    changeColor: 'text-green-400',
  },
];

const mockIssues = [
  {
    id: 1,
    name: 'Kamran Shah',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    time: '11:35 pm',
    date: '17/10/2001',
    issue: 'Unable to log in to my account.',
    details: "When I enter my email and password, it shows an error saying 'Invalid credentials' even though I'm sure the details are correct. I also tried resetting my password, but I still can't log in.",
    request: 'Please help me fix this issue so I can access my account.',
  },
  {
    id: 2,
    name: 'Kamran Shah',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    time: '11:35 pm',
    date: '17/10/2001',
    issue: 'Unable to log in to my account.',
    details: "When I enter my email and password, it shows an error saying 'Invalid credentials' even though I'm sure the details are correct. I also tried resetting my password, but I still can't log in.",
    request: 'Please help me fix this issue so I can access my account.',
  },
];

export default function StaffDashboard() {
  const { isDark } = useTheme();

  return (
    <div className={`transition-colors min-h-screen ${isDark ? 'bg-[#181F2A] text-white' : 'bg-white text-black'}`}> 
      <div className="p-8 max-w-6xl mx-auto">
        <h1 className="text-lg font-bold mb-1">Dashboard</h1>
        <p className="text-gray-400 mb-6 text-sm">Hi, Fahim Welcome back to the staff Dashboard</p>
        {/* Stat Cards */}
        <div className="flex flex-wrap gap-6 mb-8">
          {statCards.map((card, i) => (
            <div key={i} className="flex-1 min-w-[220px] rounded-2xl bg-[#22304A] p-6 flex flex-col gap-2 shadow-md max-w-xs">
              <div className="flex items-center gap-3">
                {card.icon}
                <span className="text-base font-semibold">{card.label}</span>
              </div>
              <div className="text-2xl font-bold mt-2">{card.value}</div>
              <div className={`text-xs mt-1 ${card.changeColor}`}>{card.change}</div>
            </div>
          ))}
        </div>
        {/* User Facing Issues */}
        <h2 className="text-base font-bold mb-4">User Facing issues</h2>
        <div className="space-y-8">
          {mockIssues.map((issue, idx) => (
            <div key={issue.id} className="bg-[#22304A] rounded-xl p-6">
              <div className="flex items-center gap-4 mb-2">
                <img src={issue.avatar} alt={issue.name} className="w-12 h-12 rounded-full border-4 border-blue-400" />
                <div>
                  <span className="font-bold text-base">{issue.name}</span>
                  <div className="text-gray-400 text-xs flex gap-4 mt-1">
                    <span>{issue.time}</span>
                    <span>{issue.date}</span>
                  </div>
                </div>
              </div>
              <div className="ml-16">
                <div className="text-white text-sm mb-1"><span className="font-semibold">Issue:</span> {issue.issue}</div>
                <div className="text-gray-300 text-sm mb-1"><span className="font-semibold">Details:</span> {issue.details}</div>
                <div className="text-gray-300 text-sm mb-1"><span className="font-semibold">Request:</span> {issue.request}</div>
                <button className="mt-4 px-8 py-2 bg-[#4169E1] text-white rounded-lg hover:bg-blue-700 text-sm font-semibold">Reply</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
