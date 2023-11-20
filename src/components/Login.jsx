import React, { useState } from "react";
import styles from "../styles/login.module.css";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:3000/user/login", loginData);

      console.log("Login successful!");
      localStorage.setItem("token", response.data.token);
      navigate("/child/add")
    } catch (error) {
      console.error("Login failed:", error.response.data.message);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form>
        <label className={styles.formLabel}>
          Username:
          <input
            type="text"
            name="username"
            required
            value={loginData.username}
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
            value={loginData.password}
            onChange={handleChange}
            className={styles.formInput}
          />
        </label>
        <br />
        <button
          type="button"
          onClick={handleLogin}
          className={styles.formButton}
        >
          Login
        </button>
        <Link to="/signup">signup</Link>
      </form>
    </div>
  );
};

export default Login;
