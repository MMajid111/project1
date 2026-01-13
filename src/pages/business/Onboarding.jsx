import React from 'react'
import onboardingbusiness from "../../assets/onboardingbusiness.png";
import { FaArrowRight } from "react-icons/fa6";
import { useTheme } from '../../ThemeContext';

const Onboarding = () => {
    const { isDark } = useTheme();
    return (
        <div className='flex justify-center items-center flex-col w-full'>
            <img src={onboardingbusiness} alt="on boarding " className='w-[918.88px] h-[527px] object-contain mx-auto' />
            <div className='flex justify-center items-center flex-col gap-3'>
                <h1 className='font-bold text-4xl'>More than 500+ Businesses are <br /> registered on reviewer. </h1>
                <p>"Join us today and unlock endless possibilities"</p>
                <div className='relative'>
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Register
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Onboarding