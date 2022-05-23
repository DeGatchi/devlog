import React from "react";
import styled from "styled-components";

import { Wrap, Heading, Text } from "../../components/ReusableStyles";

const Header = ({ title, blurb }) => {
  return (
    <Wrap padding='0' display='flex' justifyContent='center'>
      <Wrap padding='0'>
        <Heading padding='0' textAlign='center' fontSize='2rem'>{title}</Heading>
        <Text padding='0' textAlign='center' color="#666">{blurb}</Text>
      </Wrap>
    </Wrap>
  );
};

export default Header;
