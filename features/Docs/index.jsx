import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";

import {
  CenterScreen,
  Text,
  ClickableText,
  ExternalLink,
  Wrap,
  Button,
  Input,
  TokenImgTest,
  NavUnderline,
} from "../../components/ReusableStyles";
import { FaBars, FaTwitter, FaDiscord, FaAngleDown } from "react-icons/fa";

const ContentWrap = styled(Wrap)`
  /* padding: 0 35rem; */
  justify-content: center;
`;

const Heading = styled(Text)`
  padding: 0;
  font-size: 2rem;
  font-weight: 600;
  /* color: #3d81db; */
  color: #5c94ee;

  @media screen and (max-width: 1440px) {
    text-align: center;
  }
`;

const Body = styled(Text)`
  font-size: 1.25rem;
  font-weight: 200;

  @media screen and (max-width: 1440px) {
    text-align: center;
  }
`;

const Section = ({ heading, body }) => {
  return (
    <Wrap padding="2rem 0">
      <Heading>{heading}</Heading>
      <Body padding="0" color="white">
        {body}
      </Body>
    </Wrap>
  );
};

const Index = () => {
  return (
    <ContentWrap>
      <Wrap padding="2rem 0">
        <Text padding="0" fontSize="3rem" textAlign="center" color="#5c94ee">
          Theater FAQ
        </Text>
        <Text
          padding="0 0 1rem 0"
          fontSize="1rem"
          textAlign="center"
          color="#aaa"
        >
          06/03/2022
        </Text>

        <Wrap padding="0.1rem 0" width="100%" bgColor="white" opacity="10%" />
      </Wrap>
      <Section
        heading={"What is Theater?"}
        body={`Theater is an NFT suite that focuses on providing permissionless opportunities for creators and investors.`}
      />

      <Wrap padding="2rem 0">
        <Heading fontWeight="600">
          Why would someone use the NFT launchpad?
        </Heading>
        <Body padding="0" color="white">
          Theater aims to bridge the gap between opportunity and execution.
          Traditionally, creators, e.g, artists, have their art prepared and
          need a means of execution. Unfortunately, these indie creators may not
          have the funds or time to develop a platform for their art and are
          then the opportunity either passes or the process becomes very time
          consuming, leading to the creator stopping.
        </Body>
        <Body padding="1rem 0 0 0" color="white">
          Theater automates the entire process for no upfront cost. From
          creating the collection, to generating a mint site with a distributing
          method that would require an expensive developer. The only catch is a
          measly 5% commission fee of the total capital raised from the sales,
          meaning you receive the remaining 95%!
        </Body>
      </Wrap>

      <Wrap padding="2rem 0">
        <Heading fontWeight="600">How do I invest in NFT projects?</Heading>
        <Body padding="0" color="white">
          First, navigate to [Explore] {`->`} [Launched NFTs] where you will be
          presented with a modal. Here you can type in the ID of the sale you
          wish to view and it will take you to a detailed page of the NFT sale.
        </Body>

        <Wrap padding="2rem 0" display="flex" justifyContent="center">
          <TokenImgTest
            height="auto"
            width="auto"
            src={"/images/articles/nft-searcher-modal.png"}
          />
        </Wrap>

        <Body padding="0" color="white">
          In order to purchase an NFT you will need to wrap your Fantom (FTM)
          into Wrapped Fantom (WFTM). You can do this by use the modal in the
          top right to wrap and unwrap your Fantom. We use WFTM for contract
          efficiency. Some models need to have a specific amount sent at a
          specific time and the only way to do this is to have the contract move
          funds for us instead of us declaring the parameters manually. If we
          were to do it manually, it would take us time to input, call the tx
          and confirm it and during that time the price would change, leading to
          the call failing.
        </Body>
        <Wrap padding="2rem 0" display="flex" justifyContent="center">
          <TokenImgTest
            height="auto"
            width="auto"
            src={"/images/articles/eth-converter.png"}
          />
        </Wrap>

        <Body padding="0" color="white">
          Now that we have WFTM, you may approve the sale contract to use your
          WFTM when you mint a token. When you mint, your WFTM will be sent to
          the contract and you will receive the NFT instantly. Happy hunting,
          anon!
        </Body>
        <Wrap padding="2rem 0" display="flex" justifyContent="center">
          <TokenImgTest
            height="auto"
            width="auto"
            src={"/images/articles/fixed-detailed-page.png"}
          />
        </Wrap>
      </Wrap>

      <Wrap padding="2rem 0">
        <Heading>
          Can I use the NFT launchpad with an NFT collection that was not made
          with Theater's NFT collection creator?
        </Heading>
        <Body padding="0" color="white">
          At this stage, no. The Theater NFT collection (made from our
          Collection Creator (https://theaterdao.xyz/create/collection)) has
          specialised functionality that lets the contract approve external
          contracts to mint on it's behalf. This allows for greater scalability
          and expansion than the traditional mint from the common contract
          route. In this case, we would approve the NFT launchpad's sale
          contracts to mint and distribute it through their functionality.
        </Body>
      </Wrap>

      <Wrap padding="2rem 0">
        <Heading>How do I use the NFT launchpad?</Heading>
        <Body padding="0" color="white">
          First, you'll need to create an NFT collection with Theater in order
          to use the launchpad. You can do this by going to [Create] {`->`} [NFT
          Collection].
        </Body>
        
        <Wrap padding="2rem 0" display="flex" justifyContent="center">
          <TokenImgTest
            height="auto"
            width="auto"
            src={"/images/articles/nft-collection.png"}
          />
        </Wrap>

        <Body padding="0" color="white">
          Here you will be greeted with the [Collection Creator] modal where you
          will input your desired parameters for your collection.
        </Body>
        <Wrap padding="2rem 0" display="flex" justifyContent="center">
          <TokenImgTest
            height="auto"
            width="auto"
            src={"/images/articles/collection-creator-modal.png"}
          />
        </Wrap>
        <Body padding="0" color="white">
          But first, we need to create the contract. This is the NFT collection
          we will configure. Make After the contract has been created make sure
          to copy the address of the contract for future reference. Then it's
          time to configure the collection how you like and then click
          [Initialise] to set the configuration. Don't worry! The collection is
          IERC721 compatible, meaning it will be compatible with protocols using
          IERC721.
        </Body>
        <Body padding="1rem 0" color="white">
          After you've created and initialised the contract, it's time to raise
          capital to build your brand! Let's head over to [Create] {`->`} [NFT
          Launch] where you will be greeted with [Select Your Distribution
          Method] section. This is where you will a sale model that will be used
          to sell the NFT collection you just created. Each model has their
          perks, provoking different emotional states in investors. If you are a
          new artist that is relatively unknown the [Fixed] model may be the
          best choice for a consistent steady price that doesn't punish late
          investors, whereas the [Thresholds] model would reward early
          investors, great for an established community and building hype.
        </Body>

        <Body padding="1rem 0" color="white">
          For this example, we will go with the [Fixed] model.
        </Body>

        <Body padding="1rem 0" color="white">
          Just like how we started with the collection, we need to create the
          sale contract. After it has been created, we are then able to either
          skip or add optional data to increase the confidence of investors.
          This includes, a preview of our collection (can be a separate IPFS
          link to the collection), a twitter post that will reference the [See
          minting site] link under our created contract and an external link for
          any additional information you want to provide. Once at least one of
          the 3 inputs have been provided we are able to verify.
        </Body>

        <Wrap padding="2rem 0" display="flex" justifyContent="center">
          <TokenImgTest
            height="auto"
            width="auto"
            src={"/images/articles/fixed-modal-create.png"}
          />
        </Wrap>

        <Body padding="1rem 0" color="white">
          After either skipping or verifying our sale, we now get into the
          specifics of the sale. This parameters are what determines how the
          sale will perform. First, we need to add our collection contract we
          made at the beginning. Then we choose when we want to begin the sale.
          If we want to start now, input `0`. Then we put how many days the sale
          should last for. The amount of NFTs we want to sell and the price of
          each NFT.
        </Body>

        <Wrap padding="2rem 0" display="flex" justifyContent="center">
          <TokenImgTest
            height="auto"
            width="auto"
            src={"/images/articles/fixed-modal-settings.png"}
          />
        </Wrap>

        <Body padding="1rem 0" color="white">
          Now that we've established the specifics of our sale, lets approve the
          sale contract to mint on our behalf. When someone mints a token, the
          wrapped fantom goes to the contract, which is then accessible to be
          withdrawn, automatically paying the commission and sending the funds
          to your wallet. When the total supply is sold out or the duration has
          be exceeded, the sale will finalise and minting via the sale contract
          will be unaccessible. However, since we only hooked our collection to
          the sale contract, we still have access to create another sale later
          on if so desired or do something else. You own both contracts!
        </Body>

        <Wrap padding="2rem 0" display="flex" justifyContent="center">
          <TokenImgTest
            height="auto"
            width="auto"
            src={"/images/articles/fixed-detailed-page.png"}
          />
        </Wrap>

        <Body padding="1rem 0" color="white">
          So now what?
        </Body>

        <Body padding="1rem 0" color="white">
          The sale contract will continue until it ends and you will (hopefully)
          have sold some NFTs and raised enough capital to start progressing
          your brand, whether thats from hiring contractors, team members,
          hosting services, etc. The journey is yours and we're thrilled to have
          helped you get this far!
        </Body>
      </Wrap>
    </ContentWrap>
  );
};

export default Index;
