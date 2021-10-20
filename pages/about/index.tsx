import type { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import Layout from '../../components/layout';
import { Card } from '../../lib/data';
import styles from './styles.module.scss';
import Link from 'next/link';

const Map = dynamic(() => import('../../components/map'), { ssr: false });

interface AboutProps {
  markers: any[];
  numberOfCards: number;
}

const About: NextPage<AboutProps> = ({ markers, numberOfCards }) => {
  return (
    <Layout title='About'>
      <div>
        <div className={styles.descriptionContainer}>
          <p>
            Hello World,
            <br />
            <br />
            I'm Niko. I am from Canada but currently living in Germany. I like
            to collect postcards from all over the world. I'm a software
            developer and decided to build this website to show my collection to
            all of you.
          </p>

          <p>
            I have {numberOfCards} cards displayed on this website but that is
            not my entire collection so stay tuned as I add more!
          </p>
        </div>

        <Map markers={markers} />

        <div className={styles.builtWithContainer}>
          <p>Built with: </p>

          <ul className={styles.builtWithList}>
            <li className={styles.item}>
              <Link href='https://nextjs.org/'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.link}
                >
                  Next.js
                </a>
              </Link>
            </li>

            <li className={styles.item}>
              <Link href='https://reactjs.org/'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.link}
                >
                  React
                </a>
              </Link>
            </li>

            <li className={styles.item}>
              <Link href='https://leafletjs.com/'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.link}
                >
                  Leaflet
                </a>
              </Link>
            </li>

            <li className={styles.item}>
              <Link href='https://openstreetmap.org/'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.link}
                >
                  OpenStreepMap
                </a>
              </Link>
            </li>

            <li className={styles.item}>
              <Link href='https://flagicons.lipis.dev/'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.link}
                >
                  flag-icons
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const countries = (await import('../../lib/data')).data;
  let markers: Card['coord'][] = [];
  let numberOfCards = 0;

  Object.values(countries).forEach((country) => {
    numberOfCards += country.cards.length;
    markers = [...markers, ...country.cards.map((card) => card.coord)];
  });

  return {
    props: {
      markers,
      numberOfCards,
    },
  };
};

export default About;
