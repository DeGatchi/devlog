import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdInfoOutline } from "react-icons/md";

import { Wrap } from "./index";

import Link from "next/link";


const Dropdown = ({ children }) => {
  return (
    <Wrap padding="0" position='absolute'>
      <Wrap
        bgColor="rgb(32, 33, 33)"
        borderRadius="1rem"
        padding="1rem"
        height="auto"
        width="auto"
      >
        {children}
      </Wrap>
    </Wrap>
  );
};

export default Dropdown;
