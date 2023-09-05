import React from 'react'

function Chat() {
  return (
    <div className='bg-mainBlack h-screen flex flex-col items-center justify center '>
      <div className='rounded-xl border border-gray-300 opacity-25 bg-gradient-to-r from-opacity-80 to-opacity-85 from-black to-black flex flex-col items-center justify-center w-[60%] ml-[38%] mt-[3%] h-[92%]'>
        {/*whole chat thing*/}
        <div>Name</div>
        <div>Chat</div>
        <div>emoji, typing</div>


      </div>
      <div className='rounded-lg border border-white-accent-colour bg-black-gradient'>
        {/*USER'S PROFILE */}
      </div>
      <div>
        {/*All profiles  */}
      </div>

    </div>
  )
}

export default Chat