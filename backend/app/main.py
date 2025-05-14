from app.routes import user
from app.database.db import Base, engine

from fastapi import FastAPI

def create_tables():
    Base.metadata.create_all(bind=engine)
create_tables()

app = FastAPI()

app.include_router(user.router)


@app.get("/")
def read_root():
    return {"Esta": "Funcionando"}