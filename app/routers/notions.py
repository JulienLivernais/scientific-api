from fastapi import APIRouter, HTTPException
from app.schemas.schemas import Notion
import pandas as pd
from pathlib import Path


router = APIRouter()


CSV_PATH = Path(__file__).parent.parent.parent / "data" / "science_data.csv"
df = pd.read_csv(CSV_PATH)


@router.get("/all_notions", response_model=list[Notion])
async def read_all_notions():
    return [Notion(**row) for row in df.to_dict(orient="records")]


@router.get("/title/{by_title}", response_model=list[Notion])
async def read_by_title(by_title: str):
    by_title = by_title.lower().title()
    result = df[df['title'] == by_title]

    if not result.empty:
        return result.to_dict(orient="records")
    else:
        raise HTTPException(status_code=404, detail="This notion doesn't exist in this dictionary")


@router.get("/category/{by_category}", response_model=list[Notion])
async def read_by_category(by_category: str):
    by_category = by_category.lower()
    result = df[df['category'] == by_category]

    if not result.empty:
        return result.to_dict(orient="records")
    else:
        raise HTTPException(status_code=404,
                            detail="This category doesn't exist in this dictionary.\n"
                                   "Choose between: physics, chemistry, biology" )


