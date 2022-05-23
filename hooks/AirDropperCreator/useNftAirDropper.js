import { ethers } from "ethers";

import { Connection } from "../../components/Web3Connection/Connection";
import { useNftAirDropperContract } from "../useContract";

const useErc721Collection = () => {
  const { signer, network } = Connection.useContainer();

  // const init = async (
  //   contract,
  //   name,
  //   symbol,
  //   baseURI,
  //   changesAvailable,
  //   totalSupply,
  //   needAllowance
  // ) => {
  //   const AIRDROPPER = await useNftAirDropperContract(contract);

  //   try {
  //     const tx = await COLLECTION?.connect(signer).init(
  //       name,
  //       symbol,
  //       baseURI,
  //       changesAvailable,
  //       totalSupply,
  //       needAllowance
  //     );
  //     const rc = await tx.wait();
  //     const event = rc.events.find(event => event.event === "Init");
  //     return event.args;
  //   } catch (err) {
  //     console.log(err);
  //     return err;
  //   }
  // };

  // const approvedMinting = async (contract, to, amount) => {
  //   const AIRDROPPER = await useNftAirDropperContract(contract);

  //   try {
  //     const tx = await COLLECTION?.connect(signer).approvedMinting(
  //       to,
  //       amount
  //     );
  //     const rc = await tx.wait();
  //     const event = rc.events.find(event => event.event === "Init");
  //     return event.args;
  //   } catch (err) {
  //     console.log(err);
  //     return err;
  //   }
  // };

  // return {
  //   init,
  //   approvedMinting,
  // };
};

export default useErc721Collection;
