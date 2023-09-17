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
            <div className='bg-white w-[800px] h-[700px] absolute left-[800px] top-40'>chat</div>
            <div className='bg-white w-[350px] h-[500px] absolute left-[200px] top-60'>profile</div>
          </div>

          </div>
      </div>
    </div>
  )
}

export default Chat;
