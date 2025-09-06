import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Landing.module.css'
import flagImg from '../../assets/images/indian-flag2.png'


const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <div className={styles.brandSection}>
            <h1 className={styles.brandName}>
              H<span className={styles.hackText}>4</span>ck
              <span className={styles.hackText}>4</span>demy
            </h1>
            <div className={styles.tagline}>
              Secure India, One Game at a Time
            </div>
          </div>

          <h2 className={styles.title}>
            Making{' '}
            <span className={styles.highlight}>Cybersecurity</span>
            <br />
            Fun & Accessible for Everyone
          </h2>

          <p className={styles.subtitle}>
            Join India's gamified cybersecurity awareness revolution. Learn
            essential online safety through interactive challenges and compete
            with fellow citizens to build a safer digital India.
          </p>

          <div className={styles.cta}>
            <Link to='/learn' className={styles.learnBtn}>
              Learn
            </Link>
            <Link to='/login' className={styles.playBtn}>
              Play
            </Link>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>1.16B+</span>
              <span className={styles.statText}>Indians Online</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50,000+</span>
              <span className={styles.statText}>Cyber Crimes Daily</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>₹1.25T</span>
              <span className={styles.statText}>Annual Cyber Losses</span>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className={styles.mission}>
          <div className={styles.missionContent}>
            <div>
              <h3 className={styles.missionTitle}>Our Mission</h3>
              <p className={styles.missionDescription}>
                Empowering every Indian citizen with essential cybersecurity
                knowledge through gamification. From password hygiene to safe
                browsing, we make learning engaging and accessible, creating a
                digitally secure nation one player at a time.
              </p>
            </div>

            {/* Flag Section */}
            <div className={styles.flagContainer}>
              <img
                src={flagImg}
                alt='Indian Flag'
                className={styles.flagImage}
              />
              <span className={styles.flagText}>
                Digital India, Secure India
              </span>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className={styles.howItWorks}>
          <h3 className={styles.sectionTitle}>How It Works</h3>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h4>Enter Username</h4>
              <p>
                No signup required - just enter your username and start learning
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h4>Learn & Play</h4>
              <p>Complete interactive modules and quiz-style games</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h4>Compete</h4>
              <p>
                Earn points and climb the leaderboard to become a cyber champion
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <p>&copy; 2024 H4ck4demy. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Landing
