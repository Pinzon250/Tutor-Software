// src/components/Sidebar.jsx
import {
  HomeIcon,
  Square3Stack3DIcon,
  ChartBarIcon,
  BookOpenIcon,
  Cog6ToothIcon,
  ClipboardDocumentCheckIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Inicio', icon: HomeIcon, to: '/home' },
  { name: 'Contenido', icon: BookOpenIcon, to: '/team' },
  { name: 'Evaluaciones', icon: ClipboardDocumentCheckIcon, to: '/projects' },
  { name: 'Ejercicios', icon: Square3Stack3DIcon, to: '/calendar' },
  { name: 'Progreso', icon: ChartBarIcon, to: '/documents' },
];

const teams = ['Heroicons', 'Tailwind Labs', 'Workcation'];

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <div className={`fixed inset-y-0 left-0 w-64 bg-green-900/50 h-screen backdrop-blur-[30px] text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-50 lg:translate-x-0 lg:static lg:unfixed `}>
      <div className="flex items-center justify-between p-4">
        <img
            src="/tutor.svg"
            alt="Logo"
            className="h-8 w-auto"
        />
        <button className="lg:hidden" onClick={() => setIsOpen(false)}>
          <XMarkIcon className="h-6 w-6 text-white" />
        </button>
      </div>
      <nav className="px-4 space-y-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.to}
            className="flex items-center px-2 py-2 rounded-md hover:bg-green-800"
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.name}
          </Link>
        ))}
        <div className="mt-6 text-xs text-gray-400">Tus equipos</div>
        {teams.map((team) => (
          <div key={team} className="flex items-center px-2 py-1 text-sm hover:bg-green-800 rounded-md">
            <span className="bg-gray-700 rounded-full px-2 py-1 text-xs font-medium mr-2">{team[0]}</span>
            {team}
          </div>
        ))}
      </nav>
      <div className="absolute bottom-4 left-4 text-sm flex items-center space-x-2 cursor-pointer hover:text-gray-300">
        <Cog6ToothIcon className="h-5 w-5" />
        <span>Configuración</span>
      </div>
    </div>
  );
}
