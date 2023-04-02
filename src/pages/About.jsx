import React from 'react'
import AboutUs from '../components/About/AboutUs.jsx'
import Reviews from '../components/About/Reviews.jsx'

export default function About() {
  return (
    <div className='flex flex-wrap mx-auto max-w-screen-lg'>
      <div className='w-full flex flex-col md:flex-row md:items-stretch md:justify-between mt-4'>
        <AboutUs />
        <Reviews />
      </div>
    </div>
  );
}
