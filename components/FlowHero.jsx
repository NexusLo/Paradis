import styles from '../styles/Herobis.module.css';
import React from 'react';

const FemHero = () => {
  return (
    <div className={styles.backgroundContainer} id="homepage">
    <img src="/Assets/contact.png" alt="Background" className={styles.backgroundImage} />

        <div className={styles.colonne}>
         <div className={styles.colorContainer}>
            <h2>0% Testo 100% Flow </h2>
         </div>
        <ul>
            <li className={styles.liContainer}>Lous and The Yakuza</li>
            <li className={styles.liContainer}>Lala & Ce</li>
            <li className={styles.liContainer}>Guessmi</li>
            <li className={styles.liContainer}>Poupie</li>
            <li className={styles.liContainer}>Chilla</li>
            <li className={styles.liContainer}>Nayra</li>
            <li className={styles.liContainer}>Lazuli</li>
            <li className={styles.liContainer}>Yseult</li>
            <li className={styles.liContainer}>Zinée</li>
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

export default FemHero;