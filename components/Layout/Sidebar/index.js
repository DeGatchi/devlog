import Link from "next/link";
import { Web3Btn } from "../../Web3Connection/ConnectBtn";

import { Wrap } from "../../ReusableStyles";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  // SideBtnWrap
  // SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  const toggleHome = () => {
    toggle();
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <Wrap margin='1rem 2rem 0 0' display='flex' justifyContent='center'>
            <Web3Btn />
          </Wrap>
          <Link href="/" passHref>
            <SidebarLink
              onClick={toggle}
              padding="0 .5rem 0 .5rem"
              fontSize="1.1rem"
              color="#aaa"
            >
              Home
            </SidebarLink>
          </Link>
          
          <Link href="/create/collection" passHref>
            <SidebarLink
              onClick={toggle}
              padding="0 .5rem 0 .5rem"
              fontSize="1.1rem"
              color="#aaa"
            >
              Create Collection
            </SidebarLink>
          </Link>

          <Link href="/create/sale" passHref>
            <SidebarLink
              onClick={toggle}
              padding="0 .5rem 0 .5rem"
              fontSize="1.1rem"
              color="#aaa"
            >
              Launch NFT
            </SidebarLink>
          </Link>

  
          {/* <Link href="/trade" passHref>
            <SidebarLink
              onClick={toggle}
              padding="0 .5rem 0 .5rem"
              fontSize="1.1rem"
              color="#aaa"
            >
              Trade
            </SidebarLink>
          </Link>
          <Link href="/farms" passHref>
            <SidebarLink
              onClick={toggle}
              padding="0 .5rem 0 .5rem"
              fontSize="1.1rem"
              color="#aaa"
            >
              Farms
            </SidebarLink>
          </Link>
          <Link href="/trade" passHref>
            <SidebarLink
              onClick={toggle}
              padding="0 .5rem 0 .5rem"
              fontSize="1.1rem"
              color="#aaa"
            >
              Stake
            </SidebarLink>
          </Link> */}
          {/* <Link href="/bridge" passHref>
            <SidebarLink
              onClick={toggle}
              padding="0 .5rem 0 .5rem"
              fontSize="1.1rem"
              color="#aaa"
            >
              Bridge
            </SidebarLink>
          </Link>
          <Link href="/faq" passHref>
            <SidebarLink
              onClick={toggle}
              padding="0 .5rem 0 .5rem"
              fontSize="1.1rem"
              color="#aaa"
              href="/faq"
            >
              FAQ
            </SidebarLink>
          </Link> */}
        </SidebarMenu>

        {/* <SideBtnWrap>
          <SidebarRoute to="//exchange.soulswap.finance" target="_blank">
            EXCHANGE
          </SidebarRoute>
        </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
