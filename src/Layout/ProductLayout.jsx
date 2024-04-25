import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import { Typography } from '@mui/material';

const ProductLayout = ({ children }) => {
  return (
    <div>
      <ResponsiveAppBar />
      <SearchBar />
      
        {children}
      
      <Footer />
    </div>
  );
};

export default ProductLayout;
