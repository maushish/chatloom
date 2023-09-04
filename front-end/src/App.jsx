import React from 'react'
import Chat from './Components/Chat'
import Login from './Components/Login'
import Landing from './Components/Landing';
import 'tailwindcss/tailwind.css';
import './styles/tailwind.css'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path='' element={<Landing/>}/>
        <Route path='/Join' element={<Login/>}/>
        <Route path='/finish' element={<Chat/>}/>

      </Routes>
    </>
  )
}

export default App
