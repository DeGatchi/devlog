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
  padding: 0 20rem;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    padding: 0;
  }
`;

const Heading = styled(Text)`
  padding: 0;
  font-size: 2.25rem;

  @media screen and (max-width: 1200px) {
    text-align: center;
  }
`;

const Body = styled(Text)`
  padding: 0;
  font-size: 1.25rem;

  @media screen and (max-width: 1200px) {
    text-align: center;
  }
`;

const Template = () => {
  return (
    <ContentWrap>
      <Wrap padding="2rem 0">
        <Text textAlign="center">Theater Blog</Text>
      </Wrap>
      <Wrap padding="2rem 0">
        <Heading>What is Theater?</Heading>
        <Body>Theater is an NFT suite that speicialises in</Body>
      </Wrap>
    </ContentWrap>
  );
};

export default Template;
