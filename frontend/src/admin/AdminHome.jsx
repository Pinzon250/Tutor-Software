import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { Users, FileText, Book, Layers, BarChart3, Blend } from "lucide-react";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [stats, setStats] = useState({ totalEstudiantes: 0, totalEvaluaciones: 0, progreso: 0 });
  const [barData, setBarData] = useState({ labels: [], datasets: [] });
  const [pieData, setPieData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:8000/admin/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setStats(res.data.stats);

        setBarData({
          labels: res.data.progress?.labels || [],
          datasets: [
            {
              label: "Progreso",
              data: res.data.progress?.values || [],
              backgroundColor: "rgba(34,197,94,0.7)",
            },
          ],
        });

        setPieData({
          labels: res.data.evaluaciones?.labels || [],
          datasets: [
            {
              data: res.data.evaluaciones?.values || [],
              backgroundColor: ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444"],
            },
          ],
        });
      } catch (err) {
        console.error("Error al cargar datos del dashboard:", err);
      }
    };

    fetchData();
  }, []);

  const modules = [
    { name: "Estudiantes", icon: <Users size={36} />, path: "/admin/students", count: stats.totalEstudiantes, color: "bg-green-100 text-green-700" },
    { name: "Evaluaciones", icon: <FileText size={36} />, path: "/admin/evaluaciones", count: stats.totalEvaluaciones, color: "bg-blue-100 text-blue-700" },
    { name: "Contenidos", icon: <Book size={36} />, path: "/admin/contenidos", color: "bg-yellow-100 text-yellow-700" },
    { name: "Rutas", icon: <Layers size={36} />, path: "/admin/rutas", color: "bg-purple-100 text-purple-700" },
    { name: "Actividades", icon: <Blend size={36} />, path: "/admin/actividades", color: "bg-pink-100 text-pink-700" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard del Profesor</h1>

      {/* Tarjetas de módulos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {modules.map((module) => (
          <Link to={module.path} key={module.name} className={`flex flex-col items-center justify-center p-6 rounded-xl shadow hover:shadow-lg transition transform hover:scale-105 ${module.color}`}>
            {module.icon}
            <span className="mt-2 text-xl font-semibold">{module.name}</span>
            {module.count !== undefined && <span className="text-2xl font-bold">{module.count}</span>}
          </Link>
        ))}
      </div>

      {/* Gráficas más pequeñas y bien dispuestas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white col-span-2 p-4 rounded-xl shadow flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2">Progreso General</h2>
          {barData.labels.length > 0 ? (
            <div className="w-full h-64">
              <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          ) : (
            <p className="text-gray-500 text-center">No hay datos de progreso.</p>
          )}
        </div>

        <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
          <h2 className="text-lg row-span-3 font-semibold mb-2">Estado de Evaluaciones</h2>
          {pieData.labels.length > 0 ? (
            <div className="w-full h-64">
              <Doughnut data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          ) : (
            <p className="text-gray-500 text-center">No hay datos de evaluaciones.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
