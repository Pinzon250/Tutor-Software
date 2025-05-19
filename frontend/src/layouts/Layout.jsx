import Sidebar from "../components/static/Sidebar";
import Header from "../components/static/Navbar";
import Footer from "../components/static/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar completamente fijo */}
      <div className="fixed top-0 left-0 h-screen w-[250px] z-50">
        <Sidebar />
      </div>

      {/* Contenido principal desplazado por el ancho del Sidebar */}
      <div className="flex flex-col min-h-screen flex-1 ml-[250px]">
        <Header />
        <main className="flex-1 px-10 relative text-white">
          {children}
        </main>

      </div>
    </div>
  );
}
