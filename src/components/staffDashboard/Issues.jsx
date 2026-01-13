// src/pages/supportStaff/Issues.jsx
import React, { useEffect, useState } from 'react';
import { FaBell, FaCog } from 'react-icons/fa';
import { useTheme } from '../../ThemeContext';

export default function Issues() {
  const { isDark } = useTheme();
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    // Replace this with real API fetch if needed
    const mockData = [
      {
        id: 1,
        name: 'Ali',
        facingIssue:
          "When I enter my email and password, it shows an error saying 'Invalid credentials' even though I'm sure the details are correct. I also tried resetting my password, but I still can't log in.",
        submissionDate: '17/10/2023',
      },
      {
        id: 2,
        name: 'Rehman',
        facingIssue:
          "When I enter my email and password, it shows an error saying 'Invalid credentials' even though I'm sure the details are correct. I also tried resetting my password, but I still can't log in.",
        submissionDate: '17/10/2023',
      },
    ];
    setIssues(mockData);
  }, []);

  return (
    <div className={`min-h-screen w-full transition-colors ${isDark ? 'bg-[#181F2A] text-white' : 'bg-white text-black'}`}>
      {/* Topbar */}
      <div className="flex items-center justify-between px-10 py-6">
        <div className="flex-1 flex justify-center">
          <input type="text" placeholder="Search here" className="w-[350px] px-5 py-2 rounded-lg bg-[#22304A] text-gray-200 placeholder-gray-400 focus:outline-none border-none" />
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <FaBell className="text-gray-400 text-xl" />
              <span className="absolute -top-2 -right-2 bg-[#4169E1] text-xs text-white rounded-full px-1">21</span>
            </div>
            <div className="relative">
              <FaCog className="text-gray-400 text-xl" />
              <span className="absolute -top-2 -right-2 bg-[#4169E1] text-xs text-white rounded-full px-1">19</span>
            </div>
          </div>
          <div className="relative">
            <select className="bg-transparent text-gray-200 pr-6 appearance-none outline-none border-none cursor-pointer">
              <option>English</option>
              <option>Arabic</option>
            </select>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs">▼</span>
          </div>
          <div className="flex items-center gap-2 bg-[#22304A] px-3 py-1 rounded-lg">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="profile" className="w-8 h-8 rounded-full" />
            <div className="flex flex-col">
              <span className="text-white text-sm font-semibold">Ali</span>
              <span className="text-gray-400 text-xs">Staff</span>
            </div>
          </div>
        </div>
      </div>
      {/* Content Card */}
      <div className="px-10">
        <div className="bg-[#22304A] rounded-xl mt-2 shadow p-6">
          {/* Top Section (All dropdown) */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold text-white">All</h2>
              <span className="text-xs text-gray-400">▼</span>
            </div>
          </div>
          {/* Table Section */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="bg-[#22304A] text-gray-400 uppercase text-xs">
                  <th className="py-3 px-3 font-medium">S. No</th>
                  <th className="py-3 px-6 font-medium">User name</th>
                  <th className="py-3 px-26 font-medium">Facing Issue</th>
                  <th className="py-3 px-4 font-medium">Submission Date</th>
                  <th className="py-3 px-4 font-medium">Action Perform</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {issues.map((issue, index) => (
                  <tr
                    key={issue.id}
                    className="border-b border-[#1B2431] last:border-0 hover:bg-[#1B2431]"
                  >
                    {/* S. No */}
                    <td className="py-3 px-4">{index + 1}</td>

                    {/* Name */}
                    <td className="py-3 px-4">{issue.name}</td>

                    {/* Facing Issue (red text, as in your screenshot) */}
                    <td className="py-4 px-10 text-red-500 text-sm max-w-[400px]">
                      {issue.facingIssue}
                    </td>

                    {/* Submission Date */}
                    <td className="py-3 px-4">{issue.submissionDate}</td>

                    {/* Action Perform (Reply button) */}
                    <td className="py-3 px-2">
                      <button className="bg-[#4169E1] text-white rounded-lg px-8 py-2 hover:bg-blue-700 transition-colors font-semibold text-sm">
                        Reply
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
