import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ethers} from "ethers"
import Memos from './components/Memons'
import Buy from './components/buy'
import abi from "./contractjson/coffee.json"

function App() {
  const [state,setState] = useState({
    provider: null,
    signer: null,
    contract: null
  })

  const [account,setAccount] = useState('Not connected')
  useEffect(()=> {
  const template = async () =>{
    const contractAddress = "0xBA71c37A0a667b9E756efb026A0922dDB939B295";
    const contractABI = abi.abi;

    try{
      const { ethereum } = window;
      const account = await ethereum.request({
        method: "eth_requstAccounts"
      })
      window.ethereum.on("accountschanged",()=>{
        window.location.reload()
      })
      setAccount(account);
      const provider = new ethers.provider.Web3Provider(ethereum);
      const signer = provider.getSigner();
  
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      )
      console.log(contract);
    setState({provider,signer,contract});
    }catch(error) {
      alert(error);
    }
 
  
  }

  template();
},[])

  return (
  <>
  <div classname="App">
  Connected account  : {account}
    <Buy> state = {state}</Buy>
    {/* <Memos>state = {state}</Memos> */}
  </div>

  </>
  )
}

export default App
