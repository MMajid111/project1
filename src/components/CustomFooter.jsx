import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";


const CustomFooter = () => {
  return (
    <div className='flex justify-center flex-col items-center gap-5 w-full h-[15rem]'>
        <div>
            <ul className='flex justify-between items-center gap-5 text-gray-500 hover:cursor-pointer'>
                <li>Home</li>
                <li>Category</li>
                <li>Reviews</li>
                <li>About us</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='flex justify-center items-center gap-5'>
            <FaFacebookF />
            <FaTwitter />
            <CiYoutube />
        </div>

        <div>
            <p className='text-gray-500'>© Copyright 2024 - ABC</p>
        </div>
    </div>
  )
}

export default CustomFooter