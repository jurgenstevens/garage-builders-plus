import React from 'react'
import AboutUs from '../components/About/AboutUs.jsx'
import Reviews from '../components/About/Reviews.jsx'

export default function About() {
  return (
    <div className='flex'>
        <AboutUs />
        <Reviews />
    </div>
  )
}
