import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-20 top-0 fixed w-full lg:px-[128px] md:px-[30px] xs:px-[10px] bg-slate-100 z-10'>
      <h1 className='w-full lg:text-3xl md:text-2xl xs:text-xl font-bold'>Portfolio.</h1>
      <ul className='hidden md:flex font-medium'>
        <li className='p-4 hover:text-[#9B30FF] cursor-pointer'><a href='#home'>Home</a></li>
        <li className='p-4 hover:text-[#9B30FF] cursor-pointer'><a href='#about'>About</a></li>
        <li className='p-4 hover:text-[#9B30FF] cursor-pointer'><a href='#services'>Services</a></li>
        <li className='p-4 hover:text-[#9B30FF] cursor-pointer'><a href='#contact'>Contact</a></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-slate-100 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold  m-4'>Portfolio.</h1>
        <li className='p-4 hover:text-[#9B30FF] cursor-pointer'><a href='#home'>Home</a></li>
        <li className='p-4 hover:text-[#9B30FF] cursor-pointer'><a href='#about'>About</a></li>
        <li className='p-4 hover:text-[#9B30FF] cursor-pointer'><a href='#services'>Services</a></li>
        <li className='p-4 hover:text-[#9B30FF] cursor-pointer'><a href='#contact'>Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;