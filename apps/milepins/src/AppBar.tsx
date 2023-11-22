import React, { useState } from 'react';

export default function AppBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='flex flex-row justify-between p-2 bg-black m-2 rounded-lg items-center'>
      <img className='h-1/9 ' src="/public/logo.svg" alt="Logo of milespin" />

      <div className='hidden lg:flex lg:flex-row lg:space-x-4'>
        <a href="/pricing" className='text-white'>Pricing</a>
        <a href="/features" className='text-white'>Features</a>
        <a href="/verify" className='text-white'>Verify</a>
        <a href="/signin" className='text-white'>Sign In</a>
        <a href="/signup" className='text-white'>Sign Up</a>
      </div>

      <div className='lg:hidden'>
        <img onClick={toggleMenu} src="/public/hamburger.svg" alt="Hamburger icon" />
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col justify-center items-center z-50">
            <a href="#pricing" className='text-white my-4'>Pricing</a>
            <a href="#features" className='text-white my-4'>Features</a>
            <a href="#verify" className='text-white my-4'>Verify</a>
            <a href="#sign-in" className='text-white my-4'>Sign In</a>
            <a href="#sign-up" className='text-white my-4'>Sign Up</a>
          </div>
        )}
      </div>
    </nav>
  );
}
