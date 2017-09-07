import React from 'react';
import './Country.css';

export default ({country}) => {
  const flagSrc = require(`../../assets/flag-icon/flags/4x3/${country.code}.svg`);
  const flagAlt = `${country.name} flag`

  return (
    <div key={country.name} className="country">
      <h2>{country.name}</h2>
      <img src={flagSrc} alt={flagAlt} className="flag" />
    </div>
  );
}
