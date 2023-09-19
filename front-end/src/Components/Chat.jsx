import React, { useState } from 'react';
import { AiOutlineUserAdd,AiFillVideoCamera,AiOutlineSend } from 'react-icons/ai';
import Add from './Add';

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

      const [showModal, hideModal] = useState(false); // Use 'setShowModal' for the updater function
      const handleOnClose=()=>hideModal(false)
    return (
      <div>
        <div>
          <div className="relative min-h-screen flex flex-col bg-mainBlack">
            <div className='container flex flex-col items-center relative'>
              <div className='bg-black-gradient border border-gray-300 rounded-xl w-[800px] h-[700px] absolute left-[800px] flex flex-col items-center justify-center top-40'>
                <nav><AiFillVideoCamera color='#9DF3FF' size={30} className='absolute right-32 top-9'/></nav>
                <div class="border-t w-3/4  border-gray-300 my-4  absolute top-20"></div>
                <div class="border-t w-3/4  border-gray-300 my-4  absolute bottom-20"></div>
                <footer className='absolute bottom-10 flex flex-col items-center justify-center'>
                  <input className=' w-[240%] bg-chatBlack rounded-lg pl-3 text-white h-10' placeholder='Type your message here'></input>
                  <AiOutlineSend size={30} color='#9DF3FF' className='absolute left-80'/>
                </footer>


              </div>
              <img
                src="https://via.placeholder.com/100x100" // Replace with your PFP image URL
                alt="Profile Picture"
                className="w-20 absolute left-[220px] top-[148px] z-20 object-cover rounded-full"
              />
              <div className='bg-customGreen w-40 h-[55px] z-1 rounded-3xl absolute left-[250px] top-40 '>
                <button onClick={() => hideModal(true)} className='absolute right-6' >
                  <AiOutlineUserAdd color='white' size={50} />
                </button>
  
                <Add onClose={handleOnClose} visible={showModal} />
              </div>
              <div className='bg-black-gradient border border-gray-300 rounded-xl w-[350px] h-[500px] absolute left-[200px] top-80'>profile</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  

export default Chat;
