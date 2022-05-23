import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

import {
  Heading,
  Text,
  Wrap,
  Button,
  Input,
  ClickableText,
  OptionSelector,
} from "./ReusableStyles";


// ** unfinished **


const TokenTransferBox = () => {
  return (
    <Wrap display="flex" padding="0" justifyContent="center">
      <Wrap
        padding="2rem"
        width="22rem"
        justifyContent="center"
        alignItems="center"
        border="1px #aaa solid"
        borderRadius="2rem"
      >
        {/* Token Details */}
        <Wrap padding="2rem 0 0 0">
          <Wrap display="flex" justifyContent="space-between" padding="0">
            <Text padding="0" color="#aaa" fontSize=".8rem">
              Balance: {Number(ethers.utils.formatUnits(balance)).toFixed(4)}
            </Text>
            <ClickableText
              padding="0"
              color="#aaa"
              fontSize=".8rem"
              onClick={() => handleMax()}
            >
              MAX
            </ClickableText>
          </Wrap>
          <Input
            textAlign="center"
            id="amount"
            width="100%"
            placeholder="0"
            type="number"
            height="2.5rem"
            onChange={() => handleChange()}
          ></Input>
        </Wrap>

        <Wrap padding="0.5rem 0" display="flex">
          {amount !== "" ? (
            ethers.utils.formatUnits(amount) <= 10000000 &&
            ethers.utils.formatUnits(amount) >= 200 ? (
              <Button
                width="100%"
                onClick={() =>
                  approved ? handleSwapOut() : handleSwapOutApprove()
                }
              >
                {approved
                  ? tx
                    ? "Submitting..."
                    : "Submit"
                  : tx
                  ? "Approving..."
                  : "Approve"}
              </Button>
            ) : (
              <Button
                disabled
                width="100%"
                onClick={() =>
                  approved ? handleSwapOut() : handleSwapOutApprove()
                }
              >
                {approved
                  ? tx
                    ? "Submitting..."
                    : "Submit"
                  : tx
                  ? "Approving..."
                  : "Approve"}
              </Button>
            )
          ) : (
            <Button
              disabled
              width="100%"
              onClick={() =>
                approved ? handleSwapOut() : handleSwapOutApprove()
              }
            >
              {approved
                ? tx
                  ? "Submitting..."
                  : "Submit"
                : tx
                ? "Approving..."
                : "Approve"}
            </Button>
          )}
        </Wrap>

        {/* {amount !== undefined || amount !== null ? (
            <>
              {amount === "" ? (
                <Text color="#f13636" textAlign="center" fontSize=".65rem">
                  • Entered amount below minimum bridge amount
                </Text>
              ) : (
                ethers.utils.formatUnits(amount) < 200 && (
                  <Text color="#f13636" textAlign="center" fontSize=".65rem">
                    • Entered amount below minimum bridge amount
                  </Text>
                )
              )}
              {amount === ""
                ? null
                : ethers.utils.formatUnits(amount) > 10000000 && (
                    <Text color="#f13636" textAlign="center" fontSize=".65rem">
                      • Entered amount above maximum bridge amount
                    </Text>
                  )}
            </>
          ) : null} */}
      </Wrap>
      {/* )} */}
    </Wrap>
  );
};

export default TokenTransferBox;
