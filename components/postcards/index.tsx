import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Country } from '../../lib/data';
import { ModalMapProps } from '../modalMap';
import styles from './styles.module.scss';

const ModalMap = dynamic(() => import('../modalMap'), { ssr: false });

interface CountryProps {
  country: Pick<Country, 'cards' | 'name'>;
}

const Postcards = ({ country }: CountryProps) => {
  const [modal, setModal] = useState<ModalMapProps | null>(null);

  function closeModal() {
    setModal(null);
  }

  function openModal(coordinates: ModalMapProps) {
    setModal(coordinates);
  }

  const cards = country.cards.map((card, index) => {
    const back = {
      alt: `${country.name} card back ${index}`,
      src: require(`../../public/images/back/${card.images.back}`),
    };
    const front = {
      alt: `${country.name} card front ${index}`,
      src: require(`../../public/images/front/${card.images.front}`),
    };

    return (
      <div key={index} className={styles.cardContainer}>
        <div className={styles.cardHeader}>
          <p className={styles.city}>City: {card.city}</p>

          {!modal && (
            <div
              className={styles.viewMap}
              onClick={() => openModal(card.coord)}
              role='button'
            >
              View on Map
            </div>
          )}
        </div>

        <div className={styles.imagesContainer}>
          <div className={styles.imageContainer}>
            <Image
              alt={front.alt}
              src={front.src}
              layout='responsive'
              placeholder='blur'
              quality='25'
            />
          </div>

          {card.displayBack && (
            <div className={styles.imageContainer}>
              <Image
                alt={back.alt}
                src={back.src}
                layout='responsive'
                placeholder='blur'
                quality='25'
              />
            </div>
          )}
        </div>

        {card.insta && (
          <Link href={card.insta}>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className={styles.insta}
            >
              View on Instagram
            </a>
          </Link>
        )}
      </div>
    );
  });

  return (
    <div>
      {cards}

      {modal && (
        <div className={styles.modal}>
          <div className={styles.close} onClick={closeModal} role='button' />

          <ModalMap {...modal} />
        </div>
      )}
    </div>
  );
};

export default Postcards;
