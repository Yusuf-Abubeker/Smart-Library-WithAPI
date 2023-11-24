import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"; // Import Axios
import styles from "../styles/BookDetail.module.css";
import ErrorPage from "./ErrorPage";

const BookDetail = () => {
  const navigate = useNavigate();
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [book, setBook] = useState(null); // Store the selected book
  const [isLoading, setIsLoading] = useState(true);

  const { bookId } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `http://127.0.0.1:3000/child/books/${bookId}`
        ); // Adjust the API endpoint
        setBook(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };
    fetchBook();
  }, [bookId]);

  const handleClose = () => {
    setIsBookOpen(false);
    navigate("/child/books");
  };

  const handleReadBook = () => {
    setIsBookOpen(true);
  };

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }
  
  if (!book) {
    return <ErrorPage />;
  }


  return (
    <div className={styles.book_detail}>
      <div className={styles.book_detail_header}>
        <h2 className={styles.book_detail_title}>{book.title}</h2>
        <button className={styles.close_button} onClick={handleClose}>
          Close
        </button>
      </div>
      <div className={styles.book_detail_content}>
        <div className={styles.book_detail_image}>
          <img src={`data:image/png;base64,${book.image}`} alt={book.title} />
        </div>
        <div className={styles.book_detail_info}>
          {isBookOpen ? (
            <div className={styles.book_detail_content}>
              <iframe
                className={styles.readingIframe}
                src={`data:application/pdf;base64,${book.content}`}
                frameborder="0"
              />
            </div>
          ) : (
            <div>
              <p className={styles.book_detail_category}>{book.category}</p>
              <p className={styles.book_detail_description}>
                {book.description}
              </p>
              <button className={styles.read_button} onClick={handleReadBook}>
                Read
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
