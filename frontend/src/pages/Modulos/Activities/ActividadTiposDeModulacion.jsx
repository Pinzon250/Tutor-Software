import { useEffect, useState } from 'react';
import VantaRingsBackground from '../../../components/backgrounds/VantaRingsBackground';

const modulacionData = [
  { id: 'am', name: 'Modulación de Amplitud (AM)', order: 1, color: '#FF5722', description: 'Varia la amplitud de la portadora según la señal de información.', examples: 'Radio AM, comunicaciones analógicas.' },
  { id: 'fm', name: 'Modulación de Frecuencia (FM)', order: 2, color: '#00BCD4', description: 'Varia la frecuencia de la portadora según la señal.', examples: 'Radio FM, transmisión de voz.' },
  { id: 'pm', name: 'Modulación de Fase (PM)', order: 3, color: '#8BC34A', description: 'Varia la fase de la portadora para transmitir información.', examples: 'Aplicaciones de control, comunicaciones digitales.' },
  { id: 'ask', name: 'Modulación ASK', order: 4, color: '#FFC107', description: 'Modulación digital por desplazamiento de amplitud.', examples: 'Sistemas RFID, transmisión digital.' },
  { id: 'fsk', name: 'Modulación FSK', order: 5, color: '#9C27B0', description: 'Modulación digital por desplazamiento de frecuencia.', examples: 'Módems, comunicaciones digitales.' },
  { id: 'psk', name: 'Modulación PSK', order: 6, color: '#3F51B5', description: 'Modulación digital por desplazamiento de fase.', examples: 'Wi-Fi, LTE, comunicaciones satelitales.' },
];

export default function ActividadTiposDeModulacion() {
  const [availableLayers, setAvailableLayers] = useState([]);
  const [stack, setStack] = useState(Array(6).fill(null));
  const [modalLayer, setModalLayer] = useState(null);
  const [completion, setCompletion] = useState(false);
  const [intentos, setIntentos] = useState(0);
  const [notas, setNotas] = useState([]);
  const maxIntentos = 3;

  useEffect(() => {
    resetGame();
  }, []);

  function resetGame() {
    const shuffled = [...modulacionData].sort(() => 0.5 - Math.random());
    setAvailableLayers(shuffled);
    setStack(Array(6).fill(null));
    setModalLayer(null);
    setCompletion(false);
  }

  function handleDrop(index, item) {
    if (completion || intentos >= maxIntentos) return;
    if (stack[index]) return;
    if (item.order === index + 1) {
      const newStack = [...stack];
      newStack[index] = item;
      setStack(newStack);

      const newAvailable = availableLayers.filter(l => l.id !== item.id);
      setAvailableLayers(newAvailable);

      if (newStack.every(s => s !== null)) {
        const correctas = newStack.filter((layer, idx) => layer.order === idx + 1).length;
        const notaActual = (correctas / 6) * 5;
        setNotas(prev => [...prev, notaActual.toFixed(2)]);
        setIntentos(prev => prev + 1);
        setCompletion(true);
      }
    } else {
      alert('Incorrecto! Intenta de nuevo.');
    }
  }

  return (
    <div className="mt-20 p-6 space-y-6">
      <VantaRingsBackground />
      <header className="text-center">
        <h1 className="text-3xl font-bold">Actividad: Tipos de Modulación</h1>
        <p className="text-white mt-2">Arrastra cada tipo de modulación a su posición correcta según su tipo.</p>
        <p className="text-white mt-2 font-semibold">Intentos: {intentos} / {maxIntentos}</p>
      </header>

      {completion && (
        <div className="bg-green-100 border border-green-400 p-4 rounded">
          <h2 className="text-xl font-semibold text-green-800">Intento completado!</h2>
          <p className="text-green-700">Nota obtenida: {notas[notas.length - 1]} / 5</p>
          {intentos < maxIntentos ? (
            <button className="mt-2 px-4 py-1 bg-green-600 text-white rounded" onClick={resetGame}>
              Siguiente intento
            </button>
          ) : (
            <p className="mt-2 text-green-700 font-semibold">
              Evaluación finalizada. Nota promedio: {(notas.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / maxIntentos).toFixed(2)} / 5
            </p>
          )}
        </div>
      )}

      <div className="flex w-300 ml-40 flex-col md:flex-row gap-6 justify-center">
        <div className="flex-1">
          <h2 className="text-lg text-white text-center font-semibold">Tipos disponibles</h2>
          <div className="grid grid-cols-1 gap-2 mt-2">
            {availableLayers.map(layer => (
              <div
                key={layer.id}
                className="cursor-pointer p-2 h-12 mb-2 rounded shadow text-white backdrop-blur-[10px] hover:scale-105 transition text-center"
                style={{ backgroundColor: layer.color }}
                draggable
                onDragStart={(e) => {
                  e.dataTransfer.setData('layerId', layer.id);
                }}
                onClick={() => setModalLayer(layer)}
              >
                {layer.name}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-lg text-center font-semibold">Posiciones</h2>
          <div className="flex flex-col gap-2 mt-2">
            {stack.map((layer, index) => (
              <div
                key={index}
                className="h-16 border border-dashed rounded backdrop-blur-[30px] flex items-center justify-center text-sm"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  const id = e.dataTransfer.getData('layerId');
                  const droppedLayer = modulacionData.find(l => l.id === id);
                  if (droppedLayer) handleDrop(index, droppedLayer);
                }}
                style={{
                  backgroundColor: layer ? layer.color : '',
                  borderColor: layer ? '#000' : '#ccc',
                  color: layer ? '#fff' : '#000',
                }}
                onClick={() => layer && setModalLayer(layer)}
              >
                {layer ? (
                  <span className="font-semibold">{layer.name}</span>
                ) : (
                  <span className="text-gray-500">Posición {index + 1}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {modalLayer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded shadow-lg max-w-md">
            <button
              className="text-red-500 float-right font-bold text-xl"
              onClick={() => setModalLayer(null)}
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-2 border-l-4 pl-2" style={{ borderColor: modalLayer.color }}>
              {modalLayer.name}
            </h3>
            <p><strong>Función:</strong> {modalLayer.description}</p>
            <p className="mt-2"><strong>Ejemplos/Aplicaciones:</strong> {modalLayer.examples}</p>
          </div>
        </div>
      )}
    </div>
  );
}
