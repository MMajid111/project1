import React from 'react'

const CustomCard = ({ icon, text, isBlack }) => {
  return (
    <div className={`${ isBlack ? "bg-[#323D4E]" : "bg-[#FFFFFF]" } rounded-[16px] w-[177px] h-[177px] flex flex-col items-center justify-center gap-2`}>
        <img src={icon} alt="bg image"  className='w-20 h-20 object-contain'/>
        <p className={`${isBlack ? "text-white" : "text-black"}`}>{text || "Text"}</p>
    </div>
  )
}

export default CustomCard