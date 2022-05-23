import styled, { css, keyframes } from "styled-components";
import Link from "next/link";
import { VscNoNewline } from "react-icons/vsc";

// Lime :                   #2de273
// Sky-blue:                #67add2
// Ribbon Red:              #ff3c78
// LooksRare background:    #131618
// LooksRare Inside:        #1e2226
// Yellow:                  #ffa619

// discord green, button:   #349b53
// discord green, text:     #46d771

// discord gray, bg:        #252629
// discord gray, button:    #2f3237

// light gray:              rgb(52, 52, 52)
// dark gray:               rgb(42, 42, 42)
// OpenSea-Blue:            #3D81DB
// Clean red:               #db3d3d

export const Container = styled.div`
  align-items: center;
  transition: all 0.3s ease-in-out;
  margin: 0 1rem;
  padding: 1rem 0.5rem 0.5rem 0.5rem;
  border-radius: 2rem;
  border: 2px solid #444;
  background-color: #111;
`;

export const Illustration = styled.img`
  display: ${({ display }) => (display ? `${display}` : "block")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? `${justifyContent}` : "left"};
  height: ${({ height }) => (height ? `${height}` : ``)};
  width: ${({ width }) => (width ? `${width}` : `50rem`)};
  padding: ${({ padding }) => (padding ? `${padding}` : ``)};
  margin: ${({ margin }) => (margin ? `${margin}` : ``)};
  border: ${({ border }) => (border ? `${border}` : "")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}` : `1rem`};
  outline: none;
`;

export const InputRow = styled.div`
  display: ${({ display }) => (display ? `${display}` : "block")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? `${justifyContent}` : "left"};
  align-items: ${({ alignItems }) => (alignItems ? `${alignItems}` : "left")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}` : `8px`};
  border: ${({ border }) => (border ? `${border}` : "1.5px solid #222")};
  background-color: ${({ bgColor }) => (bgColor ? `${bgColor}` : `#111`)};
  width: ${({ width }) => (width ? `${width}` : "")};
  height: ${({ height }) => (height ? `${height}` : "4rem")};
  max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}` : "100%")};
  overflow-y: ${({ overflowY }) => (overflowY ? `${overflowY}` : "auto")};
  overflow-x: ${({ overflowX }) => (overflowX ? `${overflowX}` : "auto")};
  margin: ${({ margin }) => (margin ? `${margin}` : "1rem 0")};
  padding: ${({ padding }) => (padding ? `${padding}` : "0.5rem")};
`;

export const Wrap = styled.div`
  top: ${({ top }) => (top ? `${top}` : "")};
  left: ${({ left }) => (left ? `${left}` : "")};
  right: ${({ right }) => (right ? `${right}` : "")};
  position: ${({ position }) => (position ? `${position}` : "")};
  z-index: ${({ zIndex }) => (zIndex ? `${zIndex}` : "")};
  width: ${({ width }) => (width ? `${width}` : "")};
  height: ${({ height }) => (height ? `${height}` : "")};
  margin: ${({ margin }) => (margin ? `${margin}` : "0 0")};
  padding: ${({ padding }) => (padding ? `${padding}` : "0.25rem 0.5rem")};
  display: ${({ display }) => (display ? `${display}` : "block")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? `${justifyContent}` : "left"};
  align-items: ${({ alignItems }) => (alignItems ? `${alignItems}` : "center")};
  vertical-align: ${({ verticalAlign }) =>
    verticalAlign ? `${verticalAlign}` : ""};
  opacity: ${({ opacity }) => (opacity ? `${opacity}` : "100%")};

  max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}` : "")};
  min-width: ${({ minWidth }) => (minWidth ? `${minWidth}` : "")};
  overflow-y: ${({ overflowY }) =>
    overflowY
      ? `${overflowY}`
      : ""}; /* Auto = scrollbar is only inside of text section */
  overflow-x: ${({ overflowX }) =>
    overflowX
      ? `${overflowX}`
      : ""}; /* Auto = scrollbar is only inside of text section */
  overflow: ${({ overflow }) =>
    overflow
      ? `${overflow}`
      : ""}; /* Auto = scrollbar is only inside of text section */
  background-color: ${({ bgColor }) => (bgColor ? `${bgColor}` : ``)};
  border: ${({ border }) => (border ? `${border}` : ``)};
  border-bottom: ${({ borderBot }) => (borderBot ? `${borderBot}` : ``)};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}` : ``};

  grid-template-columns: ${({ gridTemplateColumns }) =>
    gridTemplateColumns ? `${gridTemplateColumns}` : ``};
  grid-gap: ${({ gridGap }) => (gridGap ? `${gridGap}` : ``)};

  transform: ${({ transform }) => (transform ? `${transform}` : "")};

  transition: all 0.2s ease-in-out;
`;

