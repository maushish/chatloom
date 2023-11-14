import React from 'react'
import Chat from './Components/Chat'
import Landing from './Components/Landing';
import 'tailwindcss/tailwind.css';
import './styles/tailwind.css'
import { Routes, Route } from "react-router-dom"
import { createConfig, configureChains, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { mainnet } from "wagmi/chains";

const { publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

function App() {
  return (
    <><WagmiConfig config={config}>
        <Routes>
          <Route path='' element={<Landing/>}/>
          <Route path='/Chat' element={<Chat/>}/>
        </Routes>
        </WagmiConfig>
\    </>
  )
}

export default App
