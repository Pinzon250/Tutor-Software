// src/pages/Home.jsx
import { Book } from "lucide-react";
import VantaRingsBackground from "../components/backgrounds/VantaRingsBackground";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      <VantaRingsBackground />
      
      {/* Header */}
      <header className="bg-green-600 text-white flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold flex items-center gap-2">
          <Book className="w-7 h-7" />
          <span>TUTOR</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="font-medium">Estudiante
          </span>
          <button className="hover:underline text-sm">Cerrar sesión</button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 bg-gray-200 p-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mt-20 text-5xl font-bold mb-2 text-start">¡Bienvenido, Estudiante!</h1>
          <p className=" text-lg mb-6 text-start">Sigue aprendiendo y sube de nivel.</p>

          {/* Progress bar */}
          <div className="text-left font-medium mb-2">Progreso de aprendizaje</div>
          <div className="w-full bg-white rounded-full h-3 mb-8">
            <div className="bg-green-600 h-3 rounded-full w-[2%]"></div>
          </div>

          <div className="text-white p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {/* Tarjeta grande (arriba, ocupa toda la fila) */}
                <div className="col-span-1 md:row-span-3 hover:scale-105 hover:shadow-lg transition-all duration-300 bg-[#1E293B]/60 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-md">
                  <h2 className="text-2xl font-semibold mb-2">Acceder a los contenidos</h2>
                  <p className="text-base text-white/80">Consulta el material disponible y continúa tu aprendizaje con claridad y confianza.</p>
                </div>

                {/* Tarjeta 2 */}
                <div className="bg-[#1E293B]/60 backdrop-blur-sm hover:scale-105 hover:shadow-lg transition-all duration-300 p-6 rounded-xl border border-white/10 shadow-md">
                  <h2 className="text-xl font-semibold mb-2">Realizar evaluaciones</h2>
                  <p className="text-sm text-white/80">Pon a prueba tus conocimientos mediante pruebas y cuestionarios.</p>
                </div>

                {/* Tarjeta 3 */}
                <div className="bg-[#1E293B]/60 backdrop-blur-sm hover:scale-105 hover:shadow-lg transition-all duration-300 p-6 rounded-xl border border-white/10 shadow-md">
                  <h2 className="text-xl font-semibold mb-2">Resolver ejercicios</h2>
                  <p className="text-sm text-white/80">Practica resolviendo problemas y ejercicios interactivos.</p>
               </div>

                {/* Tarjeta 4 */}
                <div className="bg-[#1E293B]/60 backdrop-blur-sm hover:scale-105 hover:shadow-lg transition-all duration-300 p-6 rounded-xl border border-white/10 shadow-md">
                  <h2 className="text-xl font-semibold mb-2">Visualizar progreso</h2>
                  <p className="text-sm text-white/80">Revisa tu avance y mejora continuamente.</p>
                </div>
                </div>
            </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-center text-gray-100 text-sm py-4">
        © 2025 Tutor Software
      </footer>
    </div>
  );
}

function Card({ icon, text }) {
  return (
    <button className="flex items-center justify-start gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow hover:bg-gray-100 transition text-left duration-300">
      <div className="text-green-600">{icon}</div>
      <span className="font-medium">{text}</span>
    </button>
  );
}
