import Header from './Header';
import styles from '../styles/Tracks.module.css';
import ScreamHero from './ScreamHero';

const ScreamRap = () => {
  return (
    <div className={styles.container} id="container">
      <Header />
      <ScreamHero />
      </div>
  );
}

export default ScreamRap;