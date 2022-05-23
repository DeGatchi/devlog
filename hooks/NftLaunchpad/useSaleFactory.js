import { ethers } from "ethers";

import { Connection } from "../../components/Web3Connection/Connection";
import { useSaleFactoryContract } from "../useContract";

const useSaleFactory = () => {
  const { signer, network } = Connection.useContainer();

  // returns:  [[modelUsed, saleContract]]
  const baseFeePerc = async () => {
    const FACTORY = await useSaleFactoryContract(network?.chainId);
    try {
      const result = await FACTORY?.connect(signer).baseFeePerc();
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
  
  // returns:  [[modelUsed, saleContract]]
  const saleList = async () => {
    const FACTORY = await useSaleFactoryContract(network?.chainId);
    try {
      const result = await FACTORY?.connect(signer).saleList();
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  // returns: [modelUsed, saleContract]
  const sale = async (id) => {
    const FACTORY = await useSaleFactoryContract(network?.chainId);
    try {
      const result = await FACTORY?.connect(signer).sale(id);
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const saleLength = async () => {
    const FACTORY = await useSaleFactoryContract(network?.chainId);
    try {
      const result = await FACTORY?.connect(signer).saleLength();
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const model = async (id) => {
    const FACTORY = await useSaleFactoryContract(network?.chainId);
    try {
      const result = await FACTORY?.connect(signer).model(id);
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const modelLength = async () => {
    const FACTORY = await useSaleFactoryContract(network?.chainId);
    try {
      const result = await FACTORY?.connect(signer).modelLength();
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const modelList = async () => {
    const FACTORY = await useSaleFactoryContract(network?.chainId);
    try {
      const result = await FACTORY?.connect(signer).modelList();
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const addHost = async (_treasury) => {
    const FACTORY = await useSaleFactoryContract(network?.chainId);
    try {
      const tx = await FACTORY?.connect(signer).addHost(_treasury);
      const rc = await tx.wait();
      const event = rc.events.find(event => event.event === "HostAdded");
      const [creator, treasury] = event.args;
      return [creator, treasury];
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const changeHostTreasury = async (_hostId, _treasury, _commissionPerc) => {
    const FACTORY = await useSaleFactoryContract(network?.chainId);
    try {
      const tx = await FACTORY?.connect(signer).changeHostTreasury(_hostId, _treasury);
      const rc = await tx.wait();
      const event = rc.events.find(event => event.event === "HostChanged");
      const [hostId, treasury] = event.args;
      return [hostId, treasury];
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const createSale = async (model) => {
    const FACTORY = await useSaleFactoryContract(network?.chainId);
    try {
      const tx = await FACTORY?.connect(signer).createSale(model);
      const rc = await tx.wait();
      const event = rc.events.find(event => event.event === "SaleCreated");
      const [creator, cloneAddress, saleLength] = event.args;
      return [creator, cloneAddress, saleLength];
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  return {
    baseFeePerc,
    saleList,
    sale,
    saleLength,
    model,
    modelLength,
    modelList,
    addHost,
    changeHostTreasury,
    createSale,
  };
};

export default useSaleFactory;
