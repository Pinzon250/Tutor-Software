import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import VantaRingsBackground from "../../../components/backgrounds/VantaRingsBackground";

const TestFormularios = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [preguntas, setPreguntas] = useState([]);
  const [respuestas, setRespuestas] = useState([]);
  const [puntuacion, setPuntuacion] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [titulo, setTitulo] = useState("Evaluación");

  useEffect(() => {
    axios.get(`http://localhost:8000/evaluaciones/${id}`)
      .then((res) => {
        setPreguntas(res.data.preguntas);
        setRespuestas(Array(res.data.preguntas.length).fill(null));

        // Definir el título dependiendo del ID
        if (id === "1") {
          setTitulo("Evaluación Modelo OSI");
        } else if (id === "2") {
          setTitulo("Evaluación Áreas de Cobertura");
        } else if (id === "3") {
          setTitulo("Evaluación Topologias de Red ");
        }

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
      usuario_id: 1, // Cambiar por el usuario real si tienes login
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
      <div 
         onClick={() => navigate('/test')} 
         className="absolute top-4 left-4 cursor-pointer text-white bg-green-600 hover:bg-green-700 rounded-full p-2 w-30 mt-30 text-center shadow-lg transition duration-300 z-40"
        >
        Regresar
        </div>
      <div className="mt-30 border border-green-900 w-200 index-0 m-auto p-10 backdrop-blur-[30px] rounded-xl">
        <h1 className="text-5xl font-bold text-center mb-4">{titulo}</h1>

        {puntuacion === null ? (
          <form className="space-y-6 mt-10">
            {preguntas.map((preg, i) => (
              <div key={i}>
                <p className="font-semibold text-xl pb-2">{i + 1}. {preg.pregunta}</p>
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
              className="mt-4 px-4 ml-65 transition hover:bg-green-500 py-2 cursor-pointer bg-green-600 text-white rounded"
            >
              Enviar evaluación
            </button>
          </form>
        ) : (
          <div className="mt-6">
            <h2 className="text-xl text-center font-bold">Tu puntuación: {puntuacion}%</h2>
            <p className="text-center">
              {puntuacion >= 80
                ? "¡Excelente! Has comprendido el tema. 🏆"
                : "Has completado la evaluación. Puedes estudiar más para mejorar tus conocimientos."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestFormularios;