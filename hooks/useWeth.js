import { useCallback } from "react";
import { ethers, BigNumber } from "ethers";
import { Connection } from "../components/Web3Connection/Connection";

import { useWethContract } from "./useContract";

// import { SoulSummonerAddress, CircleStakingAddress } from "../constants";
// import FarmPids from "../constants/FarmPids";

function useWeth() {
  const { address, signer, network } = Connection.useContainer();

  const balanceOf = async (addr) => {
    const contract = await useWethContract(network?.chainId);
    const result = await contract?.connect(signer)?.balanceOf(addr);
    return result;
  }

  const allowanceOf = async (owner, spender) => {
    const contract = await useWethContract(network?.chainId);
    const result = await contract?.connect(signer)?.allowance(owner, spender);
    return result;
  }

  const approve = async (spender, amount) => {
    const contract = await useWethContract(network?.chainId);
    const result = await contract?.connect(signer)?.approve(spender, amount);
    return result;
  }

  const depositEth = async (amount) => {
    const contract = await useWethContract(network?.chainId);
    const result = await contract?.connect(signer)?.deposit({value: amount});
    return result;
  }

  const withdrawEth = async (amount) => {
    const contract = await useWethContract(network?.chainId);
    const result = await contract?.connect(signer)?.withdraw(amount);
    return result;
  }

  return {
    balanceOf,
    allowanceOf,
    approve,
    depositEth,
    withdrawEth,
  };
}

export default useWeth;
