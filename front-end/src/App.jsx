import React from 'react'
import Chat from './Components/Chat'
import Login from './Components/Login'
import Landing from './Components/Landing';
import 'tailwindcss/tailwind.css';
import './styles/tailwind.css'
import { Routes, Route } from "react-router-dom"
// import { configureChains, createConfig } from 'wagmi'
// import { goerli } from 'wagmi/chains'
// import{publicProvider} from 'wagmi/providers/public'
// import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
// import WagmiConfig from '../wagmi.config';





function App() {

// const {provider, webSocketProvider} = configureChains([goerli],[publicProvider])

// const client =createConfig({
//   autoConnect:true,
//   provider, webSocketProvider,
//   connectors:[
//     new walletConnectCOnnector({chains}),
//     new MetaMaskConnector({chains}), 
//     new InjectedConnector({chains, options:{name:'Injected'}})
//   ],
// })


  return (
    <>
          {/* <WagmiConfig client={client}> */}
        <Routes>
          <Route path='' element={<Landing/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Chat' element={<Chat/>}/>
        </Routes>
        {/* </WagmiConfig> */}
    </>
  )
}

export default App
