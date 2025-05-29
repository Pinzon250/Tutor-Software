# models/db_niveles.py
from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy.orm import relationship
from app.database.db import Base

class NivelEstudiante(Base):
    __tablename__ = "niveles_estudiantes"

    id = Column(Integer, primary_key=True, index=True)
    estudiante_id = Column(Integer, ForeignKey("users.id"))
    xp = Column(Integer, default=0)
    nivel = Column(Integer, default=1)

    estudiante = relationship("User", back_populates="nivel")
