import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import CountryHeader from '../../components/countryHeader';
import Layout from '../../components/layout';
import Postcards from '../../components/postcards';
import type { Country as CountryType } from '../../lib/data';

interface CountryProps {
  country: CountryType;
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

  return {
    props: {
      country: countries[params?.id as string],
    },
  };
};

export default Country;
