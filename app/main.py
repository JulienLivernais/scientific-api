from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import notions, calculations, conversions, statistics


app = FastAPI(title="scientific-app")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173","http://127.0.0.1:5173",],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "scientific-app is running - go to /docs"}


app.include_router(notions.router, tags=["Notions"])
app.include_router(calculations.router, tags=["Calculations"])
app.include_router(conversions.router, tags=["Conversions"])
app.include_router(statistics.router, tags=["Statistics"])









