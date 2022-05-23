import { ethers } from "ethers";

import { Connection } from "../../components/Web3Connection/Connection";
import { useCollectionFactoryContract } from "../useContract";

const useCollectionFactory = () => {
  const { signer, network } = Connection.useContainer();

  const totalCreated = async () => {
    const FACTORY = await useCollectionFactoryContract(network?.chainId);

    try {
      const result = await FACTORY?.connect(signer).createdLength();
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const cloneModel = async () => {
    const FACTORY = await useCollectionFactoryContract(network?.chainId);

    try {
      const tx = await FACTORY?.connect(signer).cloneModel(0);
      const rc = await tx.wait();
      const event = rc.events.find(event => event.event === "Created");
      const [creator, cloneAddress] = event.args;
      return [creator, cloneAddress];
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  return {
    totalCreated,
    cloneModel,
  };
};

export default useCollectionFactory;
