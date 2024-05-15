import Header from './Header';
import Herobis from './Herobis';
import styles from '../styles/Tracks.module.css';
import FlowHero from './FlowHero';

const FlowFeminin = () => {
  return (
    <div className={styles.container} id="container">
      <Header />
      <FlowHero />
    </div>
  );
}

export default FlowFeminin;