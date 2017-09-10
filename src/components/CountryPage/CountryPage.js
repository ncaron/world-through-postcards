import React from 'react';
import CountryHeader from './CountryHeader';
import Postcards from './Postcards';

export default ({country}) => {
  window.scrollTo(0, 0);
  
  return (
    <div>
      <CountryHeader country={country} />
      <Postcards country={country} />
    </div>
  );
}
