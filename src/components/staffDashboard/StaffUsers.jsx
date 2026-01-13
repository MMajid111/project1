// src/pages/supportStaff/Users.jsx
import React, { useEffect, useState } from 'react';
import { FaBell, FaCog } from 'react-icons/fa';
import { useTheme } from '../../ThemeContext';

export default function Users() {
  const { isDark } = useTheme();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Replace with an actual API call if needed
    const mockUsers = [
      {
        id: 1,
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        fullname: 'Kamran Shah',
        number: '+92 305 5533 069',
        location: 'Islamabad',
        profession: 'Self Employed',
        givenReview: 5,
        dateJoined: '17/10/2024',
      },
      {
        id: 2,
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        fullname: 'Kamran Shah',
        number: '+92 305 5533 069',
        location: 'Islamabad',
        profession: 'Developer',
        givenReview: 20,
        dateJoined: '17/10/2024',
      },
      {
        id: 3,
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        fullname: 'Kamran Shah',
        number: '+92 305 5533 069',
        location: 'Islamabad',
        profession: 'Developer',
        givenReview: 10,
        dateJoined: '17/10/2024',
      },
    ];
    setUsers(mockUsers);
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
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-lg font-semibold text-white">Year 2024</h2>
          <span className="text-xs text-gray-400">▼</span>
        </div>
        <div className="bg-[#22304A] rounded-xl shadow p-6">
          {/* Users Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="bg-[#22304A] text-gray-400 uppercase text-xs">
                  <th className="py-3 px-4 font-medium">S. No</th>
                  <th className="py-3 px-4 font-medium">Fullname</th>
                  <th className="py-3 px-4 font-medium">Number</th>
                  <th className="py-3 px-4 font-medium">Location</th>
                  <th className="py-3 px-4 font-medium">Profession</th>
                  <th className="py-3 px-4 font-medium">Given Review</th>
                  <th className="py-3 px-4 font-medium">Date Joined</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {users.map((user, index) => (
                  <tr key={user.id} className="border-b border-[#1B2431] last:border-0 hover:bg-[#1B2431]">
                    {/* S. No */}
                    <td className="py-3 px-4">{index + 1}</td>
                    {/* Fullname + Avatar */}
                    <td className="py-3 px-4 flex items-center gap-2">
                      <span className="relative inline-block">
                        <span className="absolute w-8 h-8 rounded-full bg-[#22304A] z-0"></span>
                        <svg width="36" height="36" viewBox="0 0 36 36" className="absolute z-10" style={{left: -4, top: -4}}><polygon points="18,2 34,9 34,27 18,34 2,27 2,9" fill="#4169E1" /></svg>
                        <img
                          src={user.avatar}
                          alt="User Avatar"
                          className="w-8 h-8 rounded-full object-cover relative z-20 border-2 border-white"
                          style={{marginLeft: 0, marginTop: 0}}
                        />
                      </span>
                      <span>{user.fullname}</span>
                    </td>
                    {/* Number */}
                    <td className="py-3 px-4">{user.number}</td>
                    {/* Location */}
                    <td className="py-3 px-4">{user.location}</td>
                    {/* Profession */}
                    <td className="py-3 px-4">{user.profession}</td>
                    {/* Given Review */}
                    <td className="py-3 px-4">{user.givenReview}</td>
                    {/* Date Joined */}
                    <td className="py-3 px-4">{user.dateJoined}</td>
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
