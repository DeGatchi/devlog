import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
} from "../../components/ReusableStyles";

export const Bar = styled(Wrap)`
  padding: 0;

  position: relative;

  width: 500px;
  height: 3em;
  background-color: #222;
  border-radius: 1.5em;
  color: white;

  &:before {
    content: attr(data-label);
    font-weight: 100;
    display: flex;
    align-items: center;
    position: absolute;
    left: 0.5em;
    top: 0.5em;
    bottom: 0.5em;
    width: calc(var(--width, 0) * 1%);
    min-width: 2rem;
    max-width: calc(100% - 1em);
    background-color: #069;
    border-radius: 1em;
    padding: 1em;
  }
`;

export const ProgressBar = () => {


  return (
    <>
      <Wrap>
        <Bar data-label="Loading..."></Bar>
      </Wrap>
    </>
  );
};
