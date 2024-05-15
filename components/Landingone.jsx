import styles from '../styles/Landingone.module.css';
import React from 'react';

const Landingone = () => {
  return (
    <div className={styles.landingContainer} id="landing1">
    {/* leftContainer */}
    <div className={styles.leftContainer}>
      <h1 className={styles.landingTitle}>Exploration lyrique</h1>
      <h2 className={styles.landingSubtitle}>Au coeur de la planète rap</h2>
    </div>

    {/* rightContainer */}
    <div className={styles.rightContainer}>
      <img src="/Assets/jazzybazz/jaz.jpg" alt="Jazzy Bazz" className={styles.landingPic} />
    </div>
  </div>

  );
};

export default Landingone;