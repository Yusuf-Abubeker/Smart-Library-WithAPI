import React from "react";
import styles from "../styles/ErrorPage.module.css";
import img from "../assets/unicorn.png";
import { useParams } from "react-router-dom";
import books from "../data/bookData";
import Navigation from "./Navigation";
import Footer from "./Footer";

const ErrorPage = () => {
  const { bookId } = useParams();
  let msg;
  bookId >= books.length
    ? (msg = "Oops! The book is not in store")
    : (msg = "Oops! Page Not Found");
  return (
    <>
      <Navigation />
      <div className={styles.error_page}>
        <h1 className={styles.error_title}>{msg}</h1>
        <p className={styles.error_message}>
          Looks like you've entered a magical land that doesn't exist.
        </p>
        <img className={styles.error_image} src={img} alt="Unicorn" />
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
