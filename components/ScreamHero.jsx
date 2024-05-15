import styles from '../styles/Herobis.module.css';
import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const ScreamHero = () => {
  return (
    <div className={styles.backgroundContainer} id="homepage">
    <img src="/Assets/contact.png" alt="Background" className={styles.backgroundImage} />

        <div className={styles.colonne}>
         <div className={styles.colorContainer}>
            <h2>RAAAAAAAAAAAH</h2>
         </div>
        <ul>
            <li className={styles.liContainer}>Train Fantôme</li>
            <li className={styles.liContainer}>XXXTentacion</li>
            <li className={styles.liContainer}>CityMorgue</li>
            <li className={styles.liContainer}>Ghostemane</li>
            <li className={styles.liContainer}>Nascar Aloe</li>
            <li className={styles.liContainer}>Cameronazi</li>
            <li className={styles.liContainer}>Lil Darkie</li>
            <li className={styles.liContainer}>Scarlxrd</li>
            <li className={styles.liContainer}>Jasiah</li>
        </ul>
        </div>
          <div className={styles.maintitleContainer}>
           <h1 className={styles.maintitle}>Tracks Certifiés</h1>
           <h2 className={styles.mainsubtitle}>Battre au rythme de la culture Hip-Hop</h2>
          <div className={styles.logoContainer}>
            <img src="/Assets/logow2.png" alt="Logo Le Paradis Blanc" className={styles.logo} />
          </div>  
         </div>
      </div>
  );
};

export default ScreamHero;