import React from 'react';
import './Footer.css';

export default () =>
  <footer className="footer">
    <p>
      Made with <i className="fa fa-heart" aria-hidden="true"></i> by
      {' '}
      <a href="https://github.com/ncaron" target="_blank" rel="noopener noreferrer">Niko Caron</a>
    </p>

    <a href="https://www.instagram.com/world_through_postcards/" target="_blank" rel="noopener noreferrer">
      <i className="fa fa-instagram"></i>
    </a>

    <a href="https://github.com/ncaron/world-through-postcards" target="_blank" rel="noopener noreferrer">
      <i className="fa fa-github"></i>
    </a>

    <a href="https://www.linkedin.com/in/nikocaron/" target="_blank" rel="noopener noreferrer">
      <i className="fa fa-linkedin"></i>
    </a>
  </footer>
