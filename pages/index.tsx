import React from "react";
import Head from "next/head";

import Header from "../components/index/header";
import About from "../components/index/about";
import Join from "../components/index/join";
import Footer from "../components/index/footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>DSC VIT Bhopal - Home</title>
      </Head>
      <Header />
      <About />
      <Join />
      <Footer />
    </>
  );
};

export default Home;
