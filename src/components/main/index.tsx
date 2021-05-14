import React from 'react';
import {Country} from '../../assets/data';
import Routes from '../routes';
import {Container} from './styles';

interface MainProps {
  data: Country[];
}

const Main = (props: MainProps) => {
  const {data} = props;

  return (
    <Container>
      <Routes data={data} />
    </Container>
  );
};

export default Main;
