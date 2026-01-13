import React, { useState } from 'react';
import { useTheme } from '../../ThemeContext';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';

const initialUsers = [
  {
    id: 1,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    fullname: 'Kamran Shah',
    fullname_ar: 'كامران شاه',
    number: '+92 305 5533 069',
    location: 'Islamabad',
    location_ar: 'إسلام آباد',
    profession: 'Self Employed',
    profession_ar: 'عمل حر',
    givenReview: 5,
    dateJoined: '17/10/2024',
    status: 'active',
  },
  {
    id: 2,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    fullname: 'Kamran Shah',
    fullname_ar: 'كامران شاه',
    number: '+92 305 5533 069',
    location: 'Islamabad',
    location_ar: 'إسلام آباد',
    profession: 'Developer',
    profession_ar: 'مطور',
    givenReview: 20,
    dateJoined: '17/10/2024',
    status: 'active',
  },
  {
    id: 3,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    fullname: 'Kamran Shah',
    fullname_ar: 'كامران شاه',
    number: '+92 305 5533 069',
    location: 'Islamabad',
    location_ar: 'إسلام آباد',
    profession: 'Developer',
    profession_ar: 'مطور',
    givenReview: 10,
    dateJoined: '17/10/2024',
    status: 'active',
  },
];

export default function AdminUsersPage() {
  const { isDark } = useTheme();
  const { t } = useTranslation();
  const { isRTL, language } = useLanguage();
  const [users, setUsers] = useState(initialUsers);
  const [modal, setModal] = useState({ open: false, userId: null, action: null });
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  const handleBlockClick = (userId) => {
    setModal({ open: true, userId, action: 'block' });
  };

  const handleUnblockClick = (userId) => {
    setModal({ open: true, userId, action: 'unblock' });
  };

  const confirmAction = () => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === modal.userId
          ? {
              ...u,
              status: modal.action === 'block' ? 'blocked' : 'active',
            }
          : u
      )
    );
    setToast({
      show: true,
      message:
        modal.action === 'block'
          ? t('admin.users.toastBlocked')
          : t('admin.users.toastUnblocked'),
      type: modal.action,
    });
    setModal({ open: false, userId: null, action: null });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 2000);
  };

  return (
    <div className={`transition-colors min-h-screen ${isDark ? 'bg-[#181F2A] text-white' : 'bg-white text-black'} ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">{t('admin.users.year')} 2024 <span className="ml-2">▼</span></h2>
        </div>
        <div className="overflow-x-auto rounded-xl">
          <table className="w-full min-w-[900px] bg-[#22304A] rounded-xl" dir={isRTL ? 'rtl' : 'ltr'}>
            <thead>
              <tr className="text-gray-400 text-sm">
                <th className="py-3 px-4">{t('admin.users.sNo')}</th>
                <th className="py-3 px-4">{t('admin.users.fullname')}</th>
                <th className="py-3 px-4">{t('admin.users.number')}</th>
                <th className="py-3 px-4">{t('admin.users.location')}</th>
                <th className="py-3 px-4">{t('admin.users.profession')}</th>
                <th className="py-3 px-4">{t('admin.users.givenReview')}</th>
                <th className="py-3 px-4">{t('admin.users.dateJoined')}</th>
                <th className="py-3 px-4">{t('admin.users.actionPerform')}</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={user.id} className="border-t border-[#1B2431] text-white text-sm">
                  <td className="py-3 px-4">{i + 1}</td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <img src={user.avatar} alt={language === 'ar' ? user.fullname_ar : user.fullname} className="w-8 h-8 rounded-full object-cover" />
                    {language === 'ar' ? user.fullname_ar : user.fullname}
                  </td>
                  <td className="py-3 px-4">{user.number}</td>
                  <td className="py-3 px-4">{language === 'ar' ? user.location_ar : user.location}</td>
                  <td className="py-3 px-4">{language === 'ar' ? user.profession_ar : user.profession}</td>
                  <td className="py-3 px-4">{user.givenReview}</td>
                  <td className="py-3 px-4">{user.dateJoined}</td>
                  <td className="py-3 px-4">
                    {user.status === 'active' ? (
                      <button
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition"
                        onClick={() => handleBlockClick(user.id)}
                      >
                        {t('admin.users.block')}
                      </button>
                    ) : (
                      <button
                        className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold transition"
                        onClick={() => handleUnblockClick(user.id)}
                      >
                        {t('admin.users.blocked')}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Modal */}
      {modal.open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className={`rounded-xl p-8 w-full max-w-md ${isDark ? 'bg-[#22304A] text-white' : 'bg-white text-black'}`}>
            <h3 className="text-lg font-bold mb-4">{t('admin.users.warning')}</h3>
            <p className="mb-6">
              {modal.action === 'block'
                ? t('admin.users.blockWarning')
                : t('admin.users.unblockWarning')}
            </p>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 rounded-lg bg-gray-300 text-gray-800 hover:bg-gray-400"
                onClick={() => setModal({ open: false, userId: null, action: null })}
              >
                {t('admin.users.cancel')}
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${modal.action === 'block' ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                onClick={confirmAction}
              >
                {t('admin.users.confirm')}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Toast */}
      {toast.show && (
        <div className={`fixed top-8 right-8 z-50 px-6 py-3 rounded-lg shadow-lg font-semibold transition-all ${toast.type === 'block' ? 'bg-red-600 text-white' : 'bg-blue-600 text-white'}`}>
          {toast.message}
        </div>
      )}
    </div>
  );
} 