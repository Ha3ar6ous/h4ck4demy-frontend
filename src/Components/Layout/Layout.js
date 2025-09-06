import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './Layout.module.css'

// layout works as a wrapper component
const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar /> {/* navbar stays fixed for all pages */}
      <main className={styles.main}>{children}</main>{' '}
      {/* renders page-specific content */}
    </div>
  )
}

export default Layout
