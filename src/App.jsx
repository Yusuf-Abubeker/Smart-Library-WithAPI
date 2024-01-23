import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
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
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

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

const App = () => (
  <Router>
    <Navigation />
    <Routes>
    
      <Route path="/child" element={<Home />} />
      <Route path="/child/books" element={<BookList />} />
      <Route path="/child/books/:bookId" element={<BookDetail />} />
      <Route path="/child/about" element={<About />} />
      <Route path="/child/contact" element={<Contact />} />
      <Route
        path="/child/add"
        element={<ProtectedRoute element={<AddBookForm />} />}
      />
      <Route path="/child/login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      
    </Routes>
    <Footer/>
  </Router>
);

export default App;
