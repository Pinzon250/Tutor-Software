import VantaRingsBackground from "../../../components/backgrounds/VantaRingsBackground";
import { useNavigate } from "react-router-dom";

export default function ModeloOsi() {
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
          <h1 className="text-4xl font-bold pt-10 mb-4 gap-2">Modelo OSI</h1>
        </div>
        <div className="border-t max-w-5xl mx-auto border-gray-200 mt-10"></div>

        <div className="max-w-5xl mx-auto mt-10">
          <p className="text-xl ">
            El modelo Open Systems Interconnection (OSI) es un modelo conceptual
            creado por la Organización Internacional para la Estandarización, el
            cual permite que diversos sistemas de comunicación se conecten
            usando protocolos estándar. En otras palabras, el OSI proporciona un
            estándar para que distintos sistemas de equipos puedan comunicarse
            entre sí. El modelo OSI se puede ver como un lenguaje universal para
            la conexión de las redes de equipos. Se basa en el concepto de
            dividir un sistema de comunicación en siete capas abstractas, cada
            una apilada sobre la anterior.
          </p>

          <p className="text-xl mt-6">
            Cada capa del modelo OSI tiene una función específica y se comunica
            con las capas superiores e inferiores. Los ataques DDoS se dirigen a
            capas específicas de una conexión de red, los ataques a la capa de
            aplicación se dirigen a la capa 7, mientras que los ataques a la
            capa de protocolo se dirigen a las capas 3 y 4
          </p>
        </div>

        {/* CAPA 7 */}
        <div className="grid grid-cols-2 grid-rows-7 gap-10 max-w-3xl mx-auto mt-10">
          <div className="h-20 bg-purple-100 rounded-xl">
            <div className="col-span-1 relative">
              <div className="bg-purple-600 text-white text-3xl font-bold p-4 rounded-r-lg shadow-lg absolute left-[-20px]">
                7
              </div>
            </div>
            <div className="col-span-7 bg-purple-100 p-4 px-4 rounded-lg px-10">
              <h3 className="font-bold text-3xl text-purple-800">Aplicación</h3>
            </div>
          </div>

          <div className="h-20 bg-gradient-to-r from-purple-100 to-purple-900 rounded-xl">
            <p className="font-bold text-center mt-7">
              Servicios de red a aplicaciones.
            </p>
          </div>

          {/* CAPA 6 */}

          {/* IZQUIERDA */}
          <div className="h-20 bg-blue-100 rounded-xl">
            <div className="col-span-1 relative">
              <div className="bg-blue-600 text-white text-3xl font-bold p-4 rounded-r-lg shadow-lg absolute left-[-20px]">
                6
              </div>
            </div>
            <div className="col-span-7 bg-blue-100 p-4 px-4 rounded-lg px-10">
              <h3 className="font-bold text-3xl text-blue-800">Presentación</h3>
            </div>

            {/* Derecha */}
          </div>
          <div className="h-20 bg-gradient-to-r from-blue-100 to-blue-900 rounded-xl">
            <p className="font-bold text-center mt-7">
              Representación de datos y encriptación.
            </p>
          </div>

          {/* CAPA 5 */}
          <div className="h-20 bg-green-100 rounded-xl">
            <div className="col-span-1 relative">
              <div className="bg-green-600 text-white text-3xl font-bold p-4 rounded-r-lg shadow-lg absolute left-[-20px]">
                5
              </div>
            </div>
            <div className="col-span-7 p-4 px-4 rounded-lg px-10">
              <h3 className="font-bold text-3xl text-green-800">Sesion</h3>
            </div>
          </div>
          <div className="h-20 bg-gradient-to-r from-green-100 to-green-900 rounded-xl">
            <p className="font-bold text-center mt-7">
              Comuinicacion entre dispositivos de red
            </p>
          </div>

          {/* CAPA 4 */}
          <div className="h-20 bg-yellow-100 rounded-xl">
            <div className="col-span-1 relative">
              <div className="bg-yellow-600 text-white text-3xl font-bold p-4 rounded-r-lg shadow-lg absolute left-[-20px]">
                4
              </div>
            </div>
            <div className="col-span-7 p-4 px-4 rounded-lg px-10">
              <h3 className="font-bold text-3xl text-yellow-800">Transporte</h3>
            </div>
          </div>

          <div className="h-20 bg-gradient-to-r from-yellow-100 to-yellow-900 rounded-xl">
            <p className="font-bold text-center mt-4 px-2">
              Conexion de extremo a extremo y confiabilidad
            </p>
          </div>

          {/* CAPA 3 */}
          <div className="h-20 bg-red-100 rounded-xl">
            <div className="col-span-1 relative">
              <div className="bg-red-600 text-white text-3xl font-bold p-4 rounded-r-lg shadow-lg absolute left-[-20px]">
                3
              </div>
            </div>
            <div className="col-span-7 p-4 px-4 rounded-lg px-10">
              <h3 className="font-bold text-3xl text-red-800">Red</h3>
            </div>
          </div>
          <div className="h-20 bg-gradient-to-r from-red-100 to-red-900 rounded-xl">
            <p className="font-bold text-center mt-5">
              Determinacion de ruta y direccionamiento logico
            </p>
          </div>

          {/* CAPA 2 */}
          <div className="h-20 bg-cyan-100 rounded-xl">
            <div className="col-span-1 relative">
              <div className="bg-cyan-600 text-white text-3xl font-bold p-4 rounded-r-lg shadow-lg absolute left-[-20px]">
                2
              </div>
            </div>
            <div className="col-span-7 p-4 px-4 rounded-lg px-10">
              <h3 className="font-bold text-3xl text-cyan-800">
                Enlace de datos
              </h3>
            </div>
          </div>
          <div className="h-20 bg-gradient-to-r from-cyan-100 to-cyan-900 rounded-xl">
            <p className="font-bold text-center mt-7">
              Direccionamiento fisico
            </p>
          </div>

          {/* CAPA 1 */}
          <div className="h-20 bg-orange-100 rounded-xl">
            <div className="col-span-1 relative">
              <div className="bg-orange-600 text-white text-3xl font-bold p-4 rounded-r-lg shadow-lg absolute left-[-20px]">
                1
              </div>
            </div>
            <div className="col-span-7 p-4 px-4 rounded-lg px-10">
              <h3 className="font-bold text-3xl text-orange-800">Física</h3>
            </div>
          </div>
          <div className="h-20 bg-gradient-to-r from-orange-100 to-orange-900 rounded-xl">
            <p className="font-bold text-center mt-7">
              Señalizacion y transmision binaria
            </p>
          </div>
        </div>

        <div className="border-t max-w-5xl mx-auto mt-10 border-gray-200">
          <h1 className="text-center mt-10 text-4xl font-bold">
            CONTENIDO DE APOYO
          </h1>
        </div>

        <div className="w-260 mx-auto grid grid-cols-4 grid-rows-2 gap-10 mt-10">
          <div className="col-span-2 h-80 ">
            <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/jdKRx2BxSMs"
            title="Modelos OSI y TCP (Explicado) Modelos Conceptuales"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl shadow-lg"
          ></iframe>
          </div>
          <div className="col-span-2 col-start-3">
            <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/iNh-62Mf0O4"
            title="Modelo de capas OSI y TCP/IP. Curso de redes desde 0 | Cap 12 |"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl shadow-lg"
          ></iframe>
          </div>
          <div className="col-span-2 col-start-2 row-start-2">
            <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/CnNRdJgeMo8"
            title="Entendiendo el modelo OSI | ¿Como funciona el Internet?"
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
