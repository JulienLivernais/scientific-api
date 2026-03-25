from fastapi import APIRouter, HTTPException
from typing import List

router = APIRouter()

@router.post("/stats")
async def calc_stats(data: List[float]):
    if len(data) == 0:
        raise HTTPException(status_code=400, detail="List cannot be empty")

    # mean
    mean = sum(data) / len(data)

    # median
    sorted_data = sorted(data)
    n = len(data)
    if n % 2 == 0:
        median = (sorted_data[n // 2 - 1] + sorted_data[n // 2]) / 2
    else:
        median = sorted_data[n // 2]

    # variance
    variance = sum((x - mean) ** 2 for x in data) / n

    return {
        "mean": mean,
        "median": median,
        "variance": variance
    }

