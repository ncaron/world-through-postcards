import React from 'react';
import PostcardMap from '../Map/Map';
import './AboutPage.css';

export default ({data}) =>
  <div>
    <div className="about">
      <p>Hello World,
      <br />
      <br />
      I'm Niko. I currently live in Canada and I collect postcards from all over the world. I'm a new software developer and decided to build this website as practice so I can show my collection to the world!
      </p>
    </div>
    <PostcardMap data={data} />
  </div>
