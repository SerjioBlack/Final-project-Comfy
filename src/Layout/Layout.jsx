import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <ResponsiveAppBar />
      <SearchBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
