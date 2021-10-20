import React from 'react';
import { Country } from '../../lib/data';
import styles from './styles.module.scss';

interface CountryHeaderProps {
  country: Pick<Country, 'capital' | 'name' | 'population'>;
}

const CountryHeader = ({ country }: CountryHeaderProps) => {
  return (
    <div className={styles.infoContainer}>
      <h2 className={styles.name}>{country.name}</h2>
      <p className={styles.text}>{country.capital}</p>
      <p className={styles.text}>{country.population}</p>
    </div>
  );
};

export default CountryHeader;
