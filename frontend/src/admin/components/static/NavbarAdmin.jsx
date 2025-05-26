// src/components/admin/Topbar.jsx
// src/admin/components/NavbarAdmin.jsx
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";

const NavbarAdmin = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between bg-green-600 text-white p-4 shadow-md">
      <div className="text-2xl font-bold">
        Tutor Software | Panel del Profesor
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <FaUserCircle size={24} />
          <span>{user?.nombres}</span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded"
        >
          <FaSignOutAlt className="mr-2" /> Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
