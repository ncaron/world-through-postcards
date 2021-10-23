import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import { IGetBlurhashReturn } from 'plaiceholder/dist/blurhash';
import { useState } from 'react';
import { BlurhashCanvas } from 'react-blurhash';
import Layout from '../../components/layout';
import { Card, Group } from '../../lib/trade';
import { BlurImage } from '../../lib/types';
import styles from './styles.module.scss';

interface CardWithImages extends Omit<Card, 'image'> {
  image: BlurImage;
}

interface GroupWithImages extends Omit<Group, 'cards'> {
  cards: CardWithImages[];
}

interface TradeProps {
  groups: GroupWithImages[];
}

const Blur = ({ blurhash }: { blurhash: IGetBlurhashReturn }) => {
  return <BlurhashCanvas {...blurhash} className={styles.blur} />;
};

const Trade: NextPage<TradeProps> = ({ groups }) => {
  const [chosenGroup, setChosenGroup] = useState('all');

  const cards = groups
    .filter((group) => chosenGroup === 'all' || chosenGroup === group.id)
    .reduce<JSX.Element[]>((cards, current) => {
      const groupCards = current.cards;

      cards.push(
        ...groupCards.map((card) => {
          return (
            <div key={card.id} className={styles.cardContainer}>
              <div className={styles.imageContainer}>
                <Blur blurhash={card.image.blurhash} />
                <Image {...card.image.img} alt={card.id} />
              </div>

              <p>ID: {card.id}</p>
            </div>
          );
        })
      );

      return cards;
    }, []);

  const options = [{ id: 'all', name: 'All' }, ...groups].map((group) => {
    return (
      <option key={group.id} value={group.id}>
        {group.name}
      </option>
    );
  });

  return (
    <Layout title='Trade'>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <p>
            These are the postcards I currently have available to trade. I will
            try my best to keep this list up to date. <br /> If you are
            interested in any of them, please contact me on the{' '}
            <a
              href='https://community.postcrossing.com/u/nikocaron/'
              target='_blank'
              className={styles.link}
            >
              Postcrossing Forums
            </a>{' '}
            or my{' '}
            <a
              href='https://www.postcrossing.com/user/NikoCaron'
              target='_blank'
              className={styles.link}
            >
              Postcrossing Profile
            </a>{' '}
            with the ID of the card.
          </p>

          <label className={styles.selectContainer}>
            Filter
            <select
              name='group'
              id='group'
              onChange={(e) => setChosenGroup(e.target.value)}
            >
              {options}
            </select>
          </label>
        </div>

        <div className={styles.cardsContainer}>{cards}</div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<TradeProps> = async () => {
  const tradeGroups = (await import('../../lib/trade')).tradeGroups;

  const groups = await Promise.all(
    Object.entries(tradeGroups).map(async ([_key, value]) => {
      const cards = await Promise.all(
        value.cards
          .filter((card) => card.available > 0)
          .map(async (card) => {
            const { blurhash, img } = await getPlaiceholder(
              `/images/trade/${value.id}/${card.image}`
            );

            return {
              ...card,
              image: {
                blurhash,
                img,
              },
            };
          })
          .reverse()
      ).then((values) => values);

      return {
        ...value,
        cards,
      };
    })
  ).then((values) => values);

  return {
    props: {
      groups,
    },
  };
};

export default Trade;
