// src/pages/Home.jsx
import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Book, LogOut, Settings, UserCircle } from "lucide-react";
import VantaRingsBackground from "../components/backgrounds/VantaRingsBackground";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";


export default function Home() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const toastShownRef = useRef(false);

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
    if (location.state?.message && !toastShownRef.current) {
      toast.info(location.state.message);
      toastShownRef.current= true;
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); 
  };

  return (
    <div className="flex flex-col min-h-screen">

      {/* Header */}
      <header className="bg-green-900 text-white flex items-center justify-between p-4">
        <div className="flex items-center">
          <Book size={32} className="mr-2" />
          <a href="/home"><h1 className="text-2xl font-bold">Tutor Software</h1></a>
        </div>

        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center space-x-3 pr-5 cursor-pointer"
          >
            <span className="text-xl">{userName}</span>
            <UserCircle size={40} />
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-3 px-2 w-48 backdrop-blur-[10px] border border-white/10 mr-5 rounded-md shadow-lg z-10">
              <ul className="py-2">
                <li
                  onClick={() => navigate("/profile")}
                  className="flex items-center px-4 py-2 hover:bg-white/10 rounded-full transition duration-300ms cursor-pointer"
                >
                  <UserCircle size={20} className="mr-2" />
                  Perfil
                </li>
                <li
                  onClick={() => navigate("/settings")}
                  className="flex items-center px-4 py-2 hover:bg-white/10 rounded-full transition duration-300ms cursor-pointer"
                >
                  <Settings size={20} className="mr-2" />
                  Configuración
                </li>
                <li
                  onClick={handleLogout}
                  className="flex items-center text-red-500 px-4 py-2 hover:bg-white/10 rounded-full transition duration-300ms cursor-pointer"
                >
                  <LogOut size={20} className="text-red-500 mr-2" />
                  Cerrar sesión
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 p-6">
        <VantaRingsBackground />
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="mt-20 text-5xl text-white font-bold mb-2 text-start">
            ¡Bienvenid@, {userName}!
          </h1>
          <p className=" text-lg text-white mb-6 text-start">
            Sigue aprendiendo y sube de nivel.
          </p>

          {/* Progress bar */}
          <div className="text-left text-white font-medium mb-2">
            Progreso de aprendizaje
          </div>
          <div className="w-full bg-white rounded-full h-3 mb-8">
            <div className="bg-green-600 h-3 rounded-full w-[0%]"></div>
          </div>

          <div className="text-white p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              
              <div className="col-span-1 md:row-span-3 hover:scale-105 hover:shadow-lg transition-all duration-300 backdrop-blur-[30px] p-6 rounded-xl border border-white/10 shadow-md">
                <h2 className="text-2xl font-semibold mb-2">
                  Acceder a los contenidos
                </h2>
                <p className="text-base text-white/80">
                  Consulta el material disponible y continúa tu aprendizaje con
                  claridad y confianza.
                </p>
              </div>
             

              <div className=" backdrop-blur-[30px] hover:scale-105 hover:shadow-lg transition-all duration-300 p-6 rounded-xl border border-white/10 shadow-md">
                <h2 className="text-xl font-semibold mb-2">Realizar evaluaciones</h2>
                <p className="text-sm text-white/80">
                  Pon a prueba tus conocimientos mediante pruebas y cuestionarios.
                </p>
              </div>

              <div className=" backdrop-blur-[30px] hover:scale-105 hover:shadow-lg transition-all duration-300 p-6 rounded-xl border border-white/10 shadow-md">
                <h2 className="text-xl font-semibold mb-2">Resolver ejercicios</h2>
                <p className="text-sm text-white/80">
                  Practica resolviendo problemas y ejercicios interactivos.
                </p>
              </div>

              <div className=" backdrop-blur-[30px] hover:scale-105 hover:shadow-lg transition-all duration-300 p-6 rounded-xl border border-white/10 shadow-md">
                <h2 className="text-xl font-semibold mb-2">Visualizar progreso</h2>
                <p className="text-sm text-white/80">
                  Revisa tu avance y mejora continuamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-center text-gray-100 text-sm py-4">
        © 2025 Tutor Software
      </footer>
    </div>
  );
}