"use client"
import gsap from 'gsap';

const Navbar = () => {

  return (
    <div className='w-full flex justify-between items-center fixed top-0 left-0 overflow-hidden px-12 py-8 text-white'>
      <div>
        <p className='text-5xl font-bold select-none'>MVIR.</p>
      </div>
      <div className='menu-icon text-2xl hover:cursor-pointer select-none menu-icon link'>
        Menu
      </div>
    </div>
  );
};

export default Navbar;
