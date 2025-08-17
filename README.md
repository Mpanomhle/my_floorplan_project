# 🏗️ Floor Plan to GeoJSON Map Tool

## 📌 Project Overview
This project is a web-based tool that allows users to **upload a floor plan image** (e.g., PNG, JPG, or PDF), automatically converts it into **GeoJSON format**, and displays it as an interactive map.  
It can be rendered in **2D or 3D**, similar to mapping tools like MappedIn.

---

## 🚀 Features
- 📤 Upload floor plan images.  
- 🤖 AI + Computer Vision (OpenCV / AI models) to detect rooms, walls, and pathways.  
- 🌍 Automatic conversion to **GeoJSON** format.  
- 🗺️ Interactive map display using **Leaflet.js** (2D) or **Mapbox GL JS** (3D).  
- 💾 Option to export GeoJSON for use in other GIS tools.  
- 🔧 Extensible design for multi-floor navigation and AR/VR integration.  

---

## 🔄 Workflow
1. User uploads a floor plan image.  
2. Backend processes the image → extracts walls/rooms → converts to polygons.  
3. GeoJSON file is generated and served to the frontend.  
4. The frontend fetches the GeoJSON and renders it as a navigable map.  

---

## 🛠️ Tech Stack
- **Backend**: Python (FastAPI / Flask), OpenCV, Shapely, GeoPandas  
- **Frontend**: React, Leaflet.js (2D), Mapbox GL / Three.js (3D)  
- **Storage**: MongoDB (GeoJSON support) or local storage  
- **AI/ML (optional)**: Object detection (YOLO, Segment Anything) for auto room detection  

---

## 📂 Project Structure
floorplan-geojson-tool/
│── backend/
│ └── app.py # FastAPI backend serving GeoJSON
│── frontend/
│ └── src/
│ └── App.js # React + Leaflet map
│── data/
│ └── sample.geojson # Sample floorplan GeoJSON
│── requirements.txt
│── README.md

yaml
Copy
Edit

---

## ⚙️ How to Run the Project

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Mpanomhle/floorplan-geojson-tool.git
cd floorplan-geojson-tool
2️⃣ Backend Setup (Python + FastAPI)
Create a virtual environment:

bash
Copy
Edit
python -m venv venv
source venv/bin/activate   # Mac/Linux
venv\Scripts\activate      # Windows
Install dependencies:

bash
Copy
Edit
pip install -r requirements.txt
Run the backend server:

bash
Copy
Edit
uvicorn backend.app:app --reload
The backend serves GeoJSON at http://localhost:8000/geojson

3️⃣ Frontend Setup (React + Leaflet)
Navigate to frontend:

bash
Copy
Edit
cd frontend
Install dependencies:

bash
Copy
Edit
npm install
Start development server:

bash
Copy
Edit
npm start
The frontend runs at http://localhost:3000

4️⃣ Upload & View Map
Open the frontend in your browser.

The app fetches sample.geojson from the backend.

The floor plan is displayed interactively using Leaflet.js.

You can zoom, pan, and see room polygons on the map.

✅ Sample GeoJSON
json
Copy
Edit
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": { "room": "Conference Room" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[0,0],[0,10],[10,10],[10,0],[0,0]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "room": "Office" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[12,0],[12,8],[20,8],[20,0],[12,0]]]
      }
    }
  ]
}
🔮 Future Improvements
🏢 Multi-floor navigation support

✏️ Manual polygon editing & correction

📐 Room labeling with dimensions

🕶️ VR/AR visualization of floor plans

👩‍💻 Author
Your Name (Mpanomhle)

GitHub: @Mpanomhle

yaml
Copy
Edit

---

This README now **includes the backend, frontend, and instructions to view the map**, so anyone can clone your repo and see a working map immediately.  
