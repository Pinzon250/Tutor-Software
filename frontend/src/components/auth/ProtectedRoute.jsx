// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (role && user?.cargo.toLowerCase() !== role.toLowerCase()) {
  return <Navigate to="/home" />;
}

  return children;
};

export default ProtectedRoute;
