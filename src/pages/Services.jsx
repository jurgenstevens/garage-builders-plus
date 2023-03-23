import React from 'react'
import ServicesImgs from '../components/Services/ServicesImgs'
import Service from '../components/Services/Services'

export default function Services() {
  return (
    <div className='flex qfont-bold gap-4 mt-4 justify-center'>
      <Service />
      <ServicesImgs />
    </div>
  )
}
