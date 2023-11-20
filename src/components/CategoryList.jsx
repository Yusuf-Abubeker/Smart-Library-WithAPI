// CategoryList.js
import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaSchool, FaQuestionCircle } from "react-icons/fa";
import styles from "../styles/CategoryList.module.css";

const categories = [
  { id: "Adventure", label: "Adventure", icon: <FaStar /> },
  { id: "Education", label: "Education", icon: <FaSchool /> },
  { id: "Mystery", label: "Mystery", icon: <FaQuestionCircle /> },
  // Add more categories as needed
];

const CategoryList = () => {
  return (
    <div className={styles.category_list}>
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/child/books?category=${category.id}`}
          className={styles.category_button}
        >
          {category.icon}
          {category.label}
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
