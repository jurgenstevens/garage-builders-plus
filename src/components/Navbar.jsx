import React from 'react'

export default function Navbar() {
    // <img src="../../public/GBP-Logo.jpeg" />
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='text-3xl font-bold text-[#5D9CF3]'>Garage Builders Plus</h1>
        <ul className='flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About Us</li>
            <li className='p-4'>Services</li>
            <li className='p-4'>Gallery</li>
            <li className='p-4'>Quote</li>
            <li className='p-4'>Contact</li>
        </ul>
    </div>
  )
}
