import React, { useState, useEffect } from "react";
import Link from "next/link";

import {
  CenterScreen,
  Heading,
  Text,
  ClickableText,
  ExternalLink,
  Wrap,
  TokenImgTest,
} from "../../components/ReusableStyles";
import { FaBars, FaTwitter, FaDiscord, FaAngleDown } from "react-icons/fa";

// import UnauditedWarning from "../../components/ReusableStyles/UnauditedWarning";
import styled from "styled-components";

const Center = styled(CenterScreen)`
  position: absolute;
  top: ${({ top }) => (top ? `${top}` : "50%")};
  left: 50%;
  right: -10%;
  transform: translate(-50%, -50%);
`;

const ImgHover = styled(TokenImgTest)`
  border-radius: 1.5rem;
  height: 20rem;
  width: 20rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 50%;
  }
`;

const LandingPage = () => {
  return (
    <Wrap padding="0" justifyContent="center">
      <Wrap padding="0" display="flex" justifyContent="center">
        <Wrap padding="0">
          {/* <Wrap padding="2rem 2rem 0 0">
            <ExternalLink
              href="https://twitter.com/DeGatchi"
              target="_blank"
              padding="1rem 0 0 0"
              fontSize="1.2rem"
              width="1rem"
            >
              <ImgHover src={"/images/assets/pfps/DeGatchi-x-Tomb.png"} />
            </ExternalLink>
          </Wrap> */}

          <Wrap padding="0 0 6rem 0" justifyContent="center">
            <Wrap>
              <Text
                padding="1rem 0 0 0"
                fontSize="1rem"
                fontWeight="500"
                color="white"
                width="1rem"
                maxWidth="35rem"
                textAlign="left"
              >
                I'm a full-stack web3 dev, specialising in Solidity and protocol
                development. My work aims to push the limits of DeFi.
              </Text>
            </Wrap>
            <Wrap>
              <Text
                padding="1rem 0 0 0"
                fontSize="1rem"
                fontWeight="500"
                color="white"
                width="1rem"
                maxWidth="35rem"
                textAlign="left"
              >
                Currently, I'm exploring MEV bot development since I've built
                all the smart contracts I've wanted to build (and also to feed
                my competitive PvP urges).
              </Text>
            </Wrap>
          </Wrap>
        </Wrap>
      </Wrap>

      <Wrap padding="0 0 6rem 0" justifyContent="center" display="flex">
        <Wrap padding="0" justifyContent="center">
          <Wrap>
            <Text
              padding="1rem 0 0 0"
              fontSize="1rem"
              fontWeight="500"
              color="white"
              width="1rem"
              maxWidth="35rem"
              textAlign="left"
            >
              I'm a full-stack web3 dev, specialising in Solidity and protocol
              development. My work aims to push the limits of DeFi.
            </Text>
          </Wrap>
          <Wrap>
            <Text
              padding="1rem 0 0 0"
              fontSize="1rem"
              fontWeight="500"
              color="white"
              width="1rem"
              maxWidth="35rem"
              textAlign="left"
            >
              Currently, I'm exploring MEV bot development since I've built all
              the smart contracts I've wanted to build (and also to feed my
              competitive PvP urges).
            </Text>
          </Wrap>
        </Wrap>
      </Wrap>

      <Wrap justifyContent="center" display="flex">
        <Wrap>
          <Text padding="1rem 0">
            SoulSwap — AMM protocol owned liquidity via bonding farms
          </Text>

          <ExternalLink href="https://www.theaterdao.xyz" target="_blank">
            <Text padding="1rem 0">
              TheaterDAO — Fully decentralised NFT platform
            </Text>
          </ExternalLink>

          <Text padding="1rem 0">
            NFT Launchpad — NFT launcher w/ 7 sale models
          </Text>

          <Text padding="1rem 0">
            NFT Objectifier — On-chain demand finder for NFTs
          </Text>

          <Text padding="1rem 0">
            NFT AirDropper — Airdrop/claim a new NFT collection
          </Text>

          <Text padding="1rem 0">
            AlgoAuctions — Fully automated auction house
          </Text>

          <Text padding="1rem 0">
            AtomicTrade — Public/private trading of tokens
          </Text>

          <ExternalLink
            href="https://github.com/TheaterDao/token-creator"
            target="_blank"
          >
            <Text padding="1rem 0">
              TokenCreator — Quick and easy token contract creator
            </Text>
          </ExternalLink>

          <ExternalLink
            href="https://github.com/DeGatchi/loan-market"
            target="_blank"
          >
            <Text padding="1rem 0">
              LoanMarket — Collateralised token loaning w/ adjustable interest
              rates
            </Text>
          </ExternalLink>

          <ExternalLink
            href="https://github.com/DeGatchi/treasury"
            target="_blank"
          >
            <Text padding="1rem 0">
              Treasury — A simple plug + play treasury contract
            </Text>
          </ExternalLink>

          <ExternalLink
            href="https://github.com/DeGatchi/single-asset-liquidity"
            target="_blank"
          >
            <Text padding="1rem 0">
              SingleAssetLiquidity — Provide 1 side of the lp pair
            </Text>
          </ExternalLink>

          <Text padding="1rem 0">
            FlashloanMarket — Publicly offer tokens to flashloan for a fee
          </Text>

          <Text padding="1rem 0">MetaverseMarket — Bid, Sell and Buy NFTs</Text>

          <Text padding="1rem 0">
            SkullySniper — Snipe a specific NFT id from the FTM skully mint
          </Text>

          <Text padding="1rem 0">TimeBandit — Long-tail MEV bot</Text>

          <ExternalLink
            href="https://github.com/DeGatchi/customisable-nft"
            target="_blank"
          >
            <Text padding="1rem 0">
              CustomisableNFT — On-chain customisable NFT minter
            </Text>
          </ExternalLink>
        </Wrap>
      </Wrap>
    </Wrap>
  );
};

export default LandingPage;
