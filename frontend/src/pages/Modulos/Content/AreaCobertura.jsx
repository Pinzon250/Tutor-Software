import VantaRingsBackground from "../../../components/backgrounds/VantaRingsBackground";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AreaCobertura() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [descripcion, setDescripcion] = useState("");

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
          <h1 className="text-4xl font-bold pt-10 mb-4 gap-2">
            Area Cobertura de redes
          </h1>
          <p className="font-semibold">
            Este tema explica los tipos de redes según su cobertura geográfica
          </p>
          <div className="border-t mt-5 border-gray-500"></div>
        </div>

        <div className="max-w-5xl mx-auto mt-10 text-xl ">
          <h3>
            Una red informática es un sistema interconectado de dispositivos
            electrónicos, como computadoras, servidores, dispositivos móviles y
            otros dispositivos, que se comunican entre sí para compartir
            recursos, transmitir datos y permitir la colaboración en línea
          </h3>
        </div>

        <div className="max-w-5xl mx-auto mt-10 font-bold">
          <p>
            Encontramos los siguientes tipos de red segun el espacio geografico
            que abarcan:
          </p>
        </div>

        {/* AREAS DE COBERTURA */}

        <div className="grid sm:grid-cols-1 md:grid-cols-6 grid-rows-4 mb-20 gap-7 mt-10 max-w-5xl mx-auto">

        {/* PAN */}
          <div
            onClick={() => {
              setDescripcion(
                "PAN (Red de área personal): Conecta dispositivos cercanos a un individuo, como un teléfono y una laptop."
              );
              setModalOpen(true);
            }}
            className="col-span-2 row-span-2 backdrop-blur-[10px] h-60 rounded-xl bg-gradient-to-bl from-lime-500 to-green-800 hover:scale-102 transition cursor-pointer shadow-lg"
          >
            <h1 className="text-center text-xl font-bold mt-5">Tipo de red</h1>

            <h3 className="text-center font-semibold text-5xl mt-10">PAN</h3>

          </div>

          {modalOpen && (
            <div className=" fixed inset-0 flex mb-90 items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg max-w-md w-full text-center shadow-xl">
                <h2 className="text-xl font-bold mb-4 text-black ">Descripción</h2>
                <p className="text-gray-700">{descripcion}</p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="cursor-pointer mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}

          {/* LAN */}

          <div 
          onClick={() => {
              setDescripcion(
                "LAN (Red de área local): Limitada a un edificio o campus, como la red de una oficina o escuela"
              );
              setModalOpen(true);
            }}
          className="col-span-2 row-span-2 col-start-3 h-60 rounded-xl bg-gradient-to-t from-lime-500 to-green-800 hover:scale-102 transition cursor-pointer shadow-lg">
            <h1 className="text-center text-xl font-bold mt-5">Tipo de red</h1>

            <h3 className="text-center font-semibold text-5xl mt-10">LAN</h3>
          </div>
          {modalOpen && (
            <div className="fixed inset-0 flex mb-90 items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg max-w-md w-full text-center shadow-xl">
                <h2 className="text-xl font-bold mb-4 text-black ">Descripción</h2>
                <p className="text-gray-700">{descripcion}</p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="cursor-pointer mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}

          {/* MAN */}

          <div 
          onClick={() => {
              setDescripcion(
                 "MAN (Red de área metropolitana): Cubre una ciudad o región, conectando múltiples LANs."
              );
              setModalOpen(true);
            }}
          className="col-span-2 row-span-2 col-start-5 h-60 rounded-xl bg-gradient-to-br from-lime-500 to-green-800 hover:scale-102 transition cursor-pointer shadow-lg">
            <h1 className="text-center text-xl font-bold mt-5">Tipo de red</h1>

            <h3 className="text-center font-semibold text-5xl mt-10">MAN</h3>
          </div>

          {modalOpen && (
            <div className=" fixed inset-0 flex mb-90 items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg max-w-md w-full text-center shadow-xl">
                <h2 className="text-xl font-bold mb-4 text-black ">Descripción</h2>
                <p className="text-gray-700">{descripcion}</p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="cursor-pointer mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}

          {/* WAN */}
          <div 
          onClick={() => {
              setDescripcion(
                 "WAN (Red de área amplia): Cubre grandes distancias, como la red de una corporación internacional."
              );
              setModalOpen(true);
            }}
          className="col-span-2 row-span-2 col-start-2 row-start-3 h-60 rounded-xl bg-gradient-to-b from-lime-500 to-green-800 hover:scale-102 transition cursor-pointer shadow-lg">
            <h1 className="text-center text-xl font-bold mt-5">Tipo de red</h1>

            <h3 className="text-center font-semibold text-5xl mt-10">WAN</h3>
          </div>
          {modalOpen && (
            <div className=" fixed inset-0 flex mb-90 items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg max-w-md w-full text-center shadow-xl">
                <h2 className="text-xl font-bold mb-4 text-black ">Descripción</h2>
                <p className="text-gray-700">{descripcion}</p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="cursor-pointer mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}


        {/* GAN */}
          <div 
          onClick={() => {
              setDescripcion(
                  "GAN (Red de área global): Conecta redes en todo el mundo, como Internet."
              );
              setModalOpen(true);
            }}
          className="col-span-2 row-span-2 col-start-4 row-start-3 h-60 rounded-xl bg-gradient-to-tr from-lime-500 to-green-800 hover:scale-102 transition cursor-pointer shadow-lg">
            <h1 className="text-center text-xl font-bold mt-5">Tipo de red</h1>

            <h3 className="text-center font-semibold text-5xl mt-10">GAN</h3>
          </div>
        </div>
        {modalOpen && (
            <div className=" fixed inset-0 flex mb-90 items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg max-w-md w-full text-center shadow-xl">
                <h2 className="text-xl font-bold mb-4 text-black ">Descripción</h2>
                <p className="text-gray-700">{descripcion}</p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="cursor-pointer mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}

          <div className="border-t border-gray-200 max-w-5xl mx-auto mb-10">

            <h1 className="text-4xl text-center mt-20 font-bold">CONTENIDO DE APOYO</h1>

          </div>

        <div className="max-w-5xl mx-auto aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/wgkVswrTEpI?si=j8cY_rJl2-C_S9Aa"
            title="Video de Área de Cobertura"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl shadow-lg"
          ></iframe>
        </div>
      </main>
    </div>
  );
}
