from fastapi import APIRouter

router = APIRouter()

@router.get("/items")
async def read_router():
    return {"Response": "It's work"}


