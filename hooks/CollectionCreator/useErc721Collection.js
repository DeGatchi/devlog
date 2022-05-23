import { ethers } from "ethers";

import { Connection } from "../../components/Web3Connection/Connection";
import { useErc721CollectionContract } from "../useContract";

const useErc721Collection = () => {
  const { signer, network } = Connection.useContainer();

  const init = async (
    _contract,
    _name,
    _symbol,
    _baseURI,
    _changesAvailable,
    _totalSupply,
    _needAllowance
  ) => {
    const COLLECTION = await useErc721CollectionContract(_contract);
    try {
      const tx = await COLLECTION?.connect(signer).init(
        _name,
        _symbol,
        _baseURI,
        _changesAvailable,
        _totalSupply,
        _needAllowance
      );
      const rc = await tx.wait();
      const event = rc.events.find((event) => event.event === "Init");
      const [creator, name, symbol, updatesAvailable] = event.args;
      return [creator, name, symbol, updatesAvailable];
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const name = async (contract) => {
    const COLLECTION = await useErc721CollectionContract(contract);
    try {
      const tx = await COLLECTION?.connect(signer).name();
      return tx;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const approvedMinting = async (contract, to) => {
    const COLLECTION = await useErc721CollectionContract(contract);
    try {
      const tx = await COLLECTION?.connect(signer).approvedMinting(to);
      const rc = await tx.wait();
      return rc;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const approveMinting = async (contract, to, amount) => {
    const COLLECTION = await useErc721CollectionContract(contract);
    try {
      const tx = await COLLECTION?.connect(signer).approveMinting(to, amount);
      const rc = await tx.wait();
      const event = rc.events.find(
        (event) => event.event === "MintingApproved"
      );
      const [_to, _amount] = event.args;
      return [_to, _amount];
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  return {
    init,
    name,
    approvedMinting,
    approveMinting,
  };
};

export default useErc721Collection;
