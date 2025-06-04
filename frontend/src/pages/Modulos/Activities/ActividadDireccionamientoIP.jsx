import { useState } from 'react';
import VantaRingsBackground from '../../../components/backgrounds/VantaRingsBackground';

const preguntasBase = [
  { pregunta: "Una dirección IP identifica de forma única a un dispositivo en una red.", respuesta: true },
  { pregunta: "La dirección IP 192.168.0.1 es una dirección pública.", respuesta: false },
  { pregunta: "El direccionamiento IP permite que los dispositivos se comuniquen entre sí.", respuesta: true },
  { pregunta: "El rango de direcciones privadas en IPv4 incluye 10.0.0.0/8.", respuesta: true },
  { pregunta: "Una máscara de subred sirve para determinar qué parte de la IP es la red y cuál es el host.", respuesta: true },
  { pregunta: "IPv6 utiliza direcciones de 32 bits.", respuesta: false },
  { pregunta: "El gateway predeterminado es la dirección IP de tu servidor DNS.", respuesta: false },
  { pregunta: "Las direcciones IP son únicas dentro de la red a la que pertenecen.", respuesta: true },
  { pregunta: "La dirección 127.0.0.1 es una dirección de loopback.", respuesta: true },
  { pregunta: "En una subred, la primera dirección siempre es la de broadcast.", respuesta: false },
];

export default function ActividadDireccionamientoIP() {
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
    if (promedio >= 4) return { mensaje: "¡Excelente! Eres un experto en Direccionamiento IP.", color: "text-green-400" };
    if (promedio >= 3) return { mensaje: "¡Bien hecho! Puedes mejorar un poco más.", color: "text-yellow-400" };
    return { mensaje: "Sigue practicando, repasa el Direccionamiento IP.", color: "text-red-400" };
  };

  return (
    <div>
      <VantaRingsBackground />

    <div className="mt-20 p-6 max-w-xl mx-auto text-center text-white">
      <h1 className="text-3xl font-bold mb-4">Actividad: Verdadero o Falso - Direccionamiento IP</h1>

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
