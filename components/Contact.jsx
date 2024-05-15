import styles from '../styles/Contact.module.css';
import React from 'react';
import Header from './Header';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const Contact = () => {
  return (
      
      <div className={styles.contactContainer} id="contact">
        <img src="/Assets/contact.png" alt="Background" className={styles.backgroundImage} />
        <div className={styles.logowContainer}>
        </div>
        <div className={styles.bar}></div>

        <div className={styles.surroundingSquare}>
          <div className={styles.contactTitleContainer}>
            <h1 className={styles.contactTitle}>Rejoins le mouvement</h1>
          </div>
          <div className={styles.infoContainer}>
            <h2 className={styles.contactInfoTitle}>1239 Chem. de Morgiou Marseille 13009</h2>
            <h2 className={styles.contactInfoTitle}>nxsdeveloppement@hotmail.fr</h2>
            <h2 className={styles.contactInfoTitle}>loicdiakouka@yahoo.fr</h2>
            <h2 className={styles.contactInfoTitle}>06.69.12.61.93</h2>
          </div>
      </div>
   </div>
  );
};

export default Contact;