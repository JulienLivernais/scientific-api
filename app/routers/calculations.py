from fastapi import APIRouter

router = APIRouter()

@router.get("/items/{items_id}")
async def read_items(items_id: int):
    return {"my_item": items_id}

