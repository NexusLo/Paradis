import Header from '../../Header';
import styles from '../../../styles/Isaiah.module.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Kendescription = () => {
  return (
    <div className={styles.landingContainer} id="landing2">
    <div className={styles.leftContainer2}>
      <img src="/Assets/macmiller/mac-miller3.jpg" alt="Mac Miller" className={styles.landingPic} />
    </div>

    <div className={styles.rightContainer2}>
      <h1 className={styles.landingTitle2}>Frissons Auditifs</h1>
      <h2 className={styles.landingSubtitle2}>Découvrez des titres captivants</h2>
    </div>
  </div>  

  );
}

export default Kendescription;