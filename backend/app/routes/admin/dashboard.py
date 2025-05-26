from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database.db import get_db
from app.models.db_users import User  # El modelo de usuario
# Luego importaremos evaluaciones, progreso, etc.

router = APIRouter(
    prefix="/admin",
    tags=["Admin Dashboard"]
)

@router.get("/dashboard")
def get_dashboard_data(db: Session = Depends(get_db)):
    # Datos simulados
    total_estudiantes = db.query(User).filter(User.cargo.ilike("estudiante")).count()
    total_evaluaciones = 5  # Esto se reemplazará con la cuenta real de la tabla de evaluaciones
    progreso_promedio = 70  # Esto se reemplazará con la media de progreso real

    # Datos para gráficas (de momento, fijos)
    progress_labels = ["Enero", "Febrero", "Marzo"]
    progress_values = [60, 70, 80]

    evaluaciones_labels = ["Completadas", "Pendientes", "Fallidas"]
    evaluaciones_values = [10, 5, 3]

    return {
        "stats": {
            "totalEstudiantes": total_estudiantes,
            "totalEvaluaciones": total_evaluaciones,
            "progreso": progreso_promedio
        },
        "progress": {
            "labels": progress_labels,
            "values": progress_values
        },
        "evaluaciones": {
            "labels": evaluaciones_labels,
            "values": evaluaciones_values
        }
    }
