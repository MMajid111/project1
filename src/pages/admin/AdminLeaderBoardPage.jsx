import React, { useEffect, useState } from 'react';
import { useTheme } from '../../ThemeContext';

const categories = [
  'Shopping and fashion',
  'Food and Beverage',
  'Technology',
];

const businessData = {
  'Shopping and fashion': [
    {
      name: 'Nike',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
      rank: 1,
      rating: 5,
      reviews: 1500,
      rev: 1500,
      category: 'Shopping and fashion',
      website: 'www.nike.com',
      color: 'bg-yellow-400',
      dateJoined: '17/10/2024',
    },
    {
      name: 'Adidas',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg',
      rank: 2,
      rating: 4.9,
      reviews: 1200,
      rev: 1200,
      category: 'Shopping and fashion',
      website: 'www.adidas.com',
      color: 'bg-gray-400',
      dateJoined: '17/10/2024',
    },
    {
      name: 'Puma',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Puma_Logo.svg',
      rank: 3,
      rating: 4.8,
      reviews: 500,
      rev: 500,
      category: 'Shopping and fashion',
      website: 'www.puma.com',
      color: 'bg-amber-700',
      dateJoined: '17/10/2024',
    },
  ],
  'Food and Beverage': [
    {
      name: 'Starbucks',
      logo: 'https://upload.wikimedia.org/wikipedia/sco/4/45/Starbucks_Coffee_Logo.svg',
      rank: 1,
      rating: 4.7,
      reviews: 900,
      rev: 900,
      category: 'Food and Beverage',
      website: 'www.starbucks.com',
      color: 'bg-yellow-400',
      dateJoined: '17/10/2024',
    },
    {
      name: 'McDonalds',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/McDonald%27s_logo.svg',
      rank: 2,
      rating: 4.5,
      reviews: 800,
      rev: 800,
      category: 'Food and Beverage',
      website: 'www.mcdonalds.com',
      color: 'bg-gray-400',
      dateJoined: '17/10/2024',
    },
    {
      name: 'KFC',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/KFC_logo.svg',
      rank: 3,
      rating: 4.3,
      reviews: 600,
      rev: 600,
      category: 'Food and Beverage',
      website: 'www.kfc.com',
      color: 'bg-amber-700',
      dateJoined: '17/10/2024',
    },
  ],
  'Technology': [
    {
      name: 'Apple',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      rank: 1,
      rating: 5,
      reviews: 2000,
      rev: 2000,
      category: 'Technology',
      website: 'www.apple.com',
      color: 'bg-yellow-400',
      dateJoined: '17/10/2024',
    },
    {
      name: 'Samsung',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg',
      rank: 2,
      rating: 4.8,
      reviews: 1800,
      rev: 1800,
      category: 'Technology',
      website: 'www.samsung.com',
      color: 'bg-gray-400',
      dateJoined: '17/10/2024',
    },
    {
      name: 'Sony',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.svg',
      rank: 3,
      rating: 4.6,
      reviews: 1500,
      rev: 1500,
      category: 'Technology',
      website: 'www.sony.com',
      color: 'bg-amber-700',
      dateJoined: '17/10/2024',
    },
  ],
};

const barHeights = [120, 180, 90]; // px for 2nd, 1st, 3rd

export default function AdminLeaderBoardPage() {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [animate, setAnimate] = useState(false);

  const businesses = businessData[selectedCategory];

  useEffect(() => {
    setAnimate(false);
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, [selectedCategory]);

  return (
    <div className={`transition-colors min-h-screen ${isDark ? 'bg-[#1B2431] text-white' : 'bg-white text-black'}`}>
      <div className="p-6 max-w-6xl mx-auto">
        {/* Category Dropdown */}
        <div className="flex items-center gap-2 mb-8">
          <h2 className="text-lg font-bold">
            <span className="relative inline-block">
              <select
                className="bg-transparent text-white font-bold text-xl appearance-none pr-8 cursor-pointer"
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-lg">▼</span>
            </span>
          </h2>
        </div>
        {/* Animated Bar Graph */}
        <div className="flex justify-center items-end gap-8 mb-2 h-[220px]">
          {/* 2nd Place */}
          <div className="flex flex-col items-center">
            <img src={businesses[1].logo} alt={businesses[1].name} className="w-12 h-12 rounded-full bg-white object-contain mb-2" />
            <span className="mb-1 text-sm font-semibold text-gray-300">{businesses[1].name}</span>
            <div
              className={`transition-all duration-700 ${businesses[1].color} rounded-t-xl flex flex-col items-center justify-end`}
              style={{ height: animate ? barHeights[0] : 0, width: 110 }}
            >
              <span className="mt-2 text-base text-gray-900 font-bold">2nd</span>
              <span className="mb-2 text-base text-gray-900">{businesses[1].rev} Rev</span>
            </div>
          </div>
          {/* 1st Place */}
          <div className="flex flex-col items-center">
            <img src={businesses[0].logo} alt={businesses[0].name} className="w-12 h-12 rounded-full bg-white object-contain mb-2" />
            <span className="mb-1 text-sm font-semibold text-gray-300">{businesses[0].name}</span>
            <div
              className={`transition-all duration-700 ${businesses[0].color} rounded-t-xl flex flex-col items-center justify-end`}
              style={{ height: animate ? barHeights[1] : 0, width: 110 }}
            >
              <span className="mt-2 text-base text-gray-900 font-bold">1st</span>
              <span className="mb-2 text-base text-gray-900">{businesses[0].rev} Rev</span>
            </div>
          </div>
          {/* 3rd Place */}
          <div className="flex flex-col items-center">
            <img src={businesses[2].logo} alt={businesses[2].name} className="w-12 h-12 rounded-full bg-white object-contain mb-2" />
            <span className="mb-1 text-sm font-semibold text-gray-300">{businesses[2].name}</span>
            <div
              className={`transition-all duration-700 ${businesses[2].color} rounded-t-xl flex flex-col items-center justify-end`}
              style={{ height: animate ? barHeights[2] : 0, width: 110 }}
            >
              <span className="mt-2 text-base text-gray-900 font-bold">3rd</span>
              <span className="mb-2 text-base text-gray-900">{businesses[2].rev} Rev</span>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 mb-6 text-sm font-medium">
          {businesses[0].name} Is On Top Of The Leader Board This Week
        </div>
        {/* Leaderboard Table */}
        <div className="overflow-x-hidden rounded-xl">
          <table className="w-full min-w-[900px] bg-[#22304A] rounded-xl text-sm">
            <thead>
              <tr className="text-left text-gray-400 text-sm">
                <th className="py-3 px-4">S. No</th>
                <th className="py-3 px-4">Business Name</th>
                <th className="py-3 px-4">Rank</th>
                <th className="py-3 px-4">Reviews</th>
                <th className="py-3 px-4">Rating</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Website</th>
                <th className="py-3 px-4">Date Joined</th>
              </tr>
            </thead>
            <tbody>
              {businesses.map((b, i) => (
                <tr key={b.name} className="border-t border-[#1B2431] text-white text-sm">
                  <td className="py-3 px-4">{i + 1}</td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <img src={b.logo} alt={b.name} className="w-6 h-6 rounded-full bg-white object-contain" />
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 