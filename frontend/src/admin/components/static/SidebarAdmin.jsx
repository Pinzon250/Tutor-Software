// src/components/admin/Sidebar.jsx
import { NavLink } from "react-router-dom";
import { FaHome, FaBook, FaTasks, FaUserGraduate, FaClipboardList, FaProjectDiagram } from "react-icons/fa";

const SidebarAdmin = () => {
  const linkClass =
    "flex items-center space-x-3 px-4 py-2 hover:bg-green-100 text-gray-700 transition";

  const activeClass = "bg-green-200 font-semibold";

  return (
    <aside className="w-64 h-full bg-white border-r border-gray-200">
      <div className="p-6 text-green-700 text-2xl font-bold">
        Panel Profesor
      </div>
      <nav className="space-y-1">
        <NavLink to="/admin" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>
          <FaHome /> <span>Inicio</span>
        </NavLink>
        <NavLink to="/admin/students" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>
          <FaUserGraduate /> <span>Estudiantes</span>
        </NavLink>
        <NavLink to="/admin/content" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>
          <FaBook /> <span>Contenidos</span>
        </NavLink>
        <NavLink to="/admin/activities" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>
          <FaTasks /> <span>Actividades</span>
        </NavLink>
        
        <NavLink to="/admin/evaluations" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>
          <FaClipboardList /> <span>Evaluaciones</span>
        </NavLink>
        <NavLink to="/admin/learning-paths" className={({ isActive }) => `${linkClass} ${isActive ? activeClass : ""}`}>
          <FaProjectDiagram /> <span>Rutas de Aprendizaje</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default SidebarAdmin;
