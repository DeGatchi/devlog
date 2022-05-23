import { BigNumber, ethers } from "ethers";

import { Connection } from "../../components/Web3Connection/Connection";
import { useBuyoutThresholdsContract } from "../useContract";

const useBuyoutThresholds = () => {
  const { signer, network } = Connection.useContainer();

  const getBuyoutEvents = async (_contract) => {
    const SALE = await useBuyoutThresholdsContract(_contract);
    try {
      // get the event() 
      const buyoutFilter = await SALE.filters.Buyout();
      // get all events with Buyout()`
      const buyoutEvents = await SALE.queryFilter(buyoutFilter);
      console.log("buyoutEvents", buyoutEvents);
      return buyoutEvents;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const init = async (
    _contract,
    _host,
    _collection,
    _startDelay,
    _duration,
    _marks,
    _merkleRoot,
    _bonuses
  ) => {
    const SALE = await useBuyoutThresholdsContract(_contract);
    try {
      console.log(
        _contract,
        _host,
        _collection,
        Number(_startDelay * 86400),
        Number(_duration * 86400),
        _marks,
        _merkleRoot,
        []
      );
      const tx = await SALE?.connect(signer).init(
        Number(_host),
        _collection,
        Number(_startDelay * 86400),
        Number(_duration * 86400),
        _marks,
        _merkleRoot,
        []
      );
      const rc = await tx.wait();
      const event = rc.events.find((event) => event.event === "Initialised");
      const [host, collection] = event.args;
      return [host, collection];
    } catch (err) {
      console.log(err);
      return err;
    }
  };


  const setMeta = async (_contract, _twitterPost, _infoLink, _preview) => {
    const SALE = await useBuyoutThresholdsContract(_contract);
    try {
      const tx = await SALE?.connect(signer).setMeta(
        _twitterPost,
        _infoLink,
        _preview
      );
      const rc = await tx.wait();
      const event = rc.events.find((event) => event.event === "MetaUpdated");
      const [twitterPost, infoLink, preview] = event.args;
      return [twitterPost, infoLink, preview];
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const claimRaised = async (_contract) => {
    const SALE = await useBuyoutThresholdsContract(_contract);
    try {
      const tx = await SALE?.connect(signer).claimRaised();
      const rc = await tx.wait();
      const event = rc.events.find((event) => event.event === "ClaimedRaised");
      const amount = event.args;
      return amount;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const buyout = async (_contract, _merkleProof, _amount) => {
    const SALE = await useBuyoutThresholdsContract(_contract);
    try {
      console.log("params", _merkleProof, _amount);

      const tx = await SALE?.connect(signer).buyout(_merkleProof, _amount);
      const rc = await tx.wait();
      const event = rc.events.find((event) => event.event === "Buyout");
      const [buyer, amount, bonusAmount, cost] = event.args;
      return [buyer, amount, bonusAmount, cost];
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const getBulkBonus = async (_contract, _amount) => {
    const SALE = await useBuyoutThresholdsContract(_contract);
    try {
      const tx = await SALE?.connect(signer).getBulkBonus(_amount);
      return tx;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const getMarks = async (_contract) => {
    const SALE = await useBuyoutThresholdsContract(_contract);
    try {
      const tx = await SALE?.connect(signer).marks();
      return tx;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  // returns: [initialised, _info, _sale, _bulkBonuses, _marks]
  const getSaleDetails = async (_contract) => {
    const SALE = await useBuyoutThresholdsContract(_contract);
    try {
      const tx = await SALE?.connect(signer).getSaleDetails();
      return tx;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  // returns: [initialised, _info, _sale, _bulkBonuses, _marks]
  const getBuyoutThresholdsSaleDetails = async (_contract) => {
    const SALE = await useBuyoutThresholdsContract(_contract);
    try {
      const tx = await SALE?.connect(signer).getSaleDetails();
      return tx;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const getBuyoutThresholdsOwner = async (_contract) => {
    const SALE = await useBuyoutThresholdsContract(_contract);
    try {
      const tx = await SALE?.connect(signer).owner();
      return tx;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  return {
    getBuyoutEvents,
    init,
    setMeta,
    claimRaised,
    buyout,
    getBulkBonus,
    getMarks,
    getSaleDetails,
    getBuyoutThresholdsSaleDetails,
    getBuyoutThresholdsOwner,
  };
};

export default useBuyoutThresholds;
