import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import VantaRingsBackground from "@/components/backgrounds/VantaRingsBackground";
import { BookOpen } from "lucide-react";

function InformacionContenido() {
  const navigate = useNavigate();
  const { tema } = useParams();
  const [contenido, setContenido] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchContenido = async () => {
      try {
        const response = await fetch(`http://localhost:8000/modulos/contenidos/${encodeURIComponent(tema)}`);
        if (!response.ok) {
          throw new Error("No se pudo obtener el contenido.");
        }
        const data = await response.json();
        setContenido(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    fetchContenido();
  }, [tema]);

  return (
    <div className="relative min-h-screen text-white">
      <VantaRingsBackground />
      <div 
         onClick={() => navigate('/Content')} 
         className="absolute top-4 left-4 cursor-pointer text-white bg-green-600 hover:bg-green-700 rounded-full p-2 w-30 text-center shadow-lg transition duration-300"
        >
        Regresar
        </div>
      <main className="relative z-10 p-6 max-w-4xl mx-auto mt-20 mb-32 border-green-800 border rounded-xl backdrop-blur-[30px]">
        {cargando && <p className="text-yellow-400">Cargando contenido...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {contenido && (
          <>
            <h1 className="text-4xl font-bold mb-6 flex items-center gap-2 -z-10">
              <BookOpen size={32} /> {contenido.tema}
            </h1>
            <p className="text-white/80 mb-8">{contenido.descripcion}</p>
            <p className="text-white/80 mb-8">{contenido.Definicion}</p>
            <p className="text-white/80 mb-8">{contenido.Definicion2}</p>
            <img src="/ModeloOsi/osi_model_7_layers.png" alt="Capa7" className="h-70 w-auto rounded-xl items-center text-center mb-8 ml-40"/>
            <p className="text-white font-bold text-2xl">{contenido.Capa1}</p>
            <p className="text-white/80 mb-8 pt-5">{contenido.DefinicionCapa1}</p>
            <img src="/ModeloOsi/osi_model_application_layer_7.png" alt="Capa7" className="h-70 w-auto rounded-xl items-center text-center mb-8"/>
            
            <p className="text-white font-bold text-2xl">{contenido.Capa2}</p>
            <p className="text-white/80 mb-8 pt-5">{contenido.DefinicionCapa2}</p>
            <img src="/ModeloOsi/osi_model_presentation_layer_6.png" alt="Capa7" className="h-70 w-auto rounded-xl items-center text-center mb-8"/>
            
            <p className="text-white font-bold text-2xl">{contenido.Capa3}</p>
            <p className="text-white/80 mb-8 pt-5">{contenido.DefinicionCapa3}</p>
            <img src="/ModeloOsi/osi_model_session_layer_5.png" alt="Capa7" className="h-70 w-auto rounded-xl items-center text-center mb-8"/>
            
            <p className="text-white font-bold text-2xl">{contenido.Capa4}</p>
            <p className="text-white/80 mb-8 pt-5">{contenido.DefinicionCapa4}</p>
            <img src="/ModeloOsi/osi_model_transport_layer_4.png" alt="Capa7" className="h-70 w-auto rounded-xl items-center text-center mb-8"/>
            
            <p className="text-white font-bold text-2xl">{contenido.Capa5}</p>
            <p className="text-white/80 mb-8 pt-5">{contenido.DefinicionCapa5}</p>
            <img src="/ModeloOsi/osi_model_network_layer_3.png" alt="Capa7" className="h-70 w-auto rounded-xl items-center text-center mb-8"/>
            
            <p className="text-white font-bold text-2xl">{contenido.Capa6}</p>
            <p className="text-white/80 mb-8 pt-5">{contenido.DefinicionCapa6}</p>
            <img src="/ModeloOsi/data_link_layer_osi_model.png" alt="Capa7" className="h-70 w-auto rounded-xl items-center text-center mb-8"/>
            
            <p className="text-white font-bold text-2xl">{contenido.Capa7}</p>
            <p className="text-white/80 mb-8 pt-5">{contenido.DefinicionCapa7}</p>
            <img src="/ModeloOsi/osi_model_physical_layer_1.png" alt="Capa7" className="h-70 w-auto rounded-xl items-center text-center mb-8"/>
            


            <h2 className="text-2xl font-semibold pt-10 mb-4">Videos sugeridos</h2>
            <ul className="list-disc pl-6 space-y-2">
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
          </>
        )}
      </main>
    </div>
  );
}

export default InformacionContenido;