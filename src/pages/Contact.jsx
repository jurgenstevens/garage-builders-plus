import React from 'react'

export default function Contact() {
  return (
    <div className='flex flex-wrap mx-auto max-w-screen-lg'>
      <div className='w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center items-center px-4'>
        <div className='flex flex-col items-center mb-4'>
          <a target='_blank' href='https://www.facebook.com/garagebuildersplus/'>
            <div className='w-12 h-12 rounded-full bg-blue-600 flex justify-center items-center'>
              <i className='fab fa-facebook-f text-white'></i>
            </div>
          </a>
          <p className='mt-2 text-white'>Facebook</p>
        </div>
        <div className='flex flex-col items-center mb-4'>
          <a target='_blank' href='https://www.tiktok.com/@gbpinc_?is_from_webapp=1&sender_device=pc'>
            <div className='w-12 h-12 rounded-full bg-[#F92C56] flex justify-center items-center'>
              <i className='fab fa-linkedin-in text-white'></i>
            </div>
          </a>
          <p className='mt-2 text-white'>TikTok</p>
        </div>
        <div className='flex flex-col items-center mb-4'>
          <a target='_blank' href='https://www.instagram.com/garagebuildersplusinc/'>
            <div className='w-12 h-12 rounded-full bg-blue-500 flex justify-center items-center'>
              <i className='fab fa-twitter text-white'></i>
            </div>
          </a>
          <p className='mt-2 text-white'>Instagram</p>
        </div>
      </div>
      <div className='w-full md:w-1/2 lg:w-2/3 px-4 mt-10'>
        <form className='bg-[#252525] shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <div className='mb-4'>
            <label className='block text-white font-bold mb-2' htmlFor='name'>
              Name
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              type='text'
              placeholder='Enter your name'
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-white font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              placeholder='Enter your email'
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-white font-bold mb-2'
              htmlFor='message'
            >
              Message
            </label>
            <textarea
              className='shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline'
              id='message'
              rows='6'
              placeholder='Enter your message'
            ></textarea>
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Submit
            </button>
          </div>
    </form>
    </div>
    </div>
  )
}
