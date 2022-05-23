import { ethers } from "ethers";

import {
  CircleStakingAddress,
  SoulSummonerAddress,
  MulticallAddress,
  FarmHelperAddress,
  AtomicSwapAddress,
  CollectionFactoryAddress,
  NftSaleFactoryAddress,
  QueryHelperAddress,
  WethAddress,
} from "../constants";

// Token contracts
import IERC20 from "../constants/abis/IERC20.json";
import IERC777 from "../constants/abis/IERC777.json";
import IERC721 from "../constants/abis/IERC721.json";
import IERC1155 from "../constants/abis/IERC1155.json";
import IUniswapV2PairABI from "../constants/abis/uniswap-v2-pair.json";

import QueryHelperABI from "../constants/abis/QueryHelper.json";
import WethABI from "../constants/abis/Weth.json";

// AtomicSwap contracts
import AtomicSwapABI from "../constants/abis/AtomicSwap.json";

// Collection Creator contracts
import CollectionFactoryABI from "../constants/abis/CollectionCreator/CollectionFactory.json";
import Erc721CollectionABI from "../constants/abis/CollectionCreator/Erc721Collection.json";

// AirDropper contract
import AirDropperFactoryABI from "../constants/abis/AirDropCreator/AirDropperFactory.json";
import NftAirDropperABI from "../constants/abis/AirDropCreator/NftAirDropper.json";

// NFT Launchpad
import NftSaleFactoryABI from "../constants/abis/NftLaunchpad/SaleFactory.json";
import NftBuyoutFixedABI from "../constants/abis/NftLaunchpad/BuyoutFixed.json";
import NftBuyoutThresholdsABI from "../constants/abis/NftLaunchpad/BuyoutThresholds.json";
import NftBuyoutBondingCurveABI from "../constants/abis/NftLaunchpad/BuyoutBondingCurve.json";

// SOUL contracts
import CircleStakingABI from "../constants/abis/CircleStaking.json"
import SoulSummonerABI from "../constants/abis/SoulSummoner.json";
import MulticallABI from "../constants/abis/multicall.json";
import FarmHelperABI from "../constants/abis/FarmHelper.json";


//  Reusable
// ------------------------------------------------------------

export const useContract = async (address, abi) => {
  try {
    const provider = await new ethers.providers.Web3Provider(window.ethereum, "any");
    const contract = await new ethers.Contract(address, abi, provider);
    return contract
  } catch (error) {
    console.error("Failed to get contract", error);
    return null;
  }
};

export const useQueryHelperContract = async (chainId) => {
  return useContract(QueryHelperAddress[chainId], QueryHelperABI)
}

export const useWethContract = async (chainId) => {
  return useContract(WethAddress[chainId], WethABI)
}


//  Token Standards
// ------------------------------------------------------------
export const useErc20Contract = async (address) => {
  return useContract(address, IERC20.abi);
};

export const useErc777Contract = async (address) => {
  return useContract(address, IERC777.abi);
};

export const useErc721Contract = async (address) => {
  return useContract(address, IERC721.abi);
};

export const useErc1155Contract = async (address) => {
  return useContract(address, IERC1155.abi);
};

export const useLpTokenContract = async (pairAddress) => {
  return useContract(pairAddress, IUniswapV2PairABI);
};





//  AtomicSwap
// ------------------------------------------------------------
export const useAtomicSwapContract = async (chainId) => {
  return await useContract(AtomicSwapAddress[chainId], AtomicSwapABI);
};




//  Collection Creator
// ------------------------------------------------------------
export const useCollectionFactoryContract = async (chainId) => {
  return await useContract(CollectionFactoryAddress[chainId], CollectionFactoryABI);
};

export const useErc721CollectionContract = async (address) => {
  return await useContract(address, Erc721CollectionABI);
}




//  AirDropper Creator
// ------------------------------------------------------------
export const useAirDropperFactory = async (chainId) => {
  return await useContract(AirDropperFactoryAddress[chainId], AirDropperFactoryABI);
};

export const useNftAirDropperContract = async (address) => {
  return await useContract(address, NftAirDropperABI);
}




//  NFT Launchpad
// ------------------------------------------------------------
export const useSaleFactoryContract = async (chainId) => {
  return await useContract(NftSaleFactoryAddress[chainId], NftSaleFactoryABI);
};

export const useBuyoutFixedContract = async (address) => {
  return await useContract(address, NftBuyoutFixedABI);
};

export const useBuyoutThresholdsContract = async (address) => {
  return await useContract(address, NftBuyoutThresholdsABI);
};

export const useBuyoutBondingCurveContract = async (address) => {
  return await useContract(address, NftBuyoutBondingCurveABI);
};






//  SOUL Contracts
// ------------------------------------------------------------
export const useCircleStakingContract = async () => {
  return await useContract(CircleStakingAddress, CircleStakingABI);
};

export const useSoulSummonerContract = async () => {
  return await useContract(SoulSummonerAddress, SoulSummonerABI);
};

export const useMulticallContract = async () => {
  return await useContract(MulticallAddress, MulticallABI);
};

export const useFarmHelperContract = async () => {
  return await useContract(FarmHelperAddress, FarmHelperABI);
};
