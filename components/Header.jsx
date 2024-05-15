import React, { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const [dialogState, setDialogState] = useState({
    tracksCertifies: { visible: false, content: '', mouseOver: false },
    etoilesMontantes: { visible: false, content: '', mouseOver: false },
    artisansSonores: { visible: false, content: '', mouseOver: false },
    scenesUrbaines: { visible: false, content: '', mouseOver: false },
  });

  const handleDialogToggle = (dialogKey, content) => {
    // Fermer les autres boîtes de dialogue
    setDialogState((prevState) => {
      const newState = {};
      Object.keys(prevState).forEach((key) => {
        newState[key] = { ...prevState[key], visible: key === dialogKey };
      });
      return newState;
    });

    // Afficher la boîte de dialogue actuelle
    setTimeout(() => {
      setDialogState((prevState) => ({
        ...prevState,
        [dialogKey]: { ...prevState[dialogKey], content, visible: true },
      }));
    }, 10); // Délai avant d'afficher la boîte de dialogue

    // Si la boîte de dialogue reste ouverte pendant 3 secondes sans survol, la fermer
    setTimeout(() => {
      if (!dialogState[dialogKey].mouseOver) {
        setDialogState((prevState) => ({
          ...prevState,
          [dialogKey]: { ...prevState[dialogKey], visible: false },
        }));
      }
    }, 1000);
  };

  const handleDialogItemClick = (destination) => {
    // Rediriger vers la page spécifiée depuis la boîte de dialogue
    window.location.href = destination;
  };

  const handleDialogMouseEnter = (dialogKey) => {
    // La souris est en survol sur la boîte de dialogue
    setDialogState((prevState) => ({
      ...prevState,
      [dialogKey]: { ...prevState[dialogKey], mouseOver: true },
    }));
  };
  const handleDialogMouseLeave = (dialogKey) => {
    // La souris n'est plus en survol sur la boîte de dialogue
    setDialogState((prevState) => ({
      ...prevState,
      [dialogKey]: { ...prevState[dialogKey], mouseOver: false },
    }));
  };


  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.navContainer}>
          <ul className={styles.ulContainer}>

            <li className={styles.liContainer}>
              <a
                className={styles.link}
                href="#"
                onClick={() => handleDialogToggle('tracksCertifies')}
              >
                Tracks Certifiés
              </a>
              {dialogState.tracksCertifies.visible && (
                <div
                className={styles.dialog}
                onMouseEnter={() => { handleDialogMouseEnter('tracksCertifies'); handleDialogMouseEnter(); }}
                onMouseLeave={() => { handleDialogMouseLeave('tracksCertifies'); handleDialogMouseLeave(); }}
               > 
                  <p>{dialogState.tracksCertifies.content}</p>
                  <ul>
                  <li onClick={() => handleDialogItemClick('/tracks/afrowave')}>
                      AfroWave
                    </li>
                    <li onClick={() => handleDialogItemClick('/tracks/ghettoyouth')}>
                      Ghetto Youth
                    </li>
                    <li onClick={() => handleDialogItemClick('/tracks/flowfeminin')}>
                      Flow Feminin
                    </li>
                    <li onClick={() => handleDialogItemClick('/tracks/screamrap')}>
                      Scream Rap
                    </li>
                    <li onClick={() => handleDialogItemClick('/tracks/classiques')}>
                      Classiques
                    </li>
                    <li onClick={() => handleDialogItemClick('/tracks/chillrap')}>
                      Chillhop
                    </li>
                    <li onClick={() => handleDialogItemClick('/tracks/nextgenrap')}>
                      Next Gen
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className={styles.liContainer}>
              <a
                className={styles.link}
                href="#"
                onClick={() => handleDialogToggle('artisansSonores')}
              >
                Artisans Sonores
              </a>
              {dialogState.artisansSonores.visible && (
                <div
                className={styles.dialog}
                onClick={() => handleDialogItemClick('/artisans')}
                onMouseEnter={() => { handleDialogMouseEnter('artisansSonores'); handleDialogMouseEnter(); }}
                onMouseLeave={() => { handleDialogMouseLeave('artisansSonores'); handleDialogMouseLeave(); }}
               > 
                  <p>{dialogState.artisansSonores.content}</p>
                  <ul>
                    <li onClick={() => handleDialogItemClick('/artisans/beatmaker')}>
                      Ingénieur du Son
                    </li>
                    <li onClick={() => handleDialogItemClick('/artisans/mastering')}>
                     Ingénieur mastering
                    </li>
                    <li onClick={() => handleDialogItemClick('/artisans/compositeur')}>
                      Auteur Compositeur
                    </li>
                    <li onClick={() => handleDialogItemClick('/artisans/musicien')}>
                     Musicien de studio
                    </li>
                    <li onClick={() => handleDialogItemClick('/artisans/real')}>
                     Réalisateur artistique
                    </li>
                    <li onClick={() => handleDialogItemClick('/artisans/arrangeur')}>
                     Arrangeur 
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li className={styles.liContainer}>
              <a
                className={styles.link}
                href="#"
                onClick={() => handleDialogToggle('scenesUrbaines')}
              >
                Scènes Urbaines
              </a>
              {dialogState.scenesUrbaines.visible && (
                <div
                className={styles.dialog}
                onClick={() => handleDialogItemClick('/scenes')}
                onMouseEnter={() => { handleDialogMouseEnter('scenesUrbaines'); handleDialogMouseEnter(); }}
                onMouseLeave={() => { handleDialogMouseLeave('scenesUrbaines'); handleDialogMouseLeave(); }}
               > 
                  <p>{dialogState.scenesUrbaines.content}</p>
                  <ul>
                    <li onClick={() => handleDialogItemClick('/scenes/rolling')}>
                      Rolling Loud
                    </li>
                    <li onClick={() => handleDialogItemClick('/scenes/ardentes')}>
                      Les Ardentes
                    </li>
                    <li onClick={() => handleDialogItemClick('/scenes/dour')}>
                      Dour Festival
                    </li>
                    <li onClick={() => handleDialogItemClick('/scenes/cabaretvert')}>
                      Le Cabaret Vert
                    </li>
                    <li onClick={() => handleDialogItemClick('/scenes/bounce')}>
                      Bounce Club
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className={styles.liContainer}>
              <ScrollLink to="concept" smooth={true} duration={800} className={styles.link}>
                Notre Concept
              </ScrollLink>
            </li>
            <li className={styles.liContainer}>
              <ScrollLink to="contact" smooth={true} duration={800} className={styles.link}>
                Nous Contacter
              </ScrollLink>
            </li>
            <li className={styles.liContainer}>
              <a className={styles.link} href="/" >Home</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;