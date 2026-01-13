import { Outlet, NavLink } from "react-router-dom";
import { FaHome, FaBriefcase, FaSignOutAlt, FaBell, FaCog } from "react-icons/fa";
import { useTheme } from "../../ThemeContext";

export default function ModeratorLayout() {
    const { isDark } = useTheme();

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-screen w-64 shadow-lg p-6 flex flex-col justify-between transition-colors ${
                isDark ? "bg-[#1B2431] text-white" : "bg-white text-black"
            }`}>
                <div>
                    <h1 className="text-3xl font-bold">
                        Reviewer<span className="text-blue-600">.</span>
                    </h1>
                    <p className={`mt-1 text-sm ${isDark ? "text-gray-300" : "text-gray-400"}`}>Moderator Dashboard</p>

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
                            <span>Dashboard</span>
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
                            <span>Business</span>
                        </NavLink>
                    </nav>
                </div>

                {/* Logout Button */}
                <NavLink
                    to="logout"
                    className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl transition ${
                        isActive 
                            ? "bg-blue-100 text-blue-600 font-semibold" 
                            : isDark 
                                ? "text-gray-300 hover:bg-gray-700" 
                                : "text-gray-600 hover:bg-gray-100"
                    }`}
                >
                    <FaSignOutAlt />
                    <span>Logout</span>
                </NavLink>
            </div>

            {/* Main Content Area */}
            <div className={`flex-1 min-h-screen w-full ml-64 transition-colors ${isDark ? "bg-[#181F2A] text-white" : "bg-white text-black"} overflow-x-hidden`}>
                {/* Topbar */}
                <div className="flex items-center justify-between px-10 py-6">
                    <div className="flex-1 flex justify-center">
                        <input type="text" placeholder="Search here" className="w-[350px] px-5 py-2 rounded-lg bg-[#22304A] text-gray-200 placeholder-gray-400 focus:outline-none border-none" />
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
                                <span className="text-gray-400 text-xs">Moderator</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    );
}
