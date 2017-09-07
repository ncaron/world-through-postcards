import React from 'react';
import './CountryHeader.css';

export default ({country}) =>
  <div className="country-header">
    <h2>{country.name}</h2>
    <p>{country.capital}</p>
    <p>{country.population}</p>
  </div>
