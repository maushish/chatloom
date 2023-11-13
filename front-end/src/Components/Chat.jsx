import React, { useState, useEffect } from 'react';
import {  AiOutlineSend } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Chat() {
  const navigate = useNavigate();

  const [session, setSession] = useState({});

  useEffect(() => {
    axios(`${process.env.REACT_APP_SERVER_URL}/authenticate`, {
      withCredentials: true,
    })
      .then(({ data }) => {
        const { iat, ...authData } = data; // remove unimportant iat value

        setSession(authData);
      })
      .catch((err) => {
        navigate('/');
      });
  }, []);
//for signing out

  async function signOut() {
    await axios(`${process.env.REACT_APP_SERVER_URL}/logout`, {
      withCredentials: true,
    });

    navigate('/');
  }

 

  return (
    <div className="relative min-h-screen h-full flex flex-col bg-mainBlack">
    <div className="container mx-auto flex flex-col items-center relative p-4">
      {/*----------Connect to other peer ----------------------------------------------------------*/}
        <div className='flex justify-between items-center'>
          <input className='rounded-3xl bg-white text-black flex-grow mx-4 h-[4vh] w-[45vh] pl-3' 
          placeholder='Paste your peer address'>
          </input>
          <button 
          className="text-2xl rounded-full bg-black text-white hover:bg-white hover:text-black transition duration-300 ease-in-out py-2 px-4 border-customGreen border">
            Connect
          </button>
        </div>
      <div className="bg-black-gradient border border-gray-300 rounded-xl w-full max-w-4xl h-[700px] flex flex-col items-center justify-center my-4">
        <nav>
          {/* ... */}
        </nav>
        <div className='absolute bottom-20  w-[100vh]'>
  {/* Adjusted the width to 3/4 of its parent by using w-3/4 */}
  <div className="border-t lg:w-3/4 md:w-3/4  xl:w-3/4 border-gray-300 my-4 absolute right-[11vh] bottom-[6vh]"></div>
  <footer className="w-full flex justify-center p-4 ">
    {/* Increased the width of the input to be less than full width but more than the previous max-w-2xl */}
    <input
      className="lg:w-5/6 md:w-1/2 xl:w-1/2 bg-chatBlack rounded-lg px-4 text-white absolute bottom-2 h-[4vh] "
      placeholder="Type your message here"
    ></input>
    
    <AiOutlineSend size={30} color="#9DF3FF" className="ml-4 absolute lg:right-2 lg:bottom-1.5 xl:bottom-[13px] md:right-[20vh] md:bottom-3 xl:right-[20vh]" />
  </footer>
</div>

      </div>
    </div>
  </div>
  );
}

export default Chat;
 