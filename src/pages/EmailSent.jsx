import React from "react"

export default function EmailSent() {
    return (
      <div className='flex flex-wrap mx-auto max-w-screen-lg'>
        <div className='w-full flex flex-col md:flex-row md:items-stretch md:justify-between mt-4'>
            <div>
                Your email has been sent successfully!
                <button></button>
            </div>
        </div>
      </div>
    );
  }