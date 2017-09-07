import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';

export default ({data}) =>
  <Router>
    <div>
      <Header />
      <MainPage data={data} />
      <Footer />
    </div>
  </Router>
