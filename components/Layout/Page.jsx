import React from "react";
import styled from "styled-components";

export const PageContainer = styled.div`
  padding: ${({ padding }) => (padding ? `${padding}` : "5vh 30vh")};

  /* background-color: #1c1b1b; // use to look at box */

  @media screen and (max-width: 1550px) {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 600px) {
    margin: 1rem 1rem;
    display: flex;
    justify-content: center;
  }
`;

const Page = ({ children, padding }) => {
  return <PageContainer padding={padding}>{children}</PageContainer>;
};

export default Page;
