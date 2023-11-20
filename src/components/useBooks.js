// useBooks.js
import { useQuery, useMutation } from "react-query";
import axios from "axios";

const fetchBooks = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:3000/child/books");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching book data");
  }
};

const deleteBook = async (bookId) => {
  const token = localStorage.getItem("token");
  try {
    await axios.delete(`http://127.0.0.1:3000/child/books/${bookId}`, {
      headers: {
        "X-Auth-Token": token,
      },
    });
  } catch (error) {
    throw new Error(`Error deleting book with ID ${bookId}`);
  }
};

const useBooks = () => {
  const {
    data: books,
    error,
    refetch,
    isLoading,
  } = useQuery(["books"], fetchBooks);

  const deleteBookMutation = useMutation(deleteBook, {
    onSuccess: () => {
      // After a successful delete, trigger a refetch of the 'books' query
      refetch();
    },
  });

  const handleDeleteBook = (bookId) => {
    // Call the deleteBookMutation function with the bookId
    deleteBookMutation.mutate(bookId);
  };

  return { books, error, handleDeleteBook, isLoading };
};

export default useBooks;
