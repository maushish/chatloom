import React, { useState } from 'react';
import ani from '../Images/ani.mp4';
import { PROFILE_SMC, ABI } from './Constants';
import { ethers } from 'ethers';
import { RxCross1 } from 'react-icons/rx';

function Add({ visible, onClose, onAddFriend, onAddFriendData, ethereumProvider, userAddress, friendName, friendBio }) {
  const [walletAddress, setWalletAddress] = useState(''); // State to capture the entered wallet address
  const [loading, setLoading] = useState(false); // State to track loading state

  const handleAddFriend = async () => {
    setLoading(true);

    try {
      const provider = new ethers.BrowserProvider(ethereumProvider);
      const contractAddress = PROFILE_SMC;
      const contractABI = ABI;

      const contract = new ethers.Contract(contractAddress, contractABI, provider);

      // Call the getProfileByAddress function of the smart contract
      const result = await contract.getProfileByAddress(walletAddress);

      // Call the onAddFriend function passed as a prop to add the friend to the chat
      onAddFriend(walletAddress);

      // Call the parent's function to send data to the parent
      onAddFriendData(result[0], result[1]);

      // Close the modal
      onClose();
    } catch (error) {
      console.error('Error fetching user profile from contract:', error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  if (!visible) return null;
  return (

    <div className='fixed inset-0 bg-opacity-100 z-20 backdrop-blur-sm flex flex-col justify-center items-center'>
    <div className="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">

    </div>
    <div className='bg-black w-[500px] h-[400px] rounded-xl text-gray-300 flex flex-col items-center justify-center border border-white'>
      <RxCross1 color='red' size={50} className='relative left-[22vh] top-3' onClick={onClose}/>
      <h1 className='text-4xl absolute top-[45vh]'>
        Add your Friends
      </h1>

      <input
        placeholder='Enter wallet address'
        className='pl-2 border rounded-lg text-black w-80 h-10 mt-[30%]'
        onChange={(e) => setWalletAddress(e.target.value)}
        value={walletAddress}
      />
      <button
        onClick={()=>handleAddFriend(friendName,friendBio)}//passing data from child to parent cc:Alok
        className="mt-[20%] relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
      >
        {/* Display loading state while fetching data */}
        {loading ? (
          <span>Loading...</span>
        ) : (
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add Friend
          </span>
        )}
      </button>
    </div>
  </div>
);
}

export default Add;
