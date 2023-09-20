import React from 'react';
import chatloom from '../Logo/chatloom.svg';
import Group24 from '../Logo/Group24.svg';
import MatrixRainBackground from './Matrix';
import { useEffect,useState } from 'react';

function Landing() {
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
    zIndex: -1, 
    opacity: 2, 
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1, 
  };
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    getCurrentWallet();
    addWalletListener();
  }, []);

  const connectWallet = async () => {
    try {
      if (typeof window.ethereum !== "undefined" && typeof window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletAddress(accounts[0]); // Update walletAddress state
        console.log(accounts[0]);
      } else {
        console.log("Please install Metamask");
      }
    } catch (err) {
      console.error(err.message);
    }
  };


  const getCurrentWallet = async () => {
    try {
      if (typeof window.ethereum !== "undefined" && typeof window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("Connect to Metamask using the connect button");
        }
      } else {
        console.log("Please install Metamask");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const addWalletListener = async () => {
    try {
      if (typeof window.ethereum !== "undefined" && typeof window.ethereum !== "undefined") {
        window.ethereum.on("accountsChanged", (accounts) => {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        });
      } else {
        setWalletAddress("");
        console.log("Please install Metamask");
      }
    } catch (err) {
      console.error(err.message);
    }
  };







  return (
    <div style={containerStyle}>
      <div style={matrixRainStyle}>
        <MatrixRainBackground />
      </div>
      <div className="absolute inset-0 bg-mainBlack opacity-80"></div>
      <div style={contentStyle} className="text-txt1 flex flex-col items-center justify-center">
        <a>
          <img src={chatloom} alt="logo" className="h-20 mt-[1%] absolute left-0" />
        </a>
        <div className="flex-col items-center justify-center mt-[14%]">
          <a>
            <img src={Group24} alt="chat" className="h-18" />
          </a>
          <h1 className="text-6xl">with Security</h1>
        </div>
        <div className="text-5xl py-20 flex flex-col items-center justify-center">
          <h2>
            keep your identity <span className="text-customGreen"> safe</span>
          </h2>
          <div className="py-20 text-white">
            <a href="/Login">
              <button onClick={connectWallet} className="px-4 py-2 bg-black rounded-md hover:bg-white hover:text-black transition duration-3100 hover:py-2 hover:px-4  hover:border-customGreen hover:border-t-4 hover:border-b-4 hover:border-r-4 hover:border-l-4 border-2">
                Join {'>'}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
