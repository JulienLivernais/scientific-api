from fastapi import FastAPI
from app.routers import notions, calculations, conversions, statistics

app = FastAPI()

app.include_router(notions.router)
app.include_router(calculations.router)
app.include_router(conversions.router)
app.include_router(statistics.router)









