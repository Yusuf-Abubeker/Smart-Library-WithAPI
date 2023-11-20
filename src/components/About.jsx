import React from "react";
import { FaMagic, FaBook, FaRocket } from "react-icons/fa"; // Import icons from react-icons
import styles from "../styles/About.module.css";
import illustration from "../assets/kids-reading.jfif";

const About = () => {
  return (
    <div className={styles.about_page}>
      <h1 className={styles.about_title}><FaMagic />  About Our Magical Library</h1>
      <img src={illustration} alt="Kids Reading" className={styles.about_illustration} />
      <p className={styles.about_description}>
        Welcome to our enchanting Children's Library, a place where your child's
        imagination knows no bounds. Our library is filled with a world of
        colorful stories, exciting adventures, and endless learning
        opportunities.
      </p>
      <p className={styles.about_fun_facts}>
        <FaBook /> Fun Facts:
        <ul>
          <li>We have a magical collection of over 20 books.</li>
          <li>Join our reading quests and embark on epic journeys.</li>
          <li>Discover a new enchanting story every week.</li>
        </ul>
      </p>
    </div>
  );
};

export default About;
