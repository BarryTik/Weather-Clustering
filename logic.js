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

for (var i = 0; i < data.length; i++) {


  for (var i = 0; i < data.length; i++) {

    L.circle([data[i].Latitude, data[i].Longitude], {
      fillOpacity: 3.75,
      color: colors[data[i].Cluster],
      fillColor: colors[data[i].Cluster],
      // Adjust radius
        radius: 50000
    }).bindPopup(`<h1>${data[i].City}</h1> <hr> <h5>Cluster: ${data[i].Cluster}</h5><br><p><b>Cloudiness</b>:${data[i]["Cloudiness(%)"]}% <b>Humidity:</b>${data[i]["Humidity(%)"]}% <br><b>Temperature:</b>${data[i]["Temperature(F)"]}F <b>Wind Speed:</b>${data[i]["Wind Speed(mph)"]}mph<p>`).addTo(myMap);
  }

}


});