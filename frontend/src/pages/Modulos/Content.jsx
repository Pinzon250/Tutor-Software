                                        
<div className="flex flex-col min-h-screen">

      {/* Header */}
      <header className="bg-green-900 text-white flex items-center justify-between p-4">
        <div className="flex items-center">
          <Book size={32} className="mr-2" />
          <h1 className="text-2xl font-bold">TUTOR</h1>
        </div>

        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center space-x-3 pr-5 cursor-pointer"
          >
            <span className="text-xl">{userName}</span>
            <UserCircle size={40} />
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-3 w-48 backdrop-blur-[10px] border border-white/10 mr-5 rounded-md shadow-lg z-10">
              <ul className="py-2">
                <li
                  onClick={() => navigate("/profile")}
                  className="flex items-center px-4 py-2 hover:bg-white/10 rounded-full transition duration-300ms cursor-pointer"
                >
                  <UserCircle size={20} className="mr-2" />
                  Perfil
                </li>
                <li
                  onClick={() => navigate("/settings")}
                  className="flex items-center px-4 py-2 hover:bg-white/10 rounded-full transition duration-300ms cursor-pointer"
                >
                  <Settings size={20} className="mr-2" />
                  Configuración
                </li>
                <li
                  onClick={handleLogout}
                  className="flex items-center text-red-500 px-4 py-2 hover:bg-white/10 rounded-full transition duration-300ms cursor-pointer"
                >
                  <LogOut size={20} className="text-red-500 mr-2" />
                  Cerrar sesión
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
</div>