import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FaQuestionCircle, FaQuestion, FaCog } from "react-icons/fa";

import { Wrap, Text } from "./index";

const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 0;
  }

  to {
    transform: scale(.25);
    opacity: 1;
  }
`;

const FadeWrap = styled(Wrap)`
    animation: {active => active == current ? fadeIn : fadeOut} 1s linear;
`;

const Fade = () => {
  return (
    <>
      <FadeWrap>
        <Text>Yolofsdasdasd</Text>
      </FadeWrap>
    </>
  );
};

export default Fade;
