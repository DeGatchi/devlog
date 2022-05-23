import { ethers } from "ethers";
import { useCallback } from "react";

import MasterChefABI from "../abis/masterchef.json";

const Contracts = () => {
  const useContract = async (address, abi) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    try {
      return await new ethers.Contract(address, abi, provider);
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  };

  // Ftm Testnet Only
  const useMasterChefContract = async () => {
    return await useContract(
      "0x5cED956c0d3dC88B8C3E42494F7b2e052d7CfeBc",
      MasterChefABI
    );
  };

  const fetchPoolInfo = async (pid) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const masterchef = await new ethers.Contract(
      "0x5cED956c0d3dC88B8C3E42494F7b2e052d7CfeBc",
      MasterChefABI,
      provider
    );

    try {
      const result = await masterchef?.poolInfo(pid);
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  return { useContract, useMasterChefContract, fetchPoolInfo };
};

export default Contracts;
