import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Landing.module.css'

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Learn Cybersecurity Through
            <span className={styles.highlight}> Gamification</span>
          </h1>
          <p className={styles.subtitle}>
            Master cybersecurity concepts through interactive games and
            challenges
          </p>

          <div className={styles.cta}>
            <Link to='/login' className={styles.startBtn}>
              Start Playing
            </Link>
            <Link to='/learn' className={styles.learnBtn}>
              Explore Learning
            </Link>
          </div>
        </div>

        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>Interactive Learning</h3>
            <p>Learn through hands-on experiences</p>
          </div>
          <div className={styles.feature}>
            <h3>Gamified Challenges</h3>
            <p>Compete and earn points</p>
          </div>
          <div className={styles.feature}>
            <h3>Track Progress</h3>
            <p>Monitor your learning journey</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
