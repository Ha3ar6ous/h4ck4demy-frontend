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
          <div className={styles.header}>
            <h1 className={styles.title}>Enter Your Username</h1>
            <p className={styles.subtitle}>Join the cybersecurity challenge!</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor='username' className={styles.label}>
                Username
              </label>
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
              <span>Start Playing</span>
            </button>
          </form>

          <div className={styles.quickAccess}>
            <p className={styles.quickAccessTitle}>
              Quick Access (No Auth Required):
            </p>
            <div className={styles.quickLinks}>
              <Link to='/game' className={styles.quickLink}>
                <span>Go to Games</span>
              </Link>
              <Link to='/leaderboard' className={styles.quickLink}>
                <span>View Leaderboard</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
