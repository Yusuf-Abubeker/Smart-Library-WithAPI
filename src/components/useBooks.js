// useBooks.js
import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

const fetchBooks = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:3000/child/books");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching book data", error);
  }
};

const addBook = async (bookData) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(
      "http://127.0.0.1:3000/child/books",
      bookData,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": token,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Error adding new book", error);
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
  const queryClient = useQueryClient();

  const {
    data: books,
    error,
    refetch,
    isLoading,
  } = useQuery(["books"], fetchBooks);

  const addBookMutation = useMutation(addBook, {
    onSuccess: async (newBook) => {
      // After a successful add, update the cache by adding the new book
      queryClient.setQueryData(["books"], (oldData) => [...oldData, newBook]);
      // Trigger a refetch of the 'books' query
      await refetch();
    },
  });

  const handleAddBook = async (bookData) => {
    // Call the addBookMutation function with the book data
    await addBookMutation.mutateAsync(bookData);
  };

  const deleteBookMutation = useMutation(deleteBook, {
    onSuccess: async () => {
      // After a successful delete, trigger a refetch of the 'books' query
      await refetch();
    },
  });

  const handleDeleteBook = (bookId) => {
    // Call the deleteBookMutation function with the bookId
    deleteBookMutation.mutate(bookId);
  };

  return { books, error, handleAddBook, handleDeleteBook, isLoading };
};

export default useBooks;
