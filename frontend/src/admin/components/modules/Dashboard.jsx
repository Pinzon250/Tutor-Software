// src/admin/components/Dashboard.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";

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

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Resumen del Dashboard</h1>

      {/* Tarjetas resumen */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold text-green-600">Total Estudiantes</h2>
          <p className="text-3xl font-bold">{stats.totalEstudiantes}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold text-blue-600">Total Evaluaciones</h2>
          <p className="text-3xl font-bold">{stats.totalEvaluaciones}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold text-yellow-600">Progreso Promedio</h2>
          <p className="text-3xl font-bold">{stats.progreso}%</p>
        </div>
      </div>

      {/* Gráficas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Progreso General</h2>
          <Bar data={barData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Estado de Evaluaciones</h2>
          <Pie data={pieData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
