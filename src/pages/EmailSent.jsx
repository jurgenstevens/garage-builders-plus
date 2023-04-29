import React from "react"

export default function EmailSent() {
    return (
      <div className='flex flex-wrap mx-auto max-w-screen-lg'>
        <div className='w-full flex flex-col items-center mt-4'>
            <div className="mt-60 text-white">
                Your email has been sent successfully!
            </div>
            <div className="">
            <button className="rounded-lg border-spacing-2 m-4 p-2 bg-[#5E9BF5]">
                <a className="text-white p-4" href="/">Home</a>
            </button>
            </div>
        </div>
      </div>
    );
  }