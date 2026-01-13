import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaUsers, FaBriefcase, FaTrophy, FaUserShield, FaSignOutAlt, FaBell, FaCog } from "react-icons/fa";
import { useTheme } from "../../ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTranslation } from "react-i18next";

export default function AdminLayout() {
    const { isDark } = useTheme();
    const navigate = useNavigate();
    const { language, setLanguage, isRTL } = useLanguage();
    const { t } = useTranslation();

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className={`fixed top-0 ${isRTL ? 'right-0' : 'left-0'} h-screen w-64 shadow-lg p-6 flex flex-col justify-between transition-colors ${
                isDark ? "bg-[#1B2431] text-white" : "bg-white text-black"
            }`}>
                <div>
                    <h1 className="text-3xl font-bold">
                        {t('admin.login.title')}<span className="text-blue-600">.</span>
                    </h1>
                    <p className={`mt-1 text-sm ${isDark ? "text-gray-300" : "text-gray-400"}`}>{t('admin.login.subtitle')}</p>
                    <nav className="mt-6 flex flex-col space-y-2">
                        <NavLink to="dashboard" className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl transition ${isActive ? "bg-blue-100 text-blue-600 font-semibold" : isDark ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"}`}> 
                            <FaHome /> <span>{t('admin.dashboard.title')}</span> 
                        </NavLink>
                        <NavLink to="users" className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl transition ${isActive ? "bg-blue-100 text-blue-600 font-semibold" : isDark ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"}`}> 
                            <FaUsers /> <span>{t('admin.users.title')}</span> 
                        </NavLink>
                        <NavLink to="business" className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl transition ${isActive ? "bg-blue-100 text-blue-600 font-semibold" : isDark ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"}`}> 
                            <FaBriefcase /> <span>{t('admin.business.registeredBusinesses')}</span> 
                        </NavLink>
                        <NavLink to="leaderboard" className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl transition ${isActive ? "bg-blue-100 text-blue-600 font-semibold" : isDark ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"}`}> 
                            <FaTrophy /> <span>{t('admin.leaderboard.title')}</span> 
                        </NavLink>
                        <NavLink to="manage-roles" className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl transition ${isActive ? "bg-blue-100 text-blue-600 font-semibold" : isDark ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"}`}> 
                            <FaUserShield /> <span>{t('admin.roles.title')}</span> 
                        </NavLink>
                    </nav>
                </div>
                <button
                    type="button"
                    onClick={() => navigate('/')}
                    className={`flex items-center gap-3 p-3 rounded-xl transition w-full text-left ${isDark ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"}`}
                >
                    <FaSignOutAlt /> <span>{t('common.logout')}</span>
                </button>
            </div>
            {/* Main Content Area */}
            <div className={`flex-1 min-h-screen w-full ${isRTL ? 'mr-64' : 'ml-64'} transition-colors ${isDark ? "bg-[#181F2A] text-white" : "bg-white text-black"} overflow-x-hidden`}>
                {/* Topbar */}
                <div className="flex items-center justify-between px-10 py-6">
                    <div className="flex-1 flex justify-center">
                        <input 
                            type="text" 
                            placeholder={t('common.search')} 
                            className="w-[350px] px-5 py-2 rounded-lg bg-[#22304A] text-gray-200 placeholder-gray-400 focus:outline-none border-none" 
                            dir={isRTL ? 'rtl' : 'ltr'}
                        />
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
                            <select 
                                className="bg-transparent text-gray-200 pr-6 appearance-none outline-none border-none cursor-pointer"
                                value={language}
                                onChange={handleLanguageChange}
                            >
                                <option value="en">English</option>
                                <option value="ar">العربية</option>
                            </select>
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs">▼</span>
                        </div>
                        <div className="flex items-center gap-2 bg-[#22304A] px-3 py-1 rounded-lg">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="profile" className="w-8 h-8 rounded-full" />
                            <div className="flex flex-col">
                                <span className="text-white text-sm font-semibold">Ali</span>
                                <span className="text-gray-400 text-xs">{t('admin.roles.title')}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    );
}
