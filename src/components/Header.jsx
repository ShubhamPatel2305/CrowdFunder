import { Link } from 'react-router-dom'
import { connectWallet } from '../services/blockchain'
import { truncate, useGlobalState } from '../store'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    <div>
        
    <nav class="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 shadow-sm">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a href="/" class="flex items-center">
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Crowd Funder</span>
      </a>
      <div class="flex md:order-2">
        {connectedAccount ? (
          <button type="button" class="border-2 border-cyan-400 text-cyan-400 bg-white hover:bg-gray-100 focus font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0" >
          {truncate(connectedAccount, 4, 4, 11)}
        </button>
        ) : (
          <button type="button" class="border-2 border-cyan-400 text-cyan-400 bg-white hover:bg-gray-100 focus font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0" onClick={connectWallet}>
            Connect Wallet
          </button>
        )
      }
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="/" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-400 md:p-0" aria-current="page">Home</a>
          </li>
          <li>
            <a href="/contact" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-400 md:p-0">Contact</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
    
        </div>  )
}

export default Header
