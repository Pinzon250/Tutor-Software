export default function Evaluations() {
    const evaluaciones = [
        "Modelo OSI",
        "Áreas de Cobertura",
        "Topologías de Red",
        "Tipos de Modulación",
        "Direccionamiento IP"
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <div className="flex justify-between items-center m-10">
                    <h1 className="text-5xl font-bold text-green-500">
                        Administración de evaluaciones
                    </h1>
                    <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
                        ➕ Añadir nueva evaluacion
                    </button>
                </div>

                <div className="border-t border-green-500 mx-10 mb-10"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-10 mb-10">
                    {evaluaciones.map((actividad, idx) => (
                        <div
                            key={idx}
                            className="relative h-48 rounded-xl bg-green-100 shadow-lg hover:scale-105 transition transform"
                        >
                            <h2 className="text-2xl font-bold text-center pt-10">
                                {actividad}
                            </h2>

                            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
                                <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                                    Editar
                                </button>
                                <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
