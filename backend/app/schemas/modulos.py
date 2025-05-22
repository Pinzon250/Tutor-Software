from pydantic import BaseModel
from typing import List

class Modulo(BaseModel):
    id: int
    titulo: str
    contenido: str

class VideoInfo(BaseModel):
    titulo: str
    videoId: str
    thumbnail: str

class ContenidoResponse(BaseModel):
    tema: str
    resumen: str
    videos: List[VideoInfo]


# Evaluaciones 

class Pregunta(BaseModel):
    pregunta: str
    opciones: List[str]
    respuestaCorrecta: int

class FormularioEvaluacion(BaseModel):
    id: int
    preguntas: List[Pregunta]

class RespuestaUsuario(BaseModel):
    pregunta_id: int
    seleccion: int

class EnvioEvaluacion(BaseModel):
    evaluacion_id: int
    usuario_id: int
    respuestas: List[RespuestaUsuario]
