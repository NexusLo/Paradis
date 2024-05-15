import Header from '../../Header';
import styles from '../../../styles/Isaiah.module.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Kendrick = () => {
  return (
    <div className={styles.landingContainer} id="landing1">
      <Header />
    {/* leftContainer */}
    <div className={styles.leftContainer}>
      <h1 className={styles.landingTitle}>Kendrick Lamar</h1>
      <h2 className={styles.landingSubtitle}>Au coeur de la planète rap</h2>
    </div>
    {/* rightContainer */}
    <div className={styles.rightContainer}>
      <img src="/Assets/kendrick/kendrick.jpeg" alt="Kendrick" className={styles.landingPic} />
    </div>
      {/* leftContainer */}
      <div className={styles.landingContainer2} id="landing2">
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

export default Kendrick;