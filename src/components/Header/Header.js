import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import './Header.css';

export default () =>
  <header className="header clearfix">
    <h1>
      <NavLink to="/">World Through Postcards</NavLink>
    </h1>
    <Nav />
  </header>
