import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './styles/tailwind.css';
import { configureChains, createConfig } from 'wagmi'
import { goerli } from 'wagmi/chains'
import{publicProvider} from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import WagmiConfig from '../wagmi.config';


const {provider, webSocketProvider} = configureChains([goerli],[publicProvider])

const client =createConfig({
  autoConnect:true,
  provider, webSocketProvider,
  connectors:[
    new walletConnectCOnnector({chains}),
    new MetaMaskConnector({chains}), 
    new InjectedConnector({chains, options:{name:'Injected'}})
  ],
})


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </WagmiConfig>
  </React.StrictMode>
);
