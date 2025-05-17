import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import VantaNetBackground from '../../components/backgrounds/VantaNetBackground';

const Log_Reg = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const toastShownRef = useRef(false);

  useEffect(() => {
    if (location.state?.message && !toastShownRef.current) {
      toast.error(location.state.message);
      toastShownRef.current = true;
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-4">

        <VantaNetBackground />
        
      <div className="px-6 py-10 bg-white/20 rounded-xl backdrop-blur-[20px] relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl text-shadow-sm font-extrabold text-green-500 text-shadow-green-600 mb-3">
          Bienvenido al Tutor Software de Redes
        </h1>
        <div className='text-xl font-medium text-white mb-10 w10 mx-auto max-w-md md:max-w-2xl mb-5'><p>Inicia sesion para obtener recursos de la asignatura de
        redes o regristate para poder tener acceso a los contenidos</p></div>
        

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/login')}
            className="cursor-pointer px-6 py-3 bg-white/30 backdrop-blur-sm text-gray-700 rounded-xl shadow-md hover:bg-white/70 transition duration-200 text-lg w-50"
          >
            Iniciar Sesión
          </button>
          <button
            onClick={() => navigate('/register')}
            className="cursor-pointer px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-500 transition duration-200 text-lg w-50"
          >
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
};

export default Log_Reg;
