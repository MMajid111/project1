import React from 'react'
import { TiTick } from "react-icons/ti";

const BusinessCard = ({ title,description }) => {
  return (
    <div className='border rounded-[30px] p-5'>
        <div className='flex'>
            <TiTick />
            <h3 className='font-bold text-1xl'>{title || ""}</h3>
        </div>
        <p className='mt-5 text-[#8C8C8C]'>
            {description || ""}
        </p>
    </div>
  )
}

export default BusinessCard