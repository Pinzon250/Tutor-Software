// src/components/Header.jsx
import { Bars3Icon } from '@heroicons/react/24/outline';
import { LogOut, Settings, UserCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


export default function Header({ setIsOpen }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserName(decoded.name);
      } catch (error) {
        console.error("Token no válido", error);
        setUserName("Estudiante");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); 
  };
  return (
    <header className="fixed w-screen flex items-center justify-between bg-green-900/50 backdrop-blur-[30px] shadow px-4 py-3 mb-4 z-1">
      <div className="flex items-center space-x-3">
        <button className="lg:hidden" onClick={() => setIsOpen(true)}>
          <Bars3Icon className="h-6 w-6 text-gray-700" />
        </button>
        <h1 onClick={() => navigate("/home")}
        className="cursor-pointer text-2xl text-white font-bold">Tutor Software</h1>
      </div>
      <div className="relative ">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center space-x-3 pr-70 cursor-pointer"
          >
            <span className="text-xl text-white">{userName}</span>
            <UserCircle size={40} className='text-white'/>
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-50 mr-70 p-2 mt-4">
              <ul className="py-2 backdrop-blur-[20px] border border-white/10 rounded-md shadow-lg bg-black/40">
                <li
                  // onClick={() => navigate("/profile")}
                  className="select-none text-white flex items-center px-4 py-2 hover:bg-white/10 rounded-full transition duration-300ms cursor-pointer"
                >
                  <UserCircle size={20} className="mr-2 text-white" />
                  Perfil
                </li>
                <li
                  onClick={handleLogout}
                  className="select-none flex items-center text-red-500 px-4 py-2 hover:bg-white/10 rounded-full transition duration-300ms cursor-pointer"
                >
                  <LogOut size={20} className="text-red-500 mr-2" />
                  Cerrar sesión
                </li>
              </ul>
            </div>
          )}
        </div>
    </header>
  );
}
