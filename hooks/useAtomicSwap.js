import { ethers } from "ethers";

import { Connection } from "../components/Web3Connection/Connection";
import { zeroAddress } from "../constants";
import { useAtomicSwapContract, useMulticallContract } from "./useContract";

const useAtomicSwap = () => {
  const { signer, network } = Connection.useContainer();

  const viewTotalTrades = async () => {
    const AS = await useAtomicSwapContract(250);

    try {
      const result = await AS?.connect(signer).totalTrades();
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const viewTrade = async (tradeId) => {
    const AS = await useAtomicSwapContract(250);

    try {
      const result = await AS?.connect(signer).viewTrade(tradeId);
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const getBypass = async () => {
    const AS = await useAtomicSwapContract(250);

    try {
      const result = await AS?.connect(signer).getBypass();
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const cancelTrade = async (tradeId) => {
    const AS = await useAtomicSwapContract(250);

    try {
      const result = await AS?.connect(signer).cancelTrade(tradeId);
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const acceptTrade = async (tradeId) => {
    const AS = await useAtomicSwapContract(250);

    try {
      await AS?.connect(signer).acceptTrade(tradeId);
    } catch (err) {
      console.log(err);
      return err;
    }
  };


  // current fee to create + accept a trade


  // purchase bypass to skip pass fees


  // returns trade offer


  // creator can accepts trade offer

  
  // create trade offer


  // cancel trade offer

  /**
   * @param {string} to
   * @param {uint256} duration : when the trade expires (if 0, unlimited time)
   * @param {Array<Object>} user1Tokens : givingTokens / lose
   * @param {Array<Object>} user2Tokens : gettingTokens / receive
   */
  const createTrade = async (to, duration, user1Tokens, user2Tokens) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const AS = await useAtomicSwapContract(250);
    // const Multicall = await useMulticallContract(250);

    try {
      // const currentTime = await Multicall.blockTimestamp();
      console.log("====================================")
      console.log("user1Tokens", user1Tokens)
      console.log("user2Tokens", user2Tokens)
      await AS?.connect(signer).createTrade(
        to,
        duration,
        user1Tokens,
        // multiple tokens example: 
        // [
        //   ["0xD54Cf31D5653F4a062f5DA4C83170A5867d04442", 20, [0], [amount]],
        //   ["0xD54Cf31D5653F4a062f5DA4C83170A5867d04442", 20, [0], [amount]],
        //   ["0xD54Cf31D5653F4a062f5DA4C83170A5867d04442", 20, [0], [amount]],
        //   ["0xD54Cf31D5653F4a062f5DA4C83170A5867d04442", 20, [0], [amount]],
        //   ["0xD54Cf31D5653F4a062f5DA4C83170A5867d04442", 20, [0], [amount]],
        // ]
        user2Tokens
        // single token example:
        // [["0x0000000000000000000000000000000000000000", 0, [0], [0]]]
      );
    } catch (err) {
      console.log(err);
      // RPC transfer require statement error
      // if (err.code === -32603) {
      //   alert("Insufficient balance for transfer.");
      // } else {
        // alert(err.message);
      // }
      return err;
    }
  };

  return {
    viewTotalTrades,
    viewTrade,
    getBypass,
    cancelTrade,
    acceptTrade,
    createTrade,
  };
};

export default useAtomicSwap;
