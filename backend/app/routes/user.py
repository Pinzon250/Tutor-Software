from fastapi import APIRouter, Depends, HTTPException
from app.models.db_users import User as UserModel
from app.schemas.users import User, UserLogin, UserCreate
from app.database.db import get_db
from sqlalchemy.orm import Session
from app.models import db_users
from passlib.context import CryptContext
from app.routes.auth import create_access_token, verify_password, hash_password

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

router = APIRouter(
    prefix="/user",
    tags=["Users"]   
)

# Get all users
@router.get("/")
def get_users(db: Session = Depends(get_db)):
    data = db.query(db_users.User).all()
    return data

# Create a new user
@router.post("/register")
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    # Verificando que el correo no exista
    existing_user = db.query(db_users.User).filter(db_users.User.correo == user.correo).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Correo ya registrado")
    if user.cargo == "Estudiante" and not user.grupo:
        raise HTTPException(status_code=400, detail="Grupo es obligatorio para estudiantes.")
    # Create a new user
    new_user = UserModel (
        nombres=user.nombres,
        apellidos=user.apellidos,
        correo=user.correo,
        contraseña=hash_password(user.contraseña),
        tipoDocumento=user.tipoDocumento,
        documento=user.documento,
        grupo=user.grupo,
        cargo=user.cargo,
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return {"message": "User created successfully"}

# Login user
@router.post("/login")
def login_user(user_login: UserLogin, db: Session = Depends(get_db)):
    user = db.query(UserModel).filter(UserModel.correo == user_login.correo).first()

    if not user or not verify_password(user_login.contraseña, user.contraseña):
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )
    
    token = create_access_token(data={"sub": user.correo, "name": user.nombres})
    return {"access_token": token, "token_type": "bearer"}

# Get User by ID
@router.post("/{user_id}")
def get_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(db_users.User).filter(db_users.User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

# Delete user by ID
@router.delete("/{user_id}")
def delete_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(UserModel).filter(UserModel.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    db.delete(user)
    db.commit()
    return {"message": "User delete successfully"}

# Update user by ID
@router.put("/{user_id}")
def update_user(user_id: int, user: User, db: Session = Depends(get_db)):
    existing_user = db.query(UserModel).filter(UserModel.id == user_id).first()
    if not existing_user:
        raise HTTPException(status_code=404, detail="User not found")
    existing_user.nombres = user.nombres
    existing_user.correo = user.correo
    existing_user.contraseña = user.contraseña
    db.commit()
    db.refresh(existing_user)
    return {"message": "User updated successfully"}