import React from 'react';
import Head from 'next/head';
import Header from '../header/Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto:wght@400;500&family=Source+Sans+Pro&family=Lato:wght@400;700&display=swap" rel="stylesheet"/>
        <link rel="icon" type="image/svg" sizes="180x180" href="/aerolab-logo.svg" />
        <title>AeroStore</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
    </div>
  )
}

export default Layout;