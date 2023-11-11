"use client"
import gsap from 'gsap';
import { useState } from 'react';

const Navbar = () => {

  const [isMenuOpen , setIsMenuOpen] = useState(false)

  return (
    <div>
      <div className=' w-screen  bg-red-200 fixed top-0 left-0 z-[48]'></div>
    <div className='w-full flex z-[49] justify-between items-center fixed top-0 left-0 overflow-hidden px-12 py-8 text-white'>
      <div>
        <p className='text-5xl font-bold select-none'>MVIR.</p>
      </div>
      <div id='menu-icon' className=' text-2xl select-none menu-icon link'>
        Menu.
      </div>
    </div>
    </div>
  );
};

export default Navbar;
