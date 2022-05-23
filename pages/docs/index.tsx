import React, { useState } from "react";
import Head from "next/head";

import Sidebar from "../../components/Layout/Sidebar";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer/";
import Page from "../../components/Layout/Page";

import Docs from "../../features/Docs";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <title>Theater - Docs</title>
        <meta
          key="description"
          name="description"
          content="Documentation to learn about Theater (@TheaterDAO)."
        />
      </Head>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Page padding={"2vh 60vh"}>
        <Docs />
      </Page>
      {/* <Footer /> */}
    </>
  );
}
