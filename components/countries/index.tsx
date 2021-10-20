import styles from './styles.module.scss';
import CountryFlag from '../countryFlag';

export interface CountryProps {
  code: string;
  id: string;
  name: string;
  numberOfCards: number;
}

const Countries = (props: { countries: CountryProps[] }) => {
  const countries = props.countries.map((country) => {
    return <CountryFlag key={country.name} {...country} />;
  });

  return <section className={styles.container}>{countries}</section>;
};

export default Countries;
