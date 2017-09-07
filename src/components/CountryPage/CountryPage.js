import React from 'react';
import CountryHeader from './CountryHeader';
import Postcards from './Postcards';

export default ({country}) =>
  <div>
    <CountryHeader country={country} />
    <Postcards country={country} />
  </div>
