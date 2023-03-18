import React from 'react'
import Head from 'next/head'
import Header from './Header';
import Providers from './Providers';
import Navbar from './Navbar';
import SearchBox from './SearchBox';

type DashboardLayoutProps = {
    children: React.ReactNode,
  };

const Layout = ({children}: DashboardLayoutProps) => {
  return (
    <>
     
     <Providers>
      <Head>
        <title>IMDB-clone</title>
      </Head>
      <Header/>
      <Navbar/>
      <SearchBox/>
      {children}
     </Providers>
    </>
  )
}

export default Layout
