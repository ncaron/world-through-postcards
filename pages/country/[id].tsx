import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getPlaiceholder } from 'plaiceholder';
import React from 'react';
import CountryHeader from '../../components/countryHeader';
import Layout from '../../components/layout';
import Postcards from '../../components/postcards';
import type { Card, Country as CountryType } from '../../lib/data';
import { BlurImage } from '../../lib/types';

interface CardWithImages extends Omit<Card, 'images'> {
  images: {
    back: BlurImage;
    front: BlurImage;
  };
}

interface CountryWithImages extends Omit<CountryType, 'cards'> {
  cards: CardWithImages[];
}

export interface CountryProps {
  country: CountryWithImages;
}

const Country: NextPage<CountryProps> = ({ country }) => {
  return (
    <Layout title={country.name}>
      <CountryHeader country={country} />

      <Postcards country={country} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const countries = (await import('../../lib/data')).data;
  const paths = Object.keys(countries).map((country) => `/country/${country}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<CountryProps> = async ({
  params,
}) => {
  const countries = (await import('../../lib/data')).data;
  const country = countries[params?.id as string];
  const cards = await Promise.all(
    country.cards.map(async (card) => {
      const { blurhash: blurhashFront, img: imgFront } = await getPlaiceholder(
        `/images/front/${card.images.front}`
      );
      const { blurhash: blurhashBack, img: imgBack } = await getPlaiceholder(
        `/images/back/${card.images.back}`
      );

      return {
        ...card,
        images: {
          back: {
            blurhash: blurhashBack,
            img: imgBack,
          },
          front: {
            blurhash: blurhashFront,
            img: imgFront,
          },
        },
      };
    })
  ).then((values) => values);

  return {
    props: {
      country: {
        ...country,
        cards,
      },
    },
  };
};

export default Country;
