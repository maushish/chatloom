import React, { useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';

function Chat() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleWalletAddressChange = (event) => {
    setWalletAddress(event.target.value);
  };

  const submitWalletAddress = () => {
    // Handle the submission of the wallet address here (e.g., send it to a server).
    // You can also close the pop-up after submitting.
    setIsPopupOpen(false);
  };

  return (
    <div className='bg-mainBlack h-screen flex flex-col items-center justify-center'>
      {/* Whole chat thing */}
      <div className='rounded-xl border border-gray-300 opacity-25 bg-gradient-to-r from-opacity-80 to-opacity-85 from-black to-black flex flex-col items-center justify-center w-[60%] ml-[38%] mt-[3%] h-[78%]'>
        <div>
          <div></div>
        </div>
        <div>Chat</div>
        <div>emoji, typing</div>
      </div>
      {/* Profiles Section */}
      <div>
        <div className='w-[20vh] h-[6vh] bg-customGreen rounded-lg mt-[-430%] ml-[-360%] flex flex-row items-center'>
          {/* Left section with circular profile picture */}
          <div className='w-[120px] h-[80px] bg-gray-200 rounded-full overflow-hidden ml-[-10%]'>
            <img
              src="https://via.placeholder.com/100x100" // Replace with your PFP image URL
              alt="Profile Picture"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Right section with icon and button */}
          <div className='flex items-center justify-between w-full '>
            {/* Button */}
            <button onClick={togglePopup} className='ml-[35%]'>
              <AiOutlineUserAdd color='white' size={50} />
            </button>
          </div>
        </div>

        <div className='flex flex-row ml-[-350%]  mt-[40%]'>
          <div className={`text-Black bg-gradient-to-r from-slate-300 to-slate-500 py-20 w-[30%] rounded-lg  popup ${isPopupOpen ? 'block' : 'hidden'}`}>
            <div className='popup-content opacity-100 z-20 flex flex-col items-center justify-center'>
              <div className='flex flex-col items-center justify-center'>
                <h2 className='py-4 text-2xl'>Enter Wallet Address</h2>
                <input
                  type='text'
                  placeholder='Wallet Address'
                  value={walletAddress}
                  className='pl-3 round-lg text-black border-3 border-customGreen border rounded-lg'
                  onChange={handleWalletAddressChange}
                />
                <button onClick={submitWalletAddress} className='mt-9 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800'>
                  <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                    Add friend
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div>
            {/* All profiles */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
