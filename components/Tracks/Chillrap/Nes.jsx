import Header from '../../Header';
import styles from '../../../styles/Isaiah.module.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Nes = () => {
  return (
    <div className={styles.landingContainer}>
      <Header />
    {/* leftContainer */}
    <div className={styles.leftContainer}>
      <h1 className={styles.landingTitle}>Jazzybazz</h1>
      <h2 className={styles.landingSubtitle}>Au coeur de la planète rap</h2>
    </div>
    {/* rightContainer */}
    <div className={styles.rightContainer}>
      <img src="/Assets/isaiah/i.jpg" alt="Isaiah" className={styles.landingPic} />
    </div>
    <div className={styles.scrollLinkContainer}>
      <ScrollLink
        to="landing2"
        smooth={true}
        duration={500}
        className={styles.scrollLinkButton}
      >
    1
      </ScrollLink>
      </div>
      {/* leftContainer */}
      <div className={styles.landingContainer2}>
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
  </div>

  );
}

export default Nes ;