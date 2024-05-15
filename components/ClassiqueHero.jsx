import styles from '../styles/Herobis.module.css';
import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const ClassiqueHero = () => {
  return (
    <div className={styles.backgroundContainer} id="homepage">
    <img src="/Assets/contact.png" alt="Background" className={styles.backgroundImage} />

        <div className={styles.colonne}>
         <div className={styles.colorContainer}>
            <h2>Nos Classiques</h2>
         </div>
        <ul>
            <li onClick={() => handleDialogItemClick('/tracks/classique/oxmo')} className={styles.liContainer}>Oxmo Puccino</li>
            <li onClick={() => handleDialogItemClick('/tracks/classique/fonkyfamily')} className={styles.liContainer}>Fonky Family</li>
            <li onClick={() => handleDialogItemClick('/tracks/classique/docgyneco')} className={styles.liContainer}>Doc Gyneco</li>
            <li onClick={() => handleDialogItemClick('/tracks/classique/mcsolaar')} className={styles.liContainer}>MC Solaar</li>
            <li onClick={() => handleDialogItemClick('/tracks/classique/arsenik')} className={styles.liContainer}>Ârsenik</li>
            <li onClick={() => handleDialogItemClick('/tracks/classique/lunatic')} className={styles.liContainer}>Lunatic</li>
            <li onClick={() => handleDialogItemClick('/tracks/classique/sniper')}className={styles.liContainer}>Sniper</li>
            <li onClick={() => handleDialogItemClick('/tracks/classique/iam')} className={styles.liContainer}>IAM</li>
            <li onClick={() => handleDialogItemClick('/tracks/classique/ntm')}className={styles.liContainer}>NTM</li>
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

export default ClassiqueHero;