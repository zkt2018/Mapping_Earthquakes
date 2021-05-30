//0 Add console.log to check to see if our code is working.
console.log("working");

// 1.0 Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Create the map object with center at Kansas
let map = L.map('mapid').setView([39.0119, -98.4842], 5);

// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
// ];

// Create an airline route from SFO to John F. Kennedy International Airport (JFK) with two stops, 
// Austin-Bergstrom International Airport (AUS) and Toronto Pearson International Airport (YYZ)
let line = [
    [40.7899, -111.9791],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
  
];


  // Create a polyline using the line coordinates and make the line red.
// Create a polyline using the line coordinates and make the line black.
// L.polyline(line, {
//     color: "yellow"
//  }).addTo(map);

L.polyline(line, {
    color: "blue",
    weight: 4,
    opacity: 0.5,
    dashArray: '10,20',
 }).addTo(map);

// We create the tile layer that will be the background of our map. - lightmap
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
}); 

// We create the map and Change the map style to satellite
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// }); 


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);