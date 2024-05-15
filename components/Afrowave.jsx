import Header from './Header';
import styles from '../styles/Tracks.module.css';
import AfroHero from './AfroHero';

const Afrowave = () => {
  return (
    <div className={styles.container} id="container">
      <Header />
      <AfroHero />
    </div>
  );
}

export default Afrowave;