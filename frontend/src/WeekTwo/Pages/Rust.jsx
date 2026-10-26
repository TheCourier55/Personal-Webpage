import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../css/Rust.module.css'
import GameBox from '../components/GameBox'
import lnImage from '../../assets/ln.png'
import gtImage from '../../assets/gt.png'
import gmImage from '../../assets/gm.png'
import phImage from '../../assets/ph.png'

function Rust() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  return (
    <div className={styles.pageWrapper}>
      <div className={`${styles.arcSidebar} ${styles.leftArc}`}></div>
      <div className={`${styles.arcSidebar} ${styles.rightArc}`}></div>

      <nav className={styles.navbar}>
        <div className={styles.navBrand}>Tyler Springfield</div>
        <div className={styles.navLinks}>
          <button onClick={() => navigate('/')} className={styles.navBtn}>Home</button>
          <button className={styles.navBtn}>About Me</button>
          <button onClick={() => navigate('/RustTwo')} className={styles.navBtn}>Rust</button>
          <button className={styles.navBtn}>Machine Learning</button>
          <button className={styles.navBtn}>Projects</button>
          <button onClick={() => navigate('/DevLib')} className={styles.navBtn}>Development Library</button>
        </div>
      </nav>

      <div className={styles.centerBox}>
        <main className={styles.mainContent}>
          <h1 className={styles.pageTitle}>Geometry Wars</h1>
          
          <GameBox />

          <div className={styles.rustInfo}>
            <p className={styles.rustText}>
              Rust is becoming a more and more important language for its speed in being memory safe while not using a garbage collector. This game, as well as the backend for this website, was programmed in Rust.
            </p>
          </div>
        </main>
      </div>

      <footer className={styles.footer}>
        <div className={styles.contactLinks}>
          <div className={styles.contactItem}>
            <img src={gmImage} alt="Email Icon" className={styles.contactIcon} />
            <a className={styles.contactLink}>Tyler@thespringfields.org</a>
          </div>
          <div className={styles.contactItem}>
            <img src={phImage} alt="Phone Icon" className={styles.contactIcon} />
            <a className={styles.contactLink}>469-353-0604</a>
          </div>
          <div className={styles.contactItem}>
            <img src={lnImage} alt="LinkedIn Icon" className={styles.contactIcon} />
            <a href="https://www.linkedin.com/in/tylerspringfield55" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>LinkedIn</a>
          </div>
          <div className={styles.contactItem}>
            <img src={gtImage} alt="GitHub Icon" className={styles.contactIcon} />
            <a href="https://github.com/TheCourier55/Personal-Webpage" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Rust