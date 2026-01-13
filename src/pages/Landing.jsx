// Landing.js
import React from "react";
import { useTheme } from "../ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import landingbg from "../assets/landingbg.png";
import LandingHeader from "../components/LandingHeader";
import People from "../assets/People.png";
import landingpeople from "../assets/landingpeople.png";
import { FaSackDollar } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import CustomCard from "../components/CustomCard";
import media from "../assets/Media.png";
import testimonials from "../assets/Testimonials.png";
import right from "../assets/right.png";
import Marquee from "react-fast-marquee";
import { LuSend } from "react-icons/lu";
import CustomFooter from "../components/CustomFooter";

const Landing = () => {
    const { isDark, setIsDark } = useTheme();
    const { language } = useLanguage();

    // Conditionally use the background image only if we're NOT in dark mode
    const bgStyle = !isDark
        ? {
            backgroundImage: `url(${landingbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }
        : {}; // No background when isDark is true

    return (
        <div className={`min-h-screen transition-colors ${isDark ? "bg-[#1B2431]" : "bg-white"}`}>
            <div
                className={`
                    relative
                    w-screen
                    min-h-[65rem]
                    overflow-hidden
                    overflow-y-auto
                    ${isDark ? "bg-[#1B2431]" : "bg-white"}
                `}
                style={bgStyle}
            >
                {/* Header with top spacing */}
                <div className="relative z-10 mt-8">
                    <LandingHeader isDark={isDark} setIsDark={setIsDark} />

                    <div className="mt-4 relative">
                        <div className="absolute left-35 top-10 w-[202px] h-[208px]">
                            <img src={People} alt="people image" className="w-full h-full object-contain" />
                        </div>

                        <div className="absolute left-40 top-[25rem] w-40 h-10 flex gap-2">
                            <img src={landingpeople} alt="people image" className="w-10 h-10 object-contain" />
                            <p className={`${isDark ? "text-white" : "text-gray-400"} pt-2`}>2k+ People</p>
                        </div>

                        <div className="absolute left-[32%] top-40 w-[202px] h-[208px]">
                            <div className="flex flex-col items-center p-0 gap-[13.32px] w-[536px] h-[192.32px]">
                                {/* Discover trusted businesses or share your experience */}
                                <h1
                                    className={`w-[536px] h-[157px] font-bold text-[51.83px] leading-[52px] tracking-[-0.03em] flex items-center justify-center text-center bg-gradient-to-r ${isDark ? "from-[#EEEEEE]" : "from-[#000831]"
                                        } to-[#4169E1] bg-clip-text text-transparent`}
                                    style={{ fontFamily: "Space Grotesk" }}
                                >
                                    Discover trusted <br /> businesses or share <br /> your experience
                                </h1>

                                {/* Real Connections, Honest Reviews */}
                                <p
                                    className={`w-[526px] h-[22px] font-normal text-[16px] leading-[22px] flex items-center justify-center text-center ${isDark ? "text-white" : "text-[#505050]"}`}
                                    style={{ fontFamily: "DM Sans" }}
                                >
                                    Real Connections, Honest Reviews
                                </p>
                            </div>

                            <div className="mt-3 flex items-center space-x-4">
                                {/* Input Container */}
                                <div className="relative">
                                    {/* Icon positioned inside the input */}
                                    <CiSearch
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2"
                                        style={{ width: "30px", height: "30px", color: "#737373" }}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Search company or category"
                                        className={`${isDark ? "bg-[#323D4E] text-white" : "bg-[#E9E9E9] text-gray-400"} w-[425px] h-[48px] rounded-[13.32px] pl-12`}
                                    />
                                </div>

                                {/* Search Button */}
                                <button
                                    onClick={() => { }}
                                    className="bg-[#4461F2] rounded-xl w-[230px] h-[45px] text-white pl-5 pr-5"
                                >
                                    Search
                                </button>
                            </div>
                        </div>

                        <div className="absolute right-10 top-[16rem]">
                            <div className={` ${isDark ? "bg-[#323D4E]" : "bg-[#F0F0F0]"}  w-[296.86px] h-[296.86px] rounded-[16px] flex flex-col justify-center items-center`}>
                                <FaSackDollar color="#4169E1" width={40} height={40} style={{ width: "30px", height: "30px", color: "#4169E1", marginBottom: "2rem" }} />
                                <p className={`${isDark ? "text-white" : "text-[#8C8C8C]"}  font-thin text-2xl`}>Registered <br /> businesses</p>
                                <h1 className={`${isDark ? " text-white" : "text-black "} font-bold text-4xl mb-3`}>500+</h1>
                                <p className="flex text-[#14AE5C] ">220% <FaArrowTrendUp style={{ width: "15px", height: "15px", color: "#14AE5C", marginTop: "5px" }} /></p>
                            </div>

                            <div className="relative w-full h-full">
                                <div className={`${isDark ? "bg-[#323D4E]" : "bg-[#F0F0F0]"} absolute left-[-8rem]  top-[-5rem] w-[177px] h-[177px] rounded-[16px] flex flex-col justify-center items-center`}>
                                    <BiSolidCategory color="#4169E1" width={16} height={16} />
                                    <p className={`${isDark ? "text-white" : "text-[#8C8C8C]"}  font-thin text-2xl`}>Categories</p>
                                    <h1 className={`${isDark ? " text-white" : "text-black "} font-bold text-4xl mb-3`}>30+</h1>
                                </div>
                            </div>
                        </div>

                        <div className="absolute left-35 top-[42rem] mb-10">
                            <h1 className={`${isDark ? "text-white" : "text-black"} font-bold text-2xl`}>What are you looking for?</h1>

                            <div className="mt-4">
                                <Marquee pauseOnHover className="flex justify-center items-center">
                                    <div className="mx-3">
                                        <CustomCard
                                            icon="https://images.unsplash.com/photo-1738956952892-7553e0327906?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
                                            isBlack={isDark}
                                            text="Nike"
                                        />
                                    </div>
                                    <div className="mx-3">
                                        <CustomCard
                                            icon="https://images.unsplash.com/photo-1738956952892-7553e0327906?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
                                            isBlack={isDark}
                                            text="Nike"
                                        />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${isDark ? "bg-[#323D4E] text-white" : "bg-[#F2F9FF] text-black"} mx-auto left-[10rem] absolute mt-5 h-[400px] w-[80%] rounded-[20px] flex justify-around items-center`}>
                <div className="flex flex-col gap-2 justify-start items-center">
                    <h1 className="font-bold text-2xl">Empower others with your voice.</h1>
                    <p>Share your genuine experiences on ------- and help <br /> build a trusted community.</p>
                </div>
                <div className="w-[324px] h-[239]">
                    <img src={media} alt="media image" className="w-full h-full object-contain" />
                </div>
            </div>

            <div className={`flex justify-around items-center gap-2 mt-[30rem] ${isDark ? "text-white" : "text-black"}`}>
                <div className="flex flex-col justify-between items-start pl-2 gap-3">
                    <h1 className="font-bold text-2xl">What Customer says about <br />
                        <span className="text-[#4169E1]">Businesses !</span></h1>
                    <p>Share your genuine experiences on <br /> ------- and help build a trusted <br /> community. Share your genuine <br /> experiences on ------- and help build a <br /> trusted community. Share your genuine <br /> experiences on ------- and help build a <br /> trusted community.</p>
                    <button
                        onClick={() => { }}
                        className={`
                            bg-[#4461F2] 
                            rounded-xl 
                            w-[130px] 
                            h-[42px] 
                            text-white
                        `}
                    >
                        Review
                    </button>
                </div>
                <div className="w-[503.95px] h-[473.32px]">
                    <img src={testimonials} alt="testimonials" className="w-full h-full object-contain" />
                </div>
            </div>

            <div className={`bg-[#4169E1] w-[80%] h-[20rem] mt-40 flex justify-between items-center mx-auto rounded-lg relative ${isDark ? "text-white" : "text-black"}`}>
                <div className="pl-10 flex flex-col gap-5">
                    <h1 className="font-bold text-white text-2xl">Looking to grow your business?</h1>
                    <p className="text-white">Strengthen your reputation with real reviews on <br /> -------.</p>

                    <button
                        onClick={() => { }}
                        className="bg-[#FFFFFF] rounded-xl w-[130px] h-[42px] text-black"
                    >
                        Review
                    </button>
                </div>
                <div className="w-[513.37px] h-[25rem] relative">
                    <img src={right}
                        alt="right side image"
                        className="w-full h-full object-contain absolute top-[-40px]" />
                </div>
            </div>

            <div className={`w-full ${isDark ? "bg-[#323D4E]" : "bg-[#F2F9FF]"} mt-5 h-[180px] flex justify-center items-center gap-5`}>
                <p>Newsletter</p>
                {/* Input Container */}
                <div className="relative">
                    {/* Icon positioned inside the input */}
                    <LuSend
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        style={{ width: "25px", height: "25px", color: "#737373" }}
                    />
                    <input
                        type="text"
                        placeholder="Your email"
                        className={`${isDark ? "bg-[#323D4E] text-white border-[#4A5568]" : "bg-white text-gray-400 border-gray-300"} w-[425px] h-[48px] rounded-[13.32px] pl-4 border-2 focus:outline-none focus:border-[#4169E1]`}
                    />
                </div>
            </div>

            <CustomFooter />
        </div>
    );
};

export default Landing;
