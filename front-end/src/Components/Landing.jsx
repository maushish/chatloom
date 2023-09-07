import React from 'react';
import chatloom from '../Logo/chatloom.svg';
import Group24 from '../Logo/Group24.svg';
import MatrixRainBackground from './Matrix';

function Landing() {
  return (
    <div className="relative">
      <div className="z-100">
        <MatrixRainBackground />
      </div>
      <div className="bg-mainBlack opacity-70 h-screen z-100">
        <div className="text-txt1 flex flex-col items-center justify-center z-1">
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
            <div className="py-20 text-black">
              <a href="/join">
                <button className="px-4 py-2 bg-white rounded-md hover:bg-black-gradient hover:text-white transition duration-950 hover:py-3 hover:px-5 border-2">
                  Join {'>'}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
