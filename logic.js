//define center of map
var myMap = L.map("map", {
  center: [15.5994, -45],
  zoom: 3
});
//add map layer
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: 'mapbox/streets-v11',
  accessToken: API_KEY
}).addTo(myMap);

//Read in the CSV using d3
d3.csv("Global_Weather.csv").then(function(data) {  

for (var i = 0; i < data.length; i++) {


  for (var i = 0; i < data.length; i++) {
     //create circle based on cluster centers 
    L.circle([data[i].Latitude, data[i].Longitude], {
      fillOpacity: 3.75,
      //assign colors
      color: colors[data[i].Cluster],
      fillColor: colors[data[i].Cluster],
      // Adjust radius
        radius: 50000
    }).bindPopup(`<h1>${data[i].City}</h1> <hr> <h5>Cluster: ${data[i].Cluster}</h5><br><p><b>Temperature</b>:${data[i]["Temperature(F)"]}F <b>Humidity:</b>${data[i]["Humidity(%)"]}% <br><b>Cloudiness:</b>${data[i]["Cloudiness(%)"]}% <b>Wind Speed:</b>${data[i]["Wind Speed(mph)"]}mph<p>`).addTo(myMap);
  }

}


});