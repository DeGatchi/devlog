import { useCallback } from "react";
import { ethers, BigNumber } from "ethers";
import { Connection } from "../components/Web3Connection/Connection";

import {
  useSoulSummonerContract,
  useFarmHelperContract,
  useLpTokenContract,
  useErc20Contract,
  useCircleStakingContract
} from "./useContract";

import { SoulSummonerAddress } from "../constants";
import FarmPids from "../constants/FarmPids";

function useSoulSummoner(lpToken, token1Address, token2Address) {
  const { address, signer } = Connection.useContainer();

  const lpTokenContract = useLpTokenContract(lpToken);

  // ----------------------------------------------
  //                  Farm Helper
  // ----------------------------------------------
  
  const totalPendingRewards = async () => {
    try {
      const helperContract = await useFarmHelperContract();
      const result = await helperContract?.totalPending();
      return result
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  const harvestAllFarms = async () => {
    try {
      const totalPools = summonerContract?.poolLength()

      for (let i; i < totalPools; i++) {
        const pending = await pendingSoul(i, account)

        if (pending !== 0) {
          if (i === 0) {
            const tx = await enterStaking(0)
            await tx.wait()
          } else {
            const tx = await deposit(i, 0)
            await tx.wait()
          }
        }
      }
    } catch (e) {
      console.log(e)
      return e
    }
  }

  /**
   * [0] : pidAlloc
   * [1] : totalAlloc
   * [2] : soulPerYear
   */
  const fetchYearlyRewards = async (pid) => {
    try {
      const helperContract = await useFarmHelperContract();
      const result = await helperContract?.fetchYearlyRewards(pid);
      const poolWeight = result?.[0] / result?.[1]
      const poolYearlyRewards = poolWeight * result?.[2]
      return poolYearlyRewards
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  const fetchStakedBals = async (pid) => {
    try {
      const helperContract = await useFarmHelperContract();
      const result = await helperContract?.fetchStakedBals(pid);
      return result;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  /**
   * [0] : ftmUsdcTotalFtm
   * [1] : ftmUsdcTotalUsdc
   * [2] : soulFtmTotalSoul
   * [3] : soulFtmTotalFusd
   * [4] : ethFtmTotalFtm
   * [5] : ethFtmTotalEth
   */
  const fetchTokenRateBals = async () => {
    try {
      const helperContract = await useFarmHelperContract();
      const result = await helperContract?.fetchTokenRateBals();

      const ftmPrice = result?.[1] / (result?.[0] / 10 ** 12);
      const soulPrice = result?.[3] / result?.[2];
      const ethPrice = (result?.[4] / result?.[5]) * ftmPrice;

      console.log(
        "usdcPerFtm:",
        ftmPrice,
        "fusdPerSoul:",
        soulPrice,
        "ethPrice:",
        ethPrice
      );

      return [ftmPrice, soulPrice, ethPrice];
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  /**
   * [0] : summonerLpTokens
   * [1] : lpTokenSupply
   * [2] : pidAlloc
   * [3] : totalAlloc
   * [4] : soulPerYear
   * [5] : tvl (token balance)
   */
  const fetchFarmStats = async (pid, token1Name, token2Name) => {
    try {
      const helperContract = await useFarmHelperContract();

      const rates = await fetchTokenRateBals();
      const ftmPrice = rates?.[0];
      const soulPrice = rates?.[1];
      const ethPrice = rates?.[2];

      const result = await helperContract?.fetchPidDetails(pid);

      // ------ TVL ------

      const summonerPidPercOfSupply = result?.[0] / result?.[1]; // i.e. 1/10 = 0.1
      const rawPidValue = (summonerPidPercOfSupply * result?.[5]) / 10 ** 18; // i.e. 0.1 * 100,000 = 10,000

      let pidTvl = rawPidValue;

      if (token1Name === "USDC" || token2Name === "USDC") {
        pidTvl = (summonerPidPercOfSupply * result?.[5]) / 10 ** 6;
      } else if (token1Name === "FUSD" || token2Name === "FUSD") {
      } else if (token1Name === "FTM" || token2Name === "FTM") {
        pidTvl = rawPidValue * ftmPrice;
      } else if (token1Name === "SOUL" || token2Name === "SOUL") {
        pidTvl = rawPidValue * soulPrice;
      } else if (token1Name === "WETH" || token2Name === "WETH") {
        pidTvl = rawPidValue * ethPrice;
      }

      // ------ APR ------

      // weight * soulPerYear
      const poolWeight = result?.[2] / result?.[3];
      const yearlySoulRewardAlloc = poolWeight * result?.[4];
      const apr =
        (((yearlySoulRewardAlloc * soulPrice) / pidTvl) * 100) / 10 ** 18;

      // console.log(token1Name, '/', token2Name, '- ftmUsdcPrice + soulFusdPrice', ftmUsdcPrice, soulFusdPrice)

      const fixedPidTvl = Number(pidTvl).toFixed(0);
      const fixedApr = Number(apr).toFixed(0);

      // console.log(token1Name, '/', token2Name, '- poolWeight', poolWeight)
      console.log(
        token1Name,
        "/",
        token2Name,
        "- summonerPidPercOfSupply",
        summonerPidPercOfSupply
      );
      console.log(
        token1Name,
        "/",
        token2Name,
        "- tokenBal",
        Number(result?.[5]) / 10 ** 18
      );
      console.log(token1Name, "/", token2Name, "- rawPidValue", rawPidValue);

      console.log(token1Name, "/", token2Name, "- pidTvl", pidTvl);
      console.log(token1Name, "/", token2Name, "- fixedPidTvl", fixedPidTvl);
      console.log(token1Name, "/", token2Name, "- fixedApr", fixedApr);

      return [fixedPidTvl, fixedApr];
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  // -----------------------
  //  Staking Funcs
  // -----------------------

  const fetchStakeStats = async () => {
    try {
      const helperContract = await useFarmHelperContract();

      const rates = await fetchTokenRateBals()
      const soulPrice = rates?.[1]

      // summonerBal, totalSupply
      const result = await helperContract?.fetchPercOfSupply(0)

      // ------ TVL ------

      const pidTvl = (result?.[0] * soulPrice) / 10 ** 18

      // ------ APR ------

      const details = await helperContract?.fetchYearlyRewards(0)

      // weight * soulPerYear
      const poolWeight = details?.[0] / details?.[1]
      const yearlySoulRewardAlloc = poolWeight * details?.[2]
      const apr = (((yearlySoulRewardAlloc * soulPrice) / pidTvl) * 100) / 10 ** 18

      const fixedPidTvl = Number(pidTvl).toFixed(0)
      const fixedApr = Number(apr).toFixed(0)

      console.log('SOUL', '- fixedPidTvl', fixedPidTvl)
      console.log('SOUL', '- fixedApr', fixedApr)

      return [fixedPidTvl, fixedApr]
    } catch (e) {
      console.log(e)
      return e
    }
  }

  // enterStaking
  const enterStaking = async (amount) => {
    try {
      const summonerContract = await useSoulSummonerContract();

      const result = await summonerContract?.connect(signer).enterStaking(amount);
      return result;
    } catch (e) {
      console.log(e);
      alert(e.message);
      return e;
    }
  };

  // leaveStaking
  const leaveStaking = async (amount) => {
    try {
      const summonerContract = await useSoulSummonerContract();

      let result = await summonerContract?.connect(signer).leaveStaking(amount);
      return result;
    } catch (e) {
      // alert(e.message)
      console.log(e);
      return e;
    }
  };

  // -----------------------
  //  Interaction Functions
  // -----------------------

  // Deposit
  const deposit = async (pid, amount) => {
    try {
      const summonerContract = await useSoulSummonerContract();

      const result = await summonerContract?.connect(signer).deposit(pid, amount);
      return result;
    } catch (e) {
      console.log(e);
      // alert(e.message)
      return e;
    }
  };

  // Withdraw
  const withdraw = async (pid, amount) => {
    try {
      const summonerContract = await useSoulSummonerContract();

      let result = await summonerContract?.connect(signer).withdraw(pid, amount);
      return result;
    } catch (e) {
      alert(e.message);
      console.log(e);
      return e;
    }
  };

  // -----------------------
  //  Read Functions
  // ---------------------- -

  // Pool length
  const poolLength = async () => {
    try {
      const summonerContract = await useSoulSummonerContract();

      const result = await summonerContract?.poolLength();
      return result;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  // pool info:
  // [0] lpTokenUsed,
  // [1] allocPoint,
  // [2] lastRewardTime,
  // [3] accSoulPerShare
  const poolInfo = async (pid) => {
    try {
      const summonerContract = await useSoulSummonerContract();

      const result = await summonerContract?.poolInfo(pid);
      const lpTokenUsed = result?.[0].toString();
      const allocPoint = BigNumber.from(result?.[1]);
      const lastRewardTime = BigNumber.from(result?.[2]);
      const accSoulPerShare = BigNumber.from(result?.[3]);
      return [lpTokenUsed, allocPoint, lastRewardTime, accSoulPerShare];
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  // user info:
  // [0] amount,
  // [1] rewardDebt,
  // [3] lastWithdrawTime,
  // [3] lastDeposiTime,
  // [4] timeDelta
  const userInfo = async (pid, address) => {
    try {
      const summonerContract = await useSoulSummonerContract();

      const result = await summonerContract?.userInfo(pid, address);
      const amount = result?.[0].toString();
      const rewardDebt = result?.[1].toString();
      return [amount, rewardDebt];
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  // userDelta
  const userDelta = async (pid, address) => {
    try {
      const summonerContract = await useSoulSummonerContract();

      const result = await summonerContract?.userDelta(pid, address);
      return result;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  // amount of soul pending for redemption
  const pendingSoul = async (pid, user) => {
    try {
      const summonerContract = await useSoulSummonerContract();

      const result = await summonerContract?.pendingSoul(pid, user);
      return result;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  // -----------------------
  //  Fee Fetchers
  // -----------------------

  const getFeePercent = async (pid) => {
    try {
      const summonerContract = await useSoulSummonerContract();
      const timePassed = await summonerContract?.userDelta(pid, address);
      const result = await summonerContract?.getFeeRate(pid, timePassed);
      return result;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  // -----------------------
  //  User LP Allocation
  // -----------------------

  /**
   * The amount of tokens the user holds compared to the contract
   * Note : need to make func to calculate how many staked compared to pool
   */
  const fetchUserLpTokenAlloc = async (address) => {
    try {
      const lpTokenContract = useLpTokenContract(lpToken);

      const contractBal = await lpTokenContract?.balanceOf(SoulSummonerAddress);

      const userBal = await lpTokenContract?.balanceOf(address);

      const alloc = userBal / contractBal;
      const allocPerc = alloc * 100;

      return [alloc, allocPerc];
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  /**
   * The amount of tokens the user holds compared to the contract
   * Note : need to make func to calculate how many staked compared to pool
   */
  const fetchUserLpTokenAllocInFarm = async (pid, address) => {
    try {
      const lpTokenContract = await useLpTokenContract(lpToken);

      // get how many lpTokens in contract
      const totalSupply = await lpTokenContract?.totalSupply();
      // get how many lpTokens held by Summoner
      const heldBySummoner = await lpTokenContract?.balanceOf(
        SoulSummonerAddress
      );
      // get how many lpTokens held by user
      const heldByUser = await lpTokenContract?.balanceOf(address);

      // summoner % of total supply
      const summonerPercOfSupply = (heldBySummoner / totalSupply) * 100;

      // user unstaked only %s
      const userUnstakedPercOfSupply = (heldByUser / totalSupply) * 100;
      const userUnstakedPercOfSummoner = (heldByUser / heldBySummoner) * 100;

      // user staked only %s
      const userStakedBal = (await userInfo(pid, address))?.[0];

      console.log("userStakedBal", userStakedBal);

      const userStakedPercOfSupply =
        (userStakedBal / summonerPercOfSupply) * 100;
      const userStakedPercOfSummoner = (userStakedBal / heldBySummoner) * 100;
      // console.log('userStakedBal', userStakedBal.toString())
      // console.log('heldBySummoner', heldBySummoner.toString())
      // console.log('userStakedPercOfSummoner', userStakedPercOfSummoner.toString())

      // user staked + unstaked %s
      const netUserLpTokens = userStakedBal + heldByUser;
      const netUserPercOfSupply = (netUserLpTokens / totalSupply) * 100;
      const netUserPercOfSummoner = (netUserLpTokens / heldBySummoner) * 100;

      return [
        summonerPercOfSupply,
        userUnstakedPercOfSupply,
        userUnstakedPercOfSummoner,
        userStakedPercOfSupply,
        userStakedPercOfSummoner,
        netUserPercOfSupply,
        netUserPercOfSummoner,
      ];
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  // -----------------------
  //  Liquidity + APR
  // -----------------------

  // soul is emitted per second
  const soulPerSecond = async () => {
    try {
      const summonerContract = await useSoulSummonerContract();

      const sps = await summonerContract?.soulPerSecond();
      return sps;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  // total allocation point (net amount of all pools combined)
  const totalAllocPoint = async () => {
    try {
      const summonerContract = await useSoulSummonerContract();

      const totalAlloc = await summonerContract?.totalAllocPoint();
      return totalAlloc;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  // const fetchFusdValue = useCallback(async (lpToken) => {
  //   try {
  //     // return total amount of lp tokens locked in summoner contract
  //     const netLpTokens = await lpTokenContract?.balanceOf(SOUL_SUMMONER_ADDRESS[chainId])

  //     // how many ftm tokens held in the lpTokenContract address
  //     const fusdOrFtmAmount = isFusd ? await wftmContract.balanceOf(lpToken) : await fusdContract.balanceOf(lpToken)

  //     return fusdOrFtmAmount
  //   } catch (e) {
  //     console.log(e)
  //     return e
  //   }
  // }, [summonerContract])

  /**
   * Value of SOUL in FUSD
   */
  const fusdPerSoul = async () => {
    try {
      const soulContract = useTokenContract(FarmPids[0].token1Address[250]);
      const fusdContract = useTokenContract(FarmPids[0].token2Address[250]);

      const totalSoul = await soulContract.balanceOf(
        FarmPids[0].lpAddresses[250]
      );
      const totalFusd = await fusdContract.balanceOf(
        FarmPids[3].lpAddresses[250]
      );

      const fusdPerSoul = totalFusd / totalSoul;

      return fusdPerSoul;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  // ------- FARMS -------

  /**
   * Value of liqudiity of lpToken
   */
  const fetchLiquidityValue = async (token1Name, token2Name) => {
    try {
      const token1Contract = useErc20Contract(token1Address);
      const token2Contract = useErc20Contract(token2Address);

      const token1Bal = await token1Contract.balanceOf(lpToken);
      const token2Bal = await token2Contract.balanceOf(lpToken);

      let totalLpValue;

      // check token1 && token2 name for base pair + fetch toatl value
      if (token1Name === "FUSD" || token2Name === "FUSD") {
        totalLpValue =
          (token1Name === "FUSD"
            ? ethers.utils.formatUnits(token1Bal.toString())
            : ethers.utils.formatUnits(token2Bal.toString())) * 2;
      } else if (token1Name === "FTM" || token2Name === "FTM") {
        totalLpValue =
          (token1Name === "FTM"
            ? ethers.utils.formatUnits(token1Bal.toString())
            : ethers.utils.formatUnits(token2Bal.toString())) * 2;
      } else if (token1Name === "SOUL" || token2Name === "SOUL") {
        const soulPerFusd = await fusdPerSoul();
        totalLpValue =
          (token1Name === "SOUL"
            ? ethers.utils.formatUnits(token1Bal.toString())
            : ethers.utils.formatUnits(token2Bal.toString())) *
          soulPerFusd *
          2;
      }

      // lp tokens held by summoner
      const totalLpTokens = await lpTokenContract?.totalSupply();
      const summonerLpTokens = await lpTokenContract?.balanceOf(
        SoulSummonerAddress
      );
      const supplyHeldBySummoner = (summonerLpTokens / totalLpTokens) * 100;

      // value of lp tokens held by summoner
      const summonerTotalLpValue = supplyHeldBySummoner * totalLpValue;

      // console.log('totalLpTokens', totalLpTokens.toString())
      // console.log('summonerLpTokens', summonerLpTokens.toString())
      // console.log('supplyHeldBySummoner', supplyHeldBySummoner.toString())

      // console.log('totalLpValue', totalLpValue.toString())
      // console.log('summonerTotalLpValue', summonerTotalLpValue.toString())

      return [totalLpValue, summonerTotalLpValue];
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  /**
   * Fetches the APR percentage for the `pid`
   */
  const fetchAprAndLiquidity = async (
    pid,
    token1Name,
    token2Name,
    token1Address,
    token2Address,
    lpToken
  ) => {
    try {
      const SECONDS_PER_YEAR = 31_536_000;

      // pool weight
      const alloc = await poolInfo(pid);
      const totalAlloc = await totalAllocPoint(pid);
      const poolWeight = alloc?.[1] / totalAlloc;

      // soul per sec (sps)
      const soulPerSec = await soulPerSecond();
      const formattedSps = ethers.utils.formatUnits(soulPerSec.toString());

      // amount of soul allocated && allocated to this pool per year
      // const yearlySoulFarmAlloc = SECONDS_PER_YEAR * formattedSps
      const yearlySoulFarmAlloc = SECONDS_PER_YEAR * formattedSps * poolWeight;

      // value of lp tokens held by summoner
      const fetchedLiquidity = await fetchLiquidityValue(
        token1Name,
        token2Name,
        token1Address,
        token2Address,
        lpToken
      );

      // farm apr
      const farmApr = (yearlySoulFarmAlloc * 100) / fetchedLiquidity[1];

      return [farmApr, fetchedLiquidity[0], fetchedLiquidity[1]];
    } catch (e) {
      console.log(e);
      return e;
    }
  };

 // ------- STAKING -------

  /**
   * Value of liqudity of lpToken
   */
   const fetchPid0LiquidityValue = async (lpToken) => {
    try {
      // SOUL held by summoner
      const rawSummonerBal = await lpTokenContract?.balanceOf(SoulSummonerAddress)
      const summonerBalance = BigNumber.from(ethers.utils.formatUnits(rawSummonerBal))
      console.log('summonerBalance', ethers.utils.formatUnits(summonerBalance))

      // summonerBal * soulPrice = TVL

      const rawSoulPrice = await fusdPerSoul()
      const soulPrice = BigNumber.from(ethers.utils.formatUnits(rawSoulPrice))
      console.log('soulPrice', soulPrice)

      const totalLpValue = summonerBalance.mul(soulPrice)
      console.log('totalLpValue', totalLpValue)

      return totalLpValue
    } catch (e) {
      console.log(e)
      return e
    }
  }

  /**
   * Soul Price
   */
  const fetchSoulPrice = async () => {
    try {
      // summonerBal * soulPrice = TVL
      const soulPrice = await fusdPerSoul()
      console.log('soulPrice', soulPrice)

      return soulPrice
    } catch (e) {
      console.log(e)
      return e
    }
  }

  /**
   * Fetches the APR percentage for the `pid`
   */
  const fetchPid0AprAndLiquidity = async (lpToken) => {
    try {
      // pool weight
      const alloc = await poolInfo(0)
      const totalAlloc = await totalAllocPoint()
      const poolWeight = alloc?.[1].div(totalAlloc)

      // soul per sec (sps)
      const soulPerSec = await soulPerSecond()
      const formattedSps = BigNumber.from(ethers.utils.formatUnits(soulPerSec))
      const secPerYear = BigNumber.from(ethers.utils.formatUnits(31_536_000))

      // amount of soul allocated to this pool per year
      const yearlySoulFarmAlloc = formattedSps.mul(secPerYear).mul(poolWeight)

      // value of lp tokens held by summoner
      const fetchedLiquidity = await fetchPid0LiquidityValue(lpToken)

      // farm apr
      const farmApr = yearlySoulFarmAlloc.div(fetchedLiquidity)

      return [farmApr, fetchedLiquidity]
    } catch (e) {
      console.log(e)
      return e
    }
  }

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
   const circlePoolInfo = async (pid) => {
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
  const circleUserInfo = async (pid) => {
    const circlesContract = await useCircleStakingContract();
    try {
      const result = await circlesContract?.userInfo(pid, address);
      return result;
    } catch (e) {
      console.error(e);
      return e;
    }
  };


  const circlePendingRewards = async (pid) => {
    const circlesContract = await useCircleStakingContract();
    try {
      const result = await circlesContract?.pendingReward(pid, address);
      return result;
    } catch (e) {
      console.error(e);
      return e;
    }
  };


  const circleDeposit = async (pid, amount) => {
    const circlesContract = await useCircleStakingContract();
    try {
      const result = await circlesContract?.connect(signer).deposit(pid, amount);
      return result;
    } catch (e) {
      console.error(e);
      return e;
    }
  };

  const circleWithdraw = async (pid, amount) => {
    const circlesContract = await useCircleStakingContract();
    try {
      let result = await circlesContract?.connect(signer).withdraw(pid, amount);
      return result;
    } catch (e) {
      console.error(e);
      return e;
    }
  };


  return {
    // Farm Helper
    totalPendingRewards,
    harvestAllFarms,
    fetchYearlyRewards,
    fetchStakedBals,
    fetchTokenRateBals,
    fetchFarmStats,

    // Staking
    fetchStakeStats,
    fetchPid0AprAndLiquidity,
    enterStaking,
    leaveStaking,

    // Farming
    deposit,
    withdraw,

    fetchUserLpTokenAlloc,
    fetchLiquidityValue,

    // General
    poolLength,
    poolInfo,
    userInfo,
    userDelta,
    pendingSoul,
    getFeePercent,
    fetchUserLpTokenAllocInFarm,

    circlePoolInfo,
    circleUserInfo,
    circleDeposit,
    circleWithdraw,
    circlePendingRewards
  };
}

export default useSoulSummoner;
