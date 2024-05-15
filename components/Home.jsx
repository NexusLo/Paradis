import Beatmaker from './Beatmaker';
import Contact from './Contact';    
import Concept from './Concept';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Landingtwo from './Landingtwo';
import Landingone from './Landingone';
import styles from '../styles/Home.module.css';

function Home() {

  return (
    <div className={styles.container} id="container">
        <Header />
        <Hero />
        {/*********** Conteneur de Landing ***********/}
        <div  id="landing1">
          <Landingone />
        </div>
        <div id="landing2">
          <Landingtwo />
        </div>
        {/************* Concept Container ****************/}
        <div id="concept">
          <Concept />
        </div>
        {/************* Beatmaker Container ****************/}
        <div id="beatmaker">
          <Beatmaker />
        </div>

        <div id="contact">
          <Contact />
        </div>
    </div>
  );
}

export default Home;