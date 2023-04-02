import React from 'react'
import AboutUs from '../components/About/AboutUs.jsx'
import Reviews from '../components/About/Reviews.jsx'

export default function About() {
  return (
    <div className='flex flex-wrap mx-auto max-w-screen-lg'>
      <div className='w-full flex flex-col md:flex-row md:items-center md:justify-between mt-4'>
        <div className='max-w-lg w-full mx-auto md:mx-0 md:mr-4 md:mb-0 mb-4'>
          <AboutUs className='mb-4' />
        </div>
        <div className='max-w-lg w-full mx-auto md:mx-0 md:ml-4'>
          <div className='border-r-2 border-gray-300 md:h-auto h-96'>
            <Reviews className='mt-4' />
          </div>
        </div>
      </div>
    </div>
  );
}
