import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Countries, { CountryProps } from '../components/countries';
import Layout from '../components/layout';

interface HomeProps {
  countries: CountryProps[];
}

const Home: NextPage<HomeProps> = ({ countries }) => {
  return <Layout title='Home'>{<Countries countries={countries} />}</Layout>;
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const countries = (await import('../lib/data')).data;

  return {
    props: {
      countries: Object.values(countries).map((country) => {
        return {
          code: country.code,
          id: country.id,
          name: country.name,
          numberOfCards: country.cards.length,
        };
      }),
    },
  };
};

export default Home;
