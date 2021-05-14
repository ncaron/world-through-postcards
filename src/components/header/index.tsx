import React from 'react';
import Navigation from '../navigation';
import {Container, Link, Title} from './styles';

const Header = () => {
  return (
    <Container>
      <Title>
        <Link to='/'>World Through Postcards</Link>
      </Title>

      <Navigation />
    </Container>
  );
};

export default Header;
