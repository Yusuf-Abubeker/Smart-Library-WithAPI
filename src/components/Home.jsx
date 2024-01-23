import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import bookImg from "../assets/book1.jfif";
import coverImg from "/coverimage.jpg";
import CategoryList from "./CategoryList";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <section className={styles.bookstoreSection}>
        <div className={styles.textContainer}>
          <p className={styles.storeName}>Welcome to Yusuf Book Store</p>
          <h1 className={styles.mainHeading}>For All Your Reading Needs</h1>
          <p className={styles.storeDescription}>
            Discover a world of books tailored for young minds
          </p>
          <button className={styles.readMoreButton}>Read More</button>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={coverImg}
            alt="Kids Reading"
            className={styles.coverImage}
          />
        </div>
      </section>
      <section className={styles.featured_books}>
        <h2>Featured Books</h2>
        <div className={styles.book_list}>
          <div className={styles.book_card}>
            <img src={bookImg} alt="Book 1" className={styles.book_cover} />
            <h3>Adventure in Wonderland</h3>
            <p>Join Alice on her magical journey.</p>
            <Link to="/child/books/1" className={styles.read_more_link}>
              Read More
            </Link>
          </div>
          <div className={styles.book_card}>
            <img src={bookImg} alt="Book 2" className={styles.book_cover} />
            <h3>The Dinosaur Guide</h3>
            <p>Learn about the fascinating world of dinosaurs.</p>
            <Link to="/child/books/2" className={styles.read_more_link}>
              Read More
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.all_categories}>
        <h2>All Categories</h2>
        <CategoryList />
      </section>
      <section className={styles.call_to_action}>
        <h2>Get Started</h2>
        <p>
          Start exploring a world of wonderful stories and educational resources
          for kids.
        </p>
        <Link to="/child/books" className={styles.btn}>
          Browse the Library <FaArrowRight />
        </Link>
      </section>
    </div>
  );
};

export default Home;
