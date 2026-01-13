import React, { useState } from "react";
import { useTheme } from "../../ThemeContext";

const BusinessTable = () => {
  const { isDark } = useTheme();
  const [year, setYear] = useState("2024");
  const [period, setPeriod] = useState("Weekly");

  const data = [
    {
      id: 1,
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
      name: "Nike",
      rank: 1,
      reviews: 1500,
      rating: 5,
      category: "Shopping and fashion",
      website: "https://www.nike.com",
      dateJoined: "17/10/2024",
    },
    {
      id: 2,
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
      name: "Adidas",
      rank: 2,
      reviews: 1200,
      rating: 4.9,
      category: "Shopping and fashion",
      website: "https://www.adidas.com",
      dateJoined: "17/10/2024",
    },
    {
      id: 3,
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Puma_Logo.svg",
      name: "Puma",
      rank: 3,
      reviews: 500,
      rating: 4.8,
      category: "Shopping and fashion",
      website: "https://www.puma.com",
      dateJoined: "17/10/2024",
    },
  ];

  return (
    <div className={`p-4 max-w-5xl mx-auto transition-colors ${
      isDark ? "bg-[#1B2431] text-white" : "bg-white text-black"
    }`}>
      {/* Dropdown Filters */}
      <div className="flex justify-between items-center pb-4">
        {/* Year Dropdown */}
        <div className="relative">
          <span className={`text-lg font-semibold mr-2 ${isDark ? "text-white" : "text-gray-800"}`}>
            Year
          </span>
          <div className="relative">
            <select
              className={`border px-4 py-2 pr-10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 appearance-none transition-colors ${
                isDark 
                  ? "bg-[#323D4E] text-white border-gray-700 focus:ring-gray-600" 
                  : "bg-white text-black border-gray-300"
              }`}
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
            </select>
            <span className={`absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}>
              ▼
            </span>
          </div>
        </div>

        {/* Period Dropdown */}
        <div className="relative">
          <select
            className={`border px-4 py-2 pr-10 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 appearance-none transition-colors ${
              isDark 
                ? "bg-[#323D4E] text-white border-gray-700 focus:ring-gray-600" 
                : "bg-white text-black border-gray-300"
            }`}
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          >
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
          <span className={`absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}>
            ▼
          </span>
        </div>
      </div>

      {/* Business Table */}
      <div className="overflow-x-auto">
        <table className="w-full mt-4 text-sm text-left border-collapse">
          <thead>
            <tr className={`${
              isDark ? "bg-[#323D4E] text-gray-200" : "bg-gray-200 text-gray-700"
            }`}>
              <th className="p-3">S. No</th>
              <th className="p-3">Business Name</th>
              <th className="p-3">Rank</th>
              <th className="p-3">Reviews</th>
              <th className="p-3">Rating</th>
              <th className="p-3">Category</th>
              <th className="p-3">Website</th>
              <th className="p-3">Date Joined</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody className={isDark ? "bg-[#1B2431]" : "bg-white"}>
            {data.map((item, index) => (
              <tr 
                key={item.id} 
                className={`border-b ${
                  isDark ? "border-gray-700 hover:bg-[#323D4E]" : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <td className="p-3">{index + 1}</td>
                <td className="p-3 flex items-center gap-2">
                  <img src={item.logo} alt={item.name} className="w-6 h-6" />
                  {item.name}
                </td>
                <td className="p-3">{item.rank}</td>
                <td className="p-3">{item.reviews}</td>
                <td className="p-3">{item.rating}</td>
                <td className="p-3">{item.category}</td>
                <td className="p-3">
                  <a 
                    href={item.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`text-blue-500 hover:text-blue-700 underline ${
                      isDark ? "text-blue-400 hover:text-blue-300" : ""
                    }`}
                  >
                    {item.website.replace("https://www.", "")}
                  </a>
                </td>
                <td className="p-3">{item.dateJoined}</td>
                <td className="p-3">
                  <span className={`cursor-pointer underline ${
                    isDark 
                      ? "text-blue-400 hover:text-blue-300" 
                      : "text-blue-500 hover:text-blue-700"
                  }`}>
                    View More Info.
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusinessTable;
