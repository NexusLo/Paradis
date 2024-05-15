import styles from '../styles/Herobis.module.css';
import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const GhettoHero = () => {
  return (
    <div className={styles.backgroundContainer} id="homepage">
    <img src="/Assets/contact.png" alt="Background" className={styles.backgroundImage} />

        <div className={styles.colonne}>
         <div className={styles.colorContainer}>
            <h2>Streetcred Max</h2>
         </div>
        <ul>
            <li onClick={() => handleDialogItemClick('/tracks/ghettoyouth/kalash')} className={styles.liContainer}>Kalash Criminel</li>
            <li onClick={() => handleDialogItemClick('/tracks/ghettoyouth/misteryou')} className={styles.liContainer}>Mister You</li>
            <li onClick={() => handleDialogItemClick('/tracks/ghettoyouth/13block')} className={styles.liContainer}>13 Block</li>
            <li onClick={() => handleDialogItemClick('/tracks/ghettoyouth/sofiane')} className={styles.liContainer}>Sofiane</li>
            <li onClick={() => handleDialogItemClick('/tracks/ghettoyouth/samat')} className={styles.liContainer}>Samat</li>
            <li onClick={() => handleDialogItemClick('/tracks/ghettoyouth/gradur')} className={styles.liContainer}>Gradur</li>
            <li onClick={() => handleDialogItemClick('/tracks/ghettoyouth/booba')} className={styles.liContainer}>Booba</li>
            <li onClick={() => handleDialogItemClick('/tracks/ghettoyouth/siboy')} className={styles.liContainer}>Siboy</li>
            <li onClick={() => handleDialogItemClick('/tracks/ghettoyouth/laf')}className={styles.liContainer}>La F</li>
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

export default GhettoHero;