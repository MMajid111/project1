import React from 'react';
import { useTheme } from '../../ThemeContext';
import { useParams, useNavigate } from 'react-router-dom';

const businessMock = {
  id: 1,
  logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
  name: 'Nike',
  reviewsCount: 4000,
  rating: 5,
  website: 'www.nike.com',
  categories: ['Active wear', 'Shirt', 'Shoes', 'Pants', 'Socks'],
  status: 'Verified',
  description:
    "The Nike website serves as the primary online presence for the brand, allowing users to explore, purchase, and engage with Nike's extensive range of sportswear, footwear, and accessories. It also highlights Nike's commitment to innovation, sustainability, and athlete-focused solution",
  customerReviews: [
    {
      id: 1,
      user: {
        name: 'Kamran Shah',
        location: 'Islamabad',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      },
      rating: 5,
      text:
        "The Nike website serves as the primary online presence for the brand, allowing users to explore, purchase, and engage with Nike's extensive range of sportswear, footwear, and accessories. It also highlights Nike's commitment to innovation, sustainability, and athlete-focused solution",
      images: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b2e2e2e-2e2e-4e2e-8e2e-2e2e2e2e2e2e/air-max-90-shoe.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b2e2e2e-2e2e-4e2e-8e2e-2e2e2e2e2e2e/air-max-90-shoe.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b2e2e2e-2e2e-4e2e-8e2e-2e2e2e2e2e2e/air-max-90-shoe.png',
      ],
      reply: {
        by: 'you',
        text: 'Thanks for your kind words, Shah !!',
        time: '10:01 pm',
        date: '18/10/2001',
      },
      time: '11:35 pm',
      date: '17/10/2001',
    },
    {
      id: 2,
      user: {
        name: 'Kamran Shah',
        location: 'Islamabad',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      },
      rating: 5,
      text:
        "The Nike website serves as the primary online presence for the brand, allowing users to explore, purchase, and engage with Nike's extensive range of sportswear, footwear, and accessories. It also highlights Nike's commitment to innovation, sustainability, and athlete-focused solution",
      images: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b2e2e2e-2e2e-4e2e-8e2e-2e2e2e2e2e2e/air-max-90-shoe.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b2e2e2e-2e2e-4e2e-8e2e-2e2e2e2e2e2e/air-max-90-shoe.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b2e2e2e-2e2e-4e2e-8e2e-2e2e2e2e2e2e/air-max-90-shoe.png',
      ],
      reply: {
        by: 'nike',
        text: 'Thanks for your kind words, Shah !!',
        time: '10:01 pm',
        date: '18/10/2001',
      },
      time: '11:35 pm',
      date: '17/10/2001',
    },
  ],
};

export default function AdminBusinessDetailsPage() {
  const { isDark } = useTheme();
  const { id } = useParams();
  const navigate = useNavigate();
  const business = businessMock; // In real app, fetch by id

  return (
    <div className={`transition-colors min-h-screen ${isDark ? 'bg-[#181F2A] text-white' : 'bg-white text-black'}`}>
      <div className="p-8 max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-8 mb-8">
          <div className="w-32 h-32 rounded-xl bg-[#22304A] flex items-center justify-center">
            <img src={business.logo} alt={business.name} className="w-24 h-24 object-contain" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-3xl font-bold">{business.name}</h1>
              <span className="text-gray-400 font-medium">{business.reviewsCount} Reviews |</span>
              <span className="text-yellow-400 text-xl">{'★'.repeat(business.rating)}</span>
            </div>
            <div className="flex gap-4 mb-4">
              <button className="bg-[#22304A] text-white px-6 py-2 rounded-lg font-semibold transition hover:bg-[#4169E1]" onClick={() => window.open(`https://${business.website}`, '_blank')}>View website</button>
              <button className="bg-[#4169E1] text-white px-6 py-2 rounded-lg font-semibold transition">Remove registration</button>
            </div>
            <div className="flex gap-2 flex-wrap">
              {business.categories.map((cat) => (
                <span key={cat} className="bg-[#22304A] text-white px-4 py-1 rounded-full text-sm font-medium">{cat}</span>
              ))}
            </div>
          </div>
        </div>
        {/* Business Details */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Business details</h2>
          <div className="mb-2">
            <span className="font-semibold">Status:</span> <span className="text-blue-400 font-semibold">{business.status}</span>
          </div>
          <div className="mb-2">
            <span className="font-semibold">Description</span>
            <p className="text-gray-300 mt-1">{business.description}</p>
          </div>
        </div>
        {/* Customer Reviews */}
        <div>
          <h2 className="text-xl font-bold mb-2">Customer Reviews</h2>
          <p className="text-gray-400 mb-6">What Customer Says About {business.name}.</p>
          {business.customerReviews.map((review) => (
            <div key={review.id} className="mb-10">
              <div className="flex items-center gap-4 mb-2">
                <img src={review.user.avatar} alt={review.user.name} className="w-12 h-12 rounded-full border-4 border-blue-400" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">{review.user.name}</span>
                    <span className="text-blue-400 text-sm">{review.user.location}</span>
                  </div>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i} className="text-green-400 text-lg">★</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-2 mb-2 text-gray-300">{review.text}</div>
              <div className="flex gap-4 mb-2">
                {review.images.map((img, idx) => (
                  <img key={idx} src={img} alt="review" className="w-28 h-28 rounded-lg object-cover bg-white" />
                ))}
              </div>
              <div className="flex gap-4 items-center text-gray-400 text-sm mb-2">
                <span>{review.time}</span>
                <span>{review.date}</span>
              </div>
              {/* Reply */}
              <div className="ml-16">
                <span className="text-blue-400 font-semibold">Reply by {review.reply.by}</span>
                <div className="text-gray-300">{review.reply.text}</div>
                <div className="flex gap-4 items-center text-gray-400 text-sm mt-1">
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