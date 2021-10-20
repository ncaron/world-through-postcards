import Image from 'next/image';
import Link from 'next/link';
import { CountryProps } from '../countries';
import styles from './styles.module.scss';

const Country = (props: CountryProps) => {
  const flag = {
    alt: `${props.name} flag`,
    src: require(`flag-icon-css/flags/4x3/${props.code}.svg`).default,
  };

  return (
    <Link href={`/country/${props.id}`}>
      <a className={styles.container}>
        <h2 className={styles.title}>
          {props.name} ({props.numberOfCards})
        </h2>

        <div className={styles.flagContainer}>
          <Image
            className={styles.flag}
            alt={flag.alt}
            src={flag.src}
            layout='responsive'
          />
        </div>
      </a>
    </Link>
  );
};

export default Country;
