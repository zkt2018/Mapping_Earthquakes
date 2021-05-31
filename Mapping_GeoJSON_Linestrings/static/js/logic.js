// We create the tile layer that will be the background of our map. - lightmap
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Light: light,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
// let map = L.map('mapid', {
//   center: [44.0, -80.0],
//   zoom: 2,
//   layers: [light]
// })

// Create the map object with center, zoom level and default layer as dark layer
let map = L.map('mapid', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [dark]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/zkt2018/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/Mapping_GeoJSON_Linestrings/torontoRoutes.json";

// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
};

// Grabbing our GeoJSON data.
// d3.json(torontoData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJson(data).addTo(map);
// });

// d3.json(torontoData).then(function(data) {
//   console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data, {
//     color: '#ffffa1',
//     weight: 2,
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup("<h2>Airline: " + feature.properties.airline + "</h2> <hr> <h3>Destination: " + feature.properties.dst + "</h3>");
//     }
//   }).addTo(map);
// });
d3.json(torontoData).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    style: myStyle,
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<h2>Airline: " + feature.properties.airline + "</h2> <hr> <h3>Destination: " + feature.properties.dst + "</h3>");
    }
  }).addTo(map);
});




































// Mapping multiple geojson points - first edition
// Create the map object with center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);

// // We create the tile layer that will be the background of our map. - lightmap
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// // Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/zkt2018/Mapping_Earthquakes/main/majorAirports.json";

// // Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJson(data, {
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng).bindPopup("<h2>Airport code: " + feature.properties.faa + "</h2> <hr> <h3>Airport name: " + feature.properties.name + "</h3>");
//   }
// }).addTo(map);
// });