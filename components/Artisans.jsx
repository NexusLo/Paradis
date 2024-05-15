import Header from '../components/Header';
import Herobis from '../components/Herobis';
import styles from '../styles/Artisans.module.css';

function Artisans() {

  return (
    <div className={styles.container} id="container">
        <Header />
        <Herobis />
    </div>
  );
}

export default Artisans;