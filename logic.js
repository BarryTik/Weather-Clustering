var myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 3
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(myMap);

//Read in the CSV using d3

d3.csv("Global_Weather.txt").then(function(data) {  

  console.log(data);

var Cities = [];


for (var i = 0; i < data.length; i++) {
      console.log(data[i].Latitude, data[i].Longitude, data[i].Cluster);
  }

// Loop through the cities array and create one marker for each city object
for (var i = 0; i < data.length; i++) {

  // Conditionals for countries points
  var color = [ "#442020", "#4F2934", "#51364B" , "#49465F" , "#37576B" , "#22676E" , "#227667", "#3F8158" , "#658A47", "#908F3B" ," #BC903F" , "#E68E57"];

  for (var i = 0; i < data.length; i++) {
    console.log(data[i].Latitude, data[i].Longitude, data[i].Cluster);

    L.circle([data[i].Latitude, data[i].Longitude], {
      fillOpacity: 3.75,
      color: color[data[i].Cluster],
      fillColor: color[data[i].Cluster],
      // Adjust radius
        radius: 50000
    }).bindPopup("<h1>" + data[i].City + "</h1> <hr> <h3>Cluster: " + data[i].Cluster + "</h3>").addTo(myMap);
  }

}


});