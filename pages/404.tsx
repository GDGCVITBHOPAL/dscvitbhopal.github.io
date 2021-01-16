import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import CommonFooter from '../components/index/CommonFooter';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>DSC VIT Bhopal - 404 Not Found</title>
      </Head>
      Not Found
      <Link href='/'>Home</Link>
      <CommonFooter />
    </>
  );
};

export default NotFound;
