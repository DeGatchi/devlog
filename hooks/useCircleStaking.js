import { ethers, BigNumber } from "ethers";
import { Connection } from "../components/Web3Connection/Connection";

import { useCircleStakingContract } from "./useContract";

export default function useCircleStaking() {
  const { address, signer } = Connection.useContainer();

  /**
   * [0] : reward token
   * [1] : rewards per second
   * [2] : token precision
   * [3] : seance staked
   * [4] : last reward time
   * [5] : accRewardPerShare
   * [6] : end time
   * [7] : start time
   * [8] : user limit end time
   * [9] : dao address
   */
  const poolInfo = async (pid) => {
    try {
      const circlesContract = await useCircleStakingContract();

      const result = await circlesContract?.poolInfo(pid);
      return result;
    } catch (e) {
      console.error(e);
      return e;
    }
  };

  // [0] : amount
  // [1] : rewardDebt
  const userInfo = async (pid) => {
    const circlesContract = await useCircleStakingContract();
    try {
      const result = await circlesContract?.userInfo(pid, address);
      return result;
    } catch (e) {
      console.error(e);
      return e;
    }
  };

  const getOwnership = async (pid) => {
    try {
      const poolInfo = await poolInfo(pid);
      const totalStaked = poolInfo?.[3];

      const userInfo = await userInfo(pid);
      const userStaked = userInfo?.[0];

      const ownedPerc = (userStaked / totalStaked) * 100;

      return ownedPerc;
    } catch (e) {
      console.error(e);
      return e;
    }
  };

  const pendingRewards = async (pid) => {
    const circlesContract = await useCircleStakingContract();
    try {
      const result = await circlesContract?.pendingRewards(pid, address);
      return result;
    } catch (e) {
      console.error(e);
      return e;
    }
  };

  // -----------------------
  //  Interaction
  // -----------------------

  const deposit = async (pid, amount) => {
    const circlesContract = await useCircleStakingContract();
    try {
      const result = await circlesContract?.deposit(pid, amount);
      return result;
    } catch (e) {
      console.error(e);
      return e;
    }
  };

  const withdraw = async (pid, amount) => {
    const circlesContract = await useCircleStakingContract();
    try {
      let result = await circlesContract?.withdraw(pid, amount);
      return result;
    } catch (e) {
      console.error(e);
      return e;
    }
  };

  return {
    getOwnership,

    poolInfo,
    pendingRewards,
    userInfo,

    deposit,
    withdraw,
  };
}
