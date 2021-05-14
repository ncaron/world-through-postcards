import React from 'react';
import {Country as CountryType} from '../../assets/data';
import {Container, Flag, Title} from './styles';

interface CountryProps {
  country: CountryType;
}

const Country = (props: CountryProps) => {
  const {country} = props;
  const flag = {
    alt: `${country.name} flag`,
    src: require(`flag-icon-css/flags/4x3/${country.code}.svg`).default
  };

  return (
    <Container to={country.path} className='country'>
      <Title>
        {country.name} ({country.cards.length})
      </Title>

      <Flag alt={flag.alt} src={flag.src} />
    </Container>
  );
};

export default Country;
