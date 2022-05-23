import { useCallback } from "react";
import { ethers, BigNumber } from "ethers";
import { Connection } from "../components/Web3Connection/Connection";

import { useMulticallContract } from "./useContract";

// import { SoulSummonerAddress, CircleStakingAddress } from "../constants";
// import FarmPids from "../constants/FarmPids";

function useMulticall() {
  const { address, signer } = Connection.useContainer();

  const getTimestamp = async () => {
    try {
      const multicall = await useMulticallContract();

      const result = await multicall?.blockTimestamp();
      console.log("blocktimestamp", result)
      return result;
    } catch (e) {
      console.error(e);
      return e;
    }
  };

  return {
    getTimestamp,
  };
}

export default useMulticall;
