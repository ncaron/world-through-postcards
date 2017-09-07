import React from 'react';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';

export default ({data}) =>
  <div>
    <Header />
    <HomePage data={data} />
    <Footer />
  </div>
