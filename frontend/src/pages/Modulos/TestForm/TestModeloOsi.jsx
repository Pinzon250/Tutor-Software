import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import VantaRingsBackground from "../../../components/backgrounds/VantaRingsBackground";

const TestModeloOsi = () => {
  const { id } = useParams();
  const [preguntas, setPreguntas] = useState([]);
  const [respuestas, setRespuestas] = useState([]);
  const [puntuacion, setPuntuacion] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/evaluaciones/${id}`)
      .then((res) => {
        setPreguntas(res.data.preguntas);
        setRespuestas(Array(res.data.preguntas.length).fill(null));
        setCargando(false);
      })
      .catch((err) => {
        console.error("Error al cargar la evaluación:", err);
        setError("No se pudo cargar la evaluación.");
        setCargando(false);
      });
  }, [id]);

  const manejarRespuesta = (indice, seleccion) => {
    const nuevas = [...respuestas];
    nuevas[indice] = seleccion;
    setRespuestas(nuevas);
  };

  const enviar = () => {
    const payload = {
      evaluacion_id: parseInt(id),
      usuario_id: 1, // TODO: obtener dinámicamente si usas autenticación
      respuestas: respuestas.map((seleccion, index) => ({
        pregunta_id: index,
        seleccion,
      })),
    };

    axios.post("http://localhost:8000/evaluaciones/enviar", payload)
      .then((res) => {
        setPuntuacion(res.data.puntuacion);
      })
      .catch((err) => {
        console.error("Error al enviar la evaluación:", err);
        setError("Ocurrió un error al enviar tus respuestas.");
      });
  };

  if (cargando) {
    return <p className="text-white p-6">Cargando evaluación...</p>;
  }

  if (error) {
    return <p className="text-red-500 p-6">{error}</p>;
  }

  return (
    <div className="relative min-h-screen flex flex-col text-white">
      <VantaRingsBackground />
      <div className="mt-20 border border-green-900 w-300 index-0 m-auto p-20 backdrop-blur-[30px] rounded-xl">
        <h1 className="text-5xl font-bold text-center mb-4">Evaluación #{id}</h1>

        {puntuacion === null ? (
          <form className="space-y-6">
            {preguntas.map((preg, i) => (
              <div key={i}>
                <p className="font-semibold">{i + 1}. {preg.pregunta}</p>
                <div className="space-y-1 ml-4 mt-2">
                  {preg.opciones.map((op, j) => (
                    <label key={j} className="block">
                      <input
                        type="radio"
                        name={`pregunta-${i}`}
                        checked={respuestas[i] === j}
                        onChange={() => manejarRespuesta(i, j)}
                        className="mr-2"
                      />
                      {op}
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={enviar}
              className="mt-4 px-4 hover:bg-green-400 py-2 bg-green-700 text-white rounded"
            >
              Enviar evaluación
            </button>
          </form>
        ) : (
          <div className="mt-6">
            <h2 className="text-xl font-bold">Tu puntuación: {puntuacion}%</h2>
            <p>
              {puntuacion >= 80
                ? "¡Excelente! Has subido de nivel. 🏆"
                : "Puedes volver a intentarlo para mejorar tu puntuación."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestModeloOsi;