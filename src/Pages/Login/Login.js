import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Login.module.css'

const Login = () => {
  const [username, setUsername] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now, just console log - no backend
    console.log('Username entered:', username)
  }

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.loginCard}>
          <h1 className={styles.title}>Enter Your Username</h1>
          <p className={styles.subtitle}>Join the cybersecurity challenge!</p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                id='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Enter your username'
                className={styles.input}
              />
            </div>

            <button type='submit' className={styles.submitBtn}>
              Start Playing
            </button>
          </form>

          <div className={styles.quickAccess}>
            <p>Quick Access (No Auth Required):</p>
            <div className={styles.quickLinks}>
              <Link to='/game' className={styles.quickLink}>
                Go to Games
              </Link>
              <Link to='/leaderboard' className={styles.quickLink}>
                View Leaderboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
