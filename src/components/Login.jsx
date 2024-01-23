import React, { useState } from "react";
import styles from "../styles/login.module.css";
import apiClient from "../services/api-client";
import { Link, useNavigate } from "react-router-dom";
import getUserRole from "./getUser";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [msg, setMsg] = useState("");


  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await apiClient.post(
        "/user/login",
        loginData
      );

      console.log("Login successful!");
      localStorage.setItem("token", response.data.token);
      getUserRole() === "yusuf" ? navigate("/child/add") : navigate("/child");
    } catch (error) {
      console.error("Login failed:", error.response.data);
      setMsg(error.response.data);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.heading}>Login</h2>
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
        {msg && <p>{msg}</p>}
        <Link to="/signup" className={styles.signupLink}>
          Signup
        </Link>
      </form>
    </div>
  );
};

export default Login;
