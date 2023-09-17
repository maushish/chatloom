import React from 'react';
import ani from '../Images/ani.mp4';

function Add({ visible }) {
  if (!visible) return null;
  return (
    <div className='fixed inset-0 bg-opacity-100 z-20 backdrop-blur-sm flex flex-col justify-center items-center'>
      <div className="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
        <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">Info alert!</span> Make sure your friend is signed up on chatloom.
        </div>
      </div>
      <div className='bg-black w-[500px] h-[400px] rounded-xl text-gray-300 flex flex-col items-center justify-center'>
        <h1 className='text-4xl absolute top-[35vh]'>
          Add your Friends
        </h1>



        <input placeholder='Enter wallet address' className='pl-2 border rounded-lg  w-80 h-10' />
        <button className="mt-[20%] relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add Friend
          </span>
        </button>
      </div>
    </div>
  );
}

export default Add;
