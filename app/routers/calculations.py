from fastapi import APIRouter, HTTPException

router = APIRouter()

@router.get("/calculate/gravity")
async def calc_gravity(mass: float, gravity: float):
    if mass < 0:
        raise HTTPException(status_code=400, detail="Mass cannot be negative")
    if gravity <= 0:
        raise HTTPException(status_code=400, detail="Gravity must be positive")

    force = mass * gravity
    return {
        "mass": mass,
        "gravity": gravity,
        "force": force
    }










