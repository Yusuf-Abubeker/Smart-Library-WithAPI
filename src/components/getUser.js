import { jwtDecode } from "jwt-decode";
 export default function getUserRole() {
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