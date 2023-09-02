import React from 'react'
import chatloom from'./Logo/chatloom.svg'
import Group24 from './Logo/Group24.svg'

function Landing() {
  return (
    <div className='bg-mainBlack h-screen'>
      <div className=' text-txt1 flex flex-col items-center justify-center  '>
          <a>
            <img src='{chatloom}' alt='logo' className="h-12 sm:h-20 px-2" />
          </a>
          <h1 className=' mt-[20%] text-6xl '>with Security</h1>
          <div className=' text-5xl py-20 flex flex-col items-center justify-center' >
              <a>
                <img src='{Group24  }' alt='chat' className="h-12 sm:h-20 px-2"/>
              </a>
              <h2>keep your identity <span className='text-customGreen '> safe</span></h2>
              <div className='py-20 text-black'>
              <button className='px-4 py-2 bg-white rounded-md  hover:bg-black-gradient hover:text-white transition duration-950 hover:py-3 hover:px-5  border-2'>Join {'>'}</button>
              </div>

          </div>
      </div>
    </div>
  )
}

export default Landing