import React from 'react'
import ServicesImgs from '../components/Services/ServicesImgs'
import Service from '../components/Services/Services'

export default function Services() {
  return (
    <div className='flex flex-wrap mx-auto max-w-screen-lg'>
      <Service />
      
      <ServicesImgs />
    </div>
  )
}
