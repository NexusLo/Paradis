import Header from './Header';
import styles from '../styles/Tracks.module.css';
import GhettoHero from './GhettoHero';

const GhettoYouth = () => {
  return (
    <div className={styles.container} id="container">
      <Header />
      <GhettoHero />
    </div>
  );
}

export default GhettoYouth;