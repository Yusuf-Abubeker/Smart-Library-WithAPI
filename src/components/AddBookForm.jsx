// AddBookForm.js
import React, { useState } from "react";
import styles from "../styles/AddBookForm.module.css"; // Import your styles
import useBooks from "./useBooks";
import BookListForAdmin from "./BookListForAdmin";
import {useNavigate} from "react-router-dom"

const AddBookForm = () => {
  const { data: books, error, isLoading, handleAddBook } = useBooks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [contentFile, setContentFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [authenticated, setAuthenticated] = useState(true); // Set the initial value based on the user's authentication status
const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/child");
    setAuthenticated(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleContentChange = (e) => {
    const file = e.target.files[0];
    setContentFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("image", imageFile);
    formData.append("content", contentFile);
    console.log(imageFile);
    console.log(contentFile);
    try {
      await handleAddBook(formData);

      // Clear form fields and other state values if needed
      setTitle("");
      setDescription("");
      setCategory("");
      setSuccessMessage("Book submitted successfully!");
    } catch (error) {
      console.error("Error submitting book:", error);
      // Handle error cases
    }
  };
  if (isLoading) return <h2>Loading </h2>;
  if (error) return <h2>{error.message}</h2>;

  return (
    <>
      <div className={styles.addBookForm}>
        <form onSubmit={handleSubmit}>
          <h2>Add New Book</h2>

          <label className={styles.formLabel}>
            Title:
            <input
              type="text"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label className={styles.formLabel}>
            Description:
            <textarea
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          <label className={styles.formLabel}>
            Category:
            <input
              type="text"
              value={category}
              required
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>

          <label className={styles.formLabel}>
            Image:
            <input
              type="file"
              accept="image/*"
              required
              onChange={handleImageChange}
            />
          </label>

          <label className={styles.formLabel}>
            Content:
            <input
              type="file"
              accept=".pdf"
              required
              onChange={handleContentChange}
            />
          </label>

          <button type="submit" className={styles.formButton}>
            Add Book
          </button>
          {successMessage && (
            <p className={styles.successMessage}>{successMessage}</p>
          )}
        </form>
      </div>

      <div>
        <BookListForAdmin />
      </div>
      {authenticated && (
        <button onClick={handleLogout} className={styles.logoutButton}>
          Logout
        </button>
      )}
    </>
  );
};

export default AddBookForm;
