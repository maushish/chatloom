import React, { useState,useEffect} from 'react';
import ava from "../Images/avatar.jpeg"
import MatrixRainBackground from './Matrix';
import { Web3Storage,  } from 'web3.storage'
import { ethers} from "ethers";
import {PROFILE_SMC, ABI} from './Constants/index'




function Login() {

  //-----x------Avatar image-------//
  const [avatar, setAvatar] = useState(null);
  const avatarInputRef = React.createRef();

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  const openAvatarInput = () => {
    avatarInputRef.current.click();
  };

//-----upload------//

const uploadImageToIPFS = async (imageBuffer) => {
  const storage = new Web3Storage({ token: TOKEN });
  try {
    const result = await storage.put(imageBuffer);
    const ipfsHash = result.path;
    console.log(`Image uploaded to IPFS with hash: ${ipfsHash}`);
    return ipfsHash;
  } catch (error) {
    console.error('Error uploading image to IPFS:', error);
    throw error;
  }
};

  const handleFinishButtonClick = async () => {
    if (!avatar) {
      console.error('Please select an avatar image.');
      return;
    }
    try {
      const ipfsHash = await uploadImageToIPFS(avatar);
      console.log('Avatar image uploaded to IPFS with CID:', ipfsHash);

      // Here, you can store the `ipfsHash` in your database or use it as needed.

      // Proceed with any other actions you want to perform on the "Finish" button click.

    } catch (error) {
      console.error('Error uploading avatar image to IPFS:', error);
    }
  };
//-------- Ethers-------------//
  const [userName, setuserName]=useState('')
  const [bio, setBio]=useState('')

//TO show wallet address---------------//
  const checkConnectedWallet = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        // Request accounts from MetaMask or other Ethereum wallet
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        if (accounts.length > 0) {
          // Update your component state with the user's Ethereum address
          console.log("Connected wallet address:", accounts[0]);
          // Now you can use accounts[0] as the user's Ethereum address
        } else {
          console.log("No Ethereum accounts found. Please connect your wallet.");
        }
      } else {
        console.log("Ethereum provider not detected. Please install MetaMask.");
      }
    } catch (error) {
      console.error("Error checking connected wallet:", error);
    }
  };

  useEffect(() => {
    checkConnectedWallet();
  }, []);

  // const [avatarHash, setAvatarHash]=useState('')

  //Function to interact with smart contract

  const sendDataToSMC=async()=>{
    if(typeof window.ethereum===undefined){
      alert("PLEASE INSTALL METAMASK!!")
      return
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get the current account from MetaMask
    const signer = provider.getSigner();

    //SMC instance
    const contract= new ethers.Contract(PROFILE_SMC,ABI,signer)

    try{
      const tx=await contract.setProfile(userName,bio ,'')
      await tx.wait()

      console.log("Transaction hash:", tx.hash);

    }catch (error){
      console.error("Error sending txn:", error)
    }

  }

  //CSS FOR MATRIX EFFECT
  const containerStyle = {
    position: 'relative',
    height: '100vh',
  };

  const matrixRainStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -10, 
    opacity: 3, 
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 10, 
    background: 'rgba(0, 0, 0, 0.7)', // Background color for content

  };

  return (
    <div style={containerStyle}>
    <div style={matrixRainStyle}>
      <MatrixRainBackground />
    </div>
    <div className="absolute inset-0 bg-mainBlack opacity-0"></div>

      <div  style={contentStyle} className='bg-mainBlack  flex flex-col justify-center h-screen'>
      <div className='text-txt1 mt-[-8%] '>
        <h1 className='px-10 text-5xl'>Set up your profile!</h1>
        <h2 className='text-4xl px-10 py-5'>
          in <span className='text-customGreen font-bold'>1 </span>simple step
        </h2>
      </div>
      <div className='flex flex-co items-center justify-center '>
      <div className='container-div relative'>
      <div className='bg-black-gradient relative px-4 py-2 rounded-xl top-8 z-5 w-20 ml-[5%] text-txt1 border-white border'>About</div>
        <div className='bg-form w-96 p-10  z-0 rounded-lg text-txt1 mt-[3%] flex flex-col justify-center items-center border-customGreen border-x border-y '>
          <form className='flex flex-col justify-center items-center py-0'>
            <div className='flex flex-col'>
            <label className='py-2' htmlFor='avatar' onClick={openAvatarInput} style={{ cursor: 'pointer' }}>
                <span className='font-semibold text-lg'>Avatar</span>
              </label>
              <div className='relative w-16 h-16 rounded-full overflow-hidden mt-2' onClick={openAvatarInput} style={{ cursor: 'pointer' }}>
                <img
                  src={avatar || ava}
                  alt='Image'
                  className='object-cover w-full h-full'
                />
              </div>
              <input
                type='file'
                accept='image/*'
                onChange={handleAvatarChange}
                id='avatar'
                name='avatar'
                className='absolute top-0 left-0 w-2 h-2 opacity-0 cursor-pointer'
                ref={avatarInputRef}
              />
              <label className='py-4' htmlFor='username'>
                <span className='font-semibold text-lg'>Name</span>
              </label>
              <input
                onChange={(e)=>setuserName(e.target.value)}
                className='rounded-md text-black pl-2'
                type='text'
                id='username'
                name='username'
                placeholder='Your username'
              />
              <label className='py-4' htmlFor='bio'>
                <span className='font-semibold text-lg'>Bio</span>
              </label>
              <textarea
                onChange={(e)=>setBio(e.target.value)}
                className='rounded-md py-2 px-2 text-black text-sm'
                id='bio'
                name='bio'
                placeholder='Bio (Enter key for line breaks)'
              />
            </div>
          </form>
        </div>
      </div>
      </div>
      <a className='mt-[2%] md:ml-[45%]  xl:ml-[48%]' href='/Chat'>
      <button
        className='px-4 py-2 text-white bg-black rounded-md hover:bg-white hover:text-black transition duration-3100 hover:py-2 hover:px-4  hover:border-customGreen hover:border-t-3 hover:border-b-3 hover:border-r-3 hover:border-l-3 border-2'
        onClick={sendDataToSMC}
      >
        Finish
      </button>
    </a>

    </div>
    </div>
  );
}

export default Login;
