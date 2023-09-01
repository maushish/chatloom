import React from 'react'
import Chat from './Components/Chat'
import Login from './Components/Login'
import Landing from './Components/Landing';
import 'tailwindcss/tailwind.css';
import './styles/tailwind.css'


function App() {


  return (
    <>
      <Landing/>
      <Login/>
      <Chat/>
    </>
  )
}

export default App
