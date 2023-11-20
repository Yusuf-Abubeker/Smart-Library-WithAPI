// AddBookForm.js
import React, { useState } from "react";
import axios from "axios"; // Import Axios
import styles from "../styles/AddBookForm.module.css"; // Import your styles
import useBooks from "./useBooks";
import BookListForAdmin from "./BookListForAdmin";

const AddBookForm = () => {
  const { data: books,error,isLoading } = useBooks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [contentFile, setContentFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

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

    const token = localStorage.getItem("token");
    console.log(token)
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/child/books",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-Auth-Token": token,
      
          },
        }
      );

      if (response.status === 200) {
        setSuccessMessage("Book submitted successfully!");
        // Clear form fields and other state values if needed
        setTitle("");
        setDescription("");
        setCategory("");
        setImageFile(null);
        setContentFile(null);
      } else {
        console.error("Failed to submit book.");
        // Handle error cases
      }
    } catch (error) {
      console.error("Error submitting book:", error);
      // Handle network or other errors
    }
  };
 if(isLoading) return <h2>Loading ....</h2>
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
       <BookListForAdmin/>
      </div>
    </>
  );
};

export default AddBookForm;
