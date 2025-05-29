import VantaRingsBackground from "../../../components/backgrounds/VantaRingsBackground";
import { useNavigate } from "react-router-dom";

export default function ModeloOsi() {
    const navigate = useNavigate()
  return (
    <div className="relative min-h-screen flex flex-col text-white">
      <VantaRingsBackground />
      <div
        onClick={() => navigate("/home")}
        className="absolute top-4 left-4 cursor-pointer text-white bg-green-600 hover:bg-green-700 rounded-full p-2 w-30 mt-30 text-center shadow-lg transition duration-300 z-40"
      >
        Regresar
      </div>


    </div>
  );
}
