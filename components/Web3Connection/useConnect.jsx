import { ethers } from "ethers";

export const connectToFtmTestnet = async () => {
  const provider = window.ethereum
  if (provider) {
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '4002' }],
      });
    }
    catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await provider.request({
            method: 'wallet_addEthereumChain',
            params: [{ chainId: '4002', rpcUrl: 'https://testnet.api.fantom.network/' /* ... */ }],
          });
        } catch (addError) {
          console.log(addError)
          alert('Error occurred adding FANTOM OPERA (ChainId: 4002)')
        }
      }
    }
  } else {
    alert('Please install MetaMask.')
  }
}

export const connectToMetaMask = async () => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any")
    await provider.send("eth_requestAccounts", [])
      .catch((error) => {
        if (error.code === 4001) {
          // EIP-1193 userRejectedRequest error
          console.log('Please connect to MetaMask.');
        } else {
          console.error(error);
        }
      })
    await connectToFtmTestnet()
    const signer = await provider.getSigner()
    const chainId = await signer.getChainId()
    const address = await signer.getAddress()
    const balance = await signer.getBalance()
    return [address, chainId, balance, signer]
  } catch (connectionError) {
    alert('Please install MetaMask.')
  }
}

export const cutAddress = (address) => {
  const stringAddress = address.toString()
  return address.slice(0, 5) + "..." + address.slice(-3);
}

// export const Signer = React.createContext()

export const web3Connect = async () => {
  try {
    const returns = await connectToMetaMask()
    const uncutSigner = returns[0]
    const cutSigner = cutAddress(uncutSigner)
    const chainId = returns[1]
    const parsed = ethers.utils.formatUnits(returns[2].toString())
    const balance = (Number(parsed).toFixed(4)).toString()
    return [uncutSigner, cutSigner, chainId, balance]
  } catch (error) {
    console.log(error)
    alert(error)
    return undefined
  }
}