export const HoverWrap = styled(Wrap)`
  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    opacity: 50%;
  }
`;

export const ClickableWrap = styled(Wrap)`
  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    opacity: ${({ hoverOpacity }) =>
      hoverOpacity ? `${hoverOpacity}` : "50%"};
    background-color: ${({ hoverBgColor }) =>
      hoverBgColor ? `${hoverBgColor}` : ``};
  }
`;

export const ExternalLinkWrap = styled.a`
  top: ${({ top }) => (top ? `${top}` : "")};
  left: ${({ left }) => (left ? `${left}` : "")};
  right: ${({ right }) => (right ? `${right}` : "")};
  position: ${({ position }) => (position ? `${position}` : "")};
  z-index: ${({ zIndex }) => (zIndex ? `${zIndex}` : "")};
  width: ${({ width }) => (width ? `${width}` : "")};
  height: ${({ height }) => (height ? `${height}` : "")};
  margin: ${({ margin }) => (margin ? `${margin}` : "0 0")};
  padding: ${({ padding }) => (padding ? `${padding}` : "0.25rem 0.5rem")};
  display: ${({ display }) => (display ? `${display}` : "block")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? `${justifyContent}` : "left"};
  align-items: ${({ alignItems }) => (alignItems ? `${alignItems}` : "center")};
  vertical-align: ${({ verticalAlign }) =>
    verticalAlign ? `${verticalAlign}` : ""};

  max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}` : "")};
  overflow-y: ${({ overflowY }) =>
    overflowY
      ? `${overflowY}`
      : ""}; /* Auto = scrollbar is only inside of text section */
  overflow-x: ${({ overflowX }) =>
    overflowX
      ? `${overflowX}`
      : ""}; /* Auto = scrollbar is only inside of text section */
  overflow: ${({ overflow }) =>
    overflow
      ? `${overflow}`
      : ""}; /* Auto = scrollbar is only inside of text section */
  background-color: ${({ bgColor }) => (bgColor ? `${bgColor}` : ``)};
  border: ${({ border }) => (border ? `${border}` : ``)};
  border-bottom: ${({ borderBot }) => (borderBot ? `${borderBot}` : ``)};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}` : ``};

  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    opacity: 70%;
    cursor: pointer;
  }
`;

export const Heading = styled.h3`
  width: ${({ width }) => (width ? `${width}` : "")};
  padding: ${({ padding }) => (padding ? `${padding}` : "0")};
  margin: ${({ margin }) => (margin ? `${margin}` : "0 0")};
  text-align: ${({ textAlign }) => (textAlign ? `${textAlign}` : `left`)};
  color: ${({ color }) => (color ? `${color}` : `white`)};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : ``)};
`;

export const Text = styled.p`
  display: ${({ display }) => (display ? `${display}` : "block")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? `${justifyContent}` : "left"};
  padding: ${({ padding }) => (padding ? `${padding}` : "0 0.5rem")};
  margin: ${({ margin }) => (margin ? `${margin}` : "0 0")};
  color: ${({ color }) => (color ? `${color}` : `white`)};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : `1rem`)};
  font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : ``)};
  text-align: ${({ textAlign }) => (textAlign ? `${textAlign}` : `left`)};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}` : ``)};
`;

export const TokenImg = styled.img`
  height: ${({ height }) => (height ? `${height}` : `2rem`)};
  width: ${({ width }) => (width ? `${width}` : `1rem`)};
  padding: ${({ padding }) => (padding ? `${padding}` : `.5rem 1rem`)};
  background-color: ${({ bgColor }) =>
    bgColor ? `${bgColor}` : `rgb(18, 18, 18)`};
  color: ${({ color }) => (color ? `${color}` : `white`)};
  border: ${({ border }) => (border ? `${border}` : `1.5px solid #222`)};
  border-radius: 8px;
  outline: none;
`;

export const TokenImgTest = styled.img`
  opacity: ${({ opacity }) => (opacity ? `${opacity}` : "100%")};
  margin: ${({ margin }) => (margin ? `${margin}` : "0 0")};
  display: ${({ display }) => (display ? `${display}` : "block")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? `${justifyContent}` : "left"};
  position: ${({ position }) => (position ? `${position}` : "")};
  z-index: ${({ zIndex }) => (zIndex ? `${zIndex}` : "")};
  height: ${({ height }) => (height ? `${height}` : `2.8rem`)};
  width: ${({ width }) => (width ? `${width}` : `2.8rem`)};
  padding: ${({ padding }) => (padding ? `${padding}` : `0`)};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}` : `.5rem`};
  outline: none;
  background-color: ${({ bgColor }) => (bgColor ? `${bgColor}` : ``)};
  border: ${({ border }) => (border ? `${border}` : ``)};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}` : ``};
