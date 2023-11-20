import React, { useState } from "react";
import styles from "../styles/signup.module.css";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:3000/user", formData);

      setSuccessMessage("user registered successfully")
      localStorage.setItem("token", response.headers["x-auth-token"]);
      // Redirect or handle success as needed
    } catch (error) {
      console.error("Signup failed:", error.response.data.message);
      setSuccessMessage("signup failed")
    }
  };

  return (
    <div className={styles.signupContainer}>
      <h2>Signup</h2>
      <form>
        <label className={styles.formLabel}>
          Fullname:
          <input
            type="text"
            name="fullname"
            required
            value={formData.fullname}
            onChange={handleChange}
            className={styles.formInput}
          />
        </label>
        <br />
        <label className={styles.formLabel}>
          Username:
          <input
            type="text"
            name="username"
            required
            value={formData.username}
            onChange={handleChange}
            className={styles.formInput}
          />
        </label>
        <br />
        <label className={styles.formLabel}>
          Password:
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            className={styles.formInput}
          />
        </label>
        <br />
        <button type="submit" onClick={handleSignup} className={styles.formButton}>
          Signup
        </button>
        <h3>{successMessage}</h3>
      </form>
    </div>
  );
};

export default Signup;
