import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to='/' className={styles.logo}>
          H<span className={styles.hackText}>4</span>ck
          <span className={styles.hackText}>4</span>demy
        </Link>

        {/* Hamburger button */}
        <button
          className={styles.menuToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle menu'
        >
          <span className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Nav Links */}
        <div className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
          <Link
            to='/'
            onClick={() => setIsOpen(false)}
            className={`${styles.navLink} ${
              isActive('/') ? styles.active : ''
            }`}
          >
            Home
          </Link>
          <Link
            to='/learn'
            onClick={() => setIsOpen(false)}
            className={`${styles.navLink} ${
              isActive('/learn') ? styles.active : ''
            }`}
          >
            Learn
          </Link>
          <Link
            to='/leaderboard'
            onClick={() => setIsOpen(false)}
            className={`${styles.navLink} ${
              isActive('/leaderboard') ? styles.active : ''
            }`}
          >
            Leaderboard
          </Link>
          <Link
            to='/login'
            onClick={() => setIsOpen(false)}
            className={`${styles.navLink} ${styles.loginBtn} ${
              isActive('/login') ? styles.active : ''
            }`}
          >
            <span className={styles.btnText}>Login/Play</span>
            <span className={styles.btnShine}></span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