`;

export const ClickableText = styled(Text)`
  &:hover {
    opacity: 50%;
    cursor: pointer;
  }
`;

export const ExternalLink = styled.a`
  outline: none;
  text-decoration: none;
  color: ${({ color }) => (color ? `${color}` : "white")};
  border: ${({ border }) => (border ? `${border}` : `none`)};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : `1rem`)};
  text-align: ${({ textAlign }) => (textAlign ? `${textAlign}` : `left`)};
  padding: ${({ padding }) => (padding ? `${padding}` : "0")};
  margin: ${({ margin }) => (margin ? `${margin}` : "0 0")};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : ``)};

  /* text-shadow: 0 0 1px white; */

  &:hover {
    opacity: ${({ opacity }) => (opacity ? `${opacity}` : "50%")};
  }

  &.active {
    border-bottom: 3px solid violet;
  }
`;

export const Button = styled.button`
  z-index: ${({ zIndex }) => (zIndex ? `${zIndex}` : "")};
  padding: ${({ padding }) => (padding ? `${padding}` : `0`)};
  margin: ${({ margin }) => (margin ? `${margin}` : `0`)};
  width: ${({ width }) => (width ? `${width}` : `8rem`)};
  height: ${({ height }) => (height ? `${height}` : `2.5rem`)};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : `.9rem`)};
  font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : ``)};
  background-color: ${({ bgColor }) => (bgColor ? `${bgColor}` : `#3D81DB`)};
  color: ${({ color }) => (color ? `${color}` : `white`)};
  border: ${({ border }) => (border ? `${border}` : `2px solid #3D81DB`)};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}` : `8px`};
  outline: none;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 70%;
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 50%;
  }
`;

export const RemoveBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  outline: none;
  border: ${({ border }) => (border ? `${border}` : `2px solid #ea3030`)};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}` : `12px`};
  color: ${({ color }) => (color ? `${color}` : `black`)};
  width: ${({ width }) => (width ? `${width}` : `1.2rem`)};
  height: ${({ height }) => (height ? `${height}` : `1.2rem`)};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : `.8rem`)};
  font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : `900`)};
  padding: ${({ padding }) => (padding ? `${padding}` : `0`)};
  margin: ${({ margin }) => (margin ? `${margin}` : `0`)};

  background-color: ${({ bgColor }) => (bgColor ? `${bgColor}` : `#ea3030`)};
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 50%;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  padding: ${({ padding }) => (padding ? `${padding}` : `0 0.5rem`)};

  /* input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  } */

  outline: none;
  cursor: pointer;
  text-decoration: none;
  /* Remove step arrows */
  -webkit-appearance: none;
  -moz-appearance: textfield;
  overflow: auto;

  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : ``)};
  font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : ``)};
  border: ${({ border }) => (border ? `${border}` : ` 1.5px solid #333`)};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}` : `8px`};
  background-color: ${({ bgColor }) => (bgColor ? `${bgColor}` : `#333`)};

  height: ${({ height }) => (height ? `${height}` : `2rem`)};
  width: ${({ width }) => (width ? `${width}` : `10rem`)};
  text-align: ${({ textAlign }) => (textAlign ? `${textAlign}` : `left`)};

  color: ${({ color }) => (color ? `${color}` : "white")};
  transition: all 0.2s ease-in-out;

  &:focus {
    border: ${({ borderFocus }) => (borderFocus ? `${borderFocus}` : `1.5px solid #367fd2`)};
  }

  &:disabled {
    opacity: 40%;
    cursor: not-allowed;
  }
`;

export const TransparentInput = styled(Input)`
  &:focus {
    border: ${({ borderFocus }) => (borderFocus ? `${borderFocus}` : `transparent`)};
  }
`;

export const OptionSelector = styled.select`
  height: ${({ height }) => (height ? `${height}` : `2rem`)};
  width: ${({ width }) => (width ? `${width}` : `10rem`)};
  padding: ${({ padding }) => (padding ? `${padding}` : `0 0.5rem`)};
  margin: ${({ margin }) => (margin ? `${margin}` : `0`)};
  background-color: ${({ bgColor }) => (bgColor ? `${bgColor}` : `#444`)};
  color: ${({ color }) => (color ? `${color}` : `white`)};
  border: none;
  border-radius: 8px;
  outline: none;

  &:focus {
    border: 1.5px solid #367fd2;
  }
