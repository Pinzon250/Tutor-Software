// src/components/auth/LoginForm.jsx
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm() {

  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login', new URLSearchParams(form), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      localStorage.setItem('token', response.data.access_token);
      window.location.href = '/';  // Redirige al home u otra ruta
    } catch (err) {
      setError('Credenciales inválidas');
    }
  };

  return (
    <div className='-mt-3 '><button className='font-semibold text-green-600 hover:text-green-900' onClick={() => navigate('/')}>Regresar</button>
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-sm mx-auto">
      <h2 className="text-xl text-green-600 font-bold text-center">Iniciar sesión</h2>
      <input
        type="text"
        name="username"
        placeholder="Correo"
        onChange={handleChange}
        className="border rounded border-gray-300 w-full p-2 bg-white/50 focus:ring-2 focus:ring-green-600 outline-none"
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        onChange={handleChange}
        className="border rounded border-gray-300 w-full p-2 bg-white/50 focus:ring-2 focus:ring-green-600 outline-none"
      />
      <div className='mb-4 flex items-center'>
           <input
               id="LoginRemember"
               type="checkbox"
               name="remember"
               className="mr-2 -mt-2 bg-[#C19A6B]"
           />
             <label htmlFor="LoginRemember" className="text-sm -mt-2 text-gray-700">Remember Me</label>
       </div>
      <button className="w-full cursor-pointer bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-lg rounded transition duration-300 ">Entrar</button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
    <aside className="mt-4 text-sm text-gray-600">
      <p className="flex justify-between -mt-5">
            <a href="/forgot" className="text-green-600 ml-5 cursor-pointer hover:text-green-900 font-semibold ml-1">Forgot Password?</a>
            <p>Don't have an account?
            <a href="/Register" className="text-green-600 mr-5 cursor-pointer hover:text-green-900 font-semibold ml-1">Register</a>
            </p>
        </p>
        <p className='text-center text-gray-500 pt-9'>
            By signing in, you agree to our <a href="/terms" className="text-green-600 hover:text-green-900 font-semibold">Terms of Service</a> and <a href="/privacy" className="text-green-600 hover:text-green-900 font-semibold">Privacy Policy</a>.
        </p>
    </aside>
    </div>
  );
}

export default LoginForm;