import { useEffect, useState } from 'react';
import VantaRingsBackground from '../../../components/backgrounds/VantaRingsBackground';

const layersData = [
  { id: 'aplication', name: 'Aplicacion', order: 7, color: '#40E0D0', description: 'Provides the interface for applications to access network services. Defines protocols that applications use to exchange data.', examples: 'HTTP, HTTPS, FTP, SMTP, DNS, Telnet, SSH' },
  { id: 'presentation', name: 'Presentacion', order: 6, color: '#FF00FF', description: 'Translates data between the application layer and the network format. Handles data encryption, compression, and formatting.', examples: 'SSL/TLS, JPEG, GIF, ASCII, EBCDIC, MIDI, MPEG' },
  { id: 'session', name: 'Sesion', order: 5, color: '#8A2BE2', description: 'Establishes, manages, and terminates connections (sessions) between applications.', examples: 'NetBIOS, PPTP, Sockets (API used by applications), NFS, SQL' },
  { id: 'transport', name: 'Transporte', order: 4, color: '#00BCD4', description: 'Provides reliable and transparent transfer of data between end points. Manages end-to-end connections and data segmentation.', examples: 'TCP, UDP, Ports, SCTP' },
  { id: 'network', name: 'Red', order: 3, color: '#8BC34A', description: 'Determines the best path to route packets from source to destination across multiple networks.', examples: 'IP, Routers, ICMP, IPsec, RIP, OSPF' },
  { id: 'datalink', name: 'Enlace de datos', order: 2, color: '#FFC107', description: 'Defines how data is formatted for transmission and how access to the physical media is controlled. Provides error detection and correction.', examples: 'Ethernet, MAC Addresses, Switches, PPP, ARP, Frame Relay, ATM' },
  { id: 'physical', name: 'Fisica', order: 1, color: '#FF5722', description: 'Transmits raw bit stream over the physical medium. Defines physical characteristics of the network.', examples: 'Ethernet cables, Fiber optics, Hubs, Repeaters, Wi-Fi, Bluetooth' },
];

export default function ActividadModeloOSI() {
  const [availableLayers, setAvailableLayers] = useState([]);
  const [stack, setStack] = useState(Array(7).fill(null));
  const [modalLayer, setModalLayer] = useState(null);
  const [completion, setCompletion] = useState(false);
  const [intentos, setIntentos] = useState(0);
  const [notas, setNotas] = useState([]);
  const maxIntentos = 3;

  useEffect(() => {
    resetGame();
  }, []);

  function resetGame() {
    const shuffled = [...layersData].sort(() => 0.5 - Math.random());
    setAvailableLayers(shuffled);
    setStack(Array(7).fill(null));
    setModalLayer(null);
    setCompletion(false);
  }

  function handleDrop(index, item) {
    if (completion || intentos >= maxIntentos) return; // Bloquear si se acabaron los intentos
    if (stack[index]) return;
    if (item.order === 7 - index) {
      const newStack = [...stack];
      newStack[index] = item;
      setStack(newStack);

      const newAvailable = availableLayers.filter(l => l.id !== item.id);
      setAvailableLayers(newAvailable);

      if (newStack.every(s => s !== null)) {
        // Calcular nota al finalizar el intento
        const correctas = newStack.filter((layer, idx) => layer.order === 7 - idx).length;
        const notaActual = (correctas / 7) * 5;
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
        <h1 className="text-3xl font-bold">Aprendizaje interactivo del modelo OSI</h1>
        <p className="text-white mt-2">Coloca las capas a su posición correcta en el Modelo OSI.</p>
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
        {/* Available layers */}
        <div className="flex-1">
          <h2 className="text-lg text-white text-center font-semibold">Capas disponibles</h2>
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

        {/* OSI Stack */}
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
                  const droppedLayer = layersData.find(l => l.id === id);
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
                  <span className="text-gray-500">Posicion {7 - index}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
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
              {modalLayer.name} Layer (Layer {modalLayer.order})
            </h3>
            <p><strong>Function:</strong> {modalLayer.description}</p>
            <p className="mt-2"><strong>Examples/Protocols:</strong> {modalLayer.examples}</p>
          </div>
        </div>
      )}
    </div>
  );
}