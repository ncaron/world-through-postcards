import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';

export default ({data}) =>
  <Router basename="/world-through-postcards/">
    <div>
      <Header data={data} />
      <MainPage data={data} />
      <Footer />
    </div>
  </Router>
