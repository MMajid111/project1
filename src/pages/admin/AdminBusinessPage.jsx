import React, { useState } from 'react';
import { useTheme } from '../../ThemeContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';

const registeredBusinesses = [
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
    status: 'active',
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
    status: 'active',
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
    status: 'active',
  },
];

const registrationRequests = [
  {
    id: 1,
    name: 'Rehman',
    number: '+92 305 5533 069',
    businessName: 'Nike',
    businessCategory: 'Shopping and fashion',
    businessWebsite: 'www.nike.com',
    businessStatus: 'Verified',
    certificate: 'Certificate.pdf',
  },
  {
    id: 2,
    name: 'Rehman',
    number: '+92 305 5533 069',
    businessName: 'adidas',
    businessCategory: 'Shopping and fashion',
    businessWebsite: 'www.adidas.com',
    businessStatus: 'Claimed',
    certificate: 'Certificate.pdf',
  },
  {
    id: 3,
    name: 'Rehman',
    number: '+92 305 5533 069',
    businessName: 'Puma',
    businessCategory: 'Shopping and fashion',
    businessWebsite: 'www.puma.com',
    businessStatus: 'Verified',
    certificate: 'Certificate.pdf',
  },
];

export default function AdminBusinessPage() {
  const { isDark } = useTheme();
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [tab, setTab] = useState('registered');
  const [businesses, setBusinesses] = useState(registeredBusinesses);
  const [modal, setModal] = useState({ open: false, businessId: null });
  const [toast, setToast] = useState({ show: false, message: '' });
  const navigate = useNavigate();

  // Switch data on tab change
  const handleTab = (tabName) => {
    setTab(tabName);
    setBusinesses(tabName === 'registered' ? registeredBusinesses : registrationRequests);
  };

  const handleBlockClick = (businessId) => {
    setModal({ open: true, businessId });
  };

  const confirmBlock = () => {
    setBusinesses((prev) =>
      prev.map((b) =>
        b.id === modal.businessId ? { ...b, status: 'blocked' } : b
      )
    );
    setToast({ show: true, message: 'Business has been blocked.' });
    setModal({ open: false, businessId: null });
    setTimeout(() => setToast({ show: false, message: '' }), 2000);
  };

  // Approve/Reject handlers for requests
  const handleApprove = (id) => {
    setToast({ show: true, message: 'Business approved.' });
    setTimeout(() => setToast({ show: false, message: '' }), 2000);
  };
  const handleReject = (id) => {
    setToast({ show: true, message: 'Business rejected.' });
    setTimeout(() => setToast({ show: false, message: '' }), 2000);
  };

  return (
    <div className={`transition-colors min-h-screen ${isDark ? 'bg-[#181F2A] text-white' : 'bg-white text-black'} ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="p-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            className={`px-8 py-3 rounded-full font-semibold text-lg transition-all focus:outline-none ${
              tab === 'registered'
                ? 'bg-[#4169E1] text-white shadow'
                : isDark
                ? 'bg-[#22304A] text-gray-400'
                : 'bg-gray-200 text-gray-600'
            }`}
            onClick={() => handleTab('registered')}
          >
            {t('admin.business.registeredBusinesses')}
          </button>
          <button
            className={`px-8 py-3 rounded-full font-semibold text-lg transition-all focus:outline-none ${
              tab === 'request'
                ? 'bg-[#4169E1] text-white shadow'
                : isDark
                ? 'bg-[#22304A] text-gray-400'
                : 'bg-gray-200 text-gray-600'
            }`}
            onClick={() => handleTab('request')}
          >
            {t('admin.business.registrationRequest')}
          </button>
        </div>
        {/* Year/Period Dropdowns */}
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-xl font-bold">{t('admin.business.year')} 2024 <span className={`ml-2 ${isRTL ? 'rotate-180' : ''}`}>▼</span></h2>
          <span className="ml-auto text-gray-400">{t('admin.business.weekly')} <span className={`ml-2 ${isRTL ? 'rotate-180' : ''}`}>▼</span></span>
        </div>
        {/* Table */}
        <div className="rounded-xl overflow-x-hidden w-full">
          {tab === 'registered' ? (
            <table className="w-full min-w-[900px] bg-[#22304A] rounded-xl">
              <thead>
                <tr className="text-left text-gray-400 text-sm">
                  <th className="py-3 px-4">S. No</th>
                  <th className="py-3 px-4">{t('admin.business.businessName')}</th>
                  <th className="py-3 px-4">{t('admin.business.rank')}</th>
                  <th className="py-3 px-4">{t('admin.business.reviews')}</th>
                  <th className="py-3 px-4">{t('admin.business.rating')}</th>
                  <th className="py-3 px-4">{t('admin.business.category')}</th>
                  <th className="py-3 px-4">{t('admin.business.website')}</th>
                  <th className="py-3 px-4">{t('admin.business.dateJoined')}</th>
                  <th className="py-3 px-4">-</th>
                  <th className="py-3 px-4">{t('admin.business.actionPerform')}</th>
                </tr>
              </thead>
              <tbody>
                {businesses.map((b, i) => (
                  <tr key={b.id} className="border-t border-[#1B2431] text-white text-sm">
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
                        onClick={() => navigate(`/admin-dashboard/business/${b.id}`)}
                      >
                        {t('admin.business.viewMoreInfo')}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button
                        className={`px-6 py-2 rounded-lg font-semibold transition ${b.status === 'blocked' ? 'bg-gray-600 text-white' : 'bg-red-600 hover:bg-red-700 text-white'}`}
                        onClick={() => handleBlockClick(b.id)}
                        disabled={b.status === 'blocked'}
                      >
                        {b.status === 'blocked' ? t('admin.business.blocked') : t('admin.business.block')}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="w-full min-w-[1100px] bg-[#22304A] rounded-xl">
              <thead>
                <tr className="text-left text-gray-400 text-sm">
                  <th className="py-3 px-4">S. No</th>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Number</th>
                  <th className="py-3 px-4">Business Name</th>
                  <th className="py-3 px-4">Business Category</th>
                  <th className="py-3 px-4">Business Website</th>
                  <th className="py-3 px-4">Business Status</th>
                  <th className="py-3 px-4">Certificate</th>
                  <th className="py-3 px-4">Action Perform</th>
                </tr>
              </thead>
              <tbody>
                {registrationRequests.map((req, i) => (
                  <tr key={req.id} className="border-t border-[#1B2431] text-white text-sm">
                    <td className="py-3 px-4">{i + 1}</td>
                    <td className="py-3 px-4">{req.name}</td>
                    <td className="py-3 px-4">{req.number}</td>
                    <td className="py-3 px-4">{req.businessName}</td>
                    <td className="py-3 px-4">{req.businessCategory}</td>
                    <td className="py-3 px-4">
                      <a href={`https://${req.businessWebsite}`} target="_blank" rel="noopener noreferrer" className="underline text-blue-300">{req.businessWebsite}</a>
                    </td>
                    <td className="py-3 px-4">{req.businessStatus}</td>
                    <td className="py-3 px-4">
                      <a href="#" className="text-teal-400 underline">{req.certificate}</a>
                    </td>
                    <td className="py-3 px-4 flex gap-2">
                      <button className="bg-teal-400 hover:bg-teal-500 text-white px-6 py-2 rounded-lg font-semibold transition" onClick={() => handleApprove(req.id)}>Approve</button>
                      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition" onClick={() => handleReject(req.id)}>Reject</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      {/* Modal */}
      {modal.open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className={`rounded-xl p-8 w-full max-w-md ${isDark ? 'bg-[#22304A] text-white' : 'bg-white text-black'}`}>
            <h3 className="text-lg font-bold mb-4">{t('admin.business.warning')}</h3>
            <p className="mb-6">{t('admin.business.blockConfirm')}</p>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 rounded-lg bg-gray-300 text-gray-800 hover:bg-gray-400"
                onClick={() => setModal({ open: false, businessId: null })}
              >
                {t('admin.business.cancel')}
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
                onClick={confirmBlock}
              >
                {t('admin.business.confirm')}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Toast */}
      {toast.show && (
        <div className="fixed top-8 right-8 z-50 px-6 py-3 rounded-lg shadow-lg font-semibold transition-all bg-red-600 text-white">
          {toast.message}
        </div>
      )}
    </div>
  );
} 