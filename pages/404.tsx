import React from "react";
import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>DSC VIT Bhopal - 404 Not Found</title>
      </Head>
      Not Found
      <Link href="/">Home</Link>
    </>
  );
};

export default NotFound;
