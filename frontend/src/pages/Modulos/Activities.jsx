
import { useNavigate } from "react-router-dom";
import VantaRingsBackground from "../../components/backgrounds/VantaRingsBackground";

const Activities = () => {
  const navigate = useNavigate();


  return (
    <div className="relative min-h-screen flex flex-col text-white">
      <VantaRingsBackground />
      <div 
         onClick={() => navigate('/home')} 
         className="absolute top-4 left-4 cursor-pointer text-white bg-green-600 hover:bg-green-700 rounded-full p-2 w-30 mt-30 text-center shadow-lg transition duration-300 z-40"
        >
        Regresar
        </div>
    <main className="flex-1 p-6 relative z-10 mb-20">
        <div className="max-w-5xl mx-auto mt-10">
          <h1 className="text-4xl font-bold pt-10 mb-4 flex items-center gap-2">
            Actividades Disponibles</h1>
      <ul className="space-y-4">
          <li
            className="backdrop-blur-[20px] border border-white/10 bg-white/5 hover:bg-white/10 cursor-pointer rounded-xl p-6 mt-10 transition-all duration-300 hover:scale-[1.02] shadow-md"
            onClick={() => navigate(`/ActividadAreasCobertura`)}
          >
            <h2 className="text-xl text-white font-semibold">Areas de cobertura</h2>
          </li>
      </ul>

      <ul className="space-y-4">
          <li
            className="backdrop-blur-[20px] border border-white/10 bg-white/5 hover:bg-white/10 cursor-pointer rounded-xl p-6 mt-10 transition-all duration-300 hover:scale-[1.02] shadow-md"
            onClick={() => navigate(`/ActividadModeloOsi`)}
          >
            <h2 className="text-xl text-white font-semibold">Modelo Osi</h2>
          </li>
      </ul>

      <ul className="space-y-4">
          <li
            className="backdrop-blur-[20px] border border-white/10 bg-white/5 hover:bg-white/10 cursor-pointer rounded-xl p-6 mt-10 transition-all duration-300 hover:scale-[1.02] shadow-md"
            onClick={() => navigate(`/ActividadTopologiasRed`)}
          >
            <h2 className="text-xl text-white font-semibold">Topologias de Red</h2>
          </li>
      </ul>

      <ul className="space-y-4">
          <li
            className="backdrop-blur-[20px] border border-white/10 bg-white/5 hover:bg-white/10 cursor-pointer rounded-xl p-6 mt-10 transition-all duration-300 hover:scale-[1.02] shadow-md"
            onClick={() => navigate("/actividad-direccionamiento-ip")}
          >
            <h2 className="text-xl text-while font-semibold">Direccionamiento IP</h2>
          </li>
      </ul>

      <ul className="space-y-4">
          <li
            className="backdrop-blur-[20px] border border-white/10 bg-white/5 hover:bg-white/10 cursor-pointer rounded-xl p-6 mt-10 transition-all duration-300 hover:scale-[1.02] shadow-md"
            onClick={() => navigate("/actividad-tipos-de-modulacion")}
          >
            <h2 className="text-xl font-semibold mb-2">Tipos de Modulación</h2>
          </li>
      </ul>
 
    </div>
    </main>
  </div>
  );
};

export default Activities;
