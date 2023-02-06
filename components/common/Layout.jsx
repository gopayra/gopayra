import { useRouter } from 'next/router';
import React from 'react';
import { CloudLightning } from 'react-feather';
import Footer from './Footer';
import Navbar from './Navbar';
import Navbar2 from './Navbar2.0';

const Layout = ({ children }) => {
  const route = useRouter();
  
  console.log(route.pathname)
  return (
    <div className='content'>
      {route.pathname === "/terms-and-conditions" || route.pathname === "/privacy-policy" ? <Navbar /> : <Navbar2 /> }
      {children}
      <Footer />
    </div>
  );
};

export default Layout;