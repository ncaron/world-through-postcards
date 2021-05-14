import React from 'react';
import {Country} from '../../assets/data';
import Map from '../map';
import {
  BuiltWithContainer,
  BuiltWithList,
  Container,
  Description,
  Link,
  ListItem,
  Text
} from './styles';

interface AboutProps {
  data: Country[];
}

const About = (props: AboutProps) => {
  const {data} = props;
  const numberOfCards = data.reduce(
    (total, country) => total + country.cards.length,
    0
  );

  return (
    <Container>
      <Description>
        <Text>
          Hello World,
          <br />
          <br />
          I'm Niko. I am from Canada but currently living in Germany. I like to
          collect postcards from all over the world. I'm a software developer
          and decided to build this website to show my collection to all of you.
        </Text>

        <br />

        <Text>
          I have {numberOfCards} cards displayed on this website but that is not
          my entire collection so stay tuned as I add more!
        </Text>
      </Description>

      <Map data={data} />

      <BuiltWithContainer>
        <Text>Built with:</Text>

        <BuiltWithList>
          <ListItem>
            <Link
              href='https://reactjs.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              React
            </Link>
          </ListItem>

          <ListItem>
            <Link
              href='https://reactrouter.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              React Router
            </Link>
          </ListItem>

          <ListItem>
            <Link
              href='https://leafletjs.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Leaftlet
            </Link>
          </ListItem>

          <ListItem>
            <Link
              href='https://www.openstreetmap.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              OpenStreetMap
            </Link>
          </ListItem>

          <ListItem>
            <Link
              href='https://flagicons.lipis.dev/'
              target='_blank'
              rel='noopener noreferrer'
            >
              flag-icons
            </Link>
          </ListItem>
        </BuiltWithList>
      </BuiltWithContainer>
    </Container>
  );
};

export default About;
