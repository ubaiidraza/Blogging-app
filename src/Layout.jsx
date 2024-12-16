import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Newsletter from './Components/Newsletter';
import Footer from './Components/footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Layout;
