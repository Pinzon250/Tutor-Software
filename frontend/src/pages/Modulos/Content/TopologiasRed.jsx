import { useNavigate } from "react-router-dom";
import VantaRingsBackground from "../../../components/backgrounds/VantaRingsBackground";

export default function TopologíasRed() {
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
          <h1 className="text-4xl font-bold pt-10 mb-4 gap-2">
            Topologias de Red
          </h1>
          <div className="border-t mt-5 border-gray-500"></div>
          <div className="max-w-5xl mx-auto mt-10 text-xl ">
            <h3>
              Las topologías de red son las formas o estructuras en las que se
              organizan y conectan los dispositivos (como computadoras,
              impresoras, switches, routers, etc.) dentro de una red. Existen
              varios tipos de topologías, y cada una tiene ventajas y
              desventajas según el uso, el costo, la escalabilidad y la
              tolerancia a fallos.
            </h3>
          </div>
          <div className="max-w-5xl mx-auto mt-10 text-2xl mb-10">
            <h1 className="text-start font-bold">Topologias Físicas:</h1>
          </div>

          <div className="grid grid-cols-4 grid-rows-8 gap-9">
            <div className="col-span-2 row-span-2 h-40 rounded-xl backdrop-blur-[20px] overflow-hidden bg-gray-900 shadow-xl">
              <img
                src="https://redesinalambricasycableadas.wordpress.com/wp-content/uploads/2014/10/imagen1.png"
                alt="Topolia de red BUS"
                className="fixed absolute left-84 w-40 mask-l-from-40% object-contain z-0 "
              />
              <h1 className=" text-2xl text-start px-8 mt-5 font-bold">BUS</h1>
              <p className=" pl-8 mt-2 pr-45 text-start">
                Todos los dispositivos están conectados a un único cable
                principal (bus)
              </p>
            </div>

            <div className="col-span-2 row-span-2 col-start-3 rounded-xl backdrop-blur-[20px] overflow-hidden bg-gray-900 shadow-xl">
              <img
                src="http://kilowatio.net/images/topologia-de-arbol.png"
                alt="Topolia de red ARBOL"
                className="fixed absolute left-84 w-50 mask-l-from-40% object-contain z-0 "
              />
              <h1 className=" text-2xl text-start px-8 mt-5 font-bold">
                ARBOL
              </h1>
              <p className=" pl-8 mt-2 pr-45 text-start">
                Estructura jerárquica que combina múltiples topologías en
                estrella conectadas a un nodo central.
              </p>
            </div>

            <div className="col-span-2 row-span-2 row-start-3 rounded-xl backdrop-blur-[20px] overflow-hidden bg-gray-900 shadow-xl">
              <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQJm0qMOUNwjFgtidqyQidXuVoEyPKnUPsD3eALjDu2Je_7FY7_qw"
                alt="Topolia de red BUS"
                className="fixed absolute left-84 w-40 mask-l-from-40% object-contain z-0 "
              />
              <h1 className=" text-2xl text-start px-8 mt-5 font-bold">
                DOBLE ANILLO
              </h1>
              <p className=" pl-8 mt-2 pr-45 text-start">
                Son dos anillos conectados en sentido opuesto, lo que
                proporciona redundancia y mayor tolerancia a fallos.
              </p>
            </div>

            <div className="col-span-2 row-span-2 col-start-3 row-start-3 rounded-xl backdrop-blur-[20px] overflow-hidden bg-gray-900 shadow-xl">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicvnXLNcvJDiLCODlJAh5pMBqtKo-4czsEVVRfwIT5Q3ptjd1dv5GJJWgciUIZ-RAmuWfpkKw5X7pd0G5dT4s7wBOFqtUUXfVg2nLbOEgKsp6sailkYUHLeAzaj9tqPKKoc-8ifebOK-Y/s1600/conexa.jpg"
                alt="Topolia de red BUS"
                className="fixed absolute left-84 w-40 mask-l-from-40% object-contain z-0 "
              />
              <h1 className=" text-2xl text-start px-8 mt-5 font-bold">
                TOTALMENTE CONEXA
              </h1>
              <p className=" pl-8 mt-2 pr-45 text-start">
                Cada nodo está conectado directamente a todos los demás nodos de
                la red.
              </p>
            </div>

            <div className="col-span-2 row-span-2 col-start-3 row-start-5 rounded-xl backdrop-blur-[20px] overflow-hidden bg-gray-900 shadow-xl">
              <img
                src="https://domoticautem.wordpress.com/wp-content/uploads/2012/05/top-estrella.png"
                alt="Topolia de red BUS"
                className="bg-white fixed absolute left-84 w-40 mask-l-from-40% object-contain z-0 "
              />
              <h1 className=" text-2xl text-start px-8 mt-5 font-bold">
                ESTRELLA
              </h1>
              <p className=" pl-8 mt-2 pr-45 text-start">
                Redes LAN modernas, oficinas y hogares, por su facilidad de
                gestión y escalabilidad.
              </p>
            </div>

            <div className="col-span-2 row-span-2 col-start-1 row-start-5 rounded-xl backdrop-blur-[20px] overflow-hidden bg-gray-900 shadow-xl">
              <img
                src="https://cdn.goconqr.com/uploads/media/image/22064892/desktop_9cecdd03-9cea-41d4-b217-24aa86325ae6.jpg"
                alt="Topolia de red BUS"
                className="fixed absolute left-84 w-45 mask-l-from-40% object-contain z-0 "
              />
              <h1 className=" text-2xl text-start px-8 mt-5 font-bold">
                ANILLO
              </h1>
              <p className=" pl-8 mt-2 pr-45 text-start">
                Cada dispositivo está conectado con dos dispositivos adyacentes,
                formando un círculo cerrado.
              </p>
            </div>

            <div className="col-span-2 row-span-2 col-start-1 row-start-7 rounded-xl backdrop-blur-[20px] overflow-hidden bg-gray-900 shadow-xl ">
              <img
                src="https://www.researchgate.net/publication/325366580/figure/fig3/AS:630158025306115@1527252789527/Figura-11-Topologia-en-Malla-Mesh.png"
                alt="Topolia de red BUS"
                className="fixed absolute left-84 w-40 mask-l-from-40% object-contain z-0"
              />
              <h1 className=" text-2xl text-start px-8 mt-5 font-bold">
                MALLA
              </h1>
              <p className=" pl-8 mt-2 pr-45 text-start">
                Cada dispositivo está conectado directamente a varios otros,
                proporcionando múltiples rutas para los datos.
              </p>
            </div>

            <div className="col-span-2 row-span-2 col-start-3 row-start-7 rounded-xl backdrop-blur-[20px] overflow-hidden bg-gray-900 shadow-xl">
              <img
                src="https://cdn.goconqr.com/uploads/slide_property/image/156814/desktop_eb05fb78-b3ce-4d17-8645-80b4b3e052b1.png"
                alt="Topolia de red BUS"
                className="fixed absolute left-84 w-40 mask-l-from-40% bg-white object-contain z-0 "
              />
              <h1 className=" text-2xl text-start px-8 mt-5 font-bold">
                MIXTA
              </h1>
              <p className=" pl-8 mt-2 pr-45 text-start">
                La topología mixta es una combinación de dos o más topologías de
                red básicas (como estrella, bus, anillo, etc.).
              </p>
            </div>
          </div>

          <div className="border-t w-full max-w-5xl mx-auto border-gray-200 mt-10">
            <h1 className="text-4xl font-bold mt-10">CONTENIDO DE APOYO</h1>
          </div>
          <div className="max-w-5xl mx-auto aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/awLJkNHBoms"
              title="Topologias de Red"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl shadow-lg mt-10"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
}
