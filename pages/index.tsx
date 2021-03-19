import React from "react";
import Head from "next/head";

import Header from "../components/index/header";
import About from "../components/index/about";
import Team from "../components/index/team";
import Article from "../components/index/articles";
import Join from "../components/index/join";
import Events from "../components/index/events";
import Badges from "../components/index/badges";
import Sponsors from "../components/index/sponsors";
import CommunityPartners from "../components/index/community-partners";
import CommonFooter from "../components/index/CommonFooter";

const Home = () => {
  return (
    <>
      <Head>
        <title>DSC VIT Bhopal - Home</title>
      </Head>
      <Header />
      <About />
      <Team />
      <Article />
      <Events />
      <CommunityPartners />
      <Badges />
      <Sponsors />
      <Join />
      <CommonFooter />
    </>
  );
};

export default Home;
