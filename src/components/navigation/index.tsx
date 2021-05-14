import React from 'react';
import {Container, Link, LinkContainer} from './styles';

const Navigation = () => (
  <Container>
    <LinkContainer>
      <Link exact activeClassName='active' to='/'>
        Home
      </Link>

      <Link activeClassName='active' to='/trade'>
        Trade
      </Link>

      <Link activeClassName='active' to='/about'>
        About
      </Link>
    </LinkContainer>
  </Container>
);

export default Navigation;
