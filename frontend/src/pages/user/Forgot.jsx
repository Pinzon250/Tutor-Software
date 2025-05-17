import ForgotForm from '../../components/auth/ForgotForm';
import VantaNetBackground from '../../components/backgrounds/VantaNetBackground';

const Forgot = () => {
    return (
        <div className="flex items-center justify-center min-h-screen ">
        
        <VantaNetBackground />

      <div className="backdrop-blur-sm bg-white/40 p-8 rounded-2xl shadow-lg w-full max-w-md">
            <ForgotForm />
            </div>
        </div>
    );
};

export default Forgot;