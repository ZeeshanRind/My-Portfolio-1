import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 top-0 fixed w-full lg:px-[128px] md:px-[30px] sm:px-[30px] xs:px-[20px] bg-slate-50'>
      <h1 className='w-full md:text-3xl xs:text-xl font-bold'>Portfolio.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 hover:text-[#9B30FF] cursor-pointer'><a href='#home'>Home</a></li>
        <li className='p-4 hover:text-[#9B30FF] cursor-pointer'><a href='#about'>About</a></li>
        <li className='p-4 hover:text-[#9B30FF] cursor-pointer'><a href='#services'>Services</a></li>
        <li className='p-4 hover:text-[#9B30FF] cursor-pointer'><a href='#contact'>Contact</a></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Portfolio.</h1>
          <li className='p-4 border-b border-gray-600 text-white'>Home</li>
          <li className='p-4 border-b border-gray-600 text-white'>About</li>
          <li className='p-4 border-b border-gray-600 text-white'>Contact</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;