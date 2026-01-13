import React from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '../../ThemeContext';

const businesses = [
  {
    id: 1,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
    name: 'Nike',
    rank: 1,
    reviews: 4000,
    rating: 5,
    category: 'Shopping and fashion',
    website: 'www.nike.com',
    dateJoined: '17/10/2024',
    description: 'The Nike website serves as the primary online presence for the brand, allowing users to explore, purchase, and engage with Nike\'s extensive range of sportswear, footwear, and accessories. It also highlights Nike\'s commitment to innovation, sustainability, and athlete-focused solution',
    categories: ['Active wear', 'Shirt', 'Shoes', 'Pants', 'Socks'],
    status: 'Verified',
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
    categories: ['Active wear', 'Shirt', 'Shoes'],
    status: 'Verified',
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
    categories: ['Active wear', 'Shoes'],
    status: 'Verified',
  },
];

const reviews = [
  {
    id: 1,
    user: {
      name: 'Kamran Shah',
      location: 'Islamabad',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    rating: 5,
    text: 'The Nike website serves as the primary online presence for the brand, allowing users to explore, purchase, and engage with Nike\'s extensive range of sportswear, footwear, and accessories. It also highlights Nike\'s commitment to innovation, sustainability, and athlete-focused solution',
    images: [
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2b1e6e2a-7e2e-4e2e-8e2e-2e2e2e2e2e2e/air-jordan-1-retro-high-og-shoes.png',
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2b1e6e2a-7e2e-4e2e-8e2e-2e2e2e2e2e2e/air-jordan-1-retro-high-og-shoes.png',
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2b1e6e2a-7e2e-4e2e-8e2e-2e2e2e2e2e2e/air-jordan-1-retro-high-og-shoes.png',
    ],
    time: '11:35 pm',
    date: '17/10/2001',
    reply: {
      by: 'you',
      text: 'Thanks for your kind words, Shah !!',
      time: '10:01 pm',
      date: '18/10/2001',
    },
  },
  {
    id: 2,
    user: {
      name: 'Kamran Shah',
      location: 'Islamabad',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    rating: 5,
    text: 'The Nike website serves as the primary online presence for the brand, allowing users to explore, purchase, and engage with Nike\'s extensive range of sportswear, footwear, and accessories. It also highlights Nike\'s commitment to innovation, sustainability, and athlete-focused solution',
    images: [
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2b1e6e2a-7e2e-4e2e-8e2e-2e2e2e2e2e2e/air-jordan-1-retro-high-og-shoes.png',
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2b1e6e2a-7e2e-4e2e-8e2e-2e2e2e2e2e2e/air-jordan-1-retro-high-og-shoes.png',
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2b1e6e2a-7e2e-4e2e-8e2e-2e2e2e2e2e2e/air-jordan-1-retro-high-og-shoes.png',
    ],
    time: '11:35 pm',
    date: '17/10/2001',
    reply: {
      by: 'nike',
      text: 'Thanks for your kind words, Shah !!',
      time: '10:01 pm',
      date: '18/10/2001',
    },
  },
];

export default function StaffBusinessDetails() {
  const { isDark } = useTheme();
  const { id } = useParams();
  const business = businesses.find(b => b.id === Number(id)) || businesses[0];

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
      {/* Business Details Section */}
      <div className="px-10 max-w-5xl mx-auto">
        {/* Business Header */}
        <div className="flex gap-8 items-center mb-6">
          <img src={business.logo} alt={business.name} className="w-32 h-32 rounded-xl bg-white object-contain" />
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-2">
              <h3 className="text-2xl font-bold">{business.name}</h3>
              <span className="text-gray-400">{business.reviews} Reviews |</span>
              <span className="text-yellow-400 text-xl">{'★'.repeat(Math.round(business.rating))}</span>
            </div>
            <div className="flex gap-4 mb-4">
              <a href={`https://${business.website}`} target="_blank" rel="noopener noreferrer" className="bg-[#22304A] border border-gray-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#181F2A] transition">View website</a>
              <button className="bg-[#4169E1] text-white px-6 py-2 rounded-lg font-semibold">Remove registration</button>
            </div>
            <div className="flex gap-2 flex-wrap">
              {business.categories.map(cat => (
                <span key={cat} className="bg-[#181F2A] text-gray-300 px-4 py-1 rounded-full text-xs font-semibold">{cat}</span>
              ))}
            </div>
          </div>
        </div>
        {/* Business Details */}
        <div className="mb-6">
          <h4 className="font-bold mb-1">Business details</h4>
          <div className="flex gap-8 mb-2">
            <div><span className="font-semibold">Status:</span> <span className="text-blue-400 font-semibold">{business.status}</span></div>
          </div>
          <div className="mb-2"><span className="font-semibold">Description</span></div>
          <div className="text-gray-300 text-sm mb-2 max-w-2xl">{business.description}</div>
        </div>
        {/* Customer Reviews */}
        <div>
          <h4 className="font-bold text-xl mb-1">Customer Reviews</h4>
          <div className="text-gray-400 mb-6 text-sm">What Customer Says About {business.name}.</div>
          {reviews.map((review, idx) => (
            <div key={review.id} className="mb-10">
              <div className="flex items-center gap-4 mb-2">
                <span className="relative inline-block">
                  <svg width="40" height="40" viewBox="0 0 36 36" className="absolute z-10" style={{left: -4, top: -4}}><polygon points="18,2 34,9 34,27 18,34 2,27 2,9" fill="#4169E1" /></svg>
                  <img src={review.user.avatar} alt="User Avatar" className="w-10 h-10 rounded-full object-cover relative z-20 border-2 border-white" />
                </span>
                <div>
                  <div className="font-bold text-base">{review.user.name}</div>
                  <div className="text-blue-400 text-xs">{review.user.location}</div>
                </div>
                <span className="ml-auto text-green-400 text-lg">{'★'.repeat(review.rating)}</span>
              </div>
              <div className="ml-14 text-gray-200 text-sm mb-2 max-w-2xl">{review.text}</div>
              <div className="ml-14 flex gap-4 mb-2">
                {review.images.map((img, i) => (
                  <img key={i} src={img} alt="Review" className="w-24 h-24 rounded-lg object-cover bg-white" />
                ))}
              </div>
              <div className="ml-14 text-xs text-gray-400 flex gap-8 mb-1">
                <span>{review.time}</span>
                <span>{review.date}</span>
              </div>
              <div className="ml-14 mt-2">
                <div className="text-blue-400 text-sm font-semibold mb-1">Reply by {review.reply.by}</div>
                <div className="text-gray-200 text-sm">{review.reply.text}</div>
                <div className="text-xs text-gray-400 flex gap-8 mt-1">
                  <span>{review.reply.time}</span>
                  <span>{review.reply.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 