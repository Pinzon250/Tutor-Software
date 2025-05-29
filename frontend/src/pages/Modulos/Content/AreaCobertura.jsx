import VantaRingsBackground from "../../../components/backgrounds/VantaRingsBackground"
import { useNavigate } from "react-router-dom"

export default function AreaCobertura () {
    const navigate = useNavigate()

    return (
        <div className="relative min-h-screen flex flex-col text-white">
      <VantaRingsBackground />
      <div 
         onClick={() => navigate('/content')} 
         className="absolute top-4 left-4 cursor-pointer text-white bg-green-600 hover:bg-green-700 rounded-full p-2 w-30 mt-30 text-center shadow-lg transition duration-300 z-40"
        >
        Regresar
      </div>
      <main className="backdrop-blur-[10px] flex-1 p-6 relative z-10 mb-20">
        <div className="max-w-5xl text-center mx-auto mt-10">
            <h1 className="text-4xl font-bold pt-10 mb-4 gap-2">
                Area Cobertura de redes
            </h1>
            <p className="font-semibold">Este tema explica los tipos de redes según su cobertura geográfica</p>
            <div className="border-t mt-5 border-gray-500">
            </div>
        </div>

        <div className="max-w-5xl mx-auto mt-10 text-xl ">
            <h3>Una red informática es un sistema interconectado de dispositivos electrónicos, como computadoras, servidores, dispositivos móviles y otros dispositivos, que se comunican entre sí para compartir recursos, transmitir datos y permitir la colaboración en línea</h3>
        </div>

        <div className="max-w-5xl mx-auto mt-10 font-bold">
            <p>
                Encontramos los siguientes tipos de red segun el espacio geografico que abarcan:
            </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 grid-rows-5 gap-5 mt-10 max-w-5xl mx-auto">

            <div className="border"></div>
            <div className="border"></div>
            <div className="border"></div>
            <div className="border"></div>
            <div className="border"></div>

        </div>


      </main>
      </div>
    )
}