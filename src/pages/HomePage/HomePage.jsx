import React from 'react';
import Layout from '../../Layout/Layout';
import About from '../../components/About/About';
import Features from '../../components/Features';

const HomePage = () => {
  return (
    <Layout>
      <About />
      <Features />
    </Layout>
  );
};

export default HomePage;
