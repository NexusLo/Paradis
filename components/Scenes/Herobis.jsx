import styles from '../styles/Herobis.module.css';
import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const Herobis = () => {
  return (
    <div className={styles.backgroundContainer} id="homepage">
    {/* Image de fond */}
    <img src="/Assets/contact.png" alt="Background" className={styles.backgroundImage} />

        <div className={styles.colonne}>
         <div className={styles.colorContainer}>
            <h2>Notre Sélection</h2>
         </div>
        <ul>
            <li className={styles.liContainer}>Classiques</li>
            <li className={styles.liContainer}>Rap Conscient</li>
            <li className={styles.liContainer}>Ghetto Youth</li>
            <li className={styles.liContainer}>Trap Moderne </li>
            <li className={styles.liContainer}>Drill Music</li>
            <li className={styles.liContainer}>Flow Feminin</li>
            <li className={styles.liContainer}>R&B/Groove Rap</li>
            <li className={styles.liContainer}>AfroWave</li>
            {/* Ajoutez d'autres éléments de liste selon vos besoins */}
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

export default Herobis;