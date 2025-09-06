import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to='/' className={styles.logo}>
          CyberGuard
        </Link>

        <div className={styles.navLinks}>
          <Link
            to='/'
            className={`${styles.navLink} ${
              isActive('/') ? styles.active : ''
            }`}
          >
            Home
          </Link>
          <Link
            to='/learn'
            className={`${styles.navLink} ${
              isActive('/learn') ? styles.active : ''
            }`}
          >
            Learn
          </Link>
          <Link
            to='/leaderboard'
            className={`${styles.navLink} ${
              isActive('/leaderboard') ? styles.active : ''
            }`}
          >
            Leaderboard
          </Link>
          <Link
            to='/login'
            className={`${styles.navLink} ${styles.loginBtn} ${
              isActive('/login') ? styles.active : ''
            }`}
          >
            Login/Play
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
