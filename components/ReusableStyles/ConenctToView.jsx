import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import { FaQuestionCircle, FaQuestion, FaCog } from "react-icons/fa";
// import { MdInfoOutline } from "react-icons/md";

import { ethers, BigNumber, Contract } from "ethers";

import { Connection } from "../Web3Connection/Connection";

import {
  Wrap,
  Text,
  ExternalLink,
  Button,
  Input,
  CenterScreen,
  OverlayOpacity,
} from ".";

const ConenctToView = ({ chains }) => {
  const { address, signer, network, connectToFtmOpera } = Connection.useContainer();

  return (
    <OverlayOpacity>
      <CenterScreen>
        <Wrap
          bgColor="#3e3d3d"
          borderRadius=".5rem .5rem 0 0"
          padding="1.5rem"
          height="auto"
          width="26rem"
        >
          <Wrap padding="0" display="flex" justifyContent="center">
            <Text fontWeight="500">NETWORK NOT SUPPORTED</Text>
          </Wrap>
          <Wrap padding="1.5rem 0 0 0" display="flex" justifyContent="center">
            <Text fontSize=".9rem" fontWeight="300" textAlign="center">
              This service is not available on your connected network (
              {network?.chainId}), yet. Please connect to one of the following
              to enter: {chains}.
            </Text>
          </Wrap>
        </Wrap>
        <Wrap
          bgColor="#252629"
          borderRadius="0 0 .5rem .5rem"
          padding="1.5rem"
          display="flex"
          justifyContent="center"
          width="100%"
        >
          <Wrap padding="0 .5rem 0 0" width="100%">
            <Button
              height="3rem"
              fontSize="0.9rem"
              width="100%"
              borderRadius=".325rem"
              border="2px solid rgb(75, 75, 75)"
              bgColor="rgb(75, 75, 75)"
              onClick={() => (window.location = "/")}
            >
              Leave
            </Button>
          </Wrap>
          <Wrap padding="0 0 0 .5rem " width="100%">
            <Button
              height="3rem"
              fontSize="0.9rem"
              width="100%"
              borderRadius=".325rem"
              onClick={() => connectToFtmOpera()}
            >
              Connect
            </Button>
          </Wrap>
        </Wrap>
      </CenterScreen>
    </OverlayOpacity>
  );
};

export default ConenctToView;
