import React from 'react'
// import ServicesImgs from '../components/Services/ServicesImgs'
// import Service from '../components/Services/Services'

  export default function Services() {
    return (
      <div className='container flex flex-wrap mx-auto max-w-screen-lg p-2 pb-5'>
        <div className='w-full p-4'>
          <div className='h-full rounded-lg overflow-hidden shadow-md bg-[#252525] text-white flex items-center max-h-150'>
            <div className='flex-1'>
              <h1 className='text-3xl font-bold p-4 text-center'>Concrete</h1>
              <p className='p-4 text-[#5D9CF3]'>
              Our concrete service provides high-quality installation of new garage concrete pads, sidewalks, and driveways for residential and commercial properties.
              </p> 
            </div>
            <div className='w-1/3'>
              <img
                className='w-full h-44 rounded-lg object-cover max-h-100'
                src='../../src/assets/images/concrete03.jpeg'
                alt='concrete work'
              />
          </div>
          </div>
        </div>
  
        <div className='w-full p-4'>
          <div className='h-full rounded-lg overflow-hidden shadow-md bg-[#252525] text-white flex items-center max-h-150'>
            <div className="flex-1">
              <h1 className='text-3xl font-bold p-4 text-center'>Siding</h1>
              <p className='p-4 text-[#5D9CF3]'>
              The garage siding service provided offers professional installation of durable and energy-efficient siding materials to enhance the look and value of your garage.
              </p>
            </div>
            <div className='w-1/3'>
              <img
                className='w-full h-44 rounded-lg object-cover max-h-100'
                src='../../src/assets/images/siding.jpeg'
                alt='concrete work'
              />
          </div>
          </div>
        </div>
  
        <div className='w-full p-4'>
          <div className='h-full rounded-lg overflow-hidden shadow-md bg-[#252525] text-white flex items-center max-h-150'>
            <div className="flex-1">
              <h1 className='text-2xl font-bold p-4 text-center'>Garage Door and Motor Replacement</h1>
              <p className='p-4 text-[#5D9CF3]'>
                Upgrade your garage with a new door and motor for improved security, energy efficiency, and convenience.
              </p>
            </div>
            <div className='w-1/3'>
              <img
                className='w-full h-44 rounded-lg object-cover max-h-100'
                src='../../src/assets/images/garagedoor01.jpeg'
                alt='concrete work'
              />
          </div>
          </div>
        </div>
  
        <div className='w-full p-4'>
          <div className='h-full rounded-lg overflow-hidden shadow-md bg-[#252525] text-white flex items-center max-h-150'>
            <div className="flex-1">
              <h1 className='text-3xl font-bold p-4 text-center'>Garage Door Repair</h1>
              <p className='p-4 text-[#5D9CF3]'>
                We repair residential and commercial garage doors and motors for improved security, energy efficiency and convenience.
              </p>
            </div>
            <div className='w-1/3'>
              <img
                className='w-full h-44 rounded-lg object-cover max-h-100'
                src='../../src/assets/images/garagedoor02.jpeg'
                alt='concrete work'
              />
          </div>
          </div>
        </div>
    </div>

  )
}
