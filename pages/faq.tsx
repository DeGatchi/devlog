import React, { useState } from "react";
import Head from "next/head";

import Sidebar from "../components/Layout/Sidebar";
import Navbar from "../components/Layout/Navbar";
// import Footer from "../components/Layout/Footer";
import Page from "../components/Layout/Page";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <title>Theater - FAQ</title>
        <meta key="description" name="description" content="FAQ..." />
      </Head>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* <Page>
        <p>...</p>
      </Page> */}
      {/* <Footer /> */}
    </>
  );
};

export default Faq;
