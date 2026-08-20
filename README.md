MINI APPLICATION ABOUT SCIENCE CONCEPTS DICTIONARY
----------
A quick-access tool to look up scientific concepts and run basic calculations. 
Built with FastAPI on the backend, pandas to read the data, and a CSV file as the database.

FEATURES
----------
- Dictionary of scientific concepts accessible by concept or category
- Calculating the force of an object by adding its mass and gravity
- Conversion of kilometers to miles, kilograms to pounds, and Celsius to Fahrenheit
- Calculating the mean, median, and variance of a series of numbers

STACK
----------
BACKEND
- Python
- FastAPI
- Pandas

FRONTEND
- React
- Vite
- JavaScript

API
----------
- GET/ all_notions
- GET/ title/{by_title} > title/asteroid
- GET/ category/{by_category} > category/physics
- GET/ calculate/gravity?mass=12&gravity=8
- GET/ convert?value=18&unit_from=kg&unit_to=pounds
- POST/ stats

SAMPLE DATA
----------
- title,description,category
- Gravity,Force that attracts objects with mass,physics
- Inertia,Tendency of an object to resist changes in motion,physics
- Velocity,Speed of an object in a given direction,physics
- Acceleration,Rate of change of velocity over time,physics

RUNNING THE APP
-----
The backend and the frontend run at the same time, in two terminals.

* pip install -r requirements.txt

BACKEND
* uvicorn app.main:app --reload
* API: localhost:8000

FRONTEND
* cd frontend
* npm install
* npm run dev
* App: localhost:5173

NOTES
----------
This project is intentionally simple and does not include authentication
or database persistence, as the focus is on backend fundamentals, data
processing, and consuming a REST API from a frontend.






