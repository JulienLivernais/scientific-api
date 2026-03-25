MINI APPLICATION ABOUT SCIENCE CONCEPTS DICTIONARY
----------
Create a mini-application for accessing scientific concepts, 
with a simple CSV database and basic scientific calculation capabilities.

FEATURES
----------
- Dictionary of scientific concepts accessible by concept or category
- Calculating the force of an object by adding its mass and gravity
- Conversion of kilometers to miles, kilograms to pounds, and Celsius to Fahrenheit
- Calculating the mean, median, and variance of a series of numbers

STACK
----------
- Python
- FastAPI
- Pandas

API
----------
GET/ all_notions
GET/ title/{by_title} > title/asteroid
GET/ category/{by_category} > category/physics
GET/ calculate/gravity?mass=12&gravity=8
GET/ convert?value=18&unit_from=kg&unit_to=pounds
POST/ stats

ARCHITECTURE APPLICATION
----------
"""
science-basic-app/
│
├── app/
│   ├── main.py
│   ├── schemas/
│   │   └── schemas.py
│   ├── routers/
│   │   ├── notions.py
│   │   ├── calculations.py
│   │   └── conversions.py
│
├── data/
│   └── science_data.csv
│
├── .gitignore
└── README.md
"""

SAMPLE DATA
----------
title,description,category
Gravity,Force that attracts objects with mass,physics
Inertia,Tendency of an object to resist changes in motion,physics
Velocity,Speed of an object in a given direction,physics
Acceleration,Rate of change of velocity over time,physics
Force,Interaction that changes motion of an object,physics
Energy,Capacity to do work,physics

NOTES
----------
This API is intentionally simple and does not include authentication or database persistence, 
as the focus is on backend fundamentals and data processing.




