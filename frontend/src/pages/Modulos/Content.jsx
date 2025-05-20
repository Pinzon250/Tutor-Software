import { useState } from "react";
import { BookOpen } from "lucide-react";
import VantaRingsBackground from "../../components/backgrounds/VantaRingsBackground";
import Footer from "../../components/static/Footer";
import { Link } from "react-router-dom";

const temas = [
  "Principios de la comunicación",
  "Sistema Informático",
  "Modelo OSI",
  "Topologías de red",
  "Área de cobertura",
  "Equipos de red",
  "Sincronización y transmisión simplex, semiduplex y duplex",
  "Packet Tracer",
  "Funciones Senoidales",
  "Tipos de Modulación",
  "Metodos de acceso al medio",
  "Ethernet",
  "Direccionamiento IP",
];

export default function Contenidos() {
  const [contenido, setContenido] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

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
      <main className="flex-1 p-6 relative z-10 mb-20">
        <div className="max-w-6xl mx-auto mt-10">
          <h1 className="text-4xl font-bold pt-10 mb-4 flex items-center gap-2">
            <BookOpen size={32} /> Contenidos de Aprendizaje
          </h1>
          <p className="mb-10 text-white/70">
            Aquí encontrarás todos los temas disponibles para estudiar y
            profundizar.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {temas.map((tema, index) => (
              <div
                key={index}
                className="backdrop-blur-[20px] border border-white/10 bg-white/5 hover:bg-white/10 rounded-xl p-6 h-70 transition-all duration-300 hover:scale-[1.02] shadow-md"
              >
                <h2 className="text-2xl font-semibold mb-2">{tema}</h2>
                <Link
                  to={`/content/${encodeURIComponent(tema)}`}
                  className="inline-block mt-4 text-sm bg-green-700 hover:bg-green-800 px-4 py-2 rounded-full transition"
                >
                  Ver contenido
                </Link>
              </div>
            ))}
          </div>

          {/* Resultado de contenido */}
          <div className="mt-12">
            {cargando && (
              <p className="text-yellow-400">Cargando contenido...</p>
            )}
            {error && <p className="text-red-500">Error: {error}</p>}
            {contenido && (
              <div className="mt-6 p-6 bg-white/5 border border-white/10 rounded-xl">
                <h2 className="text-3xl font-bold mb-4">{contenido.tema}</h2>
                <p className="text-white/80 mb-6">{contenido.descripcion}</p>

                <h3 className="text-xl font-semibold mb-2">
                  Videos sugeridos:
                </h3>
                <ul className="list-disc pl-6 space-y-1">
                  {contenido.videos.map((video, idx) => (
                    <li key={idx}>
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:underline"
                      >
                        {video.titulo}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
