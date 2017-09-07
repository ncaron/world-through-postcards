import React from 'react';
import './Footer.css';

export default () =>
  <footer className="footer">
    <p>
      Made with <span>&hearts;</span> by
      {' '}
      <a href="https://github.com/ncaron" target="_blank" rel="noopener noreferrer">Niko Caron</a>
    </p>

    <a className="insta" href="https://www.instagram.com/world_through_postcards/" target="_blank" rel="noopener noreferrer">
      <i className="fa fa-instagram"></i>
    </a>
  </footer>
