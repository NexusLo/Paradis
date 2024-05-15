import Header from '../components/Header';
import Herobis from '../components/Herobis';
import styles from '../styles/Home.module.css';

function Scenes() {

  return (

    <div className={styles.container} id="container">
        <Header />
        <Herobis />
    </div>

  );
}

export default Scenes;