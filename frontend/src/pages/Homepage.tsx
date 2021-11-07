import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Homepage: React.VFC = () => {
  return (
    <div>
      <Header />
      <h1>Homepage</h1>
      <Footer />
    </div>
  );
};

export default Homepage;
