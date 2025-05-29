export default function TopologíasRed () {

    return (
        <div className="bg-gray-600">
<main>
<body>
  <h1>Las topologías de red</h1>
  <p>Las topologías de red son las formas o estructuras en las que se organizan y conectan los dispositivos (como computadoras, impresoras, switches, routers, etc.) dentro de una red. Existen varios tipos de topologías, y cada una tiene ventajas y desventajas según el uso, el costo, la escalabilidad y la tolerancia a fallos.</p>

  <h2>Topologías físicas</h2>
  <h3>Bus</h3>
  <p><strong>Descripción:</strong> Todos los dispositivos están conectados a un único cable principal (bus).</p>
  <p><strong>Uso común:</strong> Redes pequeñas o temporales debido a su simplicidad y bajo costo.</p>

  <h3>Estrella (Star)</h3>
  <p><strong>Descripción:</strong> Todos los dispositivos se conectan a un nodo central, como un switch o hub.</p>
  <p><strong>Uso común:</strong> Redes LAN modernas, oficinas y hogares, por su facilidad de gestión y escalabilidad.</p>

  <h3>Anillo (Ring)</h3>
  <p><strong>Descripción:</strong> Cada dispositivo está conectado con dos dispositivos adyacentes, formando un círculo cerrado.</p>
  <p><strong>Uso común:</strong> Redes de área metropolitana (MAN) y algunas redes industriales.</p>

  <h3>Malla (Mesh)</h3>
  <p><strong>Descripción:</strong> Cada dispositivo está conectado directamente a varios otros, proporcionando múltiples rutas para los datos.</p>
  <p><strong>Uso común:</strong> Redes que requieren alta disponibilidad y redundancia, como redes militares o de telecomunicaciones.</p>

  <h3>Árbol (Tree) o Jerárquica</h3>
  <p><strong>Descripción:</strong> Estructura jerárquica que combina múltiples topologías en estrella conectadas a un nodo central.</p>
  <p><strong>Uso común:</strong> Grandes redes corporativas y sistemas organizacionales complejos.</p>

  <h3>Híbrida</h3>
  <p><strong>Descripción:</strong> Combinación de dos o más topologías diferentes para aprovechar las ventajas de cada una.</p>
  <p><strong>Uso común:</strong> Grandes empresas que requieren flexibilidad y escalabilidad en su infraestructura de red.</p>

  <h3>Totalmente conexa</h3>
  <p><strong>Descripción:</strong> Cada nodo está conectado directamente a todos los demás nodos de la red.</p>
  <p><strong>Uso común:</strong> Entornos que requieren máxima redundancia y seguridad, aunque es costosa y compleja de implementar.</p>

  <h2>Topologías lógicas</h2>
  <h3>Lógica en bus</h3>
  <p><strong>Descripción:</strong> Todos los dispositivos comparten un canal de comunicación común. Solo un dispositivo transmite a la vez.</p>
  <p><strong>Usos comunes:</strong> Redes Ethernet antiguas (coaxial), pequeñas redes de oficina.</p>

  <h3>Lógica en anillo</h3>
  <p><strong>Descripción:</strong> Los datos viajan en una dirección específica, formando un circuito cerrado con control de token.</p>
  <p><strong>Usos comunes:</strong> MAN, redes industriales, FDDI o Token Ring.</p>

  <h2>Topologías menos comunes o especiales</h2>

  <h3>Punto a punto (Point-to-Point)</h3>
  <p><strong>Descripción:</strong> Conexión directa entre dos dispositivos.</p>
  <p><strong>Uso común:</strong> Conexiones simples entre computadoras, impresoras o switches.</p>

  <h3>Multipunto</h3>
  <p><strong>Descripción:</strong> Varios dispositivos comparten un mismo canal de comunicación, ya sea cableado o inalámbrico.</p>
  <p><strong>Uso común:</strong> Redes de sensores, redes industriales, redes serie RS-485.</p>

  <h3>Inalámbrica (Wireless)</h3>
  <p><strong>Descripción:</strong> Dispositivos conectados mediante radiofrecuencia, con topología lógica tipo estrella, malla o híbrida.</p>
  <p><strong>Uso común:</strong> Redes Wi-Fi domésticas, móviles, IoT, zonas rurales o de difícil acceso.</p>

  <h3>Anillo doble (Dual Ring)</h3>
  <p><strong>Descripción:</strong> Similar a la topología en anillo, pero con un segundo anillo que proporciona redundancia.</p>
  <p><strong>Uso común:</strong> Redes con alta disponibilidad como las de proveedores de servicios.</p>

</body>
</main>
</div>
    )
}