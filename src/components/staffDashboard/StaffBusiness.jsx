import React, { useState } from 'react';
import { useTheme } from '../../ThemeContext';
import { useNavigate } from 'react-router-dom';

const businesses = [
  {
    id: 1,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
    name: 'Nike',
    rank: 1,
    reviews: 1500,
    rating: 5,
    category: 'Shopping and fashion',
    website: 'www.nike.com',
    dateJoined: '17/10/2024',
    description: 'Nike is a global leader in athletic footwear, apparel, and equipment.',
  },
  {
    id: 2,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg',
    name: 'Adidas',
    rank: 2,
    reviews: 1200,
    rating: 4.9,
    category: 'Shopping and fashion',
    website: 'www.adidas.com',
    dateJoined: '17/10/2024',
    description: 'Adidas designs and manufactures shoes, clothing and accessories.',
  },
  {
    id: 3,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Puma_Logo.svg',
    name: 'Puma',
    rank: 3,
    reviews: 500,
    rating: 4.8,
    category: 'Shopping and fashion',
    website: 'www.puma.com',
    dateJoined: '17/10/2024',
    description: 'Puma is known for its athletic and casual footwear, apparel and accessories.',
  },
];

export default function StaffBusiness() {
  const { isDark } = useTheme();
  const navigate = useNavigate();

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
              <span className="inline-block w-6 h-6 bg-[#22304A] rounded-full flex items-center justify-center text-gray-400">🔔</span>
              <span className="absolute -top-2 -right-2 bg-[#4169E1] text-xs text-white rounded-full px-1">21</span>
            </div>
            <div className="relative">
              <span className="inline-block w-6 h-6 bg-[#22304A] rounded-full flex items-center justify-center text-gray-400">⚙️</span>
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
          {/* Business Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="bg-[#22304A] text-gray-400 uppercase text-xs">
                  <th className="py-3 px-4 font-medium">S. No</th>
                  <th className="py-3 px-4 font-medium">Business Name</th>
                  <th className="py-3 px-4 font-medium">Rank</th>
                  <th className="py-3 px-4 font-medium">Reviews</th>
                  <th className="py-3 px-4 font-medium">Rating</th>
                  <th className="py-3 px-4 font-medium">Category</th>
                  <th className="py-3 px-4 font-medium">Website</th>
                  <th className="py-3 px-4 font-medium">Date Joined</th>
                  <th className="py-3 px-4 font-medium">-</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {businesses.map((b, i) => (
                  <tr key={b.id} className="border-b border-[#1B2431] last:border-0 hover:bg-[#1B2431]">
                    <td className="py-3 px-4">{i + 1}</td>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <img src={b.logo} alt={b.name} className="w-7 h-7 rounded-full bg-white object-contain" />
                      {b.name}
                    </td>
                    <td className="py-3 px-4">{b.rank}</td>
                    <td className="py-3 px-4">{b.reviews}</td>
                    <td className="py-3 px-4">{b.rating}</td>
                    <td className="py-3 px-4">{b.category}</td>
                    <td className="py-3 px-4">
                      <a href={`https://${b.website}`} target="_blank" rel="noopener noreferrer" className="underline text-blue-300">{b.website}</a>
                    </td>
                    <td className="py-3 px-4">{b.dateJoined}</td>
                    <td className="py-3 px-4">
                      <span
                        className="underline text-blue-300 cursor-pointer hover:text-blue-400"
                        onClick={() => navigate(`/supportStaff-dashboard/business/${b.id}`)}
                      >
                        View More Info.
                      </span>
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