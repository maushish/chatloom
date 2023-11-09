import React from 'react';
import chatloom from '../Logo/chatloom.svg';
import Group24 from '../Logo/Group24.svg';
import MatrixRainBackground from './Matrix';
import { useEffect,useState } from 'react';

function Landing() {
  const containerStyle = {
    position: 'relative',
    height: '100vh',
  }

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
            keep your identity<span className="text-customGreen">safe</span>
          </h2>
          <div className="py-20 text-white">
            <a href="/Chat">
              <button  className="px-4 py-2 bg-black rounded-md hover:bg-white hover:text-black transition duration-3100 hover:py-2 hover:px-4  hover:border-customGreen hover:border-t-4 hover:border-b-4 hover:border-r-4 hover:border-l-4 border-2">
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
