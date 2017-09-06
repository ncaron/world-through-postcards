import React from 'react';
import Nav from './Nav';
import './Header.css';

export default () =>
  <header className="header clearfix">
    <h1>
      <a href="#">World Through Postcards</a>
    </h1>
    <Nav />
  </header>
