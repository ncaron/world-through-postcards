import React from 'react';
import {Container, Heart, Link, Social, Text} from './styles';

const Footer = () => {
  return (
    <Container>
      <Text>
        Made with <Heart className='fa fa-heart' aria-hidden='true'></Heart> by{' '}
        <Link
          className='name'
          href='https://github.com/ncaron'
          target='_blank'
          rel='noopener noreferrer'
        >
          Niko Caron
        </Link>
      </Text>

      <Link
        href='https://www.instagram.com/world_through_postcards/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Social className='fa fa-instagram'></Social>
      </Link>

      <Link
        href='https://github.com/ncaron/world-through-postcards'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Social className='fa fa-github'></Social>
      </Link>

      <Link
        href='https://www.linkedin.com/in/nikocaron/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Social className='fa fa-linkedin'></Social>
      </Link>
    </Container>
  );
};

export default Footer;
