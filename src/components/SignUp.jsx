import React, { useState } from "react";
import styles from "../styles/signup.module.css";
import { useNavigate } from "react-router-dom";
import apiClient from "../services/api-client";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await apiClient.post("/user", formData);

      setSuccessMessage("user registered successfully");
      localStorage.setItem("token", response.headers["x-auth-token"]);
      navigate("/child");
    } catch (error) {
      setSuccessMessage("signup failed:  " + error.response.data);
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
        <button
          type="submit"
          onClick={handleSignup}
          className={styles.formButton}
        >
          Signup
        </button>
        <h3>{successMessage}</h3>
      </form>
    </div>
  );
};

export default Signup;
