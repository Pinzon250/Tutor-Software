from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database.db import get_db
from app.models.db_users import User
from app.models.db_progress import NivelEstudiante

router = APIRouter(
    prefix="/niveles",
    tags=["Sistema de Niveles"]
)

# 1️⃣ Obtener el nivel y XP de un estudiante
@router.get("/{estudiante_id}")
def obtener_nivel(estudiante_id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == estudiante_id).first()
    if not user or user.cargo.lower() != "estudiante":
        raise HTTPException(status_code=403, detail="El usuario no es un estudiante")

    nivel = db.query(NivelEstudiante).filter_by(estudiante_id=estudiante_id).first()
    if not nivel:
        # Si no existe, crear un registro nuevo con nivel 1
        nivel = NivelEstudiante(estudiante_id=estudiante_id, xp=0, nivel=1)
        db.add(nivel)
        db.commit()
        db.refresh(nivel)
    return nivel


# 2️⃣ Agregar XP al estudiante (al completar contenido, actividad, etc.)
@router.post("/agregar_xp")
def agregar_xp(estudiante_id: int, puntos: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == estudiante_id).first()
    if not user or user.cargo.lower() != "estudiante":
        raise HTTPException(status_code=403, detail="El usuario no es un estudiante")

    nivel = db.query(NivelEstudiante).filter_by(estudiante_id=estudiante_id).first()
    if not nivel:
        nivel = NivelEstudiante(estudiante_id=estudiante_id, xp=0, nivel=1)
        db.add(nivel)

    # Sumar puntos
    nivel.xp += puntos

    # Calcular el nivel según el XP
    if nivel.xp >= 400:
        nivel.nivel = 5
    elif nivel.xp >= 200:
        nivel.nivel = 4
    elif nivel.xp >= 100:
        nivel.nivel = 3
    elif nivel.xp >= 50:
        nivel.nivel = 2
    else:
        nivel.nivel = 1

    db.commit()
    db.refresh(nivel)
    return nivel


# 3️⃣ (Opcional) Obtener una lista de todos los niveles
@router.get("/")
def obtener_todos_niveles(db: Session = Depends(get_db)):
    niveles = db.query(NivelEstudiante).all()
    return niveles
