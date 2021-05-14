import React from 'react';
import {Country as CountryType} from '../../assets/data';
import {Container, Name, Text} from './styles';

interface CountryHeaderProps {
  country: CountryType;
}

const CountryHeader = (props: CountryHeaderProps) => {
  const {country} = props;

  return (
    <Container>
      <Name>{country.name}</Name>
      <Text>{country.capital}</Text>
      <Text>{country.population}</Text>
    </Container>
  );
};

export default CountryHeader;
