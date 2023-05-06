import React from 'react'

export default function Reviews() {
  return (
  <div className='max-w-lg w-full mx-auto md:mx-0 md:ml-4 bg-[#252525] text-[#5D9CF3] flex-grow rounded-2xl p-8 gap-4 mt-4'>
    <h1 className='font-bold text-center text-3xl text-white mb-4'>Reviews</h1>
    <ul>
      <li > 
        <p>I got my garage door replaced last summer. I high recommend! Fast, efficient and so kind. - <b className='text-white'>Jessica Washington</b></p>
      </li>
      <br />
      <li>Very professional, replaced roof on my garage and did great job, left the area nice and clean. Thank you. - <b className='text-white'>Marcin Wojtas</b></li>
      <br />
      <li>I use garage builders for various projects including everything I selected on the questionnaire and more. They're my go to guys for almost every project If they can't do it they'll recommend someone who will and the price is always reasonable. I own real estate and am am always rehabbing properties. I would highly recomment their services! - <b className='text-white'>Darth Zane</b></li>
    </ul>
  </div>
  )
}
