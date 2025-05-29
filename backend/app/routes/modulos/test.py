from fastapi import APIRouter, HTTPException
from typing import Dict
from app.schemas.modulos import FormularioEvaluacion, EnvioEvaluacion, Pregunta

router = APIRouter(
    prefix="/evaluaciones",
    tags=["Evaluaciones"]
)

# Evaluaciones dummy
evaluaciones_mock: Dict[int, FormularioEvaluacion] = {
    1: FormularioEvaluacion(
        id=1,
        preguntas=[
            Pregunta(
                pregunta="¿Qué es el Modelo OSI y cuál fue su propósito al ser creado?",
                opciones=["Un protocolo de seguridad para redes WiFi.",
                          "Un modelo conceptual que estandariza las funciones de comunicación de un sistema de telecomunicaciones.",
                          "Un sistema operativo para gestionar redes locales.",
                          "Un lenguaje de programación para administrar redes."],
                respuestaCorrecta=1
            ),
            Pregunta(
                pregunta="¿Cuántas capas componen el Modelo OSI y cuáles son sus nombres en orden desde la capa más baja a la más alta?",
                opciones=["5 capas: Aplicación, Sesión, Red, Transporte y Física.",
                         "7 capas: Física, Enlace de Datos, Red, Transporte, Sesión, Presentación y Aplicación.", 
                         "6 capas: Física, Red, Transporte, Presentación, Sesión y Aplicación.", 
                         "8 capas: Física, Red, Transporte, Sesión, Presentación, Aplicación, Control y Seguridad."],
                respuestaCorrecta=1
            ),
            Pregunta(
                pregunta="¿Qué función principal cumple la Capa de Enlace de Datos en el Modelo OSI?",
                opciones=["Gestionar el acceso al medio físico y la transmisión de bits.",
                          "Encargarse de direccionar paquetes entre diferentes redes.",
                          "Detectar y corregir errores en la transmisión de tramas.",
                          "Mantener la conexión entre aplicaciones de usuario."],
                respuestaCorrecta=2
            ),
            Pregunta(
                pregunta="¿Cuál es la responsabilidad de la Capa de Transporte y qué protocolos se asocian comúnmente a ella?",
                opciones=["Regular el voltaje en los cables; utiliza el protocolo TCP.", 
                          "Garantizar una comunicación fiable o no fiable entre extremos; se asocia con TCP y UDP.", 
                          "Controlar el acceso al medio compartido; utiliza HTTP y FTP.", 
                          "Detectar errores físicos en los cables de red."],
                respuestaCorrecta=1
            ),
            Pregunta(
                pregunta="¿Qué capa del Modelo OSI se encarga de establecer, mantener y finalizar las conexiones entre aplicaciones?",
                opciones=["Capa de Transporte", 
                          "Capa de Aplicación.", 
                          "Capa de Sesión", 
                          "Capa de Red."],
                respuestaCorrecta=2
            ),
            Pregunta(
                pregunta="Menciona dos diferencias entre la Capa de Red y la Capa de Enlace de Datos.",
                opciones=["La Capa de Red usa direcciones físicas y la de Enlace direcciones lógicas.", 
                          "La Capa de Red enruta paquetes entre redes y la de Enlace maneja tramas dentro de la misma red.", 
                          "La Capa de Red establece sesiones y la de Enlace controla las aplicaciones.", 
                          "Ambas capas cumplen exactamente las mismas funciones."],
                respuestaCorrecta=1
            ),
            Pregunta(
                pregunta="Explica la función de la Capa de Presentación en el Modelo OSI.",
                opciones=["Se encarga de transmitir los datos sin modificarlos.", 
                          " Garantiza que los datos estén en un formato entendible entre diferentes sistemas, gestionando codificación y cifrado.", 
                          "Determina la ruta más adecuada para los paquetes.", 
                          "Controla el acceso físico al medio de transmisión."],
                respuestaCorrecta=1
            ),
            Pregunta(
                pregunta="¿Cuál es la importancia de la Capa de Aplicación en el Modelo OSI?",
                opciones=["Define el formato eléctrico de los cables.", 
                          "Proporciona servicios de red directamente a las aplicaciones del usuario.", 
                          "Gestiona la apertura y cierre de sesiones.", 
                          "Mantiene la seguridad física de los servidores."],
                respuestaCorrecta=1
            ),
            Pregunta(
                pregunta="¿Por qué es importante comprender el Modelo OSI en el contexto de las redes actuales?",
                opciones=["Porque es el único modelo vigente para redes LAN.", 
                          "Aunque se utilicen otros modelos como TCP/IP, el OSI permite entender y diagnosticar problemas de red de forma estructurada.", 
                          "Porque sustituye completamente al modelo TCP/IP", 
                          "Porque define los nombres de usuario y contraseñas en una red."],
                respuestaCorrecta=1
            ),
        ]
    ),
    2: FormularioEvaluacion(
        id=2,
        preguntas=[
            Pregunta(
                pregunta="¿Qué es una red LAN?",
                opciones=[
                    "Una red de cobertura global que conecta diferentes países.",
                    "Una red local de corto alcance que conecta dispositivos en una ubicación limitada.",
                    "Una red para transmitir datos vía satélite.",
                    "Una red privada que interconecta ciudades."
                ],
                respuestaCorrecta=1
            ),
            Pregunta(
                pregunta="¿Cuál es el propósito principal de una red MAN?",
                opciones=[
                    "Interconectar dispositivos en una misma habitación.",
                    "Conectar redes locales en una ciudad o área metropolitana.",
                    "Proveer conexión global vía satélite.",
                    "Administrar el acceso a Internet en hogares."
                ],
                respuestaCorrecta=1
            ),
            Pregunta(
                pregunta="¿Qué tipo de red es el Internet considerado?",
                opciones=[
                    "LAN",
                    "MAN",
                    "WAN",
                    "PAN"
                ],
                respuestaCorrecta=2
            ),
            Pregunta(
                pregunta="¿Cuál es un ejemplo de una red PAN?",
                opciones=[
                    "Una conexión Bluetooth entre un celular y audífonos.",
                    "Una red de fibra óptica que conecta ciudades.",
                    "La red de datos de una empresa multinacional.",
                    "La red de una universidad completa."
                ],
                respuestaCorrecta=0
            ),
            Pregunta(
                pregunta="¿Qué tipo de redes son típicamente usadas para interconectar países?",
                opciones=[
                    "LAN",
                    "MAN",
                    "WAN",
                    "PAN"
                ],
                respuestaCorrecta=2
            ),
            Pregunta(
                pregunta="¿Cuál es una característica principal de las redes LAN?",
                opciones=[
                    "Cubren grandes distancias, como entre países.",
                    "Conectan dispositivos cercanos como en una oficina o casa.",
                    "Se usan principalmente para interconectar ciudades.",
                    "Transmiten datos vía satélite."
                ],
                respuestaCorrecta=1
            ),
            Pregunta(
                pregunta="¿Cuál de las siguientes afirmaciones es verdadera sobre una red WAN?",
                opciones=[
                    "Es de alcance limitado a una sala de estar.",
                    "Conecta múltiples redes LAN a través de grandes distancias.",
                    "Se usa para conectar dispositivos personales como audífonos.",
                    "No requiere Internet para funcionar."
                ],
                respuestaCorrecta=1
            ),
            Pregunta(
                pregunta="¿Qué tecnología suele usarse en una red PAN?",
                opciones=[
                    "Bluetooth",
                    "Fibra óptica",
                    "Cable coaxial",
                    "Antenas 5G metropolitanas"
                ],
                respuestaCorrecta=0
            ),
            Pregunta(
                pregunta="¿Cuál es el área típica de una red PAN?",
                opciones=[
                    "Una habitación pequeña, como una oficina o dormitorio.",
                    "Una ciudad entera.",
                    "Un país completo.",
                    "Una red intercontinental."
                ],
                respuestaCorrecta=0
            )
        ]
    ),
    3:FormularioEvaluacion(
        id=1,
        preguntas=[
            Pregunta(
                pregunta="¿Cuál de las siguientes topologías conecta todos los dispositivos a un único cable principal?",
                opciones=["Malla.",
                            "Árbol.",
                            "Bus",
                            "Anillo doble."],
                respuestaCorrecta=2
            ),
            Pregunta(
                pregunta="¿En qué topología todos los nodos están conectados a un nodo central?",
                opciones=["Estrella.",
                           "Malla.", 
                           "Árbol.", 
                           "bus."],
                respuestaCorrecta=0
            ),
            Pregunta(
                pregunta="Cuál de estas topologías ofrece la mayor redundancia al tener múltiples rutas entre dispositivos?",
                opciones=["Árbol.",
                            "Malla.",
                            "Anillo.",
                            "Bus."],
                respuestaCorrecta=1
            ),
            Pregunta(
                pregunta="¿Qué topología combina varias en estrella de manera jerárquica?",
                opciones=["Malla.", 
                          "Árbol.", 
                          "Híbrida.", 
                          "Estrella."],
                respuestaCorrecta=1
            ),
            Pregunta(
                pregunta="¿Cuál de estas topologías usa un diseño circular en el que cada dispositivo se conecta con dos vecinos?",
                opciones=["Estrella.", 
                          "Árbol.", 
                          "Anillo.", 
                          "Conexa."],
                respuestaCorrecta=2
            ),
            Pregunta(
                pregunta="¿Qué diferencia a la topología de anillo doble respecto a la de anillo simple?",
                opciones=["Usa nodos centrales.", 
                          "Tiene enlaces cruzados.", 
                          "incluye un segundo anillo de respaldo.", 
                          "Solo permite comunicación inalámbrica"],
                respuestaCorrecta=2
            ),
            Pregunta(
                pregunta="¿En cuál de estas topologías cada nodo se conecta directamente con todos los demás?",
                opciones=["Árbol.", 
                          "Estrella.", 
                          "Híbrida.", 
                          "Totalmente conexa."],
                respuestaCorrecta=3
            ),
            Pregunta(
                pregunta="¿Qué topología se caracteriza por ser una combinación de dos o más estructuras?",
                opciones=["Árbol.", 
                          "Híbrida.", 
                          "Estrella.", 
                          "Bus."],
                respuestaCorrecta=1
            ),
            Pregunta(
                pregunta="¿Cuál de las siguientes topologías físicas es más propensa a colapsar si falla el cable principal?",
                opciones=["Malla.", 
                          "Estrella.", 
                          "Árbol.", 
                          "Bus."],
                respuestaCorrecta=3
            ),
        ]
    )
}


@router.get("/{evaluacion_id}", response_model=FormularioEvaluacion)
def obtener_evaluacion(evaluacion_id: int):
    if evaluacion_id not in evaluaciones_mock:
        raise HTTPException(status_code=404, detail="Evaluación no encontrada")
    return evaluaciones_mock[evaluacion_id]

@router.post("/enviar")
def enviar_respuestas(evaluacion: EnvioEvaluacion):
    original = evaluaciones_mock.get(evaluacion.evaluacion_id)
    if not original:
        raise HTTPException(status_code=404, detail="Evaluación no encontrada")

    correctas = 0
    for i, respuesta in enumerate(evaluacion.respuestas):
        correcta = original.preguntas[i].respuestaCorrecta
        if respuesta.seleccion == correcta:
            correctas += 1

    puntuacion = (correctas / len(original.preguntas)) * 100
    return {"puntuacion": puntuacion}
