import SidebarAdmin from "../static/SidebarAdmin";
import NavbarAdmin from "../static/NavbarAdmin";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex">
      <SidebarAdmin />
      <div className="flex-1 flex flex-col">
        <NavbarAdmin />
        <main className="flex-1 p-4 bg-gray-50 min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
