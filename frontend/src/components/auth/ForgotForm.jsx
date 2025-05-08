import React from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotForm = () => {
    const navigate = useNavigate();
    return (
        <div className='-mt-3 '><button className='font-semibold text-green-600 hover:text-green-500' onClick={() => navigate('/')}>Regresar</button>
            <h2 className='mt-4 text-3xl text-center text-green-600 font-bold text-gray-800 mb-6'>Olvidaste tu contraseña</h2>
            <form className='space-y-4'>
                <input 
                    type="email" 
                    placeholder='Enter your email' 
                    className='border rounded border-gray-300 w-full p-2 bg-white/50 focus:ring-2 focus:ring-green-600 outline-none'
                />
                <button
                    type='submit'
                    className='w-full bg-green-600 hover:bg-green-500 text-white py-3 rounded-lg transition'
                >
                    Enviar codigo de verificación
                </button>
            </form>
        </div>
    );
};

export default ForgotForm;