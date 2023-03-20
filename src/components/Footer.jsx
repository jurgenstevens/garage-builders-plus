import React from 'react'

export default function Footer() {
  return (
    <div className='flex py-4 px-4 gap-8 max-w-full text-center lg:grid-colums-3 bg-black rounded-t-lg' >
        <div>
          <h1 className='text-3xl font-satisfy-bold text-[#5D9CF3]'>GBP</h1>
        </div>
        <div className="business-hours text-[#969696]">
          <p>Monday - Friday - 9am - 6pm</p>
          <p>Saturday - Sunday - Closed</p>
        </div>
    </div>
  )
}
