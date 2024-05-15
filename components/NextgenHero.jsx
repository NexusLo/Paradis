import styles from '../styles/Herobis.module.css';
import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const NextgenHero = () => {
  return (
    <div className={styles.backgroundContainer} id="homepage">
    {/* Image de fond */}
    <img src="/Assets/contact.png" alt="Background" className={styles.backgroundImage} />

        <div className={styles.colonne}>
         <div className={styles.colorContainer}>
            <h2>Nos Classiques</h2>
         </div>
        <ul>
            <li onClick={() => handleDialogItemClick('/tracks/nextgen/roshi')}className={styles.liContainer}>Capitaine Roshi</li>
            <li onClick={() => handleDialogItemClick('/tracks/nextgen/bbjacques')}className={styles.liContainer}>BB Jacques</li>
            <li onClick={() => handleDialogItemClick('/tracks/nextgen/lalaace')}className={styles.liContainer}>Lala & Ce</li>
            <li onClick={() => handleDialogItemClick('/tracks/nextgen/luther')}className={styles.liContainer}>Luther</li>
            <li onClick={() => handleDialogItemClick('/tracks/nextgen/yvnnis')}className={styles.liContainer}>Yvnnis</li>
            <li onClick={() => handleDialogItemClick('/tracks/nextgen/lafeve')}className={styles.liContainer}>La Fève</li>
            <li onClick={() => handleDialogItemClick('/tracks/nextgen/bushi')}className={styles.liContainer}>Bu$hi</li>
            <li onClick={() => handleDialogItemClick('/tracks/nextgen/luther')}className={styles.liContainer}>Luther</li>
            <li onClick={() => handleDialogItemClick('/tracks/nextgen/yame')}className={styles.liContainer}>Yamê</li>
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

export default NextgenHero;