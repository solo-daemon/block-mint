import logo from './logo.svg';
import './App.css';
import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login';
import { Dashboard } from './pages/dashboard';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'

// 1. Get projectId
const projectId = 'c77c7a1ce3664442cce01a7a2d4570cb'

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

// 3. Create modal
const metadata = {
  name: 'Blockify',
  description: 'Made for crypto unwrapped',
  url: 'https://mywebsite.com',
  icons: ['https://avatars.mywebsite.com/']
}

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId
})
function App() {
  return (
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
