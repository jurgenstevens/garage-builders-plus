import React from 'react'
import AboutUs from '../components/About/AboutUs.jsx'
import Reviews from '../components/About/Reviews.jsx'

export default function About() {
  return (
    <div className='flex flex-wrap mx-auto max-w-screen-lg'>
      <div className='qfont-bold flex gap-4 mt-4 justify-center'>
        {/* <div className="text-[#5D9CF2] qfont-bold flex gap-4 mt-4 justify-center"></div> */}
          <AboutUs />
          <Reviews />
          
      </div>
    </div>
  )
}
