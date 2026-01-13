import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaBriefcase, FaSignOutAlt, FaUsers, FaBuilding, FaTrophy, FaUserShield, FaStar } from "react-icons/fa";
import { useTheme } from "../../ThemeContext";
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher';

export default function BusinessLayout() {
    const { isDark } = useTheme();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { isRTL } = useLanguage();

    const handleLogout = (e) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <div className={`flex ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            {/* Sidebar */}
            <div className={`fixed top-0 ${isRTL ? 'right-0' : 'left-0'} h-screen w-64 shadow-lg p-6 flex flex-col justify-between transition-colors ${
                isDark ? "bg-[#1B2431] text-white" : "bg-white text-black"
            }`}>
                <div>
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-bold">
                            Reviewer<span className="text-blue-600">.</span>
                        </h1>
                    </div>
                    <p className={`mt-1 text-sm ${isDark ? "text-gray-300" : "text-gray-400"}`}>{t('business.dashboard')}</p>

                    {/* Navigation Links */}
                    <nav className="mt-6 flex flex-col space-y-2">
                        <NavLink
                            to="dashboard"
                            className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl transition ${
                                isActive 
                                    ? "bg-blue-100 text-blue-600 font-semibold" 
                                    : isDark 
                                        ? "text-gray-300 hover:bg-gray-700" 
                                        : "text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                            <FaHome />
                            <span>{t('business.dashboard')}</span>
                        </NavLink>

                        <NavLink
                            to="business"
                            className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl transition ${
                                isActive 
                                    ? "bg-blue-100 text-blue-600 font-semibold" 
                                    : isDark 
                                        ? "text-gray-300 hover:bg-gray-700" 
                                        : "text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                            <FaBriefcase />
                            <span>{t('business.businessProfile')}</span>
                        </NavLink>

                        <NavLink
                            to="reviews"
                            className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl transition ${
                                isActive 
                                    ? "bg-blue-100 text-blue-600 font-semibold" 
                                    : isDark 
                                        ? "text-gray-300 hover:bg-gray-700" 
                                        : "text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                            <FaStar />
                            <span>{t('business.reviews')}</span>
                        </NavLink>

                        <NavLink
                            to="leaderboard"
                            className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl transition ${
                                isActive 
                                    ? "bg-blue-100 text-blue-600 font-semibold" 
                                    : isDark 
                                        ? "text-gray-300 hover:bg-gray-700" 
                                        : "text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                            <FaTrophy />
                            <span>{t('business.leaderboard')}</span>
                        </NavLink>
                    </nav>
                </div>

                {/* Logout Button */}
                <a
                    href="/"
                    onClick={handleLogout}
                    className="flex items-center gap-3 p-3 rounded-xl transition text-gray-300 hover:bg-gray-700"
                >
                    <FaSignOutAlt />
                    <span>{t('common.logout')}</span>
                </a>
            </div>

            {/* Main Content Area */}
            <div className={`flex-1 p-6 min-h-screen w-full ${isRTL ? 'mr-64' : 'ml-64'} transition-colors ${
                isDark ? "bg-[#1B2431] text-white" : "bg-white text-black"
            }`}>
                <div className="flex justify-end mb-6">
                    <LanguageSwitcher />
                </div>
                <Outlet />
            </div>
        </div>
    );
} 