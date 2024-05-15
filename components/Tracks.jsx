import styles from '../styles/Herobis.module.css';
import React from 'react';

const Tracks = () => {

  return (
    <div className={styles.backgroundContainer} id="homepage">
    <img src="/Assets/contact.png" alt="Background" className={styles.backgroundImage} />

        <div className={styles.colonne}>
         <div className={styles.colorContainer}>
            <h2>Summer Vibes</h2>
         </div>
        <ul>
            <li className={styles.liContainer}>Bella Schmurda</li>
            <li className={styles.liContainer}>Adekunle Gold</li>
            <li className={styles.liContainer}>Kaira Marley</li>
            <li className={styles.liContainer}>Burna Boy</li>
            <li className={styles.liContainer}>Davido</li>
            <li className={styles.liContainer}>Joeboy</li>
            <li className={styles.liContainer}>Koffee</li>
            <li className={styles.liContainer}>Wizkid</li>
            <li className={styles.liContainer}>Rema</li>
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

export default Tracks;