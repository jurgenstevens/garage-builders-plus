import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <header className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <div className='flex'>
          <img 
            src="../../public/GBP-Logo.jpeg"
            style={{ width: "200px"}}
          />
          <div>
            <h1 className='text-3xl font-bold text-[#5D9CF3]'>Garage</h1>
            <h1 className='text-3xl font-bold text-[#969696]'>Builders </h1>
            <h1 className='text-3xl font-bold text-[#5D9CF3]'>Plus</h1>
          </div>
        </div>
        <ul className='hidden md:flex'>
            <li className='p-4'><Link to="/">Home</Link></li>
            <li className='p-4'><Link to="/about">About Us</Link></li>
            <li className='p-4'><Link to="/services">Services</Link></li>
            <li className='p-4'><Link to="/gallery">Gallery</Link></li>
            <li className='p-4'><Link to="/quote">Quote</Link></li>
            <li className='p-4'><Link to="/contact">Contact</Link></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] m-4 ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <ul className='uppercase p-4' >
            <li className='p-4 border-b border-gray-600 '><Link>Home</Link></li>
            <li className='p-4 border-b border-gray-600 '><Link>About Us</Link></li>
            <li className='p-4 border-b border-gray-600 '><Link>Services</Link></li>
            <li className='p-4 border-b border-gray-600 '><Link>Gallery</Link></li>
            <li className='p-4 border-b border-gray-600 '><Link>Quote</Link></li>
            <li className='p-4'><Link>Contact</Link></li>
          </ul>
        </div>
    </header>
  )
}
