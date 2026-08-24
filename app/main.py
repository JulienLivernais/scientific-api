from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import notions, calculations, conversions, statistics
from fastapi.staticfiles import StaticFiles
from pathlib import Path

app = FastAPI(title="scientific-app")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173","http://127.0.0.1:5173",],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(notions.router, tags=["Notions"])
app.include_router(calculations.router, tags=["Calculations"])
app.include_router(conversions.router, tags=["Conversions"])
app.include_router(statistics.router, tags=["Statistics"])


static_dir = Path(__file__).parent.parent / "static"
if static_dir.exists():
    app.mount("/", StaticFiles(directory=static_dir, html=True), name="static")








