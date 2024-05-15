import Header from './Header';
import styles from '../styles/Tracks.module.css';
import ClassiqueHero from './ClassiqueHero';

const Classiques = () => {
  return (
    <div className={styles.container} id="container">
      <Header />
      <ClassiqueHero />
      <div className={styles.maintitleContainer}>
      </div>
    </div>
  );
}

export default Classiques;