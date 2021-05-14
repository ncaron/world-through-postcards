import React from 'react';
import {Country as CountryType} from '../../assets/data';
import {
  CardContainer,
  City,
  Container,
  Image,
  ImageContainer,
  ImagesContainer,
  Link
} from './styles';

interface PostcardsProps {
  country: CountryType;
}

const Postcards = (props: PostcardsProps) => {
  const {country} = props;
  const cards = country.cards.map((card, index) => {
    const back = {
      alt: `${country.name} card back ${index}`,
      src: require(`../../assets/cards/back/${card.images.back}`).default
    };
    const front = {
      alt: `${country.name} card front ${index}`,
      src: require(`../../assets/cards/front/${card.images.front}`).default
    };

    return (
      <CardContainer key={index}>
        <City>City: {card.city}</City>

        <ImagesContainer>
          <ImageContainer>
            <Image alt={front.alt} src={front.src} />
          </ImageContainer>

          {card.displayBack && (
            <ImageContainer>
              <Image alt={back.alt} src={back.src} />
            </ImageContainer>
          )}
        </ImagesContainer>

        {card.insta && (
          <Link
            className='insta'
            href={card.insta}
            target='_blank'
            rel='noopener noreferrer'
          >
            View on Instagram
          </Link>
        )}
      </CardContainer>
    );
  });

  return <Container>{cards}</Container>;
};

export default Postcards;
