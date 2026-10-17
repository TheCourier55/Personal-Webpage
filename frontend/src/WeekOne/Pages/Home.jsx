import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Home.css'
import kyleImage from '../../assets/kyleImage.jpg'
import lnImage from '../../assets/ln.png'
import gtImage from '../../assets/gt.png'
import gmImage from '../../assets/gm.png'
import phImage from '../../assets/ph.png'

function Home() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  return (
    <div className="page-wrapper">
      <div className="arc-sidebar left-arc"></div>
      <div className="arc-sidebar right-arc"></div>

      <nav className="navbar">
        <div className="nav-brand">Tyler Springfield</div>
        <div className="nav-links">
          <button className="nav-btn">About Me</button>
          <button className="nav-btn">Rust</button>
          <button className="nav-btn">Machine Learning</button>
          <button className="nav-btn">Projects</button>
          <button onClick={() => navigate('/DevLib')} className="nav-btn">Development Library</button>
        </div>
      </nav>

      <div className="center-box">
        <main className="main-content">
          <h1 className="page-title">Welcome To My Portfolio</h1>

          <div className="content-grid">
            <div className="description-section">
              <p className="intro-text">
                Howdy, I'm Tyler Springfield, and welcome to my portfolio. Learn about me, my computer science journey, and see demos of some of my projects!
              </p>
            </div>

            <div className="image-section">
              <img src={kyleImage} alt="Tyler Springfield" className="profile-img" />
            </div>
          </div>
        </main>

        <footer className="footer">
          <div className="contact-links">
            <div className="contact-item">
              <img src={gmImage} alt="Email Icon" className="contact-icon" />
              <a className="contact-link">Tyler@thespringfields.org</a>
            </div>
            <div className="contact-item">
              <img src={phImage} alt="Phone Icon" className="contact-icon" />
              <a className="contact-link">469-353-0604</a>
            </div>
            <div className="contact-item">
              <img src={lnImage} alt="LinkedIn Icon" className="contact-icon" />
              <a href="https://www.linkedin.com/in/tylerspringfield55" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
            </div>
            <div className="contact-item">
              <img src={gtImage} alt="GitHub Icon" className="contact-icon" />
              <a href="https://github.com/TheCourier55/Personal-Webpage" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home