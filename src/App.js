import React from 'react';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';

export default ({data}) =>
  <div>
    <Header />
    <HomePage data={data} />
  </div>
