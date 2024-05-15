import styles from '../styles/Hero.module.css';
import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const Hero = () => {
  return (
    <div className={styles.backgroundContainer} id="homepage">
    {/* Image de fond */}
    <img src="/Assets/contact.png" alt="Background" className={styles.backgroundImage} />
    
    {/* Contenu au-dessus de l'image de fond */}

       {/**  Cercles de défilement **/}
       <div className={styles.scrollCirclesContainer}>
        <ScrollLink to="homepage" smooth={true} duration={800} className={styles.scrollCircle}></ScrollLink >
        <ScrollLink to="landing1" smooth={true} duration={800} className={styles.scrollCircle}></ScrollLink >
        <ScrollLink to="landing2" smooth={true} duration={800} className={styles.scrollCircle}></ScrollLink >
        <ScrollLink to="concept" smooth={true} duration={800} className={styles.scrollCircle}></ScrollLink > 
        <ScrollLink to="beatmaker" smooth={true} duration={800} className={styles.scrollCircle}></ScrollLink >
        <ScrollLink to="contact" smooth={true} duration={800} className={styles.scrollCircle}></ScrollLink >  
    </div>

    <div className={styles.maintitleContainer}>
      <h1 className={styles.maintitle}>Le Paradis blanc</h1>
      <h2 className={styles.mainsubtitle}>Battre au rythme de la culture Hip-Hop</h2>
      <div className={styles.logoContainer}>
        <img src="/Assets/logow2.png" alt="Logo Le Paradis Blanc" className={styles.logo} />
      </div>  
     </div>
    </div>
  );
};

export default Hero;