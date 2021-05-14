import React from 'react';
import {Country as CountryType} from '../../assets/data';
import CountryHeader from '../countryHeader';
import Postcards from '../postcards';
import {Container} from './styles';

interface CountryPageProps {
  country: CountryType;
}

const CountryPage = (props: CountryPageProps) => {
  window.scrollTo(0, 0);

  const {country} = props;

  return (
    <Container>
      <CountryHeader country={country} />
      <Postcards country={country} />
    </Container>
  );
};

export default CountryPage;