`;

export const CheckBox = styled.input`
  padding: ${({ padding }) => (padding ? `${padding}` : `0`)};
  margin: ${({ margin }) => (margin ? `${margin}` : `0`)};
  height: ${({ height }) => (height ? `${height}` : `16px`)};
  width: ${({ width }) => (width ? `${width}` : `16px`)};
  background-color: ${({ bgColor }) => (bgColor ? `${bgColor}` : `#3D81DB`)};
  cursor: pointer;
  overflow: hidden;
  border: none;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}` : `5rem`};
  outline: none;
  text-decoration: none;
`;

export const CenterScreen = styled.div`
  position: absolute;
  top: ${({ top }) => (top ? `${top}` : "50%")};
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const OverlayOpacity = styled.div`
  position: fixed;
  /* background opacity settings */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 99;
`;

export const MobileIcon = styled.div`
  display: none;

  // only display past max-width threshold
  @media screen and (max-width: 1200px) {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    padding: 0.25rem 0 0 1rem;
  }
`;

//  Toggle
// ---------------------------------------------------

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 28px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 0;
    background: white;
    transform: translate(0, -50%);
  }
`;

export const ToggleInput = styled.input`
  display: none;

  &:checked + ${Switch} {
    background: #3d81db;

    &:before {
      transform: translate(32px, -50%);
    }
  }
`;

//  Tool Tip
// ---------------------------------------------------

export const TooltipWrapper = styled.div`
  padding: ${({ padding }) => (padding ? `${padding}` : `0`)};
  margin: ${({ margin }) => (margin ? `${margin}` : `0`)};
  position: relative;
  display: inline-flex;
`;

export const TooltipTarget = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: -1;
  color: inherit;
  cursor: inherit;
  display: flex;
  font-size: inherit;

  ${({ showOnFocus }) =>
    !showOnFocus &&
    css`
      outline: none;
    `};
`;

export const CenterContainer = styled.div`
  position: absolute;
  width: 300px;
  margin-left: -150px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  bottom: calc(100% + 5px);
  pointer-events: none;

  ${({ position }) => {
    switch (position) {
      case "bottom":
        return css`
          bottom: unset;
          top: calc(100% + 5px);
        `;
      case "left":
        return css`
          margin-left: 0;
          width: 100%;
          left: unset;
          top: 50%;
          right: calc(100% + 5px);
          width: max-content;
        `;
      case "right":
        return css`
          margin-left: 0;
          width: 100%;
          top: 50%;
          left: calc(100% + 5px);
          width: max-content;
        `;
      default:
        return css`
          bottom: calc(100% + 5px);
        `;
    }
  }}
`;

export const TooltipBox = styled.span`
  white-space: pre-line;
  position: relative;
  background-color: #333;
  color: #fff;
  text-align: left;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 14px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.2);

  &:after {
    content: "";
    position: absolute;
    width: 1px;
    height: 1px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
    left: calc(50% - 4.5px);
    top: 100%;
  }

  ${({ position }) => {
    switch (position) {
      case "bottom":
        return css`
          &:after {
            border-color: transparent transparent #333 transparent;
            top: unset;
            width: 1px;
            bottom: 100%;
            left: calc(50% - 5px);
          }
        `;
      case "left":
        return css`
          &:after {
            border-color: transparent transparent transparent #333;
            left: 100%;
            top: calc(50% - 5px);
          }
        `;
      case "right":
        return css`
          &:after {
            border-color: transparent #333 transparent transparent;
            right: 100%
            left: unset;
            top: calc(50% - 5px);
          }
        `;
      default:
        return css`
          bottom: calc(100% + 5px);
        `;
    }
  }}
`;

// Underline Active Hover
// ---------------------------------------------------

export const NavUnderline = styled.a`
  position: relative;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  color: ${({ color }) => (color ? `${color}` : `#aaa`)};
  font-size: 18px;
  letter-spacing: 0.5px;
  padding: 0 10px;

  &:after {
    content: "";
    position: absolute;
    background-color: #3d81db;
    height: 3px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
  }

  &:hover {
    color: white;
    transition: 0.3s;
  }

  &:hover:after {
    width: 100%;
  }
`;
// Dropdown Option
// ---------------------------------------------------

const ItemBox = styled(Wrap)`
  transition: all 0.2s ease-in-out;
  background-color: rgb(32, 33, 33);
  padding: 0.5rem 0.5rem;
  border-radius: 0.5rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    background-color: #111010c8;
  }
`;
