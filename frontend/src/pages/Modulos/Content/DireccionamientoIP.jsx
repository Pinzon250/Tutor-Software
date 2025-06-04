import VantaRingsBackground from "../../../components/backgrounds/VantaRingsBackground";
import { useNavigate } from "react-router-dom";

export default function DireccionamientoIP() {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen flex flex-col text-white">
      <VantaRingsBackground />
      <div
        onClick={() => navigate("/content")}
        className="absolute top-4 left-4 cursor-pointer text-white bg-green-600 hover:bg-green-700 rounded-full p-2 w-30 mt-30 text-center shadow-lg transition duration-300 z-15"
      >
        Regresar
      </div>

      <main className="backdrop-blur-[10px] flex-1 p-6 relative z-10 mb-20">
        <div className="max-w-5xl text-center mx-auto mt-10">
          <h1 className="text-4xl font-bold pt-10 mb-4">Direccionamiento IP</h1>
        </div>

        <div className="border-t max-w-5xl mx-auto border-gray-200 mt-10"></div>

        <div className="max-w-5xl mx-auto mt-10">
          <p className="text-xl">
            El direccionamiento IP es el sistema de identificación única para los dispositivos en una red. Permite que cada dispositivo tenga una dirección única que lo identifique dentro de la red.
          </p>
          <p className="text-xl mt-6">
            Existen dos tipos principales de direcciones IP: IPv4 (32 bits) e IPv6 (128 bits). Además, las direcciones IP se dividen en clases (A, B, C, D y E) y pueden ser públicas o privadas.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto mt-10">
          <div className="h-32 bg-blue-100 rounded-xl p-4">
            <h3 className="font-bold text-2xl text-blue-800">IPv4</h3>
            <p className="mt-2 text-blue-700">Usa direcciones de 32 bits, con un rango de 0.0.0.0 a 255.255.255.255.</p>
          </div>
          <div className="h-32 bg-green-100 rounded-xl p-4">
            <h3 className="font-bold text-2xl text-green-800">IPv6</h3>
            <p className="mt-2 text-green-700">Usa direcciones de 128 bits, diseñada para reemplazar IPv4 y soportar más dispositivos.</p>
          </div>
          <div className="h-32 bg-yellow-100 rounded-xl p-4 col-span-2">
            <h3 className="font-bold text-2xl text-yellow-800">Clases de IP</h3>
            <p className="mt-2 text-yellow-700">Clase A, B, C, D, y E, cada una con un rango y propósito específico.</p>
          </div>
          <div className="h-32 bg-red-100 rounded-xl p-4 col-span-2">
            <h3 className="font-bold text-2xl text-red-800">Subredes</h3>
            <p className="mt-2 text-red-700">Permiten dividir una red grande en varias redes más pequeñas (subredes).</p>
          </div>
        </div>

        <div className="border-t max-w-5xl mx-auto mt-10 border-gray-200">
          <h1 className="text-center mt-10 text-4xl font-bold">
            CONTENIDO DE APOYO
          </h1>
        </div>

        <div className="w-260 mx-auto grid grid-cols-4 grid-rows-2 gap-10 mt-10">
          <div className="col-span-2 h-80">
            <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/SHbBso63X38"
            title="Direccionamiento IPv4 y Subredes (Explicado)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl shadow-lg"
           ></iframe>
           </div>
        <div className="col-span-2 col-start-3">
            <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/jWcETioXREo"
            title="Direccionamiento IP y Subneteo en redes"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl shadow-lg"
            ></iframe>
            </div>
        <div className="col-span-2 col-start-2 row-start-2">
            <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ZNqBmVwZdoQ"
            title="DIRECCIONAMIENTO IPv4 - Ejercicios y ejemplos básicos🌎 [CURSO DE REDES PARA PRINCIPIANTES]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl shadow-lg"
           ></iframe>
           </div>
          </div>
        </main>
      </div>
  );
}
