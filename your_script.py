import json
from PIL import Image   # install via: pip install pillow

def save_html_with_image_and_geojson(html_file, floorplan_image="floorplan.jpg"):
    # --- Get image size (pixels) ---
    img = Image.open(floorplan_image)
    width, height = img.size
    print(f"Image size: {width}x{height}")

    # --- Example polygons (in image pixel coordinates) ---
    # You can edit these coords to outline real rooms
    geojson_data = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {"name": "Room A"},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[[100, 100], [100, 400], [400, 400], [400, 100], [100, 100]]]
                }
            },
            {
                "type": "Feature",
                "properties": {"name": "Room B"},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[[500, 100], [500, 400], [800, 400], [800, 100], [500, 100]]]
                }
            }
        ]
    }

    geojson_text = json.dumps(geojson_data)

    # --- HTML output ---
    html_content = f"""
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Floorplan</title>
  <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css"/>
  <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
  <style>
    body {{ margin:0; padding:0; }}
    #map {{ width:100%; height:100vh; }}
  </style>
</head>
<body>
  <div id="map"></div>
  <script>
    // Leaflet in simple image coordinate system
    const map = L.map('map', {{
      crs: L.CRS.Simple,
      minZoom: -5
    }});

    // Image bounds
    const bounds = [[0,0], [{height}, {width}]];

    // Add the floorplan image
    L.imageOverlay('{floorplan_image}', bounds).addTo(map);
    map.fitBounds(bounds);

    // Convert GeoJSON x,y → Leaflet y,x
    function flipCoords(geojson) {{
      geojson.features.forEach(f => {{
        if (f.geometry.type === "Polygon") {{
          f.geometry.coordinates = f.geometry.coordinates.map(ring =>
            ring.map(([x,y]) => [y,x])
          );
        }}
      }});
      return geojson;
    }}

    const geojsonData = flipCoords({geojson_text});

    // Draw polygons
    L.geoJSON(geojsonData, {{
      style: function (feature) {{
        return {{ color: "blue", weight: 2, fillOpacity: 0.4 }};
      }},
      onEachFeature: function (feature, layer) {{
        if (feature.properties && feature.properties.name) {{
          layer.bindTooltip(feature.properties.name);
        }}
      }}
    }}).addTo(map);
  </script>
</body>
</html>
"""
    with open(html_file, "w") as f:
        f.write(html_content)


if __name__ == "__main__":
    save_html_with_image_and_geojson("output.html", "floorplan.jpg")