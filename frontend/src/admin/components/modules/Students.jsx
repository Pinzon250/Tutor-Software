import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import StudentForm from "../forms/StudentForm";

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  const fetchStudents = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:8000/admin/students/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStudents(response.data);
      setFiltered(response.data); // Inicialmente muestra todos
      setLoading(false);
    } catch (error) {
      console.error("Error al cargar estudiantes:", error);
      toast.error("Error al cargar estudiantes");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Filtrar cuando el usuario escribe
  useEffect(() => {
    const filteredData = students.filter((student) => {
      const nombreCompleto = `${student.nombres} ${student.apellidos}`.toLowerCase();
      return (
        nombreCompleto.includes(search.toLowerCase()) ||
        student.documento?.toString().includes(search)
      );
    });
    setFiltered(filteredData);
  }, [search, students]);

  const deleteStudent = async (id) => {
    if (!confirm("¿Seguro que deseas eliminar este estudiante?")) return;
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:8000/admin/students/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Estudiante eliminado correctamente");
      fetchStudents(); // Actualiza la tabla
    } catch (error) {
      console.error("Error al eliminar estudiante:", error);
      toast.error("No se pudo eliminar el estudiante");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-green-600">Lista de Estudiantes</h2>

      {/* Input de búsqueda */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar por nombre o documento..."
        className="mb-4 p-2 border border-gray-300 rounded-lg w-full max-w-md justify-center"
      />

      <div className="overflow-x-auto shadow-xl rounded-xl">
        <table className="min-w-full bg-green-100">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="py-2 px-4 text-center">Documento</th>
              <th className="py-2 px-4 text-center">Nombre</th>
              <th className="py-2 px-4 text-center">Correo</th>
              <th className="py-2 px-4 text-center">Grupo</th>
              <th className="py-2 px-4 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-4">No se encontraron resultados</td>
              </tr>
            ) : (
              filtered.map((student) => (
                <tr key={student.id} className="border-b border-gray-400 hover:bg-green-50">
                  <td className="py-2 px-4 border-r border-gray-400 ">{student.tipoDocumento} {student.documento}</td>
                  <td className="py-2 px-4 border-r border-gray-400 ">{student.nombres} {student.apellidos}</td>
                  <td className="py-2 px-4 border-r border-gray-400 ">{student.correo}</td>
                  <td className="py-2 px-4 border-r border-gray-400 ">{student.grupo || "-"}</td>
                  <td className="py-2 px-4 border-gray-400  flex space-x-2">
                    <button
                      onClick={() => deleteStudent(student.id)}
                      className="bg-red-500 hover:bg-red-600 w-20 text-white cursor-pointer px-2 py-1 rounded text-sm"
                    >
                      Eliminar
                    </button>
                    <button
                      onClick={() => setEditId(student.id)}
                      className="bg-yellow-500 hover:bg-yellow-600 w-20 text-white cursor-pointer px-2 py-1 rounded text-sm"
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {editId && (
        <StudentForm
          studentId={editId}
          onClose={() => setEditId(null)}
          onUpdate={fetchStudents}
        />
      )}
    </div>
  );
};

export default StudentTable;
