import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from "../styles/Footer.module.css"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.footer_logo}>
          <h2 className={styles.footer_title}>Children's Library</h2>
        </div>
        <div className={styles.footer_links}>
          <ul className={styles.footer_list}>
            <li className={styles.footer_item}><Link to="/child/about" className={styles.footer_link}>About Us</Link></li>
            <li className={styles.footer_item}><Link to="/child/contact" className={styles.footer_link}>Contact Us</Link></li>
          </ul>
        </div>
        <div className={styles.footer_social}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={32} className={styles.social_icon} /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={32} className={styles.social_icon} /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={32} className={styles.social_icon} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
