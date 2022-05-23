import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FaQuestionCircle, FaQuestion, FaCog } from "react-icons/fa";

import { Wrap, Text } from "./index";

import WidgetBot from "@widgetbot/react-embed";

const Discord = ({ height, width, channel }) => {
  return (
    <>
      <WidgetBot
        height={height} // 40rem
        width={width} // 60rem
        server="927760060808056893" // TheaterDAO
        /**
         * '930828481103802408' // #🛎┃live-auctions
         * '927760061386866770' // #💬┃general
         */
        channel={channel}
      />
    </>
  );
};

export default Discord;
