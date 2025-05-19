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
            "descripcion": "Las redes de computadoras permiten la comunicación y el intercambio de datos entre dispositivos.",
            "videos": [
                {
                    "titulo": "¿Qué es una red de computadoras?",
                    "videoId": "abc123",
                    "url": "https://www.youtube.com/watch?v=abc123"
                },
                {
                    "titulo": "Tipos de redes: LAN, WAN, MAN",
                    "videoId": "def456",
                    "url": "https://www.youtube.com/watch?v=def456"
                }
            ]
        },
        "TCP/IP": {
            "descripcion": "El modelo TCP/IP es un conjunto de protocolos que permite la transmisión de datos en Internet.",
            "videos": [
                {
                    "titulo": "Introducción a TCP/IP",
                    "videoId": "ghi789",
                    "url": "https://www.youtube.com/watch?v=ghi789"
                }
            ]
        }
    }

    contenido = contenidos_estaticos.get(tema)
    if not contenido:
        raise HTTPException(status_code=404, detail="Contenido no disponible")

    return {
        "tema": tema,
        "descripcion": contenido["descripcion"],
        "videos": contenido["videos"]
    }
