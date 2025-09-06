import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Login.module.css'

const Login = () => {
  // state to store input from username field
  const [username, setUsername] = useState('')

  // handle form submission - prevent page reload and log username
  const handleSubmit = (e) => {
    e.preventDefault() // prevent default form submit
    console.log('Username entered:', username) // just logging for now
  }

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.loginCard}>
          {/* header of the login card */}
          <div className={styles.header}>
            <h1 className={styles.title}>Enter Your Username</h1>
            <p className={styles.subtitle}>Join the cybersecurity challenge!</p>
          </div>

          {/* form with controlled input */}
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor='username' className={styles.label}>
                Username
              </label>
              <input
                type='text'
                id='username'
                value={username} // controlled input value
                onChange={(e) => setUsername(e.target.value)} // update state on typing
                placeholder='Enter your username'
                className={styles.input}
              />
            </div>

            <button type='submit' className={styles.submitBtn}>
              <span>Start Playing</span>
            </button>
          </form>

          {/* quick navigation links for testing or bypass */}
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
