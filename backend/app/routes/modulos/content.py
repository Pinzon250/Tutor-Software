from fastapi import APIRouter, HTTPException
from app.routes.modulos.google_api import generar_contenido_gemini, buscar_videos_youtube

router = APIRouter(
    prefix="/modulos",
    tags=["Modulos"]
)

@router.get("/contenidos/{tema}")
def obtener_contenido(tema: str):
    # Datos simulados
    contenidos_estaticos = {
        "Modelo OSI": {
            "descripcion": "",
            "Definicion": "El modelo Open Systems Interconnection (OSI) es un modelo conceptual creado por la Organización Internacional para la Estandarización, el cual permite que diversos sistemas de comunicación se conecten usando protocolos estándar. En otras palabras, el OSI proporciona un estándar para que distintos sistemas de equipos puedan comunicarse entre sí.El modelo OSI se puede ver como un lenguaje universal para la conexión de las redes de equipos. Se basa en el concepto de dividir un sistema de comunicación en siete capas abstractas, cada una apilada sobre la anterior.",
            "Definicion2": "Cada capa del modelo OSI tiene una función específica y se comunica con las capas superiores e inferiores. Los ataques DDoS se dirigen a capas específicas de una conexión de red, los ataques a la capa de aplicación se dirigen a la capa 7, mientras que los ataques a la capa de protocolo se dirigen a las capas 3 y 4.",
            "Capa1": "7. Capa de aplicación",
            "DefinicionCapa1": "Esta es la única capa que interactúa directamente con los datos del usuario. Las aplicaciones de software, como los navegadores web y los clientes de correo electrónico, dependen de la capa de aplicación para iniciar las comunicaciones. Sin embargo, debe quedar claro que las aplicaciones de software cliente no forman parte de la capa de aplicación; más bien, la capa de aplicación es responsable de los protocolos y la manipulación de datos de los que depende el software para presentar datos significativos al usuario.Los protocolos de la capa de aplicación incluyen HTTP, así como también SMTP (el protocolo simple de transferencia por correo electrónico, uno de los protocolos que permiten las comunicaciones por correo electrónico).",
            "Capa2": "6. Capa de presentación",
            "DefinicionCapa2": "Esta capa es principalmente responsable de preparar los datos para que los pueda usar la capa de aplicación; en otras palabras, la capa 6 hace que los datos se preparen para su consumo por las aplicaciones. La capa de presentación es responsable de la traducción, el cifrado y la compresión de los datos. Dos dispositivos de comunicación que se conectan entre sí podrían estar usando distintos métodos de codificación, por lo que la capa 6 es la responsable de traducir los datos entrantes en una sintaxis que la capa de aplicación del dispositivo receptor pueda comprender.Si los dispositivos se comunican a través de una conexión cifrada, la capa 6 es responsable de añadir el cifrado en el extremo del emisor, así como de decodificar el cifrado en el extremo del receptor, para poder presentar a la capa de aplicación datos descifrados y legibles.Después, la capa de presentación es también la encargada de comprimir los datos que recibe de la capa de aplicación antes de ser enviados a la capa 5. Esto ayuda a mejorar la velocidad y la eficiencia de la comunicación mediante la minimización de la cantidad de datos que serán transferidos.",
            "Capa3": "5. Capa de sesión",
            "DefinicionCapa3": "La capa de sesión es la responsable de la apertura y cierre de comunicaciones entre dos dispositivos. Ese tiempo que transcurre entre la apertura de la comunicación y el cierre de esta se conoce como sesión. La capa de sesión garantiza que la sesión permanezca abierta el tiempo suficiente como para transferir todos los datos que se están intercambiando; tras esto, cerrará sin demora la sesión para evitar el desaprovechamiento de recursos. La capa de sesión también sincroniza la transferencia de datos utilizando puntos de control. Por ejemplo, si un archivo de 100 megabytes está transfiriéndose, la capa de sesión podría fijar un punto de control cada 5 megabytes. En caso de desconexión o caída tras haberse transferido, por ejemplo, 52 megabytes, la sesión podría reiniciarse a partir del último punto de control, con lo cual solo quedarían unos 50 megabytes pendientes de transmisión. Sin esos puntos de control, la transferencia en su totalidad tendría que reiniciarse desde cero.",
            "Capa4": "4. Capa de transporte",
            "DefinicionCapa4": "La capa 4 es la responsable de las comunicaciones de extremo a extremo entre dos dispositivos. Esto implica, antes de proceder a ejecutar el envío a la capa 3, tomar datos de la capa de sesión y fragmentarlos seguidamente en trozos más pequeños llamados segmentos. La capa de transporte del dispositivo receptor es la responsable luego de rearmar tales segmentos y construir con ellos datos que la capa de sesión pueda consumir. La capa de transporte también es responsable del control de flujo y el control de errores. El control de flujo determina una velocidad óptima de transmisión para garantizar que un emisor con una conexión rápida no abrume a un receptor con una conexión lenta. La capa de transporte realiza un control de errores en el extremo receptor al garantizar que los datos recibidos estén completos y solicitar una retransmisión si no lo están. Los protocolos de la capa de transporte incluyen el Protocolo de control de transmisión (TCP) y el User Datagram Protocol (UDP).",
            "Capa5": "3. Capa de red",
            "DefinicionCapa5": "La capa de red es responsable de facilitar la transferencia de datos entre dos redes diferentes. Si los dispositivos que se comunican se encuentran en la misma red, entonces la capa de red no es necesaria. Esta capa divide los segmentos de la capa de transporte en unidades más pequeñas, llamadas paquetes, en el dispositivo del emisor, y vuelve a juntar estos paquetes en el dispositivo del receptor. La capa de red también busca la mejor ruta física para que los datos lleguen a su destino; esto se conoce como enrutamiento. Los protocolos de la capa de red incluyen la dirección IP, el Protocolo de mensajes de control de Internet (ICMP), el Protocolo de mensajes de grupo de Internet (IGMP) y el paquete IPsec.",
            "Capa6": "2. Capa de enlace de datos",
            "DefinicionCapa6": "La capa de enlace de datos es muy similar a la capa de red, excepto que la capa de enlace de datos facilita la transferencia de datos entre dos dispositivos dentro la misma red. La capa de enlace de datos toma los paquetes de la capa de red y los divide en partes más pequeñas que se denominan tramas. Al igual que la capa de red, esta capa también es responsable del control de flujo y el control de errores en las comunicaciones dentro de la red (la capa de transporte solo realiza tareas de control de flujo y de control de errores para las comunicaciones dentro de la red).",
            "Capa7": "1. Capa física",
            "DefinicionCapa7": "Esta capa incluye el equipo físico implicado en la transferencia de datos, tal como los cables y los conmutadores de red. Esta también es la capa donde los datos se convierten en una secuencia de bits, es decir, una cadena de unos y ceros. La capa física de ambos dispositivos también debe estar de acuerdo en cuanto a una convención de señal para que los 1 puedan distinguirse de los 0 en ambos dispositivos.",
            "videos": [
                {
                    "titulo": "Modelos OSI y TCP (Explicado) Modelos Conceptuales",
                    "videoId": "1",
                    "url": "https://www.youtube.com/watch?v=jdKRx2BxSMs"
                },
                {
                    "titulo": "Modelo de capas OSI y TCP/IP. Curso de redes desde 0 | Cap 12 |",
                    "videoId": "2",
                    "url": "https://www.youtube.com/watch?v=iNh-62Mf0O4"
                },
                {
                    "titulo": "Entendiendo el modelo OSI | ¿Como funciona el Internet?",
                    "videoId": "3",
                    "url": "https://www.youtube.com/watch?v=CnNRdJgeMo8"
                }
            ]
        },
      "Areas de Cobertura de Redes": {
        "descripcion": "Este tema explica los tipos de redes según su cobertura geográfica.",
        "Definicion": (
            "Una red informática es un sistema interconectado de dispositivos electrónicos, como computadoras, "
            "servidores, dispositivos móviles y otros dispositivos, que se comunican entre sí para compartir recursos, "
            "transmitir datos y permitir la colaboración en línea. "
            "Este sistema de dispositivos conectados, se pueden diferenciar entre sí según las dimensiones de red, "
            "o dicho de otra manera, de qué tanto espacio geográfico ocupan."
        ),
        "TiposDeRed": [
            {
                "nombre": "Personal Area Networks (PAN)",
                "descripcion": "Red de área personal, usada para conectar dispositivos cercanos a un individuo, como un teléfono móvil y una laptop."
            },
            {
                "nombre": "Local Area Networks (LAN)",
                "descripcion": "Red de área local, generalmente limitada a un solo edificio o campus, como la red de una oficina o escuela."
            },
            {
                "nombre": "Metropolitan Area Networks (MAN)",
                "descripcion": "Red de área metropolitana, que abarca una ciudad o región, conectando múltiples LANs."
            },
            {
                "nombre": "Wide Area Networks (WAN)",
                "descripcion": "Red de área amplia, que cubre grandes distancias geográficas, como las redes de una corporación internacional."
            },
            {
                "nombre": "Global Area Networks (GAN)",
                "descripcion": "Red de área global, que conecta redes en todo el mundo, como Internet."
            }
        ],
        "videos": [
            {
                "titulo": "Tipos de Redes: PAN, LAN, MAN, WAN, GAN",
                "videoId": "1",
                "url": "https://www.youtube.com/watch?v=abc123456"
            },
            {
                "titulo": "Diferencias entre LAN, WAN y MAN",
                "videoId": "2",
                "url": "https://www.youtube.com/watch?v=def987654"
            }
        ]
    }
}

@router.get("/contenidos/{tema}")
def obtener_contenido(tema: str):
    contenido = contenidos_estaticos.get(tema)
    if not contenido:
        raise HTTPException(status_code=404, detail="Contenido no disponible")
    return contenido


