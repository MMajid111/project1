import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const { isDark, toggleDarkMode } = useTheme();
    const navigate = useNavigate();

    // 2) Track language selection
    const [language, setLanguage] = useState("English");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Form State
    const [formData, setFormData] = useState({
        email: "",
        companyName: "",
        password: "",
        confirmPassword: ""
    });

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignup = async () => {
        setError("");

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (!formData.email || !formData.password || !formData.companyName) {
            setError("All fields are required");
            return;
        }

        try {
            setLoading(true);
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
            const res = await fetch(`${apiUrl}/api/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                    companyName: formData.companyName
                })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Signup failed');
            }

            // Success - save token and redirect
            localStorage.setItem('accessToken', data.accessToken);
            navigate('/'); // Go to dashboard/home
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Handle language change
    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    // Icons
    const MoonIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0112.002 3.28 
          c-.345 0-.68.03-1.007.08a.75.75 0 00-.507 
          1.211c.563.633.864 1.46.864 2.33a3.497 
          3.497 0 01-3.497 3.497c-.87 0-1.697-.3-2.33-.864
          a.75.75 0 00-1.211.507c-.05.328-.08.662-.08 
          1.007a9.717 9.717 0 0011.722 9.75.75.75 
          0 00.617-.734 3.504 3.504 0 013.381-3.381.75.75 
          0 00.734-.618v-.003z"
            />
        </svg>
    );

    const SunIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1.5M12 
          19.5V21m9-9h-1.5M4.5 12H3m14.95 
          6.364l-1.06-1.06M7.11 8.515l-1.06-1.06m12.02 
          0l-1.06 1.06M8.172 17.303l-1.06 1.06M15 
          12a3 3 0 11-6 0 3 3 0 016 0z"
            />
        </svg>
    );

    return (
        <div
            dir={language === "Arabic" ? "rtl" : "ltr"}
            className={`min-h-screen transition-colors ${isDark ? "bg-[#1B2431] text-white" : "bg-white text-black"}`}
        >
            {/* HEADER */}
            <header className="flex justify-between items-center px-10 py-3">
                <div className="w-20 h-20">
                    <img
                        src={rating}
                        alt="icon"
                        className="w-full h-full object-contain"
                    />
                </div>

                <div className="flex items-center gap-4">
                    {/* THEME TOGGLE */}
                    <button
                        onClick={toggleDarkMode}
                        className={`border px-3 py-1 rounded-md transition-colors ${isDark
                                ? "border-gray-600 hover:bg-gray-700"
                                : "border-gray-300 hover:bg-gray-100"
                            }`}
                    >
                        {isDark ? SunIcon : MoonIcon}
                    </button>

                    {/* LANGUAGE SELECT */}
                    <div className="relative">
                        <select
                            className={`
                                appearance-none
                                outline-none
                                border-none
                                p-2
                                pr-8
                                cursor-pointer
                                transition-colors
                                ${isDark ? "text-white" : "text-black"}
                            `}
                            value={language}
                            onChange={handleLanguageChange}
                        >
                            <option value="English">English</option>
                            <option value="Arabic">Arabic</option>
                        </select>
                        <span className={`
                            pointer-events-none 
                            absolute 
                            right-2 
                            top-1/2 
                            -translate-y-1/2 
                            text-sm
                            ${isDark ? "text-gray-400" : "text-gray-500"}
                        `}>
                            ▼
                        </span>
                    </div>

                    <button
                        onClick={handleSignup}
                        disabled={loading}
                        className="bg-[#4461F2] rounded-xl w-[169px] h-[48px] text-white hover:bg-blue-600 transition-colors disabled:opacity-50"
                    >
                        {loading ? "..." : (language === "Arabic" ? "تسجيل" : "Register")}
                    </button>
                </div>
            </header>

            {/* BODY CONTENT */}
            <div className="flex justify-center items-center gap-10 p-2">
                {/* LEFT SIDE */}
                <div
                    className="
                        w-1/2
                        relative
                        bg-no-repeat 
                        bg-contain
                        bg-center
                    "
                    style={{ backgroundImage: `url(${Background})` }}
                >
                    {/* Conditional margin for the image */}
                    <div
                        className={`
                            ${language === "Arabic" ? "mr-[10rem]" : "ml-[10rem]"} 
                            mt-[4rem]
                        `}
                    >
                        <img
                            src={people}
                            alt="people"
                            className="max-w-none h-auto object-contain"
                        />
                    </div>

                    {/* Conditional margin for the text */}
                    <div
                        className={`
                            ${language === "Arabic" ? "mr-[24rem]" : "ml-[24rem]"} 
                            mt-[4rem]
                        `}
                    >
                        <h1 className={`font-bold text-4xl ${isDark ? "text-white" : "text-black"}`}>
                            {language === "Arabic" ? "سجل في" : "Register in to"}{" "}
                            <br />
                            <span className="text-[#4461F2]">
                                {language === "Arabic" ? "المراجع" : "Reviewer"}
                            </span>
                        </h1>
                        <p className={`mt-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                            {language === "Arabic"
                                ? "إذا لم يكن لديك حساب، يمكنك التسجيل هنا."
                                : "If you don't have an account, you can register here."}
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDE (Registration Form) */}
                <div
                    className={`
                        w-1/2 
                        flex 
                        flex-col 
                        mt-[4rem] 
                        ${language === "Arabic" ? "mr-[3rem]" : "ml-[3rem]"} 
                        gap-10
                    `}
                >
                    {/* Registration fields */}
                    <div className="flex flex-col gap-2 w-[60%]">
                        {error && <div className="text-red-500 text-sm mb-2">{error}</div>}

                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder={
                                language === "Arabic"
                                    ? "اسم الشركة"
                                    : "Company Name"
                            }
                            className={`border rounded-lg p-3 focus:outline-[#4461F2] transition-colors ${isDark
                                    ? "bg-[#323D4E] border-gray-600 text-white placeholder-gray-400"
                                    : "bg-white border-gray-300 text-black placeholder-gray-500"
                                }`}
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={
                                language === "Arabic"
                                    ? "البريد الإلكتروني"
                                    : "Email Address"
                            }
                            className={`border rounded-lg p-3 focus:outline-[#4461F2] transition-colors ${isDark
                                    ? "bg-[#323D4E] border-gray-600 text-white placeholder-gray-400"
                                    : "bg-white border-gray-300 text-black placeholder-gray-500"
                                }`}
                        />

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder={
                                language === "Arabic"
                                    ? "أدخل كلمة المرور"
                                    : "Enter Password"
                            }
                            className={`border rounded-lg p-3 focus:outline-[#4461F2] transition-colors ${isDark
                                    ? "bg-[#323D4E] border-gray-600 text-white placeholder-gray-400"
                                    : "bg-white border-gray-300 text-black placeholder-gray-500"
                                }`}
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder={
                                language === "Arabic"
                                    ? "أكد كلمة المرور"
                                    : "Confirm Password"
                            }
                            className={`border rounded-lg p-3 focus:outline-[#4461F2] transition-colors ${isDark
                                    ? "bg-[#323D4E] border-gray-600 text-white placeholder-gray-400"
                                    : "bg-white border-gray-300 text-black placeholder-gray-500"
                                }`}
                        />

                        <button
                            onClick={handleSignup}
                            disabled={loading}
                            className="bg-[#4461F2] text-white rounded-xl py-3 mt-2 font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50"
                        >
                            {loading ? "Processing..." : (language === "Arabic" ? "تسجيل" : "Register")}
                        </button>
                    </div>

                    {/* Social Login */}
                    <div className="mt-2 flex flex-col items-center w-full max-w-sm">
                        <p className={`${isDark ? "text-gray-400" : "text-gray-500"}`}>
                            {language === "Arabic"
                                ? "أو تابع باستخدام نفس حساب التواصل"
                                : "Or continue with the same social"}
                        </p>
                        <div className="flex gap-4 mt-4">
                            <button className={`border px-6 py-2 rounded-lg transition-colors flex items-center gap-2 ${isDark
                                    ? "border-gray-600 hover:bg-gray-700 text-white"
                                    : "border-gray-200 hover:bg-gray-50 text-black"
                                }`}>
                                <img
                                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                                    alt="Google"
                                    className="w-5 h-5"
                                />
                                Google
                            </button>
                            <button className={`border px-6 py-2 rounded-lg transition-colors flex items-center gap-2 ${isDark
                                    ? "border-gray-600 hover:bg-gray-700 text-white"
                                    : "border-gray-200 hover:bg-gray-50 text-black"
                                }`}>
                                <img
                                    src={facebook}
                                    alt="Facebook"
                                    className="w-5 h-5"
                                />
                                Facebook
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
