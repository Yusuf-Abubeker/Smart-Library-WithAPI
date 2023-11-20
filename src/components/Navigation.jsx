import React from 'react';
import styles from '../styles/Navigation.module.css'
import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaInfo, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_item}><Link to="/child"><FaHome/>Home</Link></li>
        <li className={styles.nav_item}><Link to="/child/books"><FaBook/>Book List</Link></li>
        <li className={styles.nav_item}><Link to="/child/about"><FaInfo/>About</Link></li>
        <li className={styles.nav_item}><Link to="/child/contact"><FaEnvelope/>Contact</Link></li>
      </ul>
      <Link to="/login">signIn</Link>
    </nav>
  );
};

export default Navigation;
