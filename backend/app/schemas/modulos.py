from pydantic import BaseModel
from typing import List

class Modulo(BaseModel):
    id: int
    titulo: str
    contenido: str

class Evalacion(BaseModel):
    id: int
    texto: str
    opciones: List[str]
    respuesta_correcta: bool

class VideoInfo(BaseModel):
    titulo: str
    videoId: str
    thumbnail: str

class ContenidoResponse(BaseModel):
    tema: str
    resumen: str
    videos: List[VideoInfo]

