import React, {useState} from 'react';
import {Card, Country as CountryType} from '../../assets/data';
import ModalMap from '../modalMap';
import {
  CardContainer,
  CardHeader,
  City,
  Close,
  Container,
  Image,
  ImageContainer,
  ImagesContainer,
  Link,
  Modal,
  ViewMap
} from './styles';

interface ModalProps {
  card: Card;
}

interface PostcardsProps {
  country: CountryType;
}

const Postcards = (props: PostcardsProps) => {
  const [modal, setModal] = useState<ModalProps | null>(null);
  const {country} = props;

  function closeModal() {
    setModal(null);
  }

  function openModal(card: Card) {
    closeModal();
    setModal({
      card
    });
  }

  const cards = country.cards.map((card, index) => {
    const back = {
      alt: `${country.name} card back ${index}`,
      src: require(`../../assets/compressedCards/back/${card.images.back}`)
        .default
    };
    const front = {
      alt: `${country.name} card front ${index}`,
      src: require(`../../assets/compressedCards/front/${card.images.front}`)
        .default
    };

    return (
      <CardContainer key={index}>
        <CardHeader>
          <City>City: {card.city}</City>

          {!modal && (
            <ViewMap onClick={() => openModal(card)} role='button'>
              View on Map
            </ViewMap>
          )}
        </CardHeader>

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

  return (
    <Container>
      {cards}

      {modal && (
        <Modal>
          <Close onClick={closeModal} role='button' />

          <ModalMap data={modal.card}></ModalMap>
        </Modal>
      )}
    </Container>
  );
};

export default Postcards;
