import React from 'react';
import {Country as CountryType} from '../../assets/data';
import Country from '../country';
import {Container} from './styles';

interface CountriesProps {
  data: CountryType[];
}

const Countries = (props: CountriesProps) => {
  const {data} = props;

  const countries = data.map((country) => {
    return <Country key={country.name} country={country} />;
  });

  return <Container>{countries}</Container>;
};

export default Countries;
