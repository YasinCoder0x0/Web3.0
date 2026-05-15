import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/logo.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='w-full flex justify-between items-center py-4 px-8'>
      <div className='md:flex-[0.5] flex-initial justify-center items-center'>
        <img src={logo} alt='logo' className='w-18 md:w-24 cursor-pointer' />
      </div>
      <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
        <li className='mx-4 cursor-pointer'>Market</li>
        <li className='mx-4 cursor-pointer'>Exchange</li>
        <li className='mx-4 cursor-pointer'>Tutorials</li>
        <li className='mx-4 cursor-pointer'>Wallets</li>
        <li className='bg-pink-600 py-2 px-7 mx-4 font-semibold rounded-full cursor-pointer hover:bg-pink-700'>Login</li>
      </ul>
      <div className='flex relative md:hidden'>
        {toggleMenu 
          ? (
          <AiOutlineClose fontSize={28} className='text-white cursor-pointer' onClick={() => setToggleMenu(false)} />
        ) : (
          <HiMenuAlt4 fontSize={28} className='text-white cursor-pointer' onClick={() => setToggleMenu(true)} />
        ) }
        {toggleMenu && (
          <ul className='z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
            <li className='text-xl w-full my-14'><AiOutlineClose fontSize={28} className='cursor-pointer absolute right-6 top-10' onClick={() => setToggleMenu(false)} />{["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
              <li key={index} className='mx-4 cursor-pointer my-2 text-lg'>{item}</li>
            ))}</li>
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar