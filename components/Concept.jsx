import styles from '../styles/Concept.module.css';
import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const Concept = () => {
  return (
    <div className={styles.conceptContainer} id="concept">
     <img src="/Assets/lalaAce/la.png" alt="Background" className={styles.backgroundImage} />

    <div className={styles.titleContainer2}>
      <h1 className={styles.conceptTitle}>Notre Concept</h1>
    </div>
    <div className={styles.subtitleContainer1}>
      <h2 className={styles.conceptSubtitle}> Face à la multiplication de morceaux à la rythmique répétitive,
       aux mélodies éculées et au manque d'inventivité de certains artistes 
       nous avons décidé d'agir!</h2>
    </div>
    <div className={styles.subtitleContainer2}>
        <h2 className={styles.conceptSubtitle}> Notre raison d'être : promouvoir les artistes qui continuent d'enrichir la culture hip-hop,
        que ce soit à travers leurs projets, leur direction artistique unique ou, dans le cas d’établissements culturels & nocturnes, leurs efforts pour diffuser un DJ set travaillé
      </h2>
      <ScrollLink to="contact" smooth={true} duration={800}>
         <button className={styles.contactButton}>Nous Contacter</button>
      </ScrollLink>
    </div>
  </div>
  );
};

export default Concept;