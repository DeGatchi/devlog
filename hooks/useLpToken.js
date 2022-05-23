import { ethers } from "ethers";

import { useLpTokenContract } from "./useContract";
import { Connection } from "../components/Web3Connection/Connection";

import { SoulSummonerAddress } from "../constants";

const useLpToken = (lpTokenAddress) => {
  const { address } = Connection.useContainer();

  // user approve spender
  const approve = async () => {
    try {
      const pairContract = useLpTokenContract(lpTokenAddress);

      // hard-coded soulsummoner for now (approving summoner to move lp tokens)
      const result = await pairContract.approve(
        SoulSummonerAddress,
        ethers.BigNumber.from(2)
          .pow(ethers.BigNumber.from(256))
          .sub(ethers.BigNumber.from(1))
      );
      return result;
    } catch (e) {
      console.log(e);
      alert(e.message);
      return e;
    }
  };

  // user allowance
  const allowance = async () => {
    try {
      const pairContract = useLpTokenContract(lpTokenAddress);

      const amount = await pairContract?.allowance(
        address,
        SoulSummonerAddress
      );
      return amount;
    } catch (e) {
      console.log(e);
      alert("allowance error");
      return e;
    }
  };

  // user balance
  const balanceOf = async () => {
    try {
      const pairContract = useLpTokenContract(lpTokenAddress);

      const amount = await pairContract?.balanceOf(address);
      return amount.toString();
    } catch (e) {
      console.log(e);
      alert("allowance error");
      return e;
    }
  };

  return { approve, allowance, balanceOf };
};

export default useLpToken;
