import { createBrowserRouter } from "react-router-dom";
import BookList from "./components/BookList";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import BookDetail from "./components/BookDetail";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/childLayout";
import AddBookForm from "./components/AddBookForm";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import { jwtDecode } from "jwt-decode";

function getUserRole() {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      const userRole = decodedToken.username; // Update to the correct key for user role
      return userRole;
    } catch (error) {
      console.error("Error decoding JWT token:", error);
    }
  }
  return null;
}
const router = createBrowserRouter([
  {
    path: "/child",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "books", element: <BookList /> },
      { path: "books/:bookId", element: <BookDetail /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      {
        path: "add",
        element: getUserRole() === "yusuf" ? <AddBookForm /> : <Login />,
      },
    ],
  },
  { path: "login", element: <Login /> },
  { path: "signup", element: <Signup /> },
]);

export default router;
