import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FaQuestionCircle, FaQuestion, FaCog } from "react-icons/fa";

import {
  TooltipWrapper,
  TooltipTarget,
  CenterContainer,
  TooltipBox,
} from "./index";

const Tooltip = ({ text, children, position }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const targetRef = useRef(null);
  const showTooltip = isHovered || isFocused;

  const handleClick = (e) => {
    e.preventDefault();
    if (targetRef.current) {
      targetRef.current.blur();
    }
  };

  return (
    <TooltipWrapper>
      <TooltipTarget
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onClick={handleClick}
        ref={targetRef}
        showOnFocus={isFocused}
      >
        {children}
      </TooltipTarget>
      {showTooltip && (
        <CenterContainer position={position}>
          <TooltipBox position={position}>{text}</TooltipBox>
        </CenterContainer>
      )}
    </TooltipWrapper>
  );
};

export default Tooltip;
