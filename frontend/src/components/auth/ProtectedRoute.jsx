import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  const location = useLocation();

  if (!token) {
    return (<Navigate to="/" replace state={{ message: "Necesitas loguearte para acceder a esta vista" }} />);
  }

  return children;
}

export default ProtectedRoute;