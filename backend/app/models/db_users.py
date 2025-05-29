from app.database.db import Base
from sqlalchemy import Column, Integer, String, DateTime, Boolean
from datetime import datetime
from sqlalchemy.orm import relationship
from app.models.db_progress import NivelEstudiante

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    nombres = Column(String, nullable=False)
    apellidos = Column(String, nullable=False)
    correo = Column(String, unique=True, index=True, nullable=False)
    contraseña = Column(String, nullable=False)
    tipoDocumento = Column(String, nullable=False)
    documento = Column(Integer, unique=True, nullable=False)
    grupo = Column(String, nullable=True)
    cargo = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.now(), onupdate=datetime.now())
    status = Column(Boolean, default=True)

    nivel = relationship("NivelEstudiante", back_populates="estudiante", uselist=False)
