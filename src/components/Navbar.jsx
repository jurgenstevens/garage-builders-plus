import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export default function Navbar() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
    // <img src="../../public/GBP-Logo.jpeg" />
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='text-3xl font-bold text-[#5D9CF3]'>Garage Builders Plus</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About Us</li>
            <li className='p-4'>Services</li>
            <li className='p-4'>Gallery</li>
            <li className='p-4'>Quote</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] m-4 ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <ul className='uppercase p-4' >
            <li className='p-4 border-b border-gray-600 '>Home</li>
            <li className='p-4 border-b border-gray-600 '>About Us</li>
            <li className='p-4 border-b border-gray-600 '>Services</li>
            <li className='p-4 border-b border-gray-600 '>Gallery</li>
            <li className='p-4 border-b border-gray-600 '>Quote</li>
            <li className='p-4'>Contact</li>
          </ul>
        </div>
    </div>
  )
}
