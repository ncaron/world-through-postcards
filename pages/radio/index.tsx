import type { NextPage } from 'next';
import Layout from '../../components/layout';
import styles from './styles.module.scss';

const Radio: NextPage = () => {
  return (
    <Layout title='Radio'>
      <section className={styles.textContainer}>
        <p>
          On August 31, 2019 I started a little experiment to create a playlist
          of Postcrosser's favorite songs.
        </p>

        <p>
          I ask postcrossers to write their favorite song on the back of the
          card and here is the result.
        </p>
      </section>

      <section className={styles.radioContainer}>
        <iframe
          title='World Through Postcards Radio'
          src='https://open.spotify.com/embed/playlist/7oEfn0E21P1DLnNitkJTEK'
          width='300'
          height='380'
          frameBorder='0'
          allow='encrypted-media'
        ></iframe>
      </section>
    </Layout>
  );
};

export default Radio;
