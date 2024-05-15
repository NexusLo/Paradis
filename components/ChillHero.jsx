import styles from '../styles/Chillhero.module.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import React from 'react';

const ChillHero = () => {
  return (
    <div className={styles.landingContainer} id="landing1">
      <div className={styles.leftContainer}>
        <h1 className={styles.landingTitle}>Mellow hip-hop</h1>
        <h2 className={styles.landingSubtitle}>Des artistes qui t'aident à récupérer d'un code goulag</h2>
      </div>
      
      <div className={styles.rightContainer}>
        <img src="/Assets/chillsongs/smoke.png" alt="fumée" className={styles.landingPic} />
      </div>
      <div className={`${styles.chillSongsPage} ${styles.scrollDownContainer}`}>
        <ScrollLink to="kendrick" smooth={true} duration={800} className={styles.scrollDownArrow}></ScrollLink>
        </div>
    </div>
  );
};
export default ChillHero;