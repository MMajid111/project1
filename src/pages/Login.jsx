import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { isDark, toggleDarkMode } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    setError("");
    if (!formData.email || !formData.password) {
      setError("Please enter email and password");
      return;
    }

    try {
      setLoading(true);
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      const res = await fetch(`${apiUrl}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Login failed');
      }

      localStorage.setItem('accessToken', data.accessToken);
      navigate('/'); // Redirect to dashboard
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
      className={`min-h-screen transition-colors ${isDark ? "bg-[#1B2431]" : "bg-white"}`}
    >
      {/* HEADER */}
      <header className="flex justify-between items-center px-10 py-5">
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
            className="border border-gray-300 px-3 py-1 rounded-md 
                       hover:bg-gray-100 dark:hover:bg-gray-400 hover:cursor-pointer"
          >
            {isDark ? SunIcon : MoonIcon}
          </button>

          {/* LANGUAGE SELECT */}
          <div className="relative">
            <select
              className="
                bg-transparent
                appearance-none
                outline-none
                border-none
                p-2
                pr-8
                cursor-pointer
              "
              value={language}
              onChange={toggleLanguage}
            >
              <option value="English">English</option>
              <option value="Arabic">Arabic</option>
            </select>
            <span
              className="
                pointer-events-none 
                absolute 
                right-2 
                top-1/2 
                -translate-y-1/2 
                text-sm
              "
            >
              ▼
            </span>
          </div>

          <button
            onClick={() => navigate('/pages/signup')}
            className="bg-[#4461F2] rounded-xl w-[169px] h-[48px] text-white"
          >
            Register
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
            <h1 className="font-bold text-4xl">
              {language === "Arabic" ? "تسجيل الدخول إلى" : "Sign in to"} <br />
              <span className="text-[#4461F2]">
                {language === "Arabic" ? "المراجع" : "Reviewer"}
              </span>
            </h1>
            <p className="mt-4">
              <span className="text-[#4461F2]">
                {language === "Arabic" ? "مرحباً بعودتك!" : "Welcome back!"}
              </span>{" "}
              {language === "Arabic"
                ? "هل أنت مستعد للغوص؟ سجل الدخول للمتابعة في رحلتك."
                : "Ready to dive in? Sign in to continue your journey."}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE (Sign In Form) */}
        <div
          className={`
            w-1/2 
            flex 
            flex-col 
            mt-[8rem] 
            ${language === "Arabic" ? "mr-[3rem]" : "ml-[3rem]"} 
            gap-10
          `}
        >
          {/* Sign-in fields */}
          <div className="flex flex-col gap-2 w-[60%]">
            {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={
                language === "Arabic"
                  ? "أدخل بريدك الإلكتروني"
                  : "Enter Your Email"
              }
              className="border border-gray-300 rounded-lg p-3 focus:outline-[#4461F2]"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder={
                language === "Arabic"
                  ? "أدخل كلمة المرور الخاصة بك"
                  : "Enter Your Password"
              }
              className="border border-gray-300 rounded-lg p-3 focus:outline-[#4461F2]"
            />
            <div className="text-end">
              <a href="#" className="text-gray-400">
                {language === "Arabic" ? "إستعادة كلمة المرور" : "Recover password"}
              </a>
            </div>
            <button
              onClick={handleLogin}
              disabled={loading}
              className="bg-[#4461F2] text-white rounded-xl py-3 mt-2 font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50"
            >
              {loading ? "Logging in..." : (language === "Arabic" ? "تسجيل الدخول" : "Sign In")}
            </button>
          </div>

          {/* Social Login */}
          <div className="mt-2 flex flex-col items-center w-full max-w-sm">
            <p className="text-gray-500">
              {language === "Arabic" ? "أو تابع باستخدام" : "Or continue with"}
            </p>
            <div className="flex gap-4 mt-4">
              <button className="border border-gray-200 px-6 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                Google
              </button>
              <button className="border border-gray-200 px-6 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2">
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

export default Login;
