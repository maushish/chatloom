import React, { useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';

function Chat() {
  // const [isPopupOpen, setIsPopupOpen] = useState(false);
  // const [walletAddress, setWalletAddress] = useState('');

  // const togglePopup = () => {
  //   setIsPopupOpen(!isPopupOpen);
  // };

  // const handleWalletAddressChange = (event) => {
  //   setWalletAddress(event.target.value);
  // };

  // const submitWalletAddress = () => {
  //   // Handle the submission of the wallet address here (e.g., send it to a server).
  //   // You can also close the pop-up after submitting.
  //   setIsPopupOpen(false);
  // };

  return (
    <div>
      <div>
          <div className="relative min-h-screen flex flex-col bg-mainBlack">
          <div className='container flex flex-col items-center relative'>
            <div className='bg-black-gradient border border-gray-300  rounded-xl w-[800px] h-[700px] absolute left-[800px] top-40'>chat</div>
            <img
              src="https://via.placeholder.com/100x100" // Replace with your PFP image URL
              alt="Profile Picture"
              className="w-20 absolute left-[220px] top-[148px] z-20 object-cover rounded-full"
            />
            <div className='bg-customGreen w-40 h-[55px] z-1 rounded-3xl absolute left-[250px] top-40 '>
            <button className='absolute right-6'>
              <AiOutlineUserAdd color='white' size={50} />
            </button>
            </div>
            <div className='bg-black-gradient border border-gray-300 rounded-xl w-[350px] h-[500px] absolute left-[200px] top-80'>profile</div>
          </div>

          </div>
      </div>
    </div>
  )
}

export default Chat;
