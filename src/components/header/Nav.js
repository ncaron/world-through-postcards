import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default () =>
  <nav className="nav">
    <NavLink exact activeClassName="active" to="/">Home</NavLink>
    <NavLink activeClassName="active" to="/trade">Trade</NavLink>
    <NavLink activeClassName="active" to="/about">About</NavLink>
  </nav>
