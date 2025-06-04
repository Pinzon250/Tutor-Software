import React from 'react';
import { useNavigate } from 'react-router-dom';

const temas = [
  {
    nombre: "AreaCobertura",
    imagen: "/Images/area_cobertura.jpg",
  },
  {
    nombre: "DireccionamientoIP",
    imagen: "/Images/direccionamiento_ip.jpg",
  },
  {
    nombre: "ModeloOsi",
    imagen: "/Images/modelo_osi.jpg",
  },
  {
    nombre: "TiposModulacion",
    imagen: "/Images/modulacion.jpg",
  },
  {
    nombre: "TopologiasRed",
    imagen: "/Images/topologias_red.jpg",
  },
];

const LearningPaths = () => {
  const navigate = useNavigate();

  const manejarVisualizar = (tema) => {
    // navigate(`/tema/${tema}`);
  };

  const manejarEditar = (tema) => {
    // navigate(`/tema/${tema}/editar`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
      {temas.map((t) => (
        <div
          key={t.nombre}
          className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition hover:shadow-2xl"
        >
          <img
            src={t.imagen}
            alt={t.nombre}
            className="h-48 w-full object-cover"
          />
          <div className="p-4 flex flex-col flex-grow justify-between">
            <h3 className="text-xl font-bold text-blue-700 mb-2">{t.nombre}</h3>
            <div className="mt-auto flex space-x-2">
              <button
                onClick={() => manejarVisualizar(t.nombre)}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Asignar Tema
              </button>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LearningPaths;
