// src/admin/components/StudentForm.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const StudentForm = ({ studentId, onClose, onUpdate }) => {
  const [form, setForm] = useState({
    nombres: "",
    apellidos: "",
    correo: "",
    grupo: "",
  });

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`http://localhost:8000/admin/students/${studentId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setForm(res.data);
      } catch (error) {
        console.error("Error al cargar estudiante:", error);
        toast.error("No se pudo cargar el estudiante");
        onClose();
      }
    };

    fetchStudent();
  }, [studentId]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.put(`http://localhost:8000/admin/students/${studentId}`, form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Estudiante actualizado correctamente");
      onUpdate(); // Refresca la lista
      onClose(); // Cierra el modal
    } catch (error) {
      console.error("Error al actualizar:", error);
      toast.error("No se pudo actualizar el estudiante");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Editar Estudiante</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="nombres"
            value={form.nombres}
            onChange={handleChange}
            placeholder="Nombres"
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            name="apellidos"
            value={form.apellidos}
            onChange={handleChange}
            placeholder="Apellidos"
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            placeholder="Correo"
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            name="grupo"
            value={form.grupo || ""}
            onChange={handleChange}
            placeholder="Grupo"
            className="w-full border border-gray-300 p-2 rounded"
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 cursor-pointer hover:bg-gray-400 bg-gray-300 rounded"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 cursor-pointer hover:bg-green-700 bg-green-600 text-white rounded"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
