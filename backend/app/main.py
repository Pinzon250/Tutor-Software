from app.routes import user
from app.database.db import Base, engine
from fastapi.middleware.cors import CORSMiddleware
from app.routes.modulos import content, test
from app.routes.admin import dashboard, students


from fastapi import FastAPI

def create_tables():
    Base.metadata.create_all(bind=engine)
create_tables()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(content.router)
app.include_router(user.router)
app.include_router(test.router)
app.include_router(dashboard.router)
app.include_router(students.router)



@app.get("/")
def read_root():
    return {"Esta": "Funcionando"}