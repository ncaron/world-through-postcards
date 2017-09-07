import React from 'react';
import Country from './Country';
import './Countries.css';

export default ({data}) => {
  const countries = data.map((country) => {
    return (
      <Country key={country.name} country={country} />
    );
  });

  return (
    <div className="countries">{countries}</div>
  );
}
