import { createBrowserRouter, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"; // Import useState and useEffect
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
import getUserRole from "./components/getUser";

function ProtectedRoute({ element }) {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(getUserRole());

  useEffect(() => {
    const role = getUserRole();
    setUserRole(role);
    if (!role) {
      // Redirect to login if user is not authenticated
      navigate("/child/login");
    }
  }, []);

  return userRole ? element : null;
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
        element: <ProtectedRoute element={<AddBookForm />} />,
      },
      { path: "login", element: <Login /> },
    ],
  },
  { path: "signup", element: <Signup /> },
]);

export default router;
