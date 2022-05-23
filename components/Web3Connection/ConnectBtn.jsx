import { useState } from "react";
import styled, { keyframes } from "styled-components";

import { Button, Text, Wrap } from "../ReusableStyles";
import { Connection } from "./Connection";

// import Dropdown from "../ReusableStyles/Dropdown";

const ConnectDropdown = styled.div`
  position: absolute;
  top: 58px;
  width: 8rem;
  transform: translateX(3%);
  /* border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px; */
  border-radius: 8px;
  background-color: rgb(32, 33, 33);
  border-color: rgb(32, 33, 33);
  padding: 0.5rem;
  overflow: hidden;
  transition: 0.3s ease-in-out;
`;

const Option = styled(Text)`
  font-size: 0.8rem;
  padding: .5rem 0;
  &:hover {
    opacity: 50%;
    cursor: pointer;
  }
`;

const ConnectBtn = styled(Button)`
  &:hover {
  }
`;

export const Web3Btn = () => {
  const {
    address,
    network,
    connect,
    disconnect,
    connectToEthMainnet,
    connectToFtmOpera,
    connectToFtmTestnet,
  } = Connection.useContainer();

  const [openNetworks, setOpenNetworks] = useState(false);

  return (
    <Wrap display="flex">
      <Wrap
        onMouseEnter={() => setOpenNetworks(true)}
        onMouseLeave={() => setOpenNetworks(false)}
      >
        <ConnectBtn auto onClick={address ? disconnect : connect}>
          {address
            ? address.slice(0, 5) + "..." + address.slice(-3)
            : "Connect"}
        </ConnectBtn>
        {openNetworks ? (
          <ConnectDropdown>
            {/* <Option onClick={() => connectToEthMainnet()} bgColor="transparent">
            Ethereum
          </Option> */}
            <Option onClick={() => connectToFtmOpera()} bgColor="transparent">
              Fantom
            </Option>
            {/* <Option onClick={() => connectToFtmTestnet()} bgColor="transparent">
              Fantom Testnet
            </Option> */}
          </ConnectDropdown>
        ) : null}
      </Wrap>
      {/* <p>{address ? `ChainId: ${network.chainId}` : null} </p> */}
    </Wrap>
  );
};
