import Header from './Header';
import Herobis from './Herobis';
import styles from '../styles/Tracks.module.css';
import NextgenHero from './NextgenHero';

const NextgenRap = () => {
  return (
    <div className={styles.container} id="container">
      <Header />
      <NextgenHero />
    </div>
  );
}

export default NextgenRap;