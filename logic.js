var myMap = L.map("map", {
  center: [15.5994, -45],
  zoom: 3
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(myMap);

//Read in the CSV using d3

d3.csv("Global_Weather.csv").then(function(data) {  

  // Loop through the cities array and create one marker for each city object
for (var i = 0; i < data.length; i++) {

  // Conditionals for countries points
  var color = [ "#2F1510", "#431F21", "#542C37", "#613B50", "#674E6B", "#646384", "#597A99", "#4791A7", "#36A8AD", "#3ABDAA", "#58D1A0", "#83E391", "#B6F380", "#EDFE73"];

  for (var i = 0; i < data.length; i++) {

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