from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database.db import get_db
from app.models.db_users import User as UserModel

router = APIRouter(
    prefix="/admin/students",
    tags=["Admin - Students"]
)

# Obtener todos los estudiantes
@router.get("/")
def get_students(db: Session = Depends(get_db)):
    estudiantes = db.query(UserModel).filter(UserModel.cargo.ilike("estudiante")).all()
    return estudiantes

# Obtener estudiante por ID
@router.get("/{student_id}")
def get_student(student_id: int, db: Session = Depends(get_db)):
    student = db.query(UserModel).filter(UserModel.id == student_id, UserModel.cargo.ilike("estudiante")).first()
    if not student:
        raise HTTPException(status_code=404, detail="Estudiante no encontrado")
    return student

# Eliminar estudiante por ID
@router.delete("/{student_id}")
def delete_student(student_id: int, db: Session = Depends(get_db)):
    student = db.query(UserModel).filter(UserModel.id == student_id, UserModel.cargo.ilike("estudiante")).first()
    if not student:
        raise HTTPException(status_code=404, detail="Estudiante no encontrado")
    db.delete(student)
    db.commit()
    return {"message": "Estudiante eliminado correctamente"}

# Actualizar datos de un estudiante
@router.put("/{student_id}")
def update_student(student_id: int, updated_data: dict, db: Session = Depends(get_db)):
    student = db.query(UserModel).filter(UserModel.id == student_id, UserModel.cargo.ilike("estudiante")).first()
    if not student:
        raise HTTPException(status_code=404, detail="Estudiante no encontrado")
    
    for key, value in updated_data.items():
        setattr(student, key, value)

    db.commit()
    db.refresh(student)
    return {"message": "Estudiante actualizado correctamente", "student": student}
