import cn from 'classnames';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { IGetBlurhashReturn } from 'plaiceholder/dist/blurhash';
import React, { useState } from 'react';
import { BlurhashCanvas } from 'react-blurhash';
import { CountryProps } from '../../pages/country/[id]';
import { ModalMapProps } from '../modalMap';
import styles from './styles.module.scss';

const ModalMap = dynamic(() => import('../modalMap'), { ssr: false });

const Blur = ({ blurhash }: { blurhash: IGetBlurhashReturn }) => {
  return <BlurhashCanvas {...blurhash} className={styles.blur} />;
};

const Postcards = ({ country }: CountryProps) => {
  const [modal, setModal] = useState<ModalMapProps | null>(null);

  function closeModal() {
    setModal(null);
  }

  function openModal(coordinates: ModalMapProps) {
    setModal(coordinates);
  }

  const cards = country.cards.map((card, index) => {
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
          <div
            className={cn(styles.imageContainer, {
              [styles.imageContainerSingle]: !card.displayBack,
            })}
          >
            <Blur blurhash={card.images.front.blurhash} />

            <Image
              {...card.images.front.img}
              alt={`${country.name} card front ${index}`}
            />
          </div>

          {card.displayBack && (
            <div className={styles.imageContainer}>
              <Blur blurhash={card.images.back.blurhash} />

              <Image
                {...card.images.back.img}
                alt={`${country.name} card back ${index}`}
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
