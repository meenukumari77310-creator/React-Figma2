// Pages/Home.js
import React from 'react';
import Header from './Header';
import Topics from './Topics';
import Info from './Info';
import Blog from './Blog';
import Testimonial from './Testimonial';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Topics />
      <Info />
      <Blog />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
