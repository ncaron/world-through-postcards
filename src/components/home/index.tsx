import React from 'react';
import {Country} from '../../assets/data';
import Countries from '../countries';
import {Container} from './styles';

interface HomeProps {
  data: Country[];
}

const Home = (props: HomeProps) => {
  const {data} = props;

  return (
    <Container>
      <Countries data={data} />
    </Container>
  );
};

export default Home;
