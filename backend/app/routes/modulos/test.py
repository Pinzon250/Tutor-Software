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
