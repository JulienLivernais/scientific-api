from fastapi import APIRouter, HTTPException

router = APIRouter()

conversion_factors = {
    "km_to_miles": 0.621371,
    "kg_to_pounds": 2.20462,
    "c_to_f": lambda c: (c * 9/5) + 32
}

@router.get("/convert")
def convert(value: float, unit_from: str, unit_to: str):
    unit_from = unit_from.lower()
    unit_to = unit_to.lower()

    if unit_from == "km" and unit_to == "miles":
        result = value * conversion_factors["km_to_miles"]
    elif unit_from == "kg" and unit_to == "pounds":
        result = value * conversion_factors["kg_to_pounds"]
    elif unit_from == "c" and unit_to == "f":
        result = conversion_factors["c_to_f"](value)
    else:
        raise HTTPException(
            status_code=400,  # Bad Request
            detail=f"Conversion from '{unit_from}' to '{unit_to}' not supported\n"
                   f"Possible choices: km to miles, kg to pounds, c (celsius) to f (fahrenheit)"
        )

    return {
        "value": value,
        "from": unit_from,
        "to": unit_to,
        "result": result
    }




