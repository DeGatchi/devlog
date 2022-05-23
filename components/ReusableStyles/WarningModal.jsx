import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdInfoOutline } from "react-icons/md";

import {
  Wrap,
  ClickableText,
  InputRow,
  Heading,
  Text,
  ExternalLink,
  Button,
  Input,
  TokenImgTest,
  OptionSelector,
  OverlayOpacity,
  CenterScreen,
  RemoveBtn,
} from "./index";
import Tooltip from "./tooltip";

const WarningModal = ({ description, onClose, onConfirm }) => {
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
            <Text fontWeight="500">HOLD UP</Text>
          </Wrap>
          <Wrap padding="1.5rem 0 0 0" display="flex" justifyContent="center">
            <Text fontSize=".9rem" fontWeight="300" textAlign="center">
              You are giving the NFT Launchpad access to mint x amount from your
              NFT contract. Are you sure you want to confirm?
            </Text>
          </Wrap>
        </Wrap>
        <Wrap
          bgColor="#333"
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
              borderRadius=".25rem"
              border="2px solid rgb(75, 75, 75)"
              bgColor="rgb(75, 75, 75)"
              onClick={() => onClose()}
            >
              Cancel
            </Button>
          </Wrap>
          <Wrap padding="0 0 0 .5rem " width="100%">
            <Button
              height="3rem"
              fontSize="0.9rem"
              width="100%"
              borderRadius=".25rem"
              onClick={() => onConfirm()}
            >
              Yep!
            </Button>
          </Wrap>
        </Wrap>
      </CenterScreen>
    </OverlayOpacity>
  );
};

export default WarningModal;
