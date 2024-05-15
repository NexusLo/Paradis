import styles from '../styles/Landingtwo.module.css';
import React from 'react';

const Landingtwo = () => {
  return (
    <div className={styles.landingContainer} id="landing2">
    {/* leftContainer */}
    <div className={styles.leftContainer2}>
      <img src="/Assets/macmiller/mac-miller3.jpg" alt="Mac Miller" className={styles.landingPic} />
    </div>

    {/* rightContainer */}
    <div className={styles.rightContainer2}>
      <h1 className={styles.landingTitle2}>Frissons Auditifs</h1>
      <h2 className={styles.landingSubtitle2}>Découvrez des titres captivants</h2>
    </div>
  </div>
  );
};

export default Landingtwo;