import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');

  if (!token) {
    return (<Navigate to="/" replace state={{ message: "Necesitas loguearte para acceder a esta vista" }} />);
  }

  return children;
}

export default ProtectedRoute;