import React from 'react';
import {RouteProps} from 'react-router-dom';
import {Container, Text} from './styles';

const NotFound = (props: RouteProps) => {
  return (
    <Container>
      <Text>404</Text>
      <Text>Not Found</Text>
      <Text>Page {props.location?.pathname ?? ''} does not exist.</Text>
    </Container>
  );
};

export default NotFound;
