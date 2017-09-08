import React from 'react';
import PostcardMap from '../Map/Map';
import './AboutPage.css';

export default ({data}) =>
  <div className="about">
    <div className="about-text">
      <p>Hello World,
      <br />
      <br />
      I'm Niko. I currently live in Canada and I collect postcards from all over the world. I'm a new software developer and decided to build this website as practice so I can show my collection to the world!
      </p>
      <p>I have over 200 cards so stay tuned as I add more to this site.</p>
    </div>

    <PostcardMap data={data} />

    <div className="built-with">
      <p>Built with:</p>
      <ul>
        <li><a href="https://facebook.github.io/react/" target="_blank" rel="noopener noreferrer">React</a></li>
        <li><a href="https://reacttraining.com/react-router/" target="_blank" rel="noopener noreferrer">React Router</a></li>
        <li><a href="https://tomchentw.github.io/react-google-maps/" target="_blank" rel="noopener noreferrer">react-google-maps</a></li>
        <li><a href="http://flag-icon-css.lip.is/" target="_blank" rel="noopener noreferrer">flag-icon-css</a></li>
      </ul>
    </div>
  </div>
