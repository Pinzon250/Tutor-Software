// src/pages/Home.jsx
import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import VantaRingsBackground from "../components/backgrounds/VantaRingsBackground";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import Footer from "../components/static/Footer";

export default function Home() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
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

  return (
    <div className="relative  overflow-hidden flex flex-col">
      {/* Main content */}
      <main className="flex-1">
        <VantaRingsBackground />
        <div className="max-w-7xl block mx-auto text-center">
          <h1 className="mt-20 pt-20 text-5xl text-white font-bold mb-2 text-start">
            ¡Bienvenid@, {userName}!
          </h1>
          <p className=" text-lg text-white mb-6 text-start">
            Sigue aprendiendo y sube de nivel.
          </p>

          {/* Progress bar */}
          <div className="text-left text-white font-medium mb-2">
            Progreso de aprendizaje: Nivel 1
          </div>
          <div className="w-full bg-white rounded-full h-3 mb-8">
            
            <div className="bg-green-600 h-3 rounded-full w-[0%]"></div>
          </div>

          <div className="text-white p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              
              <div 
                  onClick={() => navigate("/Content")}
                  className="cursor-pointer select-none col-span-1 md:row-span-3 bg-white/5 hover:bg-white/10 hover:scale-105 hover:shadow-lg transition-all duration-300 backdrop-blur-[30px] p-6 rounded-xl border border-green-900 shadow-md"
              >
                <h2 className="text-2xl font-semibold mb-2">
                  Acceder a los contenidos
                </h2>
                <p className="text-base text-white/80">
                  Consulta el material disponible y continúa tu aprendizaje con
                  claridad y confianza.
                </p>
              </div>
             

              <div className="select-none bg-white/5 backdrop-blur-[30px] hover:scale-105 hover:bg-white/10 hover:shadow-lg transition-all duration-300 p-6 rounded-xl border border-green-900 shadow-md">
                <h2 className="text-xl font-semibold mb-2">Realizar evaluaciones</h2>
                <p className="text-sm text-white/80">
                  Pon a prueba tus conocimientos mediante pruebas y cuestionarios.
                </p>
              </div>

              <div className="select-none bg-white/5 backdrop-blur-[30px] hover:scale-105 hover:bg-white/10 hover:shadow-lg transition-all duration-300 p-6 rounded-xl border border-green-900 shadow-md">
                <h2 className="text-xl font-semibold mb-2">Resolver ejercicios</h2>
                <p className="text-sm text-white/80">
                  Practica resolviendo problemas y ejercicios interactivos.
                </p>
              </div>

              <div className="select-none bg-white/5 backdrop-blur-[30px] hover:scale-105 hover:bg-white/10 hover:shadow-lg transition-all duration-300 p-6 rounded-xl border border-green-900 shadow-md">
                <h2 className="text-xl font-semibold mb-2">Visualizar progreso</h2>
                <p className="text-sm text-white/80">
                  Revisa tu avance y mejora continuamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}