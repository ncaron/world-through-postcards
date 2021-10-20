import Navigation from '../navigation';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>World Through Postcards</h1>

      <Navigation />
    </header>
  );
};

export default Header;
