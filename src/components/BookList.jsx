import React from "react";
import { Link, useLocation } from "react-router-dom";
import bookImg from "../assets/book1.jfif";
import styles from "../styles/BookList.module.css";
import useBooks from "./useBooks";

const BookList = () => {
  const { books, error, isLoading } = useBooks();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");

  if (error) {
    console.error(error.message);
  }
  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  // Filter books by the selected category, or display all books if no category is selected
  const filteredBooks = selectedCategory
    ? books.filter((book) => book.category === selectedCategory)
    : books;

  return (
    <div className={styles.book_list}>
      <header className={styles.header}>
        <h1 className={styles.library_title}>Children's Library</h1>
      </header>

      {selectedCategory && (
        <h2 className={styles.category_header}>{selectedCategory} Books</h2>
      )}

      <div className={styles.book_container}>
        {filteredBooks.map((book) => (
          <Link to={`/child/books/${book._id}`} key={book._id}>
            <div className={styles.book_card}>
              <img
                src={bookImg}
                alt={book.title}
                className={styles.book_cover}
              />
              <h3 className={styles.book_title}>{book.title}</h3>
              <p className={styles.book_description}>{book.description}</p>
              <button className={styles.read_button}>Read</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookList;
