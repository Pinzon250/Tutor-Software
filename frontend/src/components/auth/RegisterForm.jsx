import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { BsMicrosoft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    cedula: "",
    grupo: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.confirmPassword ||
      !form.cedula ||
      !form.grupo
    ) {
      setMessage({ type: "error", text: "Todos los campos son obligatorios." });
      return;
    }
    if (form.password !== form.confirmPassword) {
      setMessage({ type: "error", text: "Las contraseñas no coinciden." });
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          cedula: form.cedula,
          grupo: form.grupo,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          type: "success",
          text: "¡Registro exitoso! Redirigiendo...",
        });
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else {
        setMessage({
          type: "error",
          text: data.message || "Fallo en el registro.",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Error del servidor. Intenta más tarde.",
      });
    }
  };

  return (
    <div className="-mt-3">
      {" "}
      <button
        onClick={() => navigate("/")}
        className="cursor-pointer text-green-600 font-semibold hover:text-green-500 transition duration-300"
      >
        Regresar
      </button>
      <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-sm mx-auto">
        <h2 className="text-3xl font-bold text-green-600 text-center">
          Crear cuenta
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Nombre Completo"
          value={form.name}
          onChange={handleChange}
          className="border rounded border-gray-300 w-full p-2 bg-white/50 focus:ring-2 focus:ring-green-600 outline-none"
        />

        <input
          type="number"
          name="cedula"
          placeholder="N* Identificacion"
          value={form.cedula}
          onChange={handleChange}
          className="border rounded border-gray-300 w-full p-2 bg-white/50 focus:ring-2 focus:ring-green-600 outline-none"
        />

        <select
          name="grupo"
          placeholder="Grupo"
          value={form.grupo}
          onChange={handleChange}
          className="border rounded border-gray-300 w-full p-2 bg-white/50 focus:ring-2 focus:ring-green-600 outline-none"
        >
          <option value="">Grupo</option>
          <option value="S4A">S4A</option>
          <option value="S4B">S4B</option>
          <option value="S4C">S4C</option>
          <option value="S4D">S4D</option>
          <option value="S4E">S4E</option>
        </select>

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          className="border rounded border-gray-300 w-full p-2 bg-white/50 focus:ring-2 focus:ring-green-600 outline-none"
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            className="border rounded border-gray-300 w-full p-2 bg-white/50 focus:ring-2 focus:ring-green-600 outline-none"
          />
          <span
            className="absolute right-3 top-3 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirmar contraseña"
            value={form.confirmPassword}
            onChange={handleChange}
            className="border rounded border-gray-300 w-full p-2 bg-white/50 focus:ring-2 focus:ring-green-600 outline-none"
          />
          <span
            className="absolute right-3 top-3 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-lg rounded transition duration-300"
        >
          Registrarse
        </button>

        {message && (
          <p
            className={`text-sm ${
              message.type === "error" ? "text-red-500" : "text-green-600"
            }`}
          >
            {message.text}
          </p>
        )}
      </form>
      <aside className=" text-sm text-gray-600 text-center">
        Ya tienes una cuenta?
        <a
          href="/login"
          className="text-green-600 cursor-pointer hover:text-green-500 font-semibold ml-1 transition duration-300"
        >
          Inicia Sesion
        </a>
        <div className="flex items-center my-3">
          <div className="flex-grow border-t border-black/30"></div>
          <span className="mx-4 text-gray-500">O</span>
          <div className="flex-grow border-t border-black/30"></div>
        </div>
        <button className="flex cursor-pointer items-center bg-white justify-center w-full border border-gray-300 p-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
          <BsMicrosoft size={24} className="mr-2 text-green-600" />
          Registrate con Microsoft 365
        </button>
        <p className="text-center text-gray-500 pt-4">
          Al registrarte estas de acuerdo con nuestros{" "}
          <a
            href="/terms"
            className="text-green-600 hover:text-green-500 font-semibold transition duration-300"
          >
            Terminos de servicio
          </a>{" "}
          y{" "}
          <a
            href="/privacy"
            className="text-green-600 hover:text-green-500 font-semibold transition duration-300"
          >
            Politica de privacidad
          </a>
        </p>
      </aside>
    </div>
  );
}
