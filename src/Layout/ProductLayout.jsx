import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Footer from '../components/Footer';
import SearchBarProduct from '../components/SearchBar/SearchBarProduct';


const ProductLayout = ({ children }) => {
  return (
    <div>
      <ResponsiveAppBar />
      <SearchBarProduct />
        {children}
      <Footer />
    </div>
  );
};

export default ProductLayout;
