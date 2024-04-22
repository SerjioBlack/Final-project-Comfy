import React from 'react';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import SearchBar from '../../components/SearchBar';
import About from '../../components/About/About';
import Features from '../../components/Features';
import Footer from '../../components/Footer';

const HomePage = () => {
  return (
    <div>
      <ResponsiveAppBar />

      <SearchBar />

      <About />

      <Features />

      <Footer />
      
    </div>
  );
};

export default HomePage;
