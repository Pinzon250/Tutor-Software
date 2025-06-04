import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";
import VantaRingsBackground from "../../components/backgrounds/VantaRingsBackground";


export default function Contenidos() {
  const navigate = useNavigate();

  const obtenerContenido = async (tema) => {
    setCargando(true);
    setContenido(null);
    setError("");

    try {
      const response = await fetch(
        `http://localhost:8000/modulos/contenidos/${encodeURIComponent(tema)}`
      );
      if (!response.ok) {
        throw new Error("Error al obtener el contenido");
      }
    
    const data = await response.json();
      setContenido(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  };

    return (
    <div className="relative min-h-screen flex flex-col text-white">
      <VantaRingsBackground />
      <div 
         onClick={() => navigate('/home')} 
         className="absolute top-4 left-4 cursor-pointer text-white bg-green-600 hover:bg-green-700 rounded-full p-2 w-30 mt-30 text-center shadow-lg transition duration-300 z-40"
        >
        Regresar
      </div>
      <main className="flex-1 p-6 relative z-10 mb-20">
        <div className="max-w-5xl mx-auto mt-10">
          <h1 className="text-4xl font-bold pt-10 mb-4 flex items-center gap-2">
            <BookOpen size={32} /> Contenidos de Aprendizaje
          </h1>
          <p className="mb-10 text-white/70">
            Aquí encontrarás todos los temas disponibles para estudiar y
            profundizar.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                className="backdrop-blur-[20px] border border-white/10 bg-white/5 hover:bg-white/10 rounded-xl p-6 h-70 transition-all duration-300 hover:scale-[1.02] shadow-md"
              >
                <h2 className="text-2xl font-semibold mb-2">Modelo OSI</h2>
                <div
                  onClick={() => navigate("/ModeloOsi")}
                  className="inline-block mt-4 cursor-pointer text-sm bg-green-700 hover:bg-green-800 px-4 py-2 rounded-full transition"
                >
                  Ver contenido
                </div>
              </div>

              <div
                className="backdrop-blur-[20px] border border-white/10 bg-white/5 hover:bg-white/10 rounded-xl p-6 h-70 transition-all duration-300 hover:scale-[1.02] shadow-md"
              >
                <h2 className="text-2xl font-semibold mb-2">Topoligias de Red</h2>
                <div
                  onClick={() => navigate("/topologiasred")}
                  className="inline-block mt-4 text-sm cursor-pointer bg-green-700 hover:bg-green-800 px-4 py-2 rounded-full transition"
                >
                  Ver contenido
                </div>
              </div>
              <div
                className="backdrop-blur-[20px] border border-white/10 bg-white/5 hover:bg-white/10 rounded-xl p-6 h-70 transition-all duration-300 hover:scale-[1.02] shadow-md"
              >
                <h2 className="text-2xl font-semibold mb-2">Areas de cobertura</h2>
                <div
                  onClick={() => navigate("/AreaCobertura")}
                  className="inline-block mt-4 text-sm bg-green-700 cursor-pointer hover:bg-green-800 px-4 py-2 rounded-full transition"
                >
                  Ver contenido
                </div>
              </div>
              <div
                className="backdrop-blur-[20px] border border-white/10 bg-white/5 hover:bg-white/10 rounded-xl p-6 h-70 transition-all duration-300 hover:scale-[1.02] shadow-md"
              >
                <h2 className="text-2xl font-semibold mb-2">Direccionamiento IP</h2>
                <div
                 onClick={() => navigate("/direccionamiento-ip")}
                 className="inline-block mt-4 cursor-pointer text-sm bg-green-700 hover:bg-blue-800 px-4 py-2 rounded-full transition"
              >
                  Ver contenido
                </div>
              </div>

              <div
                className="backdrop-blur-[20px] border border-white/10 bg-white/5 hover:bg-white/10 rounded-xl p-6 h-70 transition-all duration-300 hover:scale-[1.02] shadow-md"
              >
                <h2 className="text-2xl font-semibold mb-2">Tipos de Modulación</h2>
                <div
                  onClick={() => navigate("/tipos-de-modulacion")}
                  className="inline-block mt-4 text-sm bg-green-700 cursor-pointer hover:bg-green-800 px-4 py-2 rounded-full transition"
                >
                  Ver contenido
                </div>
              </div>
               
          </div>
          </div>
      </main>
      </div>
  );
}
