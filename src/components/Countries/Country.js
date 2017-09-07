import React from 'react';
import { NavLink } from 'react-router-dom';
import './Country.css';

export default ({country}) => {
  const flagSrc = require(`../../assets/flag-icon/flags/4x3/${country.code}.svg`);
  const flagAlt = `${country.name} flag`

  return (
    <NavLink to={`/${country.name.toLowerCase()}`} className="country">
      <h2>{country.name}</h2>
      <img src={flagSrc} alt={flagAlt} className="flag" />
    </NavLink>
  );
}
