import React, { useState } from "react";
import styled from "styled-components";
import { Web3Btn } from "../Web3Connection/ConnectBtn";
// import NavDropdown from "./NavDropDown";
import {
  Wrap,
  Text,
  ExternalLink,
  MobileIcon,
  TokenImgTest,
  Illustration,
  NavUnderline,
} from "../ReusableStyles";
import Link from "next/link";
import { FaBars, FaTwitter, FaDiscord, FaAngleDown } from "react-icons/fa";

// import Dropdown from "../ReusableStyles/Dropdown";

const Nav = styled.div`
  position: sticky;
  position: -webkit-sticky; /* Safari */
  top: 0;
  background-color: #111;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.25em 1rem;
  height: 6vh;
  z-index: 99;

  @media screen and (max-width: 1200px) {
    justify-content: center;
    padding: 1em 0;
  }
`;

const Web3Wrap = styled(Wrap)`
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

// Navbar

export const NavMenu = styled.div`
  // disappear when past thresholds
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const HoverText = styled(Text)`
  /* background-color: "#3D81DB"; */

  &:hover {
    transition: all 0.2s ease-in-out;
    opacity: 50%;
    cursor: pointer;
  }
`;

const HoverWrap = styled(Wrap)`
  &:hover {
    transition: all 0.2s ease-in-out;
    opacity: 50%;
    cursor: pointer;
    /* color: "#3D81DB"; */
  }
`;

const ItemBox = styled(Wrap)`
  transition: all 0.2s ease-in-out;
  background-color: rgb(32, 33, 33);
  padding: 0.5rem 0.5rem;
  border-radius: 0.5rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    background-color: #111010c8;
    opacity: 75%;
  }
`;

const NavHeader = styled(Wrap)`
  padding: 0.5rem 0.5rem 0.8rem 0.5rem;
  /* background-color: red; */
  border-radius: 0.5rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const Navbar = ({ toggle }) => {
  const [dropDown, setDropDown] = useState(0);

  return (
    <Nav zIndex="9">
      <Wrap display="flex">
        <Link href="/" passHref>
          <ExternalLink fontSize="1.8rem">
            <TokenImgTest
              height="2.5rem"
              width="2.5rem"
              src={"/images/assets/pfps/DeGatchi-x-Tomb.png"}
            />
          </ExternalLink>
        </Link>
        <Wrap padding="0 2rem 0 0" />

        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
      </Wrap>
      <Wrap padding="0" display="flex">
        <NavUnderline
          padding="0 .25rem"
          fontSize="1.1rem"
          color="white"
          href="https://twitter.com/DeGatchi"
        >
          <Text>Twitter</Text>
        </NavUnderline>
        <NavUnderline
          padding="0 .25rem"
          fontSize="1.1rem"
          color="white"
          href="http://www.github.com/DeGatchi"
        >
          <Text>GitHub</Text>
        </NavUnderline>
      </Wrap>
    </Nav>
  );
};

export default Navbar;
