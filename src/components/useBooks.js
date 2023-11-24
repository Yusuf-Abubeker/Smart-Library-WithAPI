import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

// Fetches books data from the server
const fetchBooks = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:3000/child/books");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching book data", error);
  }
};

// Adds a new book to the server
const addBook = async (bookData) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(
      "http://127.0.0.1:3000/child/books",
      bookData,
      {
        headers: {
          "X-Auth-Token": token,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Error adding new book", error);
  }
};

// Deletes a book from the server
const deleteBook = async (bookId) => {
  const token = localStorage.getItem("token");
  try {
    await axios.delete(`http://127.0.0.1:3000/child/books/${bookId}`, {
      headers: {
        "X-Auth-Token": token,
      },
    });
  } catch (error) {
    throw new Error(`Error deleting book with ID ${bookId}`, error);
  }
};

const useBooks = () => {
  const queryClient = useQueryClient();

  // Query to fetch books data
  const {
    data: books,
    error,
    refetch,
    isLoading,
  } = useQuery(["books"], fetchBooks);

  // Mutation for adding a new book
  const addBookMutation = useMutation(addBook, {
    onSuccess: async (newBook) => {
      // After a successful add, update the cache by adding the new book
      queryClient.setQueryData(["books"], (oldData) => [...oldData, newBook]);
      // Trigger a refetch of the 'books' query
      await refetch();
    },
  });

  // Mutation for deleting a book
  const deleteBookMutation = useMutation(deleteBook, {
    onSuccess: async () => {
      // After a successful delete, trigger a refetch of the 'books' query
      await refetch();
    },
  });

  // Function to handle adding a new book
  const handleAddBook = async (bookData) => {
    // Call the addBookMutation function with the book data
    await addBookMutation.mutateAsync(bookData);
  };

  // Function to handle deleting a book
  const handleDeleteBook = (bookId) => {
    // Call the deleteBookMutation function with the bookId
    deleteBookMutation.mutate(bookId);
  };

  return { books, error, handleAddBook, handleDeleteBook, isLoading };
};

export default useBooks;
