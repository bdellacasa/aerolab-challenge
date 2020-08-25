import React from 'react';
import Head from 'next/head';
import Header from '../header/Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>AeroStore</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
    </div>
  )
}

export default Layout;