import React from 'react'
// import ServicesImgs from '../components/Services/ServicesImgs'
// import Service from '../components/Services/Services'

export default function Services() {
  return (
    <div className='flex flex-wrap mx-auto max-w-screen-lg p-8'>
      <div className='w-full p-4'>
        <div className='h-full rounded-lg overflow-hidden shadow-md bg-black text-white'>
          <h1 className='text-2xl font-bold p-4'>Concrete</h1>
          <p className='p-4 text-[#5D9CF3]'>
            New garage concrete pad, sidewalk and driveways.
          </p> 
        </div>
      </div>

      <div className='w-full p-4'>
        <div className='h-full rounded-lg overflow-hidden shadow-md bg-black text-white'>
          <h1 className='text-2xl font-bold p-4'>Siding</h1>
          <p className='p-4 text-[#5D9CF3]'>
            We can replace home and garage siding.
          </p>
        </div>
      </div>

      <div className='w-full p-4'>
        <div className='h-full rounded-lg overflow-hidden shadow-md bg-black text-white'>
          <h1 className='text-2xl font-bold p-4'>Garage Door and Motor Replacement</h1>
          <p className='p-4 text-[#5D9CF3]'>
            Replace an existing garage door and motor with a new one to improve security, energy efficiency and convenience.
          </p>
        </div>
      </div>

      <div className='w-full p-4'>
        <div className='h-full rounded-lg overflow-hidden shadow-md bg-black text-white'>
          <h1 className='text-2xl font-bold p-4'>Garage Door Repair</h1>
          <p className='p-4 text-[#5D9CF3]'>
            We repair residential and commercial doors and motors.
          </p>
        </div>
      </div>
    </div>
  );
}
