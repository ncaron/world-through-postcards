import React from 'react';
import {Container, RadioContainer, Text, TextContainer} from './styles';

const Radio = () => (
  <Container>
    <TextContainer>
      <Text>
        On August 31, 2019 I started a little experiment to create a playlist of
        Postcrosser's favorite songs.
      </Text>

      <br />

      <Text>
        I ask them to write their favorite song on the back of the card and here
        is the result
      </Text>
    </TextContainer>

    <RadioContainer>
      <iframe
        title='World Through Postcards Radio'
        src='https://open.spotify.com/embed/playlist/7oEfn0E21P1DLnNitkJTEK'
        width='300'
        height='380'
        frameBorder='0'
        allow='encrypted-media'
      ></iframe>
    </RadioContainer>
  </Container>
);

export default Radio;
