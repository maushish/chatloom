import React from 'react'


function Add({visible}) {
    if (!visible)return null;
  return (
    <div className='fixed inset-0  bg-opacity-100 z-20 backdrop-blur-sm flex justify-center items-center'>
        <div className='bg-black rounded-xl'>adddd</div>
    </div>
  )
}

export default  Add