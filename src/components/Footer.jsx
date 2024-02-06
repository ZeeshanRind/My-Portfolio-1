import React from 'react';
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
   <div className='w-full'>
    <div className="h-[5rem] flex ss:flex-row xs:flex-col items-center justify-between lg:px-[128px] md:px-[30px] xs:px-[10px]">
        <p className='text-gray-500 font-sans '>Copyright © 2024 by Zeeshan | All Rights Reserved.</p>
        <a href='#home' className='p-[0.7rem] rounded-md text-white bg-[#9B30FF]'><FaArrowUp /></a>
        
    </div>
   </div>
  )
}

export default Footer
