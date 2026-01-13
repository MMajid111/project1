import React, { useState } from 'react';
import { FaUserCircle, FaStar } from 'react-icons/fa';
import { useTheme } from '../../ThemeContext';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';

const reviewStats = [
  {
    label: 'business.reviewsPage.customerReview',
    value: '40,689',
    icon: <FaUserCircle className="text-3xl text-blue-400" />,
    change: 'business.reviewsPage.upFromYesterday',
    changeColor: 'text-green-400',
    bg: 'bg-[#22304A]'
  },
  {
    label: 'business.reviewsPage.positiveReview',
    value: '40,000',
    icon: <FaUserCircle className="text-3xl text-blue-400" />,
    change: 'business.reviewsPage.upFromYesterday',
    changeColor: 'text-green-400',
    bg: 'bg-[#22304A]'
  },
  {
    label: 'business.reviewsPage.negativeReview',
    value: '689',
    icon: <FaUserCircle className="text-3xl text-blue-400" />,
    change: 'business.reviewsPage.downFromYesterday',
    changeColor: 'text-red-400',
    bg: 'bg-[#22304A]'
  },
];

const reviews = [
  {
    user: {
      name: 'Kamran Shah',
      location: 'Islamabad',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    rating: 5,
    text: `The Nike website serves as the primary online presence for the brand, allowing users to explore, purchase, and engage with Nike's extensive range of sportswear, footwear, and accessories. It also highlights Nike's commitment to innovation, sustainability, and athlete-focused solution`,
    images: [
      'https://images.unsplash.com/photo-1517260911205-8c1e1a0b6b8a?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1517260911205-8c1e1a0b6b8a?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1517260911205-8c1e1a0b6b8a?auto=format&fit=crop&w=400&q=80',
    ],
    time: '11:35 pm',
    date: '17/10/2001',
  },
  // Add more review objects here for the carousel
];

const BusinessReviewsPage = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const { isDark } = useTheme();
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [reply, setReply] = useState('');

  const nextReview = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  const review = reviews[current];

  return (
    <div className={`transition-colors min-h-screen ${isDark ? 'bg-[#1B2431] text-white' : 'bg-white text-black'} ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">{t('business.reviewsPage.title')}</h1>

        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4">
            <div className="relative">
              <select 
                className="appearance-none bg-[#22304A] text-gray-400 rounded-lg px-4 py-3 focus:outline-none h-[48px] w-[200px]" 
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <option>{t('business.reviewsPage.filter')}</option>
              </select>
              <span className={`pointer-events-none absolute ${isRTL ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 text-gray-400 text-lg`}>▼</span>
            </div>
            <div className="relative">
              <select 
                className="appearance-none bg-[#22304A] text-gray-400 rounded-lg px-4 py-3 focus:outline-none h-[48px] w-[200px]" 
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <option>{t('business.reviewsPage.sort')}</option>
              </select>
              <span className={`pointer-events-none absolute ${isRTL ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 text-gray-400 text-lg`}>▼</span>
            </div>
          </div>
        </div>

        {/* Review Stats Cards */}
        <div className="flex gap-6 mb-8">
          {reviewStats.map((stat, i) => (
            <div key={i} className={`flex-1 rounded-2xl ${stat.bg} p-6 flex flex-col gap-2 shadow-md`}>
              <div className="flex items-center gap-3">
                {stat.icon}
                <span className="text-lg font-semibold">{t(stat.label)}</span>
              </div>
              <div className="text-3xl font-bold mt-2">{stat.value}</div>
              <div className={`text-xs mt-1 ${stat.changeColor}`}>{t(stat.change)}</div>
            </div>
          ))}
        </div>

        {/* Latest Customer Review */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold">{t('business.reviewsPage.latestReview')}</h2>
          <p className="text-gray-400 text-sm mt-1">{t('business.reviewsPage.customerSays')}</p>
        </div>

        {/* Review Carousel */}
        <div className="relative max-w-3xl">
          {/* Carousel Controls */}
          {reviews.length > 1 && (
            <>
              <button onClick={prevReview} className={`absolute ${isRTL ? 'right-0' : 'left-0'} top-1/2 -translate-y-1/2 bg-[#22304A] text-white rounded-full w-8 h-8 flex items-center justify-center z-10`}>
                {isRTL ? '→' : '←'}
              </button>
              <button onClick={nextReview} className={`absolute ${isRTL ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 bg-[#22304A] text-white rounded-full w-8 h-8 flex items-center justify-center z-10`}>
                {isRTL ? '←' : '→'}
              </button>
            </>
          )}
          <div className="flex flex-col gap-4 bg-transparent">
            <div className="flex items-center gap-4">
              <img src={review.user.avatar} alt={review.user.name} className="w-16 h-16 rounded-full border-4 border-blue-500" />
              <div>
                <div className="font-bold text-lg">{review.user.name}</div>
                <div className="text-blue-400 text-sm">{review.user.location}</div>
              </div>
              <div className="flex-1 flex justify-end items-center">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-green-400 text-lg" />
                ))}
              </div>
            </div>
            <div className="text-gray-300 text-base mt-2 max-w-2xl">{review.text}</div>
            <div className="flex gap-4 mt-4">
              {review.images.map((img, i) => (
                <img key={i} src={img} alt="product" className="w-28 h-28 rounded-lg object-cover bg-white" />
              ))}
            </div>
            <div className="flex items-center gap-8 mt-2">
              <button onClick={() => setShowModal(true)} className="text-blue-400 font-semibold hover:underline">
                {t('business.reviewsPage.giveReply')}
              </button>
              <span className="text-gray-400 text-sm ml-auto">{review.time}</span>
              <span className="text-gray-400 text-sm">{review.date}</span>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`bg-[#22304A] rounded-xl p-8 w-full max-w-md relative ${isDark ? 'text-white' : 'text-black'}`}>
            <button
              className="absolute top-3 right-3 text-2xl text-gray-400 hover:text-gray-200"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4">{t('business.reviewsPage.writeReply')}</h3>
            <textarea
              className="w-full h-32 p-3 rounded-lg bg-[#1B2431] text-white focus:outline-none resize-none mb-4"
              placeholder={t('business.reviewsPage.writeReply')}
              value={reply}
              onChange={e => setReply(e.target.value)}
              dir={isRTL ? 'rtl' : 'ltr'}
            />
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              onClick={() => setShowModal(false)}
            >
              {t('business.reviewsPage.send')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessReviewsPage; 