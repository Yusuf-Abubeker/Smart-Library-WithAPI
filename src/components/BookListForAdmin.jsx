import useBooks from "./useBooks";
import styles from '../styles/BookListForAdmin.module.css'

const BookListForAdmin = () => {
    const { books, error, isLoading, handleDeleteBook } = useBooks();
  

    if (error) {
      return <div>Error fetching data</div>;
    }
    if (isLoading) {
        return <div>Loading ...</div>;
      }
  
    return (
      <div className={styles.book_list_container}>
        <h2>Book List</h2>
        <ul className={styles.book_list}>
          {books.map((book) => (
            <li key={book._id} className={styles.book_item}>
              <div className={styles.book_details}>
                <span className={styles.book_title}>{book.title}</span>
                <span className={styles.book_category}>{book.category}</span>
              </div>
              <button
                type="button"
                onClick={() => handleDeleteBook(book._id)}
                className={styles.delete_button}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default BookListForAdmin;
  