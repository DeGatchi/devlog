import { ethers } from "ethers";

import { Connection } from "../components/Web3Connection/Connection";
import { useQueryHelperContract } from "./useContract";

const useQueryHelper = () => {
  const { signer, network } = Connection.useContainer();

  const query = async () => {
    const HELPER = await useQueryHelperContract(network?.chainId);
    try {
      const result = await HELPER?.connect(signer).query();
      return result
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  return {
    query,
  };
};

export default useQueryHelper;
