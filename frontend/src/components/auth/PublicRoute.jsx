
import { Navigate, useLocation } from "react-router-dom";

function PublicRoute({ children }) {
  const token = localStorage.getItem("token");
  const location = useLocation();

  if (token) {
    let message = null;
    if (location.pathname === "/login") {
        message = "Ya haz iniciado sesion.";
    } else if (location.pathname === "/register") {
        message = "Ya estas registrado";
    }

    return (<Navigate to="/home" replace state={{ message }}/>);
  }

  return children;
}

export default PublicRoute;