import React, { useState } from "react";
import Head from "next/head";

import Sidebar from "../components/Layout/Sidebar";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer/";
import Page from "../components/Layout/Page";

import LandingPage from "../features/Landing/LandingPage";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <title>Theater - Home</title>
        <meta
          key="description"
          name="description"
          content="Theater (@TheaterDAO) is the first NFT tooling suite for creators by giving the
            ability to create and own custom contracts, including live auctions, launchpads, catered marketplaces and more!"
        />
      </Head>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* <Page> */}
      <LandingPage />
      {/* </Page> */}
      {/* <Footer /> */}
    </>
  );
}
