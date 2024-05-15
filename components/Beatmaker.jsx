import styles from '../styles/Beatmaker.module.css';
import React from 'react';

const Beatmaker = () => {
  return (
    <div className={styles.landingContainer} id="beatmaker">
        <div className={styles.beatContainer}>
             <div className={styles.beatTitleContainer}>
                 <h1 className={styles.beatTitle}>Beatmakers mis en lumière</h1>
            </div>
             <div className={styles.beatSubtitleContainer1}>
                 <h2 className={styles.beatSubtitle}>Sculpteurs de sonorités uniques, les beatmakers apportent une identité sonore distinctive à chaque œuvre, 
                  contribuant à la diversité et à la richesse du genre. Leurs talents pour mêler samples, 
                  mélodies et rythmes transforment une compo en une expérience immersive.
                 </h2>
            </div>
            <div className={styles.beatSubtitleContainer2}>
             <h2 className={styles.beatSubtitle}> Aussi, nous rendons hommage à ces architectes sonores souvent méconnus qui insufflent vie
              et émotion à la toile musicale du hip-hop, laissant leur empreinte dans l'histoire de chaque morceau.
             </h2>
            </div> 
            <button className={styles.discoverButton}>Découvrir leur histoire</button>
        </div>
        <div className={styles.beatImageContainer}>
         <img src="/Assets/nujabes/nujabes3.jpg" alt="Jun Seba" className={styles.beatmakerPic} />
        </div>
  </div>
  );
};

export default Beatmaker;