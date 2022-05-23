import { useState, useEffect } from "react";
import { createContainer } from "unstated-next";
import { BigNumber, ethers } from "ethers";
// import { Observable } from "rxjs";
// import { debounceTime } from "rxjs/operators";

type Provider = ethers.providers.Web3Provider;
type Network = ethers.providers.Network;

declare global {
  interface Window {
    ethereum: any | undefined;
  }
}

function useConnection() {
  const [provider, setProvider] = useState<Provider | null>(null);
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [network, setNetwork] = useState<Network | null>(null);
  const [balance, setBalance] = useState<BigNumber | null>(null);
  //   const [blockNum, setBlockNum] = useState<number | null>(null);

  const attemptConnection = async () => {
    if (window.ethereum === undefined) {
      throw Error("MetaMask not found, please visit https://metamask.io/");
    }

    // get provider, address, and network
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const network = await provider.getNetwork();
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    const bal = await signer.getBalance();

    // make sure page refreshes when network is changed
    // https://github.com/MetaMask/metamask-extension/issues/8226
    window.ethereum.on("chainIdChanged", () => window.location.reload());
    window.ethereum.on("chainChanged", () => window.location.reload());

    // set states
    setProvider(provider);
    setNetwork(network);
    setSigner(signer);
    setAddress(address);
    setBalance(bal);
  };

  const connect = async () => {
    try {
      await attemptConnection();
      window.ethereum.on("accountsChanged", () => attemptConnection());
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const disconnect = async () => {
    try {
      setSigner(null);
      setAddress(null);
      setBalance(null);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const checkAndConnect = async () => {
    if (window?.ethereum?.request) {
      const availableAccounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (availableAccounts.length > 0) {
        connect();
      }
    }
  };

  useEffect(() => {
    // connect if we already have metamask approval
    try {
      checkAndConnect();
    } catch (e) {
      console.error(e);
    }
    // eslint-disable-next-line
  }, []);

  // create observable to stream new blocks
  //   useEffect(() => {
  //     if (provider) {
  //       const observable = new Observable<number>((subscriber) => {
  //         provider.on("block", (blockNumber: number) =>
  //           subscriber.next(blockNumber)
  //         );
  //       });
  //       // debounce to prevent subscribers making unnecessary calls
  //       observable.pipe(debounceTime(1000)).subscribe((blockNumber) => {
  //         // Update every 5 blocks otherwise its very laggy
  //         if (blockNumber > (blockNum || 0) + 5) {
  //           setBlockNum(blockNumber);
  //         }
  //       });
  //     }
  //     // eslint-disable-next-line
  //   }, [provider]);

  const connectToEthMainnet = async () => {
    const provider = window.ethereum;
    if (provider) {
      try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        await provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "1" }],
        });
        await connect()
      } catch (addError) {
        console.log(addError);
        alert("Error occurred adding ETHEREUM MAINNET (ChainId: 1)");
      }
    }
  };

  const connectToFtmOpera = async () => {
    const provider = window.ethereum;
    if (provider) {
      try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        await provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0xFA" }],
        });
        await connect()
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            await provider.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: "0xFA",
                  chainName: "Fantom Opera",
                  rpcUrls: [
                    "https://rpcapi.fantom.network",
                    "https://rpc.ftm.tools/",
                  ],
                  // "iconUrls": [
                  //     "https://xdaichain.com/fake/example/url/xdai.svg",
                  //     "https://xdaichain.com/fake/example/url/xdai.png"
                  // ],
                  nativeCurrency: {
                    name: "Fantom",
                    symbol: "FTM",
                    decimals: 18,
                  },
                  blockExplorerUrls: ["https://ftmscan.com/"],
                },
              ],
            });
          } catch (addError) {
            console.log(addError);
            alert("Error occurred adding FANTOM OPERA (ChainId: 0xFA)");
          }
        }
      }
    }
  };

  const connectToFtmTestnet = async () => {
    const provider = window.ethereum;
    if (provider) {
      try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        await provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0xfa2" }],
        });
        await connect()
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            await provider.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: "0xfa2",
                  chainName: "Fantom testnet",
                  rpcUrls: ["https://rpc.testnet.fantom.network/"],
                  // "iconUrls": [
                  //     "https://xdaichain.com/fake/example/url/xdai.svg",
                  //     "https://xdaichain.com/fake/example/url/xdai.png"
                  // ],
                  nativeCurrency: {
                    name: "Fantom",
                    symbol: "FTM",
                    decimals: 18,
                  },
                  blockExplorerUrls: ["https://testnet.ftmscan.com/"],
                },
              ],
            });
          } catch (addError) {
            console.log(addError);
            alert("Error occurred adding FANTOM TESTNET (ChainId: 0xfa2)");
          }
        }
      }
    }
  };

  return {
    connect,
    disconnect,
    connectToEthMainnet,
    connectToFtmOpera,
    connectToFtmTestnet,
    provider,
    network,
    signer,
    address,
    balance,
    // blockNum,
  };
}

export const Connection = createContainer(useConnection);
