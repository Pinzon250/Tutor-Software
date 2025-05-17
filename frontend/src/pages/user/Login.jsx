import LoginForm from '../../components/auth/LoginForm';
import VantaNetBackground from '../../components/backgrounds/VantaNetBackground';

export default function Login() {
    return (
     <div className="flex items-center justify-center min-h-screen ">
        
        <VantaNetBackground />

      <div className="backdrop-blur-[10px] bg-white/40 p-8 rounded-2xl shadow-lg w-full max-w-md">
            <LoginForm />
        </div>
        </div>
    );
}