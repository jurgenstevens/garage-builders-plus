import React from 'react'

export default function Main() {
  return (
    <div className='flex flex-wrap mx-auto max-w-screen-lg'>
        <div className="flex-grow flex flex-col items-center">
          <img src="../../garagehomeimage.jpeg" alt="two-door-garage" className='max-w-full' style={{width: '1000px'}} />
        </div>
        <div className="text-[#5D9CF2] font-bold flex gap-4 mt-4 justify-center">
            <div className='text-bod rounded-lg p-2'>
              <h1 className='text-white font-bold flex justify-center'>Why Us?</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ipsam nisi est dolor qui deleniti temporibus illum, ullam ea, molestias consequatur blanditiis rem necessitatibus fuga optio, repellendus labore id odio!
              Asperiores quae repellendus et ea est doloribus, ducimus, aperiam, laboriosam excepturi iure nisi expedita? Esse libero deleniti, quod voluptatum voluptate facere modi amet, quae eaque quo minus eligendi accusantium cumque.</p>
            </div>
            <div className='text-[#5D9CF2] font-bold text-bod rounded-lg p-2'>
              <h1 className='text-white flex justify-center'>Get A Quote!</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ex! Aperiam, itaque sint qui perspiciatis aut possimus, ad doloremque repellendus repellat enim ipsam voluptate fugit nulla soluta necessitatibus quisquam officiis?
              Provident quisquam maxime sint iusto, modi voluptatum quae vitae, reiciendis sequi beatae at veniam quam doloribus sapiente odio. Quis ipsam cumque illum illo error. Non alias quam sed porro. Beatae?</p>
            </div>
        </div>
    </div>
  )
}
