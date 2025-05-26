import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Content() {
  const { tema } = useParams();
  const [contenido, setContenido] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const obtenerContenido = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(`http://localhost:8000/modulos/contenidos/${encodeURIComponent(tema)}`);
        if (!response.ok) throw new Error("Error al obtener el contenido");
        const data = await response.json();
        setContenido(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    obtenerContenido();
  }, [tema]);

  if (loading) return <p className="text-center p-6">Cargando...</p>;
  if (error) return <p className="text-center p-6 text-red-500">{error}</p>;
  if (!contenido) return null;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{contenido.tema}</h1>
      <p className="mb-4">{contenido.descripcion}</p>
      <p className="mb-4">{contenido.Definicion}</p>
      {contenido.Definicion2 && <p className="mb-4">{contenido.Definicion2}</p>}

      {/* Mostrar capas del Modelo OSI */}
      {contenido.Capa1 && (
        <div>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Capas del Modelo OSI</h2>
          {[1, 2, 3, 4, 5, 6, 7].map((n) =>
            contenido[`Capa${n}`] ? (
              <div key={n} className="mb-4">
                <h3 className="font-semibold">{contenido[`Capa${n}`]}</h3>
                <p>{contenido[`DefinicionCapa${n}`]}</p>
              </div>
            ) : null
          )}
        </div>
      )}

      {/* Mostrar tipos de red del tema "Área de Cobertura" */}
      {contenido.TiposDeRed && (
        <div>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Tipos de Red</h2>
          {contenido.TiposDeRed.map((tipo, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{tipo.nombre}</h3>
              <p>{tipo.descripcion}</p>
            </div>
          ))}
        </div>
      )}

      {/* Mostrar videos relacionados */}
      {contenido.videos && (
        <div>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Videos Relacionados</h2>
          {contenido.videos.map((video, index) => (
            <div key={index} className="mb-2">
              <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-green-400 underline">
                {video.titulo}
              </a>
            </div>
          ))}
        </div>
      )}

      <Link
        to="/contenidos"
        className="inline-block mt-6 bg-green-700 hover:bg-green-800 px-4 py-2 rounded-full text-white"
      >
        Volver a Contenidos
      </Link>
    </div>
  );
}
