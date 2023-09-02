import React from 'react'

function Landing() {
  return (
    <div className='bg-mainBlack h-screen'>
      <div className=' text-txt1 flex flex-col items-center justify-center  '>
          <h1 className=' mt-[20%] text-6xl '>with Security</h1>
          <div className=' text-5xl py-20 flex flex-col items-center justify-center' >
              <h2  >keep your identity  <span className='text-customGreen '> safe</span></h2>
              <div className='py-20 text-black'>
              <button className=' outline-red px-4 py-2 bg-white rounded-md outline-4 hover:'>Join {'>'}</button>
              </div>

          </div>
      </div>
    </div>
  )
}

export default Landing