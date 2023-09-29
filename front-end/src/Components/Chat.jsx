import React, { useState, useEffect } from 'react';
import { AiOutlineUserAdd, AiFillVideoCamera, AiOutlineSend } from 'react-icons/ai';
import Add from './Add';
import { ethers } from 'ethers';
import { useHuddle01, useVideo } from '@huddle01/react'; // Import Huddle SDK functions

function Chat({ friendName, friendBio }) {
  const [showModal, hideModal] = useState(false);
  const handleOnClose = () => hideModal(false);
  const handleAddFriendData = (friendName, friendBio) => {
    // Handle the data received from the child component (Add)
    console.log('Received data from child component:', friendName, friendBio);
    // You can perform any necessary actions with the data here
  };

  const { initialize, isInitialized } = useHuddle01(); // Initialize Huddle SDK
  const { fetchVideoStream, stopVideoStream, error: camError, produceVideo, stopProducingVideo } = useVideo();

  useEffect(() => {
    // Initialize the Huddle SDK with your project ID
    initialize('ijMF31uzyAt0VyIslXCsRQ_SKcJQQ0Ug');
  }, []);

  function onAddFriend(walletAddress) {
    // Add the friend to the chat
  }

  // Function to start the Huddle SDK
  const startHuddleSDK = async () => {
    try {
      // Fetch and produce the video stream
      await fetchVideoStream();
      await produceVideo();
    } catch (error) {
      console.error('Error starting Huddle SDK:', error);
    }
  };

  return (
    <div>
      <div>
        <div className="relative min-h-screen flex flex-col bg-mainBlack">
          <div className="container flex flex-col items-center relative">
            <div className="bg-black-gradient border border-gray-300 rounded-xl lg:w-[800px] md:w-[600px] lg:h-[700px] md:h-[500px] l absolute left-[800px] flex flex-col items-center justify-center lg:top-40 md:top-20">
              <nav>
                <AiFillVideoCamera
                  color="#9DF3FF"
                  size={30}
                  className="absolute right-32 top-9"
                  onClick={startHuddleSDK} // Add an onClick event to start Huddle SDK
                />
                <div id="loading" className="absolute top-5 lg:left-32 md:left-12">
                  <svg
                    className="w-10 h-10 absolute top-2 text-gray-200 dark:text-gray-700"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  <div className="absolute left-12 top-4 text-white text-lg">
                    <div id='username' className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-34 mb-2">
                      {friendName}
                    </div>
                    <div id='bio' className="w-48 h-3 text-white bg-gray-200 rounded-full dark:bg-gray-700">
                      {friendBio}
                    </div>
                  </div>
                </div>
              </nav>
              <div className="border-t w-3/4  border-gray-300 my-4  absolute top-20"></div>
              <div className="border-t w-3/4  border-gray-300 my-4  absolute bottom-20"></div>
              <footer className="absolute bottom-10 flex flex-col items-center justify-center">
                <input
                  className="lg:w-[240%] md:w-[150%] bg-chatBlack rounded-lg pl-3 text-white h-10"
                  placeholder="Type your message here"
                ></input>
                <AiOutlineSend size={30} color="#9DF3FF" className="absolute lg:left-80 md:left-[280px]" />
              </footer>
            </div>
            <img
              src="https://via.placeholder.com/100x100" // Replace with your PFP image URL
              alt="Profile Picture"
              className="w-20 absolute lg:left-[220px] lg:top-[148px] md:top-[10px] z-20 object-cover rounded-full md:left-[60px]"
            />
            <div className="bg-customGreen w-40 h-[55px] z-1 rounded-3xl absolute lg:left-[250px] lg:top-40 md:top-5 md:left-[60px]">
              <button onClick={() => hideModal(true)} className="absolute right-6">
                <AiOutlineUserAdd color="white" size={50} />
              </button>
              <Add
                onClose={handleOnClose}
                visible={showModal}
                ethereumProvider={window.ethereum}
                onAddFriend={onAddFriend}
                onAddFriendData={handleAddFriendData}
                friendName={friendName}
                friendBio={friendBio}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
