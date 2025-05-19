from fastapi import APIRouter, HTTPException
from app.routes.modulos.google_api import generar_contenido_gemini, buscar_videos_youtube

router = APIRouter(
    prefix="/modulos",
    tags=["Modulos"]
)

@router.get("/contenidos/{tema}")
def obtener_contenido(tema: str ):
    try:
        descripcion = generar_contenido_gemini(tema)
        videos = buscar_videos_youtube(tema)
        return {
            "tema": tema,
            "descripcion": descripcion,
            "videos": videos
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
