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

    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-sm mx-auto">
        <button onClick={() => navigate('/')} className=''>Regresar</button>
      <h2 className="text-xl font-bold text-center">Iniciar sesión</h2>
      <input
        type="text"
        name="username"
        placeholder="Correo"
        onChange={handleChange}
        className="w-full border p-2"
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        onChange={handleChange}
        className="w-full border p-2"
      />
      <button className="bg-green-600 text-white w-full p-2">Entrar</button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}

export default LoginForm;