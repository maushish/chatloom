import { defineConfig } from '@wagmi/cli'
import {profile} from '../Back-end/contracts/Profile.sol'
import {goerli} from 'wagmi'
import {hardhat} from '@wagmi/cli/plugins'
import {ABI} from '../front-end/src/Components/Constants/index'
import { alchemyProvider } from 'wagmi/providers/alchemy'

const { chains, publicClient } = configureChains(
    [goerli],
    [alchemyProvider({ apiKey: 'rCTe6DIuFcd2RBnGZDMLNiZZnwfYmGzV' })],
  )

const config =createConfig({
    autoConnect:true,
    publicClient,
    WebSocketPublicClient,
})




export default defineConfig({
  out: 'src/generated.ts',
  contracts: [
    {
        name:{profile},
        abi:{ABI},
    },
  ],
  plugins: [
    hardhat({
        project:'../Back-end/',
        artifacts:'../Back-end/artifacts/',
    }),
  ],
})
