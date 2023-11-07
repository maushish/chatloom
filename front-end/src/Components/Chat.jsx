import React, { useState, useEffect } from 'react';
import {  AiOutlineSend } from 'react-icons/ai';
import { ethers } from 'ethers';

function Chat() {


  useEffect(() => {
    // Use ethers.js to interact with Ethereum using the userAddress
    const getUserAddress = async () => {
      try {
        if (typeof window.ethereum !== 'undefined' && typeof window.ethereum !== 'undefined') {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          const userAddress = accounts[0]; // Get the user's Ethereum address
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = provider.getSigner();
          
          // Now you can use signer to interact with Ethereum, e.g., send transactions, call smart contract functions, etc.
          console.log('User Address:', userAddress);
        } else {
          console.log('Please install Metamask');
        }
      } catch (err) {
        console.error(err.message);
      }
    };

    getUserAddress();
  }, []);
  function onAddFriend(walletAddress) {
    // Add the friend to the chat
  }

  return (
    <div>
      <div>
        <div className="relative min-h-screen  h-full flex flex-col bg-mainBlack">
          <div className="container flex flex-col items-center relative">
          {/*----------Connect to other peer ----------------------------------------------------------*/}
            {/* <div className="bg-customGreen w-40 h-[55px] z-1 rounded-3xl absolute lg:left-[250px] lg:top-40 md:top-5 md:left-[60px]"> */}
            <div className='bg-black-gradient w-[85vh] border  h-[8vh] absolute top-9 lg:left-[53vh] md:left-[7vh] rounded-full border-gray-300 '>
              <div className='flex flex-col items-center justify-center'>
                <input className=' rounded-3xl text-black absolute top-5 left-5 pl-4 text-lg   w-[60vh] h-[3.5vh]' 
                placeholder='Paste your peer address'>
                </input>

              </div>
              <button 
              className="absolute right-[4vh] text-2xl top-[20px] rounded-full w-[15vh] bg-black text-white hover:bg-white hover:text-black transition duration-3100 hover:py-[4px]  hover:top-[15px] hover:px-2  hover:border-customGreen hover:border-t-4 hover:border-b-4 hover:border-r-4 hover:border-l-4 border-2">
                Connect
              </button>


           </div>
            <div className="bg-black-gradient border border-gray-300 rounded-xl lg:w-[1000px] md:w-[800px]  lg:h-[700px] md:h-[500px] l absolute lg:left-[42vh] md:left-[8vh] flex flex-col items-center justify-center lg:top-40 md:top-40">
              <nav>
                <div id="loading" className="absolute top-5 lg:left-32 md:left-12">
                  {/* show the other person address -----------------------------------------------------------------*/}

                  <div className="absolute left-12 top-4 text-white text-sm">
   
                  <div id='bio' className="w-48 h-8 text-white bg-gray-200 rounded-full dark:bg-gray-700">
                  </div>

                  </div>
                </div>
              </nav>
              <div className="border-t w-3/4  border-gray-300 my-4  absolute top-20"></div>
              <div className="border-t w-3/4  border-gray-300 my-4  absolute bottom-20"></div>
              <footer className="absolute bottom-7 flex flex-col items-center justify-center ">
                <input
                  className="lg:w-[340%] md:w-[250%] bg-chatBlack rounded-lg pl-4 text-white h-[5vh] "
                  placeholder="Type your message here"
                ></input>
                <AiOutlineSend size={30} color="#9DF3FF" className="absolute lg:left-[42vh] md:left-[280px]" />
              </footer>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
 