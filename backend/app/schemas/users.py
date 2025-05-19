from pydantic import BaseModel, EmailStr, model_validator
from datetime import datetime
from typing import Optional

# User Model (Class)

# Schema of User
class User(BaseModel):
    id: int
    nombres: str
    correo: str
    contraseña: str
    created_at: datetime = datetime.now()

    model_config = {
        "from_attributes": True
    }

# schema of User Registration
class UserCreate(BaseModel):
    nombres: str
    apellidos: str
    correo: EmailStr
    contraseña: str
    tipoDocumento: str
    documento: int
    grupo: Optional[str] = None
    cargo: str

    @model_validator(mode="after")
    def validar_grupo_si_estudiante(self) -> 'UserCreate':
        if self.cargo.lower() == "estudiante" and not self.grupo:
            raise ValueError("El campo 'grupo' es obligatorio si el cargo es 'estudiante'")
        return self

# Schema of User Login
class UserLogin(BaseModel):
    correo: str
    contraseña: str   