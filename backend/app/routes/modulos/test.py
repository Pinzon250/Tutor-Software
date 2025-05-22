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
                opciones=["Un protocolo de seguridad para redes WiFi.", "Un protocolo de seguridad para redes WiFi.", "Un sistema operativo para gestionar redes locales.", "Un lenguaje de programación para administrar redes."],
                respuestaCorrecta=1
            ),
            Pregunta(
                pregunta="¿Qué protocolo trabaja en la capa de red?",
                opciones=["TCP", "IP", "HTTP", "FTP"],
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
