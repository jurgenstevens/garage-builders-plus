import React from 'react'

export default function Main() {
  return (
    <div className='flex flex-wrap mx-auto max-w-screen-lg'>
        <div className="flex-grow flex flex-col items-center mt-1 p-2 rounded-md bg-[#252525]">
          <img src="../../gbpgaragehomeimage.jpeg" alt="two-door-garage" className='max-w-full rounded' style={{width: '1000px'}} />
        </div>
        <div className="text-[#5D9CF2] qfont-bold flex gap-4 mt-4 justify-center">
            <div className='rounded-lg p-2 bg-[#252525]'>
              <h1 className='text-white font-bold flex justify-center'>Why Us?</h1>
              <p>Our team is comprised of experienced professionals who are dedicated to delivering high-quality, custom garages that meet your unique needs and style preferences. We use only the best materials and construction techniques to ensure your garage is built to last. From design to completion, we handle every step of the process with professionalism and attention to detail. Choose us for your garage building needs and experience the difference of working with a trusted and reliable team.</p>
            </div>
            <div className='text-[#5D9CF2] font-bold text-bod rounded-lg p-2 bg-[#252525]'>
              <h1 className='text-white flex justify-center'>Get A Quote!</h1>
              <p>Ready to get started on your custom garage project? Contact us today for a free quote! Our team of experts will work with you to understand your unique needs and budget and provide you with a customized quote that fits your requirements. With competitive pricing and exceptional customer service, we're the perfect choice for your garage building needs in Chicago. Don't wait, get in touch with us now and let's start building your dream garage!</p>
            </div>
        </div>
    </div>
  )
}
