// import axios from "axios";
// import React , {useState} from "react";
// import { MapContainer, ImageOverlay, Marker } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// // Optional: custom marker icon
// const markerIcon = new L.Icon({
// //   iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
// //   iconSize: [25, 25],
// // });

// // function App() {
// //   const [geojson, setGeojson] = useState(null);
// //   const [count, setCount] = useState(0);

// //   useEffect(() => {
// //     const fetchFloorplan = async () => {
// //       try {
// //         const response = await axios.get(
// //           `${process.env.REACT_APP_API_URL}/floorplan`
// //         );
// //         setGeojson(response.data);
// //       } catch (err) {
// //         console.error("Error fetching floorplan:", err);
// //       }
// //     };
// //     fetchFloorplan();
// //   }, []);

// //   if (!geojson) return <p>Loading floorplan...</p>;

// //   const feature = geojson.features[0];
// //   const width = feature.geometry.coordinates[0];
// //   const height = feature.geometry.coordinates[1];

// //   // Marker in the center of the floorplan
// //   const markerPosition = [height / 2, width / 2];

// //   return (
// //     <div style={{ padding: "20px", fontFamily: "Arial" }}>
// //       <h1>Interactive Floorplan Viewer</h1>

// //       <h2>GeoJSON Data:</h2>
// //       <pre>{JSON.stringify(geojson, null, 2)}</pre>

// //       <h2>Floorplan Map (2D):</h2>
// //       <MapContainer
// //         center={markerPosition}
// //         zoom={0}
// //         scrollWheelZoom={true}
// //         style={{ height: "600px", width: "100%" }}
// //       >
// //         <ImageOverlay
// //           url={`${process.env.REACT_APP_API_URL}${feature.properties.url}`}
// //           bounds={[
// //             [0, 0],          // bottom-left
// //             [height, width],  // top-right
// //           ]}
// // //         />
// // //         <Marker position={markerPosition} icon={markerIcon} />
// // //       </MapContainer>
// // //     </div>
// // //   );
// // // }

// // // export default App;


// // import React, { useState, useEffect } from "react";
// // import { MapContainer, ImageOverlay, Marker } from "react-leaflet";
// // import L from "leaflet";
// // import "leaflet/dist/leaflet.css";

// // // Custom marker icon
// // const markerIcon = new L.Icon({
// //   iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
// //   iconSize: [25, 25],
// // });

// // function App() {
// //   const [geojson, setGeojson] = useState(null);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     // Example API fetch (comment out if not needed)
// //     const fetchFloorplan = async () => {
// //       try {
// //         const response = await fetch("/floorplan.json"); // change to API if needed
// //         const data = await response.json();
// //         setGeojson(data);
// //       } catch (err) {
// //         console.error("Error fetching floorplan:", err);
// //         setError("Could not load floorplan from API. Using fallback image.");
// //       }
// //     };

// //     fetchFloorplan();
// //   }, []);

// //   // Fallback: static image from public/floorplan.jpg
// //   if (!geojson) {
// //     const width = 768;   // replace with your image width
// //     const height = 806;  // replace with your image height
// //     const markerPosition = [height / 2, width / 2];

// //     return (
// //       <div style={{ padding: "20px", fontFamily: "Arial" }}>
// //         <h1>Interactive Floorplan Viewer</h1>
// //         {error && <p style={{ color: "red" }}>{error}</p>}

// //         <MapContainer
// //           center={markerPosition}
// //           zoom={0}
// //           crs={L.CRS.Simple}
// //           style={{ height: "600px", width: "100%" }}
// //         >
// //           <ImageOverlay
// //             url="/floorplan.jpg"
// //             bounds={[
// //               [0, 0],
// //               [height, width],
// //             ]}
// //           />
// //           <Marker position={markerPosition} icon={markerIcon} />
// //         </MapContainer>
// //       </div>
// //     );
// //   }

// //   // If GeoJSON loaded successfully
// //   const feature = geojson.features[0];
// //   const [width, height] = feature.geometry.coordinates;
// //   const markerPosition = [height / 2, width / 2];

// //   return (
// //     <div style={{ padding: "20px", fontFamily: "Arial" }}>
// //       <h1>Interactive Floorplan Viewer</h1>

// //       <MapContainer
// //         center={markerPosition}
// //         zoom={0}
// //         crs={L.CRS.Simple}
// //         style={{ height: "600px", width: "100%" }}
// //       >
// //         <ImageOverlay
// //           url={feature.properties.url}
// //           bounds={[
// //             [0, 0],
// //             [height, width],
// //           ]}
// //         />
// //         <Marker position={markerPosition} icon={markerIcon} />
// //       </MapContainer>
// //     </div>
// //   );
// // }

// // export default App;


// import React, { useState, useEffect } from "react";
// import { MapContainer, ImageOverlay } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// function App() {
//   const [geojson, setGeojson] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchFloorplan = async () => {
//       try {
//         // fetch image as blob
//         const response = await fetch("http://your-api.com/floorplan");
//         const blob = await response.blob();
//         const imageUrl = URL.createObjectURL(blob);

//         // load image to get dimensions
//         const img = new Image();
//         img.src = imageUrl;
//         img.onload = () => {
//           setGeojson({
//             url: imageUrl,
//             width: img.width,
//             height: img.height
//           });
//         };
//       } catch (err) {
//         console.error("Error fetching floorplan:", err);
//         setError("Could not load floorplan from API.");
//       }
//     };

//     fetchFloorplan();
//   }, []);

//   return (
//     <div>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {geojson ? (
//         <MapContainer
//           center={[geojson.height / 2, geojson.width / 2]}
//           zoom={-1}
//           crs={"Simple"}
//           style={{ height: "100vh", width: "100%" }}
//         >
//           <ImageOverlay
//             url={geojson.url}
//             bounds={[
//               [0, 0],
//               [geojson.height, geojson.width],
//             ]}
//           />
//         </MapContainer>
//       ) : (
//         <p>Loading floorplan...</p>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import { MapContainer, ImageOverlay } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { CRS } from "leaflet";   // <-- add this

function App() {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = "/floorplan.jpg"; // make sure this is in public/
    img.onload = () => {
      setImageData({
        url: img.src,
        width: img.width,
        height: img.height,
      });
    };
  }, []);

  return (
    <div>
      {imageData ? (
        <MapContainer
          center={[imageData.height / 2, imageData.width / 2]}
          zoom={-1}
          crs={CRS.Simple}   // <-- FIXED (use object, not string)
          style={{ height: "100vh", width: "100%" }}
        >
          <ImageOverlay
            url={imageData.url}
            bounds={[
              [0, 0],
              [imageData.height, imageData.width],
            ]}
          />
        </MapContainer>
      ) : (
        <p>Loading floorplan...</p>
      )}
    </div>
  );
}

export default App;