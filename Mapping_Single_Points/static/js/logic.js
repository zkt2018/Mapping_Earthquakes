// Add console.log to check to see if our code is working.
console.log("working");

// Getting Los Angeles lat & long and zoomed in
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Add a light-yellow circle with black lines to the map for Los Angeles
L.circleMarker([34.0522, -118.2437], {
    color: 'black',
    fillColor: '#ffffa1', // light yellow
    radius: 300
 }).addTo(map);

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);