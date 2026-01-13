import { useState } from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import illu from '../../assets/illu.png';

export default function ModeratorLogin() {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [language, setLanguage] = useState("English");
    const [langOpen, setLangOpen] = useState(false);

    return (
        <div className="min-h-screen w-full flex flex-col bg-[#181F2A] text-white">
            {/* Topbar */}
            <div className="flex items-center justify-between px-10 pt-8">
                <button className="flex items-center text-gray-400 hover:text-white text-base">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    Back
                </button>
                <div className="relative">
                    <button onClick={() => setLangOpen(!langOpen)} className="flex items-center text-gray-400 hover:text-white">
                        {language}
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    {langOpen && (
                        <div className="absolute right-0 mt-2 w-24 bg-[#22304A] border border-gray-700 rounded-lg shadow-lg z-10">
                            <ul className="text-gray-200">
                                <li className="px-4 py-2 hover:bg-[#181F2A] cursor-pointer" onClick={() => { setLanguage("English"); setLangOpen(false); }}>English</li>
                                <li className="px-4 py-2 hover:bg-[#181F2A] cursor-pointer" onClick={() => { setLanguage("Arabic"); setLangOpen(false); }}>Arabic</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            {/* Main Content */}
            <div className="flex flex-1 items-center justify-center">
                {/* Left Side */}
                <div className="flex-1 flex flex-col justify-center items-start pl-24 relative overflow-hidden">
                    {/* Radial Gradient Background */}
                    <div className="absolute left-0 top-0 w-[700px] h-[700px] z-0" style={{
                        background: 'radial-gradient(circle at 40% 60%, #2563eb 0%, #181F2A 70%)',
                        opacity: 0.7,
                        pointerEvents: 'none',
                    }} />
                    {/* Logo Square */}
                    <div className="w-24 h-24 rounded-xl bg-blue-600 mb-8 z-10"></div>
                    <div className="mb-2 z-10">
                        <span className="text-5xl font-bold text-white">Reviewer</span>
                    </div>
                    <div className="mb-2 z-10">
                        <span className="text-4xl font-bold text-blue-500">Admin Dashboard</span>
                    </div>
                    <div className="mb-6 z-10">
                        <span className="text-lg text-gray-300">"Enter Your Account Information to Sign"</span>
                    </div>
                    {/* Illustration - pixel perfect */}
                    <div className="flex justify-center items-center w-full mt-12 z-10">
                        <img src={illu} alt="illustration" style={{ width: 420, height: 245, display: 'block' }} />
                    </div>
                </div>
                {/* Right Side - Form */}
                <div className="flex-1 flex flex-col justify-center items-center">
                    <div className="w-full max-w-sm bg-transparent p-8 rounded-xl">
                        {/* Role Selection */}
                        <div className="relative mb-4">
                            <select className="w-full p-3 bg-[#22304A] rounded-lg text-gray-200 appearance-none focus:outline-none">
                                <option>Moderator</option>
                            </select>
                            <IoIosArrowDown className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400" />
                        </div>
                        {/* Phone Number Input */}
                        <div className="relative mb-4">
                            <input
                                type="text"
                                placeholder="Enter Your Number"
                                className="w-full p-3 bg-[#22304A] rounded-lg pr-10 text-gray-200 focus:outline-none"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            {phone && (
                                <FaTimes
                                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                                    onClick={() => setPhone("")}
                                />
                            )}
                        </div>
                        {/* Password Input */}
                        <div className="relative mb-2">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="w-full p-3 bg-[#22304A] rounded-lg pr-10 text-gray-200 focus:outline-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>
                        {/* Recover Password */}
                        <div className="text-right text-gray-400 text-sm mb-4 cursor-pointer hover:underline">
                            Recover Password ?
                        </div>
                        {/* Sign In Button */}
                        <button className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold text-base">
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
