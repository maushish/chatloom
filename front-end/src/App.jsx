import React from 'react'
import Chat from './Components/Chat'
import Landing from './Components/Landing';
import 'tailwindcss/tailwind.css';
import './styles/tailwind.css'
import { Routes, Route } from "react-router-dom"


function App() {




  return (
    <>
        <Routes>
          <Route path='' element={<Landing/>}/>
          <Route path='/Chat' element={<Chat/>}/>
        </Routes>
\    </>
  )
}

export default App
