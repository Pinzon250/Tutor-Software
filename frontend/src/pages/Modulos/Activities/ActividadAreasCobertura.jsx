// src/pages/Modulos/Activities/ActividadAreasCobertura.jsx

import { useState } from 'react';
import VantaRingsBackground from '../../../components/backgrounds/VantaRingsBackground';

const preguntasBase = [
  { pregunta: "Una PAN conecta dispositivos cercanos a un individuo, como un teléfono y una laptop.", respuesta: true },
  { pregunta: "Una WAN conecta dispositivos dentro de una misma habitación.", respuesta: false },
  { pregunta: "Una LAN generalmente está limitada a un solo edificio o campus.", respuesta: true },
  { pregunta: "Una GAN es una red de área local usada en oficinas.", respuesta: false },
  { pregunta: "Una MAN cubre una ciudad o región, conectando múltiples LANs.", respuesta: true },
];

export default function ActividadAreasCobertura() {
  const [indice, setIndice] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [finalizado, setFinalizado] = useState(false);
  const [intentos, setIntentos] = useState(1);
  const [notas, setNotas] = useState([]);

  const responder = (respuestaUsuario) => {
    const preguntaActual = preguntasBase[indice];
    if (respuestaUsuario === preguntaActual.respuesta) {
      setPuntuacion(puntuacion + 1);
    }

    if (indice + 1 < preguntasBase.length) {
      setIndice(indice + 1);
    } else {
      // Finalizó la ronda
      const nota = ((puntuacion + (respuestaUsuario === preguntaActual.respuesta ? 1 : 0)) / preguntasBase.length) * 5;
      setNotas([...notas, nota]);
      setFinalizado(true);
    }
  };

  const reiniciar = () => {
    if (intentos >= 3) {
      alert("Ya usaste tus 3 intentos.");
      return;
    }
    setIndice(0);
    setPuntuacion(0);
    setFinalizado(false);
    setIntentos(intentos + 1);
  };

  const promedio = notas.length > 0 ? (notas.reduce((a, b) => a + b, 0) / notas.length).toFixed(2) : null;

  const getFeedback = () => {
    if (!promedio) return null;
    if (promedio >= 4) return { mensaje: "¡Excelente! Eres un experto en Áreas de Cobertura.", color: "text-green-400" };
    if (promedio >= 3) return { mensaje: "¡Bien hecho! Puedes mejorar un poco más.", color: "text-yellow-400" };
    return { mensaje: "Sigue practicando, repasa las Áreas de Cobertura.", color: "text-red-400" };
  };

  return (
    <div>
        <VantaRingsBackground />
    
    <div className="mt-20 p-6 max-w-xl mx-auto text-center text-white">
      <h1 className="text-3xl font-bold mb-4">Actividad: Verdadero o Falso - Áreas de Cobertura</h1>

      {notas.length >= 3 ? (
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-bold text-green-300 mb-2">Actividad finalizada</h2>
          <p className="mb-2">Tu promedio final es: <span className="text-green-400 font-bold">{promedio} / 5.0</span></p>
          <p className={`${getFeedback().color} font-semibold`}>{getFeedback().mensaje}</p>
        </div>
      ) : (
        <>
          {!finalizado ? (
            <>
              <p className="text-xl mb-6">{preguntasBase[indice].pregunta}</p>
              <div className="flex justify-center gap-4">
                <button
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded"
                  onClick={() => responder(true)}
                >
                  Verdadero
                </button>
                <button
                  className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded"
                  onClick={() => responder(false)}
                >
                  Falso
                </button>
              </div>
              <p className="mt-6 text-green-300">Pregunta {indice + 1} de {preguntasBase.length}</p>
            </>
          ) : (
            <div className="mt-4">
              <h2 className="text-xl font-bold text-green-400">Intento {intentos} completado</h2>
              <p className="text-white">Tu calificación: {(notas[notas.length - 1]).toFixed(2)} / 5.0</p>
              <button
                className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 rounded"
                onClick={reiniciar}
              >
                Siguiente intento
              </button>
            </div>
          )}
        </>
      )}
    </div>
    </div>
  );
}