import React, { useState } from 'react';
import { AiOutlineUserAdd,AiFillVideoCamera,AiOutlineSend } from 'react-icons/ai';
import Add from './Add';

function Chat() {

    const [showModal, hideModal] = useState(false); // Use 'setShowModal' for the updater function
    const handleOnClose=()=>hideModal(false)
        
    return (
      <div>
        <div>
          <div className="relative min-h-screen flex flex-col bg-mainBlack">
            <div className='container flex flex-col items-center relative'>
              <div className='bg-black-gradient border border-gray-300 rounded-xl lg:w-[800px] md:w-[600px] lg:h-[700px] md:h-[500px] l absolute left-[800px] flex flex-col items-center justify-center lg:top-40 md:top-20'>
                <nav>
                  <AiFillVideoCamera color='#9DF3FF' size={30} className='absolute right-32 top-9'/>
                  <div className='absolute top-5 lg:left-32 md:left-12'>
                    <svg class=" w-10 h-10 absolute top-2 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    <div className='absolute left-12 top-4'>
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                        <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                  </div>
                </nav>
                <div class="border-t w-3/4  border-gray-300 my-4  absolute top-20"></div>
                <div class="border-t w-3/4  border-gray-300 my-4  absolute bottom-20"></div>
                <footer className='absolute bottom-10 flex flex-col items-center justify-center'>
                  <input className=' lg:w-[240%] md:w-[150%] bg-chatBlack rounded-lg pl-3 text-white h-10' placeholder='Type your message here'></input>
                  <AiOutlineSend size={30} color='#9DF3FF' className='absolute lg:left-80 md:left-[280px]'/>
                </footer>


              </div>
              <img
                src="https://via.placeholder.com/100x100" // Replace with your PFP image URL
                alt="Profile Picture"
                className="w-20 absolute lg:left-[220px] lg:top-[148px] md:top-[10px] z-20 object-cover rounded-full md:left-[60px]"
              />
              <div className='bg-customGreen w-40 h-[55px] z-1 rounded-3xl absolute lg:left-[250px] lg:top-40 md:top-5 md:left-[60px]'>
                <button onClick={() => hideModal(true)} className='absolute right-6' >
                  <AiOutlineUserAdd color='white' size={50} />
                </button>
  
                <Add onClose={handleOnClose} visible={showModal} />
              </div>
              <div className='bg-black-gradient border flex flex-col items-center justify-center border-gray-300 rounded-xl w-[350px] lg:h-[500px] md:h-[500px] absolute lg:left-[200px] md:left-[240px] lg:top-80 md:top-20'>
              <div className='absolute top-8 left-12 '>
                    <svg class=" w-10 h-10 absolute top-2 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    <div className='absolute left-12 top-4'>
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                        <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
              </div>
              <div class="border-t w-3/4  border-gray-300 my-4  absolute top-20">

              <div className='absolute top-5 '>
                    <svg class=" w-10 h-10 absolute top-2 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    <div className='absolute left-12 top-4'>
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                        <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                  </div>
              </div>
              <div class="border-t w-3/4  border-gray-300 my-4  absolute top-40">
              <div className='absolute top-5 '>
                    <svg class=" w-10 h-10 absolute top-2 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    <div className='absolute left-12 top-4'>
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                        <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
              </div>
              </div>
              <div class="border-t w-3/4  border-gray-300 my-4  absolute top-60">
              <div className='absolute top-5 '>
                    <svg class=" w-10 h-10 absolute top-2 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    <div className='absolute left-12 top-4'>
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                        <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
              </div>

              </div>
              <div class="border-t w-3/4  border-gray-300 my-4  absolute top-80">
              <div className='absolute top-2 '>
                    <svg class=" w-10 h-10 absolute top-2 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    <div className='absolute left-12 top-4'>
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                        <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
              </div>

              </div>
              <div class="border-t w-3/4  border-gray-300 my-4  absolute bottom-20">
              <div className='absolute top-2 '>
                    <svg class=" w-10 h-10 absolute top-2 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    <div className='absolute left-12 top-4'>
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                        <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
              </div>

              </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  

export default Chat;
