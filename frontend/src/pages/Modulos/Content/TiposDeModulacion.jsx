import VantaRingsBackground from "../../../components/backgrounds/VantaRingsBackground";
import { useNavigate } from "react-router-dom";

export default function TiposDeModulacion() {
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
          <h1 className="text-3xl font-bold mb-4">Tipos de Modulación</h1>
        </div>

        <div className="border-t max-w-5xl mx-auto border-gray-200 mt-10"></div>

        <div className="max-w-5xl mx-auto mt-10">
          <p className="text-xl">
            La modulación es el proceso mediante el cual una señal (como la voz o datos) se combina con una onda portadora para ser transmitida. Existen varios tipos de modulación, cada uno con sus características y aplicaciones.
          </p>
          <p className="text-xl mt-6">
            Los principales tipos son la modulación analógica (AM, FM, PM) y la modulación digital (ASK, FSK, PSK). Cada uno permite transmitir información de manera eficiente dependiendo de las necesidades del sistema de comunicación.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto mt-10">
          <div className="h-32 bg-blue-100 rounded-xl p-4">
            <h3 className="font-bold text-2xl text-blue-800">AM - Amplitud</h3>
            <p className="mt-2 text-blue-700">Varía la amplitud de la onda portadora en función de la señal.</p>
          </div>
          <div className="h-32 bg-green-100 rounded-xl p-4">
            <h3 className="font-bold text-2xl text-green-800">FM - Frecuencia</h3>
            <p className="mt-2 text-green-700">Varía la frecuencia de la onda portadora según la señal.</p>
          </div>
          <div className="h-32 bg-yellow-100 rounded-xl p-4 col-span-2">
            <h3 className="font-bold text-2xl text-yellow-800">PM - Fase</h3>
            <p className="mt-2 text-yellow-700">Modifica la fase de la portadora para transmitir la información.</p>
          </div>
          <div className="h-32 bg-red-100 rounded-xl p-4 col-span-2">
            <h3 className="font-bold text-2xl text-red-800">Modulación Digital</h3>
            <p className="mt-2 text-red-700">Incluye ASK, FSK, PSK, utilizados en sistemas modernos como Wi-Fi y LTE.</p>
          </div>
        </div>

        <div className="border-t max-w-5xl mx-auto mt-10 border-gray-200">
          <h1 className="text-center mt-10 text-4xl font-bold">
            CONTENIDO DE APOYO
          </h1>
        </div>

        <div className="w-260 mx-auto grid grid-cols-2 grid-rows-2 gap-10 mt-10">
          <div className="h-80">
            <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/fOmRBMWbcbU"
            title="A.M. (1) Amplitud Modulada"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl shadow-lg"
          ></iframe>
          </div>
          <div className="h-80">
            <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/tu2dlM1md1I"
            title="FM (1) Frecuencia Modulada"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl shadow-lg"
            ></iframe>
            </div>
            <div className="h-80">
            <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/lvGukpqmoqQ"
            title="Modulación de Fase | Modulación PM"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl shadow-lg"
            ></iframe>
            </div>
            <div className="h-80">
            <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/AAyWzuQxR6Y"
            title="Introducción a las radiocomunicaciones. Modulaciones digitales: ASK, FSK, PSK |52/97| UPV"
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
