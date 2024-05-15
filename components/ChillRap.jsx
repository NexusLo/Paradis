import Header from '../components/Header';
import ChillHero from '../components/ChillHero';
import Kendrick from '../components/Tracks/Chillrap/Kendrick';
import Isaiah from '../components/Tracks/Chillrap/Isaiah';
import Jazzybazz from '../components/Tracks/Chillrap/Jazzybazz';
import Joeybadass from '../components/Tracks/Chillrap/Joeybadass';
import Macmiller from '../components/Tracks/Chillrap/Macmiller';
import Nepal from '../components/Tracks/Chillrap/Nepal';
import Nes from '../components/Tracks/Chillrap/Nes';

import styles from '../styles/Chillrap.module.css';

import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const ChillRap = () => {
  return (
    <div className={styles.container} id="container">
      
      <div id="chillsongs" className={styles.chillSongsPage}>
        <Header />
        <ChillHero />

        <div className={styles.scrollDownContainer}>
        <ScrollLink to="kendrick" smooth={true} duration={800} className={styles.scrollDownArrow}></ScrollLink>
        </div>
      </div>

      <div id="kendrick">
          <Kendrick />

          <div className={styles.scrollLinkArrow}>
          <ScrollLink
            to="isaiah" smooth={true} duration={500} className={styles.scrollLinkButton}>
          </ScrollLink>
          <div className={styles.scrollUpContainer}>
        <ScrollLink to="chillsongs" smooth={true} duration={800} className={styles.scrollUpArrow}></ScrollLink>
        </div>
        <div className={styles.test}>
        <div className={styles.scrollRightContainer}>
        <ScrollLink to="kendescription" smooth={true} duration={800} className={styles.scrollRightArrow}></ScrollLink>
        </div>
          </div>
      </div>
      <div id="kendescription">
          <ScrollLink
            to="kendrick" smooth={true} duration={500} className={styles.scrollLeftButton}>
          </ScrollLink>
        </div>
      </div>
        <div id="isaiah">
          <Isaiah />
          <ScrollLink
            to="jazzybazz" smooth={true} duration={500} className={styles.scrollLinkButton}>
          </ScrollLink>
        </div>
        <div  id="jazzybazz">
          <Jazzybazz/>
          <ScrollLink
            to="macmiller" smooth={true} duration={500} className={styles.scrollLinkButton}>
          </ScrollLink>
        </div>
        <div id="macmiller">
          <Macmiller />
          <ScrollLink
            to="nepal" smooth={true} duration={500} className={styles.scrollLinkButton}>
          </ScrollLink>
        </div>
        <div id="nepal">
          <Nepal />
          <ScrollLink
            to="nes" smooth={true} duration={500} className={styles.scrollLinkButton}>
          </ScrollLink>
        </div>
        <div id="nes">
          <Nes />
          <ScrollLink
            to="chillsongs" smooth={true} duration={500} className={styles.scrollLinkButton}>
          </ScrollLink>
        </div>
  </div>

  );
}

export default ChillRap;