import React from 'react'

export default function Main() {
  return (
    <div>
        <div className="flex-grow flex flex-col justify-center">
          <img src="../../garagehomeimage.jpeg" alt="two-door-garage" className='max-w-full' style={{width: '1000px'}} />
        </div>
        <div className="flex gap-4 mt-4 justify-center">
          <div className='bg-[#2C5E7F] rounded-md p-4'>
            <h1>Why Us?</h1>
          </div>
          <div className='bg-[#2C5E7F] rounded-md p-4'>
            <h1>Get a quote!</h1>
          </div>
        </div>
    </div>
  )
}
