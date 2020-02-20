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

var weatherData;
d3.csv("Global_Weather.txt").then(function(data) {
  
console.log(data);

for (var i = 0; i < data.length; i++) {
      console.log(Cities[i].Latitude, Cities[i].Longitude, Cities[i].Cluster );
  }

});

// Country data
var Cities = [
  {
    City: "tukrah",
    Cloudiness: 100,
    Humidity: 74,
    Location: [32.53, 20.58],
    Temperature: 57.34,
    WindSpeed: 14,
    Cluster: 2
  },
  {
    City: "bluff",
    Cloudiness: 92,
    Humidity: 55,
    Location: [-46.6, 168.33],
    Temperature: 66.58,
    WindSpeed: 6.87,
    Cluster: 9
  },
  {
    City: "new norfolk",
    Cloudiness: 75,
    Humidity: 51,
    Location: [-42.78, 147.06],
    Temperature: 59.36,
    WindSpeed: 13.87,
    Cluster: 9
  },
  {
    City: "zeya",
    Cloudiness: 7,
    Humidity: 83,
    Location: [53.75, 127.27],
    Temperature: -10.34,
    WindSpeed: 3.74,
    Cluster: 7
  },
  {
    City: "batemans bay",
    Cloudiness: 0,
    Humidity: 58,
    Location: [-35.72, 150.18],
    Temperature: 69.1,
    WindSpeed: 4,
    Cluster: 3
  },
  {
    City: "castro",
    Cloudiness: 85,
    Humidity: 95,
    Location: [-24.79, -50.01],
    Temperature: 68.58,
    WindSpeed: 2.59,
    Cluster: 2
  },
  {
    City: "bredasdorp",
    Cloudiness: 15,
    Humidity: 83,
    Location: [-34.53, 20.04],
    Temperature: 69.89,
    WindSpeed: 10.29,
    Cluster: 10
  },
  {
    City: "hilo",
    Cloudiness: 75,
    Humidity: 69,
    Location: [19.73, -155.09],
    Temperature: 73.38,
    WindSpeed: 4.7,
    Cluster: 2
  },
  {
    City: "avarua",
    Cloudiness: 100,
    Humidity: 88,
    Location: [-21.21, -159.78],
    Temperature: 80.6,
    WindSpeed: 12.75,
    Cluster: 2
  },
  // {
  //   "City": "sao filipe",
  //   "Cloudiness": 18,
  //   "Humidity": 58,
  //   "Latitude": 14.9,
  //   "Longitude": -24.5,
  //   "Temperature": 73.26,
  //   "Wind Speed": 19.08,
  //   "Cluster": 3
  // },
  // {
  //   "City": "yakymivka",
  //   "Cloudiness": 39,
  //   "Humidity": 96,
  //   "Latitude": 46.69,
  //   "Longitude": 35.15,
  //   "Temperature": 36.43,
  //   "Wind Speed": 7.38,
  //   "Cluster": 6
  // },
  // {
  //   "City": "nabire",
  //   "Cloudiness": 100,
  //   "Humidity": 84,
  //   "Latitude": -3.37,
  //   "Longitude": 135.48,
  //   "Temperature": 78.4,
  //   "Wind Speed": 1.63,
  //   "Cluster": 2
  // },
  // {
  //   "City": "souillac",
  //   "Cloudiness": 13,
  //   "Humidity": 86,
  //   "Latitude": -20.52,
  //   "Longitude": 57.52,
  //   "Temperature": 73,
  //   "Wind Speed": 3,
  //   "Cluster": 10
  // },
  // {
  //   "City": "barrow",
  //   "Cloudiness": 90,
  //   "Humidity": 77,
  //   "Latitude": 71.29,
  //   "Longitude": -156.79,
  //   "Temperature": -2.2,
  //   "Wind Speed": 4.7,
  //   "Cluster": 11
  // },
  // {
  //   "City": "honiara",
  //   "Cloudiness": 40,
  //   "Humidity": 74,
  //   "Latitude": -9.43,
  //   "Longitude": 159.95,
  //   "Temperature": 86,
  //   "Wind Speed": 16.11,
  //   "Cluster": 8
  // },
  // {
  //   "City": "port alfred",
  //   "Cloudiness": 50,
  //   "Humidity": 96,
  //   "Latitude": -33.59,
  //   "Longitude": 26.89,
  //   "Temperature": 66.99,
  //   "Wind Speed": 1.99,
  //   "Cluster": 8
  // },
  // {
  //   "City": "lavrentiya",
  //   "Cloudiness": 99,
  //   "Humidity": 78,
  //   "Latitude": 65.58,
  //   "Longitude": -171,
  //   "Temperature": -6.11,
  //   "Wind Speed": 9.98,
  //   "Cluster": 11
  // },
  // {
  //   "City": "manaus",
  //   "Cloudiness": 40,
  //   "Humidity": 83,
  //   "Latitude": -3.1,
  //   "Longitude": -60.02,
  //   "Temperature": 80.6,
  //   "Wind Speed": 2.24,
  //   "Cluster": 8
  // },
  // {
  //   "City": "albany",
  //   "Cloudiness": 1,
  //   "Humidity": 53,
  //   "Latitude": 42.6,
  //   "Longitude": -73.97,
  //   "Temperature": 25.12,
  //   "Wind Speed": 16.11,
  //   "Cluster": 1
  // },
  // {
  //   "City": "atuona",
  //   "Cloudiness": 100,
  //   "Humidity": 78,
  //   "Latitude": -9.8,
  //   "Longitude": -139.03,
  //   "Temperature": 82.09,
  //   "Wind Speed": 17.72,
  //   "Cluster": 2
  // },
  // {
  //   "City": "cabo san lucas",
  //   "Cloudiness": 5,
  //   "Humidity": 47,
  //   "Latitude": 22.89,
  //   "Longitude": -109.91,
  //   "Temperature": 74.86,
  //   "Wind Speed": 8.05,
  //   "Cluster": 3
  // },
  // {
  //   "City": "sisimiut",
  //   "Cloudiness": 79,
  //   "Humidity": 85,
  //   "Latitude": 66.94,
  //   "Longitude": -53.67,
  //   "Temperature": -8.64,
  //   "Wind Speed": 5.86,
  //   "Cluster": 11
  // },
  // {
  //   "City": "shubarkuduk",
  //   "Cloudiness": 34,
  //   "Humidity": 81,
  //   "Latitude": 49.14,
  //   "Longitude": 56.49,
  //   "Temperature": 21.88,
  //   "Wind Speed": 12.46,
  //   "Cluster": 6
  // },
  // {
  //   "City": "vardo",
  //   "Cloudiness": 53,
  //   "Humidity": 78,
  //   "Latitude": 70.37,
  //   "Longitude": 31.11,
  //   "Temperature": 15.8,
  //   "Wind Speed": 18.34,
  //   "Cluster": 0
  // },
  // {
  //   "City": "ushuaia",
  //   "Cloudiness": 75,
  //   "Humidity": 81,
  //   "Latitude": -54.8,
  //   "Longitude": -68.3,
  //   "Temperature": 48.2,
  //   "Wind Speed": 24.16,
  //   "Cluster": 5
  // },
  // {
  //   "City": "tasiilaq",
  //   "Cloudiness": 100,
  //   "Humidity": 73,
  //   "Latitude": 65.61,
  //   "Longitude": -37.64,
  //   "Temperature": 21.2,
  //   "Wind Speed": 2.24,
  //   "Cluster": 0
  // },
  // {
  //   "City": "jamestown",
  //   "Cloudiness": 75,
  //   "Humidity": 72,
  //   "Latitude": 42.1,
  //   "Longitude": -79.24,
  //   "Temperature": 20.82,
  //   "Wind Speed": 5.82,
  //   "Cluster": 0
  // },
  // {
  //   "City": "hermanus",
  //   "Cloudiness": 5,
  //   "Humidity": 92,
  //   "Latitude": -34.42,
  //   "Longitude": 19.23,
  //   "Temperature": 68.65,
  //   "Wind Speed": 5.35,
  //   "Cluster": 10
  // },
  // {
  //   "City": "saldanha",
  //   "Cloudiness": 14,
  //   "Humidity": 88,
  //   "Latitude": -33.01,
  //   "Longitude": 17.94,
  //   "Temperature": 68,
  //   "Wind Speed": 12.75,
  //   "Cluster": 10
  // },
  // {
  //   "City": "keningau",
  //   "Cloudiness": 20,
  //   "Humidity": 69,
  //   "Latitude": 5.34,
  //   "Longitude": 116.16,
  //   "Temperature": 81.46,
  //   "Wind Speed": 2.24,
  //   "Cluster": 10
  // },
  // {
  //   "City": "shahe",
  //   "Cloudiness": 22,
  //   "Humidity": 52,
  //   "Latitude": 39.27,
  //   "Longitude": 113.55,
  //   "Temperature": 23.13,
  //   "Wind Speed": 5.23,
  //   "Cluster": 1
  // },
  // {
  //   "City": "saint-philippe",
  //   "Cloudiness": 3,
  //   "Humidity": 60,
  //   "Latitude": -21.36,
  //   "Longitude": 55.77,
  //   "Temperature": 68.63,
  //   "Wind Speed": 8.05,
  //   "Cluster": 3
  // },
  // {
  //   "City": "rikitea",
  //   "Cloudiness": 0,
  //   "Humidity": 79,
  //   "Latitude": -23.12,
  //   "Longitude": -134.97,
  //   "Temperature": 78.78,
  //   "Wind Speed": 14,
  //   "Cluster": 10
  // },
  // {
  //   "City": "asha",
  //   "Cloudiness": 100,
  //   "Humidity": 96,
  //   "Latitude": 55,
  //   "Longitude": 57.27,
  //   "Temperature": 26.83,
  //   "Wind Speed": 7.76,
  //   "Cluster": 5
  // },
  // {
  //   "City": "arawa",
  //   "Cloudiness": 13,
  //   "Humidity": 69,
  //   "Latitude": -6.21,
  //   "Longitude": 155.54,
  //   "Temperature": 84.49,
  //   "Wind Speed": 7.85,
  //   "Cluster": 10
  // },
  // {
  //   "City": "busselton",
  //   "Cloudiness": 0,
  //   "Humidity": 31,
  //   "Latitude": -33.65,
  //   "Longitude": 115.33,
  //   "Temperature": 75.18,
  //   "Wind Speed": 17.16,
  //   "Cluster": 4
  // },
  // {
  //   "City": "east london",
  //   "Cloudiness": 52,
  //   "Humidity": 82,
  //   "Latitude": -33.02,
  //   "Longitude": 27.91,
  //   "Temperature": 73.17,
  //   "Wind Speed": 18.7,
  //   "Cluster": 8
  // },
  // {
  //   "City": "butaritari",
  //   "Cloudiness": 51,
  //   "Humidity": 79,
  //   "Latitude": 3.07,
  //   "Longitude": 172.79,
  //   "Temperature": 84.43,
  //   "Wind Speed": 15.77,
  //   "Cluster": 8
  // },
  // {
  //   "City": "pevek",
  //   "Cloudiness": 100,
  //   "Humidity": 98,
  //   "Latitude": 69.7,
  //   "Longitude": 170.31,
  //   "Temperature": -16.53,
  //   "Wind Speed": 5.91,
  //   "Cluster": 11
  // },
  // {
  //   "City": "kailaras",
  //   "Cloudiness": 100,
  //   "Humidity": 45,
  //   "Latitude": 26.32,
  //   "Longitude": 77.62,
  //   "Temperature": 59.05,
  //   "Wind Speed": 9.62,
  //   "Cluster": 9
  // },
  // {
  //   "City": "leningradskiy",
  //   "Cloudiness": 100,
  //   "Humidity": 91,
  //   "Latitude": 69.38,
  //   "Longitude": 178.42,
  //   "Temperature": -9.38,
  //   "Wind Speed": 22.55,
  //   "Cluster": 11
  // },
  // {
  //   "City": "yabrud",
  //   "Cloudiness": 60,
  //   "Humidity": 93,
  //   "Latitude": 33.97,
  //   "Longitude": 36.66,
  //   "Temperature": 41.43,
  //   "Wind Speed": 9.17,
  //   "Cluster": 5
  // },
  // {
  //   "City": "pisco",
  //   "Cloudiness": 100,
  //   "Humidity": 83,
  //   "Latitude": -13.7,
  //   "Longitude": -76.22,
  //   "Temperature": 74.16,
  //   "Wind Speed": 21.92,
  //   "Cluster": 2
  // },
  // {
  //   "City": "tiksi",
  //   "Cloudiness": 100,
  //   "Humidity": 86,
  //   "Latitude": 71.69,
  //   "Longitude": 128.87,
  //   "Temperature": -4.97,
  //   "Wind Speed": 8.1,
  //   "Cluster": 11
  // },
  // {
  //   "City": "cherskiy",
  //   "Cloudiness": 98,
  //   "Humidity": 96,
  //   "Latitude": 68.75,
  //   "Longitude": 161.3,
  //   "Temperature": -20.87,
  //   "Wind Speed": 7.34,
  //   "Cluster": 11
  // },
  // {
  //   "City": "inowroclaw",
  //   "Cloudiness": 90,
  //   "Humidity": 93,
  //   "Latitude": 52.8,
  //   "Longitude": 18.26,
  //   "Temperature": 36.1,
  //   "Wind Speed": 11.41,
  //   "Cluster": 5
  // },
  // {
  //   "City": "manokwari",
  //   "Cloudiness": 44,
  //   "Humidity": 68,
  //   "Latitude": -0.87,
  //   "Longitude": 134.08,
  //   "Temperature": 78.44,
  //   "Wind Speed": 8.9,
  //   "Cluster": 8
  // },
  // {
  //   "City": "hobart",
  //   "Cloudiness": 75,
  //   "Humidity": 58,
  //   "Latitude": -42.88,
  //   "Longitude": 147.33,
  //   "Temperature": 59.38,
  //   "Wind Speed": 14.99,
  //   "Cluster": 9
  // },
  // {
  //   "City": "ilulissat",
  //   "Cloudiness": 100,
  //   "Humidity": 70,
  //   "Latitude": 69.22,
  //   "Longitude": -51.1,
  //   "Temperature": 1.4,
  //   "Wind Speed": 5.82,
  //   "Cluster": 11
  // },
  // {
  //   "City": "mataura",
  //   "Cloudiness": 99,
  //   "Humidity": 63,
  //   "Latitude": -46.19,
  //   "Longitude": 168.86,
  //   "Temperature": 67.08,
  //   "Wind Speed": 6.44,
  //   "Cluster": 2
  // },
  // {
  //   "City": "gimbi",
  //   "Cloudiness": 76,
  //   "Humidity": 35,
  //   "Latitude": 9.17,
  //   "Longitude": 35.83,
  //   "Temperature": 66.24,
  //   "Wind Speed": 4.09,
  //   "Cluster": 9
  // },
  // {
  //   "City": "oktyabrskoye",
  //   "Cloudiness": 57,
  //   "Humidity": 57,
  //   "Latitude": 43.06,
  //   "Longitude": 44.74,
  //   "Temperature": 34.41,
  //   "Wind Speed": 2.51,
  //   "Cluster": 0
  // },
  // {
  //   "City": "chicama",
  //   "Cloudiness": 20,
  //   "Humidity": 88,
  //   "Latitude": -7.84,
  //   "Longitude": -79.15,
  //   "Temperature": 73.4,
  //   "Wind Speed": 10.29,
  //   "Cluster": 10
  // },
  // {
  //   "City": "alofi",
  //   "Cloudiness": 75,
  //   "Humidity": 62,
  //   "Latitude": -19.06,
  //   "Longitude": -169.92,
  //   "Temperature": 86,
  //   "Wind Speed": 16.11,
  //   "Cluster": 9
  // },
  // {
  //   "City": "arraial do cabo",
  //   "Cloudiness": 52,
  //   "Humidity": 83,
  //   "Latitude": -22.97,
  //   "Longitude": -42.03,
  //   "Temperature": 78.8,
  //   "Wind Speed": 12.75,
  //   "Cluster": 8
  // },
  // {
  //   "City": "puri",
  //   "Cloudiness": 7,
  //   "Humidity": 94,
  //   "Latitude": 19.8,
  //   "Longitude": 85.85,
  //   "Temperature": 69.8,
  //   "Wind Speed": 2.55,
  //   "Cluster": 10
  // },
  // {
  //   "City": "victoria",
  //   "Cloudiness": 20,
  //   "Humidity": 52,
  //   "Latitude": 22.29,
  //   "Longitude": 114.16,
  //   "Temperature": 62.58,
  //   "Wind Speed": 8.05,
  //   "Cluster": 3
  // },
  // {
  //   "City": "dunedin",
  //   "Cloudiness": 82,
  //   "Humidity": 82,
  //   "Latitude": -45.87,
  //   "Longitude": 170.5,
  //   "Temperature": 61.52,
  //   "Wind Speed": 1.99,
  //   "Cluster": 2
  // },
  // {
  //   "City": "plouzane",
  //   "Cloudiness": 90,
  //   "Humidity": 93,
  //   "Latitude": 48.38,
  //   "Longitude": -4.62,
  //   "Temperature": 47.91,
  //   "Wind Speed": 18.34,
  //   "Cluster": 5
  // },
  // {
  //   "City": "berezivka",
  //   "Cloudiness": 92,
  //   "Humidity": 71,
  //   "Latitude": 47.2,
  //   "Longitude": 30.91,
  //   "Temperature": 40.1,
  //   "Wind Speed": 4.72,
  //   "Cluster": 0
  // },
  // {
  //   "City": "kaitangata",
  //   "Cloudiness": 82,
  //   "Humidity": 79,
  //   "Latitude": -46.28,
  //   "Longitude": 169.85,
  //   "Temperature": 61.41,
  //   "Wind Speed": 11.99,
  //   "Cluster": 2
  // },
  // {
  //   "City": "lesozavodsk",
  //   "Cloudiness": 5,
  //   "Humidity": 92,
  //   "Latitude": 45.48,
  //   "Longitude": 133.42,
  //   "Temperature": 7.72,
  //   "Wind Speed": 5.32,
  //   "Cluster": 7
  // },
  // {
  //   "City": "cape town",
  //   "Cloudiness": 75,
  //   "Humidity": 100,
  //   "Latitude": -33.93,
  //   "Longitude": 18.42,
  //   "Temperature": 68.25,
  //   "Wind Speed": 12.75,
  //   "Cluster": 2
  // },
  // {
  //   "City": "mbamba",
  //   "Cloudiness": 9,
  //   "Humidity": 24,
  //   "Latitude": 9.98,
  //   "Longitude": 13.1,
  //   "Temperature": 67.96,
  //   "Wind Speed": 6.49,
  //   "Cluster": 4
  // },
  // {
  //   "City": "klaksvik",
  //   "Cloudiness": 79,
  //   "Humidity": 69,
  //   "Latitude": 62.23,
  //   "Longitude": -6.59,
  //   "Temperature": 39.2,
  //   "Wind Speed": 19.46,
  //   "Cluster": 0
  // },
  // {
  //   "City": "punta arenas",
  //   "Cloudiness": 75,
  //   "Humidity": 65,
  //   "Latitude": -53.15,
  //   "Longitude": -70.92,
  //   "Temperature": 48.11,
  //   "Wind Speed": 14.99,
  //   "Cluster": 0
  // },
  // {
  //   "City": "abu zabad",
  //   "Cloudiness": 50,
  //   "Humidity": 23,
  //   "Latitude": 12.35,
  //   "Longitude": 29.25,
  //   "Temperature": 69.03,
  //   "Wind Speed": 17.56,
  //   "Cluster": 9
  // },
  // {
  //   "City": "dubbo",
  //   "Cloudiness": 0,
  //   "Humidity": 33,
  //   "Latitude": -32.25,
  //   "Longitude": 148.62,
  //   "Temperature": 73.4,
  //   "Wind Speed": 9.17,
  //   "Cluster": 4
  // },
  // {
  //   "City": "rawson",
  //   "Cloudiness": 42,
  //   "Humidity": 50,
  //   "Latitude": -43.3,
  //   "Longitude": -65.1,
  //   "Temperature": 61.12,
  //   "Wind Speed": 22.7,
  //   "Cluster": 8
  // },
  // {
  //   "City": "vaini",
  //   "Cloudiness": 20,
  //   "Humidity": 65,
  //   "Latitude": -21.2,
  //   "Longitude": -175.2,
  //   "Temperature": 82.4,
  //   "Wind Speed": 9.17,
  //   "Cluster": 10
  // },
  // {
  //   "City": "maryborough",
  //   "Cloudiness": 1,
  //   "Humidity": 65,
  //   "Latitude": -25.53,
  //   "Longitude": 152.7,
  //   "Temperature": 90,
  //   "Wind Speed": 3.22,
  //   "Cluster": 10
  // },
  // {
  //   "City": "shumikha",
  //   "Cloudiness": 100,
  //   "Humidity": 90,
  //   "Latitude": 55.23,
  //   "Longitude": 63.3,
  //   "Temperature": 23.25,
  //   "Wind Speed": 14.23,
  //   "Cluster": 5
  // },
  // {
  //   "City": "carnarvon",
  //   "Cloudiness": 40,
  //   "Humidity": 62,
  //   "Latitude": -24.87,
  //   "Longitude": 113.63,
  //   "Temperature": 84.2,
  //   "Wind Speed": 6.93,
  //   "Cluster": 8
  // },
  // {
  //   "City": "cueramaro",
  //   "Cloudiness": 5,
  //   "Humidity": 12,
  //   "Latitude": 20.62,
  //   "Longitude": -101.72,
  //   "Temperature": 84.2,
  //   "Wind Speed": 4.7,
  //   "Cluster": 4
  // },
  // {
  //   "City": "havre-saint-pierre",
  //   "Cloudiness": 75,
  //   "Humidity": 67,
  //   "Latitude": 50.23,
  //   "Longitude": -63.6,
  //   "Temperature": 17.6,
  //   "Wind Speed": 13.87,
  //   "Cluster": 0
  // },
  // {
  //   "City": "brooks",
  //   "Cloudiness": 0,
  //   "Humidity": 80,
  //   "Latitude": 50.58,
  //   "Longitude": -111.89,
  //   "Temperature": 9,
  //   "Wind Speed": 4,
  //   "Cluster": 7
  // },
  // {
  //   "City": "thompson",
  //   "Cloudiness": 75,
  //   "Humidity": 50,
  //   "Latitude": 55.74,
  //   "Longitude": -97.86,
  //   "Temperature": 6.8,
  //   "Wind Speed": 11.41,
  //   "Cluster": 0
  // },
  // {
  //   "City": "mumford",
  //   "Cloudiness": 96,
  //   "Humidity": 84,
  //   "Latitude": 5.26,
  //   "Longitude": -0.76,
  //   "Temperature": 79.38,
  //   "Wind Speed": 4.7,
  //   "Cluster": 2
  // },
  // {
  //   "City": "yauya",
  //   "Cloudiness": 26,
  //   "Humidity": 86,
  //   "Latitude": -8.98,
  //   "Longitude": -77.3,
  //   "Temperature": 46.09,
  //   "Wind Speed": 2.39,
  //   "Cluster": 6
  // },
  // {
  //   "City": "hamilton",
  //   "Cloudiness": 1,
  //   "Humidity": 64,
  //   "Latitude": 39.18,
  //   "Longitude": -84.53,
  //   "Temperature": 34.02,
  //   "Wind Speed": 4.7,
  //   "Cluster": 1
  // },
  // {
  //   "City": "bethel",
  //   "Cloudiness": 1,
  //   "Humidity": 40,
  //   "Latitude": 41.37,
  //   "Longitude": -73.41,
  //   "Temperature": 33.64,
  //   "Wind Speed": 6.93,
  //   "Cluster": 1
  // },
  // {
  //   "City": "manuk mangkaw",
  //   "Cloudiness": 84,
  //   "Humidity": 80,
  //   "Latitude": 4.8,
  //   "Longitude": 119.85,
  //   "Temperature": 80.91,
  //   "Wind Speed": 13.33,
  //   "Cluster": 2
  // },
  // {
  //   "City": "amberley",
  //   "Cloudiness": 1,
  //   "Humidity": 51,
  //   "Latitude": 39.2,
  //   "Longitude": -84.43,
  //   "Temperature": 33.87,
  //   "Wind Speed": 4.7,
  //   "Cluster": 1
  // },
  // {
  //   "City": "nome",
  //   "Cloudiness": 90,
  //   "Humidity": 78,
  //   "Latitude": 64.5,
  //   "Longitude": -165.41,
  //   "Temperature": 11.62,
  //   "Wind Speed": 10.29,
  //   "Cluster": 11
  // },
  // {
  //   "City": "tuktoyaktuk",
  //   "Cloudiness": 90,
  //   "Humidity": 84,
  //   "Latitude": 69.45,
  //   "Longitude": -133.04,
  //   "Temperature": 8.6,
  //   "Wind Speed": 9.17,
  //   "Cluster": 11
  // },
  // {
  //   "City": "puerto ayora",
  //   "Cloudiness": 40,
  //   "Humidity": 66,
  //   "Latitude": -0.74,
  //   "Longitude": -90.35,
  //   "Temperature": 86,
  //   "Wind Speed": 10.29,
  //   "Cluster": 8
  // },
  // {
  //   "City": "avera",
  //   "Cloudiness": 90,
  //   "Humidity": 93,
  //   "Latitude": 33.19,
  //   "Longitude": -82.53,
  //   "Temperature": 51.75,
  //   "Wind Speed": 8.05,
  //   "Cluster": 5
  // },
  // {
  //   "City": "airai",
  //   "Cloudiness": 94,
  //   "Humidity": 74,
  //   "Latitude": -8.93,
  //   "Longitude": 125.41,
  //   "Temperature": 75.63,
  //   "Wind Speed": 1.72,
  //   "Cluster": 2
  // },
  // {
  //   "City": "khatanga",
  //   "Cloudiness": 0,
  //   "Humidity": 84,
  //   "Latitude": 71.97,
  //   "Longitude": 102.5,
  //   "Temperature": -13.07,
  //   "Wind Speed": 2.98,
  //   "Cluster": 7
  // },
  // {
  //   "City": "yatou",
  //   "Cloudiness": 0,
  //   "Humidity": 84,
  //   "Latitude": 37.15,
  //   "Longitude": 122.38,
  //   "Temperature": 40.12,
  //   "Wind Speed": 4.99,
  //   "Cluster": 6
  // },
  // {
  //   "City": "nanortalik",
  //   "Cloudiness": 100,
  //   "Humidity": 67,
  //   "Latitude": 60.14,
  //   "Longitude": -45.24,
  //   "Temperature": 18.95,
  //   "Wind Speed": 12.91,
  //   "Cluster": 0
  // },
  // {
  //   "City": "goderich",
  //   "Cloudiness": 100,
  //   "Humidity": 45,
  //   "Latitude": 43.75,
  //   "Longitude": -81.72,
  //   "Temperature": 23.81,
  //   "Wind Speed": 1.99,
  //   "Cluster": 0
  // },
  // {
  //   "City": "krasnoselkup",
  //   "Cloudiness": 96,
  //   "Humidity": 96,
  //   "Latitude": 65.7,
  //   "Longitude": 82.47,
  //   "Temperature": 24.06,
  //   "Wind Speed": 11.68,
  //   "Cluster": 5
  // },
  // {
  //   "City": "kodiak",
  //   "Cloudiness": 90,
  //   "Humidity": 64,
  //   "Latitude": 57.79,
  //   "Longitude": -152.41,
  //   "Temperature": 35.6,
  //   "Wind Speed": 10.29,
  //   "Cluster": 0
  // },
  // {
  //   "City": "hasaki",
  //   "Cloudiness": 75,
  //   "Humidity": 70,
  //   "Latitude": 35.73,
  //   "Longitude": 140.83,
  //   "Temperature": 48.4,
  //   "Wind Speed": 4.7,
  //   "Cluster": 0
  // },
  // {
  //   "City": "takoradi",
  //   "Cloudiness": 63,
  //   "Humidity": 91,
  //   "Latitude": 4.88,
  //   "Longitude": -1.76,
  //   "Temperature": 78.19,
  //   "Wind Speed": 2.48,
  //   "Cluster": 8
  // },
  // {
  //   "City": "salinopolis",
  //   "Cloudiness": 100,
  //   "Humidity": 83,
  //   "Latitude": -0.61,
  //   "Longitude": -47.36,
  //   "Temperature": 80.29,
  //   "Wind Speed": 14.14,
  //   "Cluster": 2
  // },
  // {
  //   "City": "yellowknife",
  //   "Cloudiness": 75,
  //   "Humidity": 84,
  //   "Latitude": 62.46,
  //   "Longitude": -114.35,
  //   "Temperature": 4.68,
  //   "Wind Speed": 12.75,
  //   "Cluster": 11
  // },
  // {
  //   "City": "shediac",
  //   "Cloudiness": 20,
  //   "Humidity": 58,
  //   "Latitude": 46.22,
  //   "Longitude": -64.54,
  //   "Temperature": 24.8,
  //   "Wind Speed": 18.34,
  //   "Cluster": 1
  // },
  // {
  //   "City": "lebu",
  //   "Cloudiness": 0,
  //   "Humidity": 63,
  //   "Latitude": -37.62,
  //   "Longitude": -73.65,
  //   "Temperature": 57.4,
  //   "Wind Speed": 10.87,
  //   "Cluster": 3
  // },
  // {
  //   "City": "calama",
  //   "Cloudiness": 83,
  //   "Humidity": 37,
  //   "Latitude": -22.47,
  //   "Longitude": -68.93,
  //   "Temperature": 69.8,
  //   "Wind Speed": 20.8,
  //   "Cluster": 9
  // },
  // {
  //   "City": "mar del plata",
  //   "Cloudiness": 15,
  //   "Humidity": 59,
  //   "Latitude": -38,
  //   "Longitude": -57.56,
  //   "Temperature": 64.99,
  //   "Wind Speed": 8.99,
  //   "Cluster": 3
  // },
  // {
  //   "City": "bodden town",
  //   "Cloudiness": 20,
  //   "Humidity": 83,
  //   "Latitude": 19.28,
  //   "Longitude": -81.25,
  //   "Temperature": 80.01,
  //   "Wind Speed": 8.05,
  //   "Cluster": 10
  // },
  // {
  //   "City": "hofn",
  //   "Cloudiness": 100,
  //   "Humidity": 91,
  //   "Latitude": 64.25,
  //   "Longitude": -15.21,
  //   "Temperature": 41.36,
  //   "Wind Speed": 30.2,
  //   "Cluster": 5
  // },
  // {
  //   "City": "tonj",
  //   "Cloudiness": 65,
  //   "Humidity": 23,
  //   "Latitude": 7.27,
  //   "Longitude": 28.68,
  //   "Temperature": 77.18,
  //   "Wind Speed": 3.78,
  //   "Cluster": 9
  // },
  // {
  //   "City": "clyde river",
  //   "Cloudiness": 75,
  //   "Humidity": 83,
  //   "Latitude": 70.47,
  //   "Longitude": -68.59,
  //   "Temperature": -13,
  //   "Wind Speed": 14.99,
  //   "Cluster": 11
  // },
  // {
  //   "City": "pontalina",
  //   "Cloudiness": 100,
  //   "Humidity": 89,
  //   "Latitude": -17.52,
  //   "Longitude": -49.45,
  //   "Temperature": 71.73,
  //   "Wind Speed": 2.04,
  //   "Cluster": 2
  // },
  // {
  //   "City": "vyartsilya",
  //   "Cloudiness": 72,
  //   "Humidity": 91,
  //   "Latitude": 62.18,
  //   "Longitude": 30.69,
  //   "Temperature": 25.92,
  //   "Wind Speed": 6.69,
  //   "Cluster": 5
  // },
  // {
  //   "City": "mehamn",
  //   "Cloudiness": 99,
  //   "Humidity": 70,
  //   "Latitude": 71.04,
  //   "Longitude": 27.85,
  //   "Temperature": 25.72,
  //   "Wind Speed": 16.44,
  //   "Cluster": 0
  // },
  // {
  //   "City": "saint george",
  //   "Cloudiness": 1,
  //   "Humidity": 23,
  //   "Latitude": 37.1,
  //   "Longitude": -113.58,
  //   "Temperature": 51.42,
  //   "Wind Speed": 9.17,
  //   "Cluster": 4
  // },
  // {
  //   "City": "kapaa",
  //   "Cloudiness": 90,
  //   "Humidity": 88,
  //   "Latitude": 22.08,
  //   "Longitude": -159.32,
  //   "Temperature": 75.51,
  //   "Wind Speed": 23.04,
  //   "Cluster": 2
  // },
  // {
  //   "City": "kropotkin",
  //   "Cloudiness": 100,
  //   "Humidity": 81,
  //   "Latitude": 45.44,
  //   "Longitude": 40.58,
  //   "Temperature": 39.97,
  //   "Wind Speed": 4.52,
  //   "Cluster": 5
  // },
  // {
  //   "City": "karratha",
  //   "Cloudiness": 0,
  //   "Humidity": 79,
  //   "Latitude": -20.74,
  //   "Longitude": 116.85,
  //   "Temperature": 85.19,
  //   "Wind Speed": 4.88,
  //   "Cluster": 10
  // },
  // {
  //   "City": "catabola",
  //   "Cloudiness": 100,
  //   "Humidity": 97,
  //   "Latitude": -12.15,
  //   "Longitude": 17.28,
  //   "Temperature": 64.27,
  //   "Wind Speed": 2.19,
  //   "Cluster": 2
  // },
  // {
  //   "City": "kudahuvadhoo",
  //   "Cloudiness": 27,
  //   "Humidity": 78,
  //   "Latitude": 2.67,
  //   "Longitude": 72.89,
  //   "Temperature": 81.5,
  //   "Wind Speed": 16.71,
  //   "Cluster": 8
  // },
  // {
  //   "City": "anadyr",
  //   "Cloudiness": 18,
  //   "Humidity": 75,
  //   "Latitude": 64.75,
  //   "Longitude": 177.48,
  //   "Temperature": -20.11,
  //   "Wind Speed": 11.18,
  //   "Cluster": 7
  // },
  // {
  //   "City": "broome",
  //   "Cloudiness": 90,
  //   "Humidity": 85,
  //   "Latitude": 42.25,
  //   "Longitude": -75.83,
  //   "Temperature": 22.1,
  //   "Wind Speed": 5.21,
  //   "Cluster": 5
  // },
  // {
  //   "City": "cidreira",
  //   "Cloudiness": 45,
  //   "Humidity": 74,
  //   "Latitude": -30.18,
  //   "Longitude": -50.21,
  //   "Temperature": 75.47,
  //   "Wind Speed": 11.52,
  //   "Cluster": 8
  // },
  // {
  //   "City": "qaanaaq",
  //   "Cloudiness": 0,
  //   "Humidity": 55,
  //   "Latitude": 77.48,
  //   "Longitude": -69.36,
  //   "Temperature": -11.92,
  //   "Wind Speed": 5.06,
  //   "Cluster": 7
  // },
  // {
  //   "City": "chuy",
  //   "Cloudiness": 2,
  //   "Humidity": 84,
  //   "Latitude": -33.7,
  //   "Longitude": -53.46,
  //   "Temperature": 68.52,
  //   "Wind Speed": 6.49,
  //   "Cluster": 10
  // },
  // {
  //   "City": "lata",
  //   "Cloudiness": 38,
  //   "Humidity": 93,
  //   "Latitude": 40.16,
  //   "Longitude": -8.33,
  //   "Temperature": 42.84,
  //   "Wind Speed": 4.7,
  //   "Cluster": 6
  // },
  // {
  //   "City": "cayenne",
  //   "Cloudiness": 20,
  //   "Humidity": 74,
  //   "Latitude": 4.93,
  //   "Longitude": -52.33,
  //   "Temperature": 78.8,
  //   "Wind Speed": 8.05,
  //   "Cluster": 10
  // },
  // {
  //   "City": "half moon bay",
  //   "Cloudiness": 40,
  //   "Humidity": 59,
  //   "Latitude": 37.46,
  //   "Longitude": -122.43,
  //   "Temperature": 62.91,
  //   "Wind Speed": 10.29,
  //   "Cluster": 8
  // },
  // {
  //   "City": "neudorfl",
  //   "Cloudiness": 49,
  //   "Humidity": 64,
  //   "Latitude": 47.78,
  //   "Longitude": 16.28,
  //   "Temperature": 38.61,
  //   "Wind Speed": 13.87,
  //   "Cluster": 6
  // },
  // {
  //   "City": "port elizabeth",
  //   "Cloudiness": 68,
  //   "Humidity": 93,
  //   "Latitude": -33.92,
  //   "Longitude": 25.57,
  //   "Temperature": 66.2,
  //   "Wind Speed": 2.24,
  //   "Cluster": 2
  // },
  // {
  //   "City": "hualmay",
  //   "Cloudiness": 87,
  //   "Humidity": 76,
  //   "Latitude": -11.1,
  //   "Longitude": -77.61,
  //   "Temperature": 72.66,
  //   "Wind Speed": 6.24,
  //   "Cluster": 2
  // },
  // {
  //   "City": "sholapur",
  //   "Cloudiness": 0,
  //   "Humidity": 64,
  //   "Latitude": 17.68,
  //   "Longitude": 75.92,
  //   "Temperature": 68.54,
  //   "Wind Speed": 9.01,
  //   "Cluster": 3
  // },
  // {
  //   "City": "muisne",
  //   "Cloudiness": 85,
  //   "Humidity": 94,
  //   "Latitude": 0.6,
  //   "Longitude": -80.03,
  //   "Temperature": 76.82,
  //   "Wind Speed": 6.78,
  //   "Cluster": 2
  // },
  // {
  //   "City": "salvador",
  //   "Cloudiness": 31,
  //   "Humidity": 61,
  //   "Latitude": 13.83,
  //   "Longitude": -88.92,
  //   "Temperature": 84.07,
  //   "Wind Speed": 11.41,
  //   "Cluster": 8
  // },
  // {
  //   "City": "stykkisholmur",
  //   "Cloudiness": 100,
  //   "Humidity": 93,
  //   "Latitude": 65.08,
  //   "Longitude": -22.73,
  //   "Temperature": 32.38,
  //   "Wind Speed": 33.33,
  //   "Cluster": 5
  // },
  // {
  //   "City": "sao joao da barra",
  //   "Cloudiness": 74,
  //   "Humidity": 83,
  //   "Latitude": -21.64,
  //   "Longitude": -41.05,
  //   "Temperature": 78.8,
  //   "Wind Speed": 17.22,
  //   "Cluster": 2
  // },
  // {
  //   "City": "torres",
  //   "Cloudiness": 81,
  //   "Humidity": 77,
  //   "Latitude": -29.34,
  //   "Longitude": -49.73,
  //   "Temperature": 75.9,
  //   "Wind Speed": 6.78,
  //   "Cluster": 2
  // },
  // {
  //   "City": "dikson",
  //   "Cloudiness": 100,
  //   "Humidity": 93,
  //   "Latitude": 73.51,
  //   "Longitude": 80.55,
  //   "Temperature": 20.66,
  //   "Wind Speed": 16.04,
  //   "Cluster": 5
  // },
  // {
  //   "City": "vanimo",
  //   "Cloudiness": 100,
  //   "Humidity": 73,
  //   "Latitude": -2.67,
  //   "Longitude": 141.3,
  //   "Temperature": 81.01,
  //   "Wind Speed": 11.23,
  //   "Cluster": 2
  // },
  // {
  //   "City": "bathsheba",
  //   "Cloudiness": 75,
  //   "Humidity": 73,
  //   "Latitude": 13.22,
  //   "Longitude": -59.52,
  //   "Temperature": 77,
  //   "Wind Speed": 24.16,
  //   "Cluster": 2
  // },
  // {
  //   "City": "karatau",
  //   "Cloudiness": 12,
  //   "Humidity": 76,
  //   "Latitude": 43.17,
  //   "Longitude": 70.47,
  //   "Temperature": 22.17,
  //   "Wind Speed": 0.63,
  //   "Cluster": 6
  // },
  // {
  //   "City": "ginir",
  //   "Cloudiness": 44,
  //   "Humidity": 53,
  //   "Latitude": 7.13,
  //   "Longitude": 40.7,
  //   "Temperature": 62.91,
  //   "Wind Speed": 3.22,
  //   "Cluster": 8
  // },
  // {
  //   "City": "ajdabiya",
  //   "Cloudiness": 100,
  //   "Humidity": 71,
  //   "Latitude": 30.76,
  //   "Longitude": 20.23,
  //   "Temperature": 60.67,
  //   "Wind Speed": 16.06,
  //   "Cluster": 2
  // },
  // {
  //   "City": "ponta delgada",
  //   "Cloudiness": 40,
  //   "Humidity": 71,
  //   "Latitude": 37.73,
  //   "Longitude": -25.67,
  //   "Temperature": 55.4,
  //   "Wind Speed": 26.4,
  //   "Cluster": 8
  // },
  // {
  //   "City": "japura",
  //   "Cloudiness": 86,
  //   "Humidity": 97,
  //   "Latitude": -0.32,
  //   "Longitude": 102.35,
  //   "Temperature": 73.45,
  //   "Wind Speed": 2.3,
  //   "Cluster": 2
  // },
  // {
  //   "City": "taoudenni",
  //   "Cloudiness": 39,
  //   "Humidity": 12,
  //   "Latitude": 22.68,
  //   "Longitude": -3.98,
  //   "Temperature": 69.53,
  //   "Wind Speed": 9.31,
  //   "Cluster": 4
  // },
  // {
  //   "City": "chokurdakh",
  //   "Cloudiness": 79,
  //   "Humidity": 90,
  //   "Latitude": 70.63,
  //   "Longitude": 147.92,
  //   "Temperature": -11.54,
  //   "Wind Speed": 6.71,
  //   "Cluster": 11
  // },
  // {
  //   "City": "provideniya",
  //   "Cloudiness": 100,
  //   "Humidity": 65,
  //   "Latitude": 64.38,
  //   "Longitude": -173.3,
  //   "Temperature": 6.8,
  //   "Wind Speed": 4.47,
  //   "Cluster": 11
  // },
  // {
  //   "City": "pecos",
  //   "Cloudiness": 90,
  //   "Humidity": 87,
  //   "Latitude": 31.42,
  //   "Longitude": -103.49,
  //   "Temperature": 44.6,
  //   "Wind Speed": 8.05,
  //   "Cluster": 5
  // },
  // {
  //   "City": "bambous virieux",
  //   "Cloudiness": 0,
  //   "Humidity": 86,
  //   "Latitude": -20.34,
  //   "Longitude": 57.76,
  //   "Temperature": 73,
  //   "Wind Speed": 3,
  //   "Cluster": 10
  // },
  // {
  //   "City": "qostanay",
  //   "Cloudiness": 40,
  //   "Humidity": 86,
  //   "Latitude": 53.17,
  //   "Longitude": 63.58,
  //   "Temperature": 26.6,
  //   "Wind Speed": 17.9,
  //   "Cluster": 6
  // },
  // {
  //   "City": "alice springs",
  //   "Cloudiness": 0,
  //   "Humidity": 18,
  //   "Latitude": -23.7,
  //   "Longitude": 133.88,
  //   "Temperature": 80.6,
  //   "Wind Speed": 16.11,
  //   "Cluster": 4
  // },
  // {
  //   "City": "bandarbeyla",
  //   "Cloudiness": 50,
  //   "Humidity": 78,
  //   "Latitude": 9.49,
  //   "Longitude": 50.81,
  //   "Temperature": 76.91,
  //   "Wind Speed": 9.6,
  //   "Cluster": 8
  // },
  // {
  //   "City": "guanare",
  //   "Cloudiness": 85,
  //   "Humidity": 45,
  //   "Latitude": 9.04,
  //   "Longitude": -69.74,
  //   "Temperature": 87.13,
  //   "Wind Speed": 4.25,
  //   "Cluster": 9
  // },
  // {
  //   "City": "vao",
  //   "Cloudiness": 17,
  //   "Humidity": 75,
  //   "Latitude": -22.67,
  //   "Longitude": 167.48,
  //   "Temperature": 78.66,
  //   "Wind Speed": 10.83,
  //   "Cluster": 10
  // },
  // {
  //   "City": "caravelas",
  //   "Cloudiness": 4,
  //   "Humidity": 79,
  //   "Latitude": -17.71,
  //   "Longitude": -39.25,
  //   "Temperature": 80.53,
  //   "Wind Speed": 10.69,
  //   "Cluster": 10
  // },
  // {
  //   "City": "hithadhoo",
  //   "Cloudiness": 87,
  //   "Humidity": 80,
  //   "Latitude": -0.6,
  //   "Longitude": 73.08,
  //   "Temperature": 82.8,
  //   "Wind Speed": 16.84,
  //   "Cluster": 2
  // },
  // {
  //   "City": "viransehir",
  //   "Cloudiness": 73,
  //   "Humidity": 76,
  //   "Latitude": 37.24,
  //   "Longitude": 39.76,
  //   "Temperature": 45.97,
  //   "Wind Speed": 10.47,
  //   "Cluster": 0
  // },
  // {
  //   "City": "nizhniy kuranakh",
  //   "Cloudiness": 98,
  //   "Humidity": 98,
  //   "Latitude": 58.84,
  //   "Longitude": 125.49,
  //   "Temperature": -7.28,
  //   "Wind Speed": 2.86,
  //   "Cluster": 11
  // },
  // {
  //   "City": "tombouctou",
  //   "Cloudiness": 70,
  //   "Humidity": 10,
  //   "Latitude": 20,
  //   "Longitude": -3,
  //   "Temperature": 75.67,
  //   "Wind Speed": 9.24,
  //   "Cluster": 9
  // },
  // {
  //   "City": "fairbanks",
  //   "Cloudiness": 75,
  //   "Humidity": 72,
  //   "Latitude": 64.84,
  //   "Longitude": -147.72,
  //   "Temperature": 16.12,
  //   "Wind Speed": 5.82,
  //   "Cluster": 0
  // },
  // {
  //   "City": "saskylakh",
  //   "Cloudiness": 0,
  //   "Humidity": 99,
  //   "Latitude": 71.92,
  //   "Longitude": 114.08,
  //   "Temperature": -9.15,
  //   "Wind Speed": 6.96,
  //   "Cluster": 7
  // },
  // {
  //   "City": "mahebourg",
  //   "Cloudiness": 13,
  //   "Humidity": 86,
  //   "Latitude": -20.41,
  //   "Longitude": 57.7,
  //   "Temperature": 73,
  //   "Wind Speed": 3,
  //   "Cluster": 10
  // },
  // {
  //   "City": "ancud",
  //   "Cloudiness": 7,
  //   "Humidity": 62,
  //   "Latitude": -41.87,
  //   "Longitude": -73.82,
  //   "Temperature": 53.6,
  //   "Wind Speed": 11.41,
  //   "Cluster": 3
  // },
  // {
  //   "City": "georgetown",
  //   "Cloudiness": 20,
  //   "Humidity": 69,
  //   "Latitude": 5.41,
  //   "Longitude": 100.34,
  //   "Temperature": 76.93,
  //   "Wind Speed": 6.93,
  //   "Cluster": 10
  // },
  // {
  //   "City": "grand gaube",
  //   "Cloudiness": 0,
  //   "Humidity": 85,
  //   "Latitude": -20.01,
  //   "Longitude": 57.66,
  //   "Temperature": 73,
  //   "Wind Speed": 1.99,
  //   "Cluster": 10
  // },
  // {
  //   "City": "upernavik",
  //   "Cloudiness": 100,
  //   "Humidity": 94,
  //   "Latitude": 72.79,
  //   "Longitude": -56.15,
  //   "Temperature": -2.38,
  //   "Wind Speed": 7.23,
  //   "Cluster": 11
  // },
  // {
  //   "City": "micheweni",
  //   "Cloudiness": 17,
  //   "Humidity": 74,
  //   "Latitude": -4.97,
  //   "Longitude": 39.83,
  //   "Temperature": 83.48,
  //   "Wind Speed": 6.93,
  //   "Cluster": 10
  // },
  // {
  //   "City": "pakokku",
  //   "Cloudiness": 1,
  //   "Humidity": 46,
  //   "Latitude": 21.33,
  //   "Longitude": 95.1,
  //   "Temperature": 61.11,
  //   "Wind Speed": 2.19,
  //   "Cluster": 3
  // },
  // {
  //   "City": "tottori",
  //   "Cloudiness": 90,
  //   "Humidity": 80,
  //   "Latitude": 35.5,
  //   "Longitude": 134.23,
  //   "Temperature": 39.43,
  //   "Wind Speed": 8.05,
  //   "Cluster": 5
  // },
  // {
  //   "City": "meulaboh",
  //   "Cloudiness": 47,
  //   "Humidity": 85,
  //   "Latitude": 4.14,
  //   "Longitude": 96.13,
  //   "Temperature": 80.06,
  //   "Wind Speed": 7.02,
  //   "Cluster": 8
  // },
  // {
  //   "City": "torbay",
  //   "Cloudiness": 90,
  //   "Humidity": 86,
  //   "Latitude": 47.67,
  //   "Longitude": -52.73,
  //   "Temperature": 32.74,
  //   "Wind Speed": 27.51,
  //   "Cluster": 5
  // },
  // {
  //   "City": "mantua",
  //   "Cloudiness": 29,
  //   "Humidity": 92,
  //   "Latitude": 45.17,
  //   "Longitude": 10.78,
  //   "Temperature": 41.25,
  //   "Wind Speed": 5.82,
  //   "Cluster": 6
  // },
  // {
  //   "City": "chapada dos guimaraes",
  //   "Cloudiness": 75,
  //   "Humidity": 78,
  //   "Latitude": -15.46,
  //   "Longitude": -55.75,
  //   "Temperature": 82.4,
  //   "Wind Speed": 3.36,
  //   "Cluster": 2
  // },
  // {
  //   "City": "changping",
  //   "Cloudiness": 17,
  //   "Humidity": 86,
  //   "Latitude": 40.22,
  //   "Longitude": 116.22,
  //   "Temperature": 36.99,
  //   "Wind Speed": 2.24,
  //   "Cluster": 6
  // },
  // {
  //   "City": "kachug",
  //   "Cloudiness": 100,
  //   "Humidity": 96,
  //   "Latitude": 53.96,
  //   "Longitude": 105.88,
  //   "Temperature": 7.5,
  //   "Wind Speed": 1.77,
  //   "Cluster": 11
  // },
  // {
  //   "City": "vila velha",
  //   "Cloudiness": 40,
  //   "Humidity": 78,
  //   "Latitude": -20.33,
  //   "Longitude": -40.29,
  //   "Temperature": 79.9,
  //   "Wind Speed": 9.17,
  //   "Cluster": 8
  // },
  // {
  //   "City": "okha",
  //   "Cloudiness": 93,
  //   "Humidity": 91,
  //   "Latitude": 53.57,
  //   "Longitude": 142.95,
  //   "Temperature": 1.31,
  //   "Wind Speed": 4.61,
  //   "Cluster": 11
  // },
  // {
  //   "City": "whitehorse",
  //   "Cloudiness": 75,
  //   "Humidity": 80,
  //   "Latitude": 60.72,
  //   "Longitude": -135.05,
  //   "Temperature": 31.39,
  //   "Wind Speed": 11.41,
  //   "Cluster": 0
  // },
  // {
  //   "City": "laguna",
  //   "Cloudiness": 1,
  //   "Humidity": 51,
  //   "Latitude": 38.42,
  //   "Longitude": -121.42,
  //   "Temperature": 63.81,
  //   "Wind Speed": 3.36,
  //   "Cluster": 3
  // },
  // {
  //   "City": "thinadhoo",
  //   "Cloudiness": 39,
  //   "Humidity": 76,
  //   "Latitude": 0.53,
  //   "Longitude": 72.93,
  //   "Temperature": 82.99,
  //   "Wind Speed": 15.77,
  //   "Cluster": 8
  // },
  // {
  //   "City": "margate",
  //   "Cloudiness": 20,
  //   "Humidity": 87,
  //   "Latitude": 51.38,
  //   "Longitude": 1.39,
  //   "Temperature": 47.53,
  //   "Wind Speed": 16.11,
  //   "Cluster": 6
  // },
  // {
  //   "City": "eyl",
  //   "Cloudiness": 32,
  //   "Humidity": 80,
  //   "Latitude": 7.98,
  //   "Longitude": 49.82,
  //   "Temperature": 77.54,
  //   "Wind Speed": 13.56,
  //   "Cluster": 8
  // },
  // {
  //   "City": "ixtapa",
  //   "Cloudiness": 5,
  //   "Humidity": 78,
  //   "Latitude": 20.7,
  //   "Longitude": -105.2,
  //   "Temperature": 75.94,
  //   "Wind Speed": 5.82,
  //   "Cluster": 10
  // },
  // {
  //   "City": "kahului",
  //   "Cloudiness": 40,
  //   "Humidity": 54,
  //   "Latitude": 20.89,
  //   "Longitude": -156.47,
  //   "Temperature": 74.53,
  //   "Wind Speed": 28.86,
  //   "Cluster": 8
  // },
  // {
  //   "City": "yima",
  //   "Cloudiness": 100,
  //   "Humidity": 58,
  //   "Latitude": 34.74,
  //   "Longitude": 111.88,
  //   "Temperature": 40.17,
  //   "Wind Speed": 2.71,
  //   "Cluster": 0
  // },
  // {
  //   "City": "canon city",
  //   "Cloudiness": 90,
  //   "Humidity": 63,
  //   "Latitude": 38.44,
  //   "Longitude": -105.24,
  //   "Temperature": 19.94,
  //   "Wind Speed": 10.29,
  //   "Cluster": 0
  // },
  // {
  //   "City": "talnakh",
  //   "Cloudiness": 75,
  //   "Humidity": 85,
  //   "Latitude": 69.49,
  //   "Longitude": 88.4,
  //   "Temperature": 14,
  //   "Wind Speed": 31.32,
  //   "Cluster": 0
  // },
  // {
  //   "City": "lompoc",
  //   "Cloudiness": 1,
  //   "Humidity": 55,
  //   "Latitude": 34.64,
  //   "Longitude": -120.46,
  //   "Temperature": 61.57,
  //   "Wind Speed": 11.41,
  //   "Cluster": 3
  // },
  // {
  //   "City": "condega",
  //   "Cloudiness": 1,
  //   "Humidity": 58,
  //   "Latitude": 13.37,
  //   "Longitude": -86.4,
  //   "Temperature": 75.42,
  //   "Wind Speed": 8.95,
  //   "Cluster": 3
  // },
  // {
  //   "City": "mount gambier",
  //   "Cloudiness": 90,
  //   "Humidity": 63,
  //   "Latitude": -37.83,
  //   "Longitude": 140.77,
  //   "Temperature": 60.8,
  //   "Wind Speed": 13.87,
  //   "Cluster": 9
  // },
  // {
  //   "City": "kavieng",
  //   "Cloudiness": 31,
  //   "Humidity": 74,
  //   "Latitude": -2.57,
  //   "Longitude": 150.8,
  //   "Temperature": 83.12,
  //   "Wind Speed": 9.86,
  //   "Cluster": 8
  // },
  // {
  //   "City": "boueni",
  //   "Cloudiness": 92,
  //   "Humidity": 94,
  //   "Latitude": -12.9,
  //   "Longitude": 45.08,
  //   "Temperature": 80.6,
  //   "Wind Speed": 2.24,
  //   "Cluster": 2
  // },
  // {
  //   "City": "la palma",
  //   "Cloudiness": 1,
  //   "Humidity": 59,
  //   "Latitude": 33.85,
  //   "Longitude": -118.05,
  //   "Temperature": 64.49,
  //   "Wind Speed": 6.93,
  //   "Cluster": 3
  // },
  // {
  //   "City": "baykit",
  //   "Cloudiness": 99,
  //   "Humidity": 96,
  //   "Latitude": 61.67,
  //   "Longitude": 96.37,
  //   "Temperature": 6.85,
  //   "Wind Speed": 3.27,
  //   "Cluster": 11
  // },
  // {
  //   "City": "jaitaran",
  //   "Cloudiness": 98,
  //   "Humidity": 39,
  //   "Latitude": 26.2,
  //   "Longitude": 73.94,
  //   "Temperature": 62.6,
  //   "Wind Speed": 5.97,
  //   "Cluster": 9
  // },
  // {
  //   "City": "mount isa",
  //   "Cloudiness": 7,
  //   "Humidity": 18,
  //   "Latitude": -20.73,
  //   "Longitude": 139.5,
  //   "Temperature": 89.6,
  //   "Wind Speed": 6.93,
  //   "Cluster": 4
  // },
  // {
  //   "City": "flinders",
  //   "Cloudiness": 0,
  //   "Humidity": 46,
  //   "Latitude": -34.58,
  //   "Longitude": 150.86,
  //   "Temperature": 74.34,
  //   "Wind Speed": 11.41,
  //   "Cluster": 3
  // },
  // {
  //   "City": "wuwei",
  //   "Cloudiness": 100,
  //   "Humidity": 55,
  //   "Latitude": 37.93,
  //   "Longitude": 102.64,
  //   "Temperature": 21.52,
  //   "Wind Speed": 3.53,
  //   "Cluster": 0
  // },
  // {
  //   "City": "belaya gora",
  //   "Cloudiness": 66,
  //   "Humidity": 96,
  //   "Latitude": 68.53,
  //   "Longitude": 146.42,
  //   "Temperature": -15.05,
  //   "Wind Speed": 5.06,
  //   "Cluster": 11
  // },
  // {
  //   "City": "kununurra",
  //   "Cloudiness": 80,
  //   "Humidity": 66,
  //   "Latitude": -15.77,
  //   "Longitude": 128.73,
  //   "Temperature": 89.6,
  //   "Wind Speed": 1.12,
  //   "Cluster": 2
  // },
  // {
  //   "City": "collie",
  //   "Cloudiness": 0,
  //   "Humidity": 32,
  //   "Latitude": -33.37,
  //   "Longitude": 116.15,
  //   "Temperature": 75.87,
  //   "Wind Speed": 11.63,
  //   "Cluster": 4
  // },
  // {
  //   "City": "koulamoutou",
  //   "Cloudiness": 100,
  //   "Humidity": 87,
  //   "Latitude": -1.13,
  //   "Longitude": 12.47,
  //   "Temperature": 74.55,
  //   "Wind Speed": 1.57,
  //   "Cluster": 2
  // },
  // {
  //   "City": "cape canaveral",
  //   "Cloudiness": 40,
  //   "Humidity": 88,
  //   "Latitude": 28.41,
  //   "Longitude": -80.6,
  //   "Temperature": 72.63,
  //   "Wind Speed": 3.36,
  //   "Cluster": 8
  // },
  // {
  //   "City": "olafsvik",
  //   "Cloudiness": 100,
  //   "Humidity": 86,
  //   "Latitude": 64.89,
  //   "Longitude": -23.71,
  //   "Temperature": 34.59,
  //   "Wind Speed": 40.87,
  //   "Cluster": 5
  // },
  // {
  //   "City": "yeppoon",
  //   "Cloudiness": 40,
  //   "Humidity": 59,
  //   "Latitude": -23.13,
  //   "Longitude": 150.73,
  //   "Temperature": 89.6,
  //   "Wind Speed": 4.7,
  //   "Cluster": 8
  // },
  // {
  //   "City": "sharya",
  //   "Cloudiness": 100,
  //   "Humidity": 93,
  //   "Latitude": 58.37,
  //   "Longitude": 45.51,
  //   "Temperature": 32.27,
  //   "Wind Speed": 7.54,
  //   "Cluster": 5
  // },
  // {
  //   "City": "tura",
  //   "Cloudiness": 68,
  //   "Humidity": 50,
  //   "Latitude": 25.52,
  //   "Longitude": 90.22,
  //   "Temperature": 62.6,
  //   "Wind Speed": 2.35,
  //   "Cluster": 9
  // },
  // {
  //   "City": "pouembout",
  //   "Cloudiness": 1,
  //   "Humidity": 56,
  //   "Latitude": -21.13,
  //   "Longitude": 164.9,
  //   "Temperature": 83.73,
  //   "Wind Speed": 6.4,
  //   "Cluster": 3
  // },
  // {
  //   "City": "port blair",
  //   "Cloudiness": 6,
  //   "Humidity": 84,
  //   "Latitude": 11.67,
  //   "Longitude": 92.75,
  //   "Temperature": 79.88,
  //   "Wind Speed": 16.69,
  //   "Cluster": 10
  // },
  // {
  //   "City": "pitimbu",
  //   "Cloudiness": 40,
  //   "Humidity": 78,
  //   "Latitude": -7.47,
  //   "Longitude": -34.81,
  //   "Temperature": 82.4,
  //   "Wind Speed": 6.93,
  //   "Cluster": 8
  // },
  // {
  //   "City": "saraland",
  //   "Cloudiness": 90,
  //   "Humidity": 100,
  //   "Latitude": 30.82,
  //   "Longitude": -88.07,
  //   "Temperature": 57.42,
  //   "Wind Speed": 4.7,
  //   "Cluster": 2
  // },
  // {
  //   "City": "norman wells",
  //   "Cloudiness": 75,
  //   "Humidity": 72,
  //   "Latitude": 65.28,
  //   "Longitude": -126.83,
  //   "Temperature": 10.4,
  //   "Wind Speed": 2.24,
  //   "Cluster": 0
  // },
  // {
  //   "City": "black river",
  //   "Cloudiness": 20,
  //   "Humidity": 78,
  //   "Latitude": 18.03,
  //   "Longitude": -77.85,
  //   "Temperature": 78.93,
  //   "Wind Speed": 10.29,
  //   "Cluster": 10
  // },
  // {
  //   "City": "aripuana",
  //   "Cloudiness": 100,
  //   "Humidity": 96,
  //   "Latitude": -9.17,
  //   "Longitude": -60.63,
  //   "Temperature": 76.12,
  //   "Wind Speed": 2.28,
  //   "Cluster": 2
  // },
  // {
  //   "City": "hohhot",
  //   "Cloudiness": 100,
  //   "Humidity": 67,
  //   "Latitude": 40.81,
  //   "Longitude": 111.65,
  //   "Temperature": 21.2,
  //   "Wind Speed": 4.47,
  //   "Cluster": 0
  // },
  // {
  //   "City": "portland",
  //   "Cloudiness": 1,
  //   "Humidity": 34,
  //   "Latitude": 45.52,
  //   "Longitude": -122.68,
  //   "Temperature": 51.21,
  //   "Wind Speed": 18.34,
  //   "Cluster": 4
  // },
  // {
  //   "City": "bassano",
  //   "Cloudiness": 0,
  //   "Humidity": 80,
  //   "Latitude": 50.78,
  //   "Longitude": -112.47,
  //   "Temperature": 17.28,
  //   "Wind Speed": 4,
  //   "Cluster": 7
  // },
  // {
  //   "City": "grootfontein",
  //   "Cloudiness": 99,
  //   "Humidity": 90,
  //   "Latitude": -19.57,
  //   "Longitude": 18.12,
  //   "Temperature": 66.4,
  //   "Wind Speed": 4.7,
  //   "Cluster": 2
  // },
  // {
  //   "City": "inhambane",
  //   "Cloudiness": 43,
  //   "Humidity": 77,
  //   "Latitude": -23.86,
  //   "Longitude": 35.38,
  //   "Temperature": 80.89,
  //   "Wind Speed": 7.54,
  //   "Cluster": 8
  // },
  // {
  //   "City": "grajau",
  //   "Cloudiness": 100,
  //   "Humidity": 92,
  //   "Latitude": -5.82,
  //   "Longitude": -46.14,
  //   "Temperature": 73.67,
  //   "Wind Speed": 2.73,
  //   "Cluster": 2
  // },
  // {
  //   "City": "meiganga",
  //   "Cloudiness": 23,
  //   "Humidity": 21,
  //   "Latitude": 6.52,
  //   "Longitude": 14.3,
  //   "Temperature": 68.49,
  //   "Wind Speed": 5.91,
  //   "Cluster": 4
  // },
  // {
  //   "City": "jalu",
  //   "Cloudiness": 0,
  //   "Humidity": 69,
  //   "Latitude": 29.03,
  //   "Longitude": 21.55,
  //   "Temperature": 54.09,
  //   "Wind Speed": 6.6,
  //   "Cluster": 3
  // },
  // {
  //   "City": "tamboril",
  //   "Cloudiness": 20,
  //   "Humidity": 94,
  //   "Latitude": 19.49,
  //   "Longitude": -70.61,
  //   "Temperature": 72.1,
  //   "Wind Speed": 9.17,
  //   "Cluster": 10
  // },
  // {
  //   "City": "dalvik",
  //   "Cloudiness": 100,
  //   "Humidity": 96,
  //   "Latitude": 65.97,
  //   "Longitude": -18.53,
  //   "Temperature": 31.71,
  //   "Wind Speed": 36.15,
  //   "Cluster": 5
  // },
  // {
  //   "City": "narsaq",
  //   "Cloudiness": 30,
  //   "Humidity": 39,
  //   "Latitude": 60.92,
  //   "Longitude": -46.05,
  //   "Temperature": 12.2,
  //   "Wind Speed": 13.87,
  //   "Cluster": 1
  // },
  // {
  //   "City": "jiwani",
  //   "Cloudiness": 36,
  //   "Humidity": 72,
  //   "Latitude": 25.05,
  //   "Longitude": 61.74,
  //   "Temperature": 73.38,
  //   "Wind Speed": 4.5,
  //   "Cluster": 8
  // },
  // {
  //   "City": "codrington",
  //   "Cloudiness": 100,
  //   "Humidity": 73,
  //   "Latitude": -38.27,
  //   "Longitude": 141.97,
  //   "Temperature": 58.77,
  //   "Wind Speed": 14.7,
  //   "Cluster": 2
  // },
  // {
  //   "City": "la ronge",
  //   "Cloudiness": 75,
  //   "Humidity": 56,
  //   "Latitude": 55.1,
  //   "Longitude": -105.28,
  //   "Temperature": 15.8,
  //   "Wind Speed": 4.7,
  //   "Cluster": 0
  // },
  // {
  //   "City": "caramay",
  //   "Cloudiness": 68,
  //   "Humidity": 75,
  //   "Latitude": 10.18,
  //   "Longitude": 119.24,
  //   "Temperature": 77.97,
  //   "Wind Speed": 11.36,
  //   "Cluster": 2
  // },
  // {
  //   "City": "constitucion",
  //   "Cloudiness": 0,
  //   "Humidity": 54,
  //   "Latitude": -35.33,
  //   "Longitude": -72.42,
  //   "Temperature": 61.7,
  //   "Wind Speed": 6.8,
  //   "Cluster": 3
  // },
  // {
  //   "City": "rochefort",
  //   "Cloudiness": 90,
  //   "Humidity": 87,
  //   "Latitude": 45.92,
  //   "Longitude": -1,
  //   "Temperature": 46.54,
  //   "Wind Speed": 6.93,
  //   "Cluster": 5
  // },
  // {
  //   "City": "filingue",
  //   "Cloudiness": 0,
  //   "Humidity": 14,
  //   "Latitude": 14.35,
  //   "Longitude": 3.32,
  //   "Temperature": 71.15,
  //   "Wind Speed": 12.28,
  //   "Cluster": 4
  // },
  // {
  //   "City": "huarmey",
  //   "Cloudiness": 57,
  //   "Humidity": 71,
  //   "Latitude": -10.07,
  //   "Longitude": -78.15,
  //   "Temperature": 73.49,
  //   "Wind Speed": 4.79,
  //   "Cluster": 8
  // },
  // {
  //   "City": "telsiai",
  //   "Cloudiness": 96,
  //   "Humidity": 88,
  //   "Latitude": 55.98,
  //   "Longitude": 22.25,
  //   "Temperature": 38.23,
  //   "Wind Speed": 10.2,
  //   "Cluster": 5
  // },
  // {
  //   "City": "ploemeur",
  //   "Cloudiness": 90,
  //   "Humidity": 81,
  //   "Latitude": 47.73,
  //   "Longitude": -3.43,
  //   "Temperature": 50.67,
  //   "Wind Speed": 14.99,
  //   "Cluster": 5
  // },
  // {
  //   "City": "rocha",
  //   "Cloudiness": 0,
  //   "Humidity": 80,
  //   "Latitude": -34.48,
  //   "Longitude": -54.33,
  //   "Temperature": 63.72,
  //   "Wind Speed": 5.48,
  //   "Cluster": 10
  // },
  // {
  //   "City": "ponta do sol",
  //   "Cloudiness": 40,
  //   "Humidity": 62,
  //   "Latitude": 32.67,
  //   "Longitude": -17.1,
  //   "Temperature": 55.62,
  //   "Wind Speed": 11.41,
  //   "Cluster": 8
  // },
  // {
  //   "City": "ekhabi",
  //   "Cloudiness": 93,
  //   "Humidity": 91,
  //   "Latitude": 53.51,
  //   "Longitude": 142.97,
  //   "Temperature": 1.31,
  //   "Wind Speed": 4.61,
  //   "Cluster": 11
  // },
  // {
  //   "City": "tezu",
  //   "Cloudiness": 95,
  //   "Humidity": 79,
  //   "Latitude": 27.92,
  //   "Longitude": 96.17,
  //   "Temperature": 57.81,
  //   "Wind Speed": 2.86,
  //   "Cluster": 2
  // },
  // {
  //   "City": "bowen",
  //   "Cloudiness": 40,
  //   "Humidity": 70,
  //   "Latitude": -20.02,
  //   "Longitude": 148.23,
  //   "Temperature": 89.51,
  //   "Wind Speed": 2.24,
  //   "Cluster": 8
  // },
  // {
  //   "City": "matamoros",
  //   "Cloudiness": 5,
  //   "Humidity": 19,
  //   "Latitude": 25.53,
  //   "Longitude": -103.25,
  //   "Temperature": 89.6,
  //   "Wind Speed": 6.93,
  //   "Cluster": 4
  // },
  // {
  //   "City": "sayyan",
  //   "Cloudiness": 2,
  //   "Humidity": 65,
  //   "Latitude": 15.17,
  //   "Longitude": 44.32,
  //   "Temperature": 55.15,
  //   "Wind Speed": 4.56,
  //   "Cluster": 3
  // },
  // {
  //   "City": "russell",
  //   "Cloudiness": 75,
  //   "Humidity": 93,
  //   "Latitude": 32.35,
  //   "Longitude": -85.2,
  //   "Temperature": 56.89,
  //   "Wind Speed": 5.82,
  //   "Cluster": 2
  // },
  // {
  //   "City": "mayskiy",
  //   "Cloudiness": 75,
  //   "Humidity": 100,
  //   "Latitude": 47.69,
  //   "Longitude": 40.1,
  //   "Temperature": 35.38,
  //   "Wind Speed": 11.18,
  //   "Cluster": 5
  // },
  // {
  //   "City": "varhaug",
  //   "Cloudiness": 75,
  //   "Humidity": 80,
  //   "Latitude": 58.61,
  //   "Longitude": 5.65,
  //   "Temperature": 40.66,
  //   "Wind Speed": 16.11,
  //   "Cluster": 5
  // },
  // {
  //   "City": "kasongo-lunda",
  //   "Cloudiness": 98,
  //   "Humidity": 95,
  //   "Latitude": -6.47,
  //   "Longitude": 16.82,
  //   "Temperature": 69.21,
  //   "Wind Speed": 2.04,
  //   "Cluster": 2
  // },
  // {
  //   "City": "faanui",
  //   "Cloudiness": 100,
  //   "Humidity": 73,
  //   "Latitude": -16.48,
  //   "Longitude": -151.75,
  //   "Temperature": 83.52,
  //   "Wind Speed": 17.02,
  //   "Cluster": 2
  // },
  // {
  //   "City": "aracaju",
  //   "Cloudiness": 40,
  //   "Humidity": 78,
  //   "Latitude": -10.91,
  //   "Longitude": -37.07,
  //   "Temperature": 82.4,
  //   "Wind Speed": 9.17,
  //   "Cluster": 8
  // },
  // {
  //   "City": "dicabisagan",
  //   "Cloudiness": 95,
  //   "Humidity": 73,
  //   "Latitude": 17.08,
  //   "Longitude": 122.42,
  //   "Temperature": 71.8,
  //   "Wind Speed": 11.01,
  //   "Cluster": 2
  // },
  // {
  //   "City": "coreau",
  //   "Cloudiness": 100,
  //   "Humidity": 93,
  //   "Latitude": -3.53,
  //   "Longitude": -40.66,
  //   "Temperature": 73.65,
  //   "Wind Speed": 2.66,
  //   "Cluster": 2
  // },
  // {
  //   "City": "oistins",
  //   "Cloudiness": 75,
  //   "Humidity": 73,
  //   "Latitude": 13.07,
  //   "Longitude": -59.53,
  //   "Temperature": 77,
  //   "Wind Speed": 24.16,
  //   "Cluster": 2
  // },
  // {
  //   "City": "padang",
  //   "Cloudiness": 35,
  //   "Humidity": 84,
  //   "Latitude": -0.95,
  //   "Longitude": 100.35,
  //   "Temperature": 69.4,
  //   "Wind Speed": 7.9,
  //   "Cluster": 8
  // },
  // {
  //   "City": "berezayka",
  //   "Cloudiness": 91,
  //   "Humidity": 94,
  //   "Latitude": 57.99,
  //   "Longitude": 33.9,
  //   "Temperature": 34.39,
  //   "Wind Speed": 7.96,
  //   "Cluster": 5
  // },
  // {
  //   "City": "emerald",
  //   "Cloudiness": 40,
  //   "Humidity": 62,
  //   "Latitude": -23.53,
  //   "Longitude": 148.17,
  //   "Temperature": 87.89,
  //   "Wind Speed": 5.82,
  //   "Cluster": 8
  // },
  // {
  //   "City": "kutum",
  //   "Cloudiness": 96,
  //   "Humidity": 35,
  //   "Latitude": 14.2,
  //   "Longitude": 24.67,
  //   "Temperature": 57.27,
  //   "Wind Speed": 7.78,
  //   "Cluster": 9
  // },
  // {
  //   "City": "nikolskoye",
  //   "Cloudiness": 75,
  //   "Humidity": 92,
  //   "Latitude": 59.7,
  //   "Longitude": 30.79,
  //   "Temperature": 36.84,
  //   "Wind Speed": 6.71,
  //   "Cluster": 5
  // },
  // {
  //   "City": "kosino",
  //   "Cloudiness": 100,
  //   "Humidity": 96,
  //   "Latitude": 58.41,
  //   "Longitude": 51.28,
  //   "Temperature": 32.09,
  //   "Wind Speed": 9.13,
  //   "Cluster": 5
  // },
  // {
  //   "City": "jiangkou",
  //   "Cloudiness": 75,
  //   "Humidity": 76,
  //   "Latitude": 25.49,
  //   "Longitude": 119.2,
  //   "Temperature": 55.4,
  //   "Wind Speed": 8.95,
  //   "Cluster": 2
  // },
  // {
  //   "City": "luderitz",
  //   "Cloudiness": 31,
  //   "Humidity": 95,
  //   "Latitude": -26.65,
  //   "Longitude": 15.16,
  //   "Temperature": 63.84,
  //   "Wind Speed": 12.37,
  //   "Cluster": 8
  // },
  // {
  //   "City": "dawlatabad",
  //   "Cloudiness": 0,
  //   "Humidity": 77,
  //   "Latitude": 36.41,
  //   "Longitude": 64.91,
  //   "Temperature": 33.53,
  //   "Wind Speed": 4.74,
  //   "Cluster": 6
  // },
  // {
  //   "City": "penzance",
  //   "Cloudiness": 100,
  //   "Humidity": 100,
  //   "Latitude": 50.12,
  //   "Longitude": -5.54,
  //   "Temperature": 49.03,
  //   "Wind Speed": 28.86,
  //   "Cluster": 5
  // },
  // {
  //   "City": "port jervis",
  //   "Cloudiness": 1,
  //   "Humidity": 47,
  //   "Latitude": 41.38,
  //   "Longitude": -74.69,
  //   "Temperature": 31.32,
  //   "Wind Speed": 5.7,
  //   "Cluster": 1
  // },
  // {
  //   "City": "ludvika",
  //   "Cloudiness": 0,
  //   "Humidity": 92,
  //   "Latitude": 60.15,
  //   "Longitude": 15.19,
  //   "Temperature": 25.75,
  //   "Wind Speed": 3.36,
  //   "Cluster": 6
  // },
  // {
  //   "City": "trstenik",
  //   "Cloudiness": 20,
  //   "Humidity": 100,
  //   "Latitude": 43.62,
  //   "Longitude": 21,
  //   "Temperature": 33.8,
  //   "Wind Speed": 2.24,
  //   "Cluster": 6
  // },
  // {
  //   "City": "teya",
  //   "Cloudiness": 100,
  //   "Humidity": 91,
  //   "Latitude": 60.38,
  //   "Longitude": 92.63,
  //   "Temperature": 14.18,
  //   "Wind Speed": 6.73,
  //   "Cluster": 11
  // },
  // {
  //   "City": "sabang",
  //   "Cloudiness": 0,
  //   "Humidity": 77,
  //   "Latitude": 5.89,
  //   "Longitude": 95.32,
  //   "Temperature": 82.85,
  //   "Wind Speed": 24.36,
  //   "Cluster": 10
  // },
  // {
  //   "City": "fort nelson",
  //   "Cloudiness": 75,
  //   "Humidity": 78,
  //   "Latitude": 58.81,
  //   "Longitude": -122.7,
  //   "Temperature": 15.8,
  //   "Wind Speed": 3.36,
  //   "Cluster": 0
  // },
  // {
  //   "City": "mayo",
  //   "Cloudiness": 1,
  //   "Humidity": 36,
  //   "Latitude": 38.89,
  //   "Longitude": -76.51,
  //   "Temperature": 41.49,
  //   "Wind Speed": 6.93,
  //   "Cluster": 1
  // },
  // {
  //   "City": "menongue",
  //   "Cloudiness": 100,
  //   "Humidity": 93,
  //   "Latitude": -14.66,
  //   "Longitude": 17.69,
  //   "Temperature": 64.83,
  //   "Wind Speed": 5.97,
  //   "Cluster": 2
  // },
  // {
  //   "City": "bilma",
  //   "Cloudiness": 0,
  //   "Humidity": 30,
  //   "Latitude": 18.69,
  //   "Longitude": 12.92,
  //   "Temperature": 61,
  //   "Wind Speed": 5.7,
  //   "Cluster": 4
  // },
  // {
  //   "City": "saint-pierre",
  //   "Cloudiness": 0,
  //   "Humidity": 60,
  //   "Latitude": -21.34,
  //   "Longitude": 55.48,
  //   "Temperature": 68.76,
  //   "Wind Speed": 8.05,
  //   "Cluster": 3
  // },
  // {
  //   "City": "bundaberg",
  //   "Cloudiness": 0,
  //   "Humidity": 62,
  //   "Latitude": -24.85,
  //   "Longitude": 152.35,
  //   "Temperature": 91.76,
  //   "Wind Speed": 8.05,
  //   "Cluster": 3
  // },
  // {
  //   "City": "hukuntsi",
  //   "Cloudiness": 48,
  //   "Humidity": 61,
  //   "Latitude": -24,
  //   "Longitude": 21.75,
  //   "Temperature": 73.78,
  //   "Wind Speed": 5.66,
  //   "Cluster": 8
  // },
  // {
  //   "City": "pierre",
  //   "Cloudiness": 20,
  //   "Humidity": 60,
  //   "Latitude": 44.37,
  //   "Longitude": -100.35,
  //   "Temperature": 10.4,
  //   "Wind Speed": 6.93,
  //   "Cluster": 1
  // },
  // {
  //   "City": "puerto padre",
  //   "Cloudiness": 20,
  //   "Humidity": 65,
  //   "Latitude": 21.2,
  //   "Longitude": -76.6,
  //   "Temperature": 78.8,
  //   "Wind Speed": 14.99,
  //   "Cluster": 10
  // },
  // {
  //   "City": "tsiroanomandidy",
  //   "Cloudiness": 100,
  //   "Humidity": 93,
  //   "Latitude": -18.77,
  //   "Longitude": 46.03,
  //   "Temperature": 69.57,
  //   "Wind Speed": 2.19,
  //   "Cluster": 2
  // },
  // {
  //   "City": "kloulklubed",
  //   "Cloudiness": 75,
  //   "Humidity": 70,
  //   "Latitude": 7.04,
  //   "Longitude": 134.26,
  //   "Temperature": 84.2,
  //   "Wind Speed": 13.87,
  //   "Cluster": 2
  // },
  // {
  //   "City": "pacifica",
  //   "Cloudiness": 1,
  //   "Humidity": 27,
  //   "Latitude": 37.61,
  //   "Longitude": -122.49,
  //   "Temperature": 62.83,
  //   "Wind Speed": 5.01,
  //   "Cluster": 4
  // },
  // {
  //   "City": "brandon",
  //   "Cloudiness": 90,
  //   "Humidity": 78,
  //   "Latitude": 27.94,
  //   "Longitude": -82.29,
  //   "Temperature": 74.12,
  //   "Wind Speed": 6.91,
  //   "Cluster": 2
  // },
  // {
  //   "City": "quatre cocos",
  //   "Cloudiness": 9,
  //   "Humidity": 85,
  //   "Latitude": -20.21,
  //   "Longitude": 57.76,
  //   "Temperature": 73,
  //   "Wind Speed": 3,
  //   "Cluster": 10
  // },
  // {
  //   "City": "mackay",
  //   "Cloudiness": 40,
  //   "Humidity": 66,
  //   "Latitude": -21.15,
  //   "Longitude": 149.2,
  //   "Temperature": 91.29,
  //   "Wind Speed": 5.82,
  //   "Cluster": 8
  // },
  // {
  //   "City": "ibia",
  //   "Cloudiness": 99,
  //   "Humidity": 88,
  //   "Latitude": -19.48,
  //   "Longitude": -46.54,
  //   "Temperature": 69.89,
  //   "Wind Speed": 5.82,
  //   "Cluster": 2
  // },
  // {
  //   "City": "savalou",
  //   "Cloudiness": 0,
  //   "Humidity": 72,
  //   "Latitude": 7.93,
  //   "Longitude": 1.98,
  //   "Temperature": 78.12,
  //   "Wind Speed": 6.29,
  //   "Cluster": 10
  // },
  // {
  //   "City": "adra",
  //   "Cloudiness": 0,
  //   "Humidity": 71,
  //   "Latitude": 36.75,
  //   "Longitude": -3.02,
  //   "Temperature": 46.11,
  //   "Wind Speed": 10.29,
  //   "Cluster": 3
  // },
  // {
  //   "City": "port hardy",
  //   "Cloudiness": 75,
  //   "Humidity": 51,
  //   "Latitude": 50.7,
  //   "Longitude": -127.42,
  //   "Temperature": 46.4,
  //   "Wind Speed": 6.93,
  //   "Cluster": 9
  // },
  // {
  //   "City": "olindina",
  //   "Cloudiness": 22,
  //   "Humidity": 83,
  //   "Latitude": -11.37,
  //   "Longitude": -38.33,
  //   "Temperature": 74.82,
  //   "Wind Speed": 9.42,
  //   "Cluster": 10
  // },
  // {
  //   "City": "comodoro rivadavia",
  //   "Cloudiness": 90,
  //   "Humidity": 45,
  //   "Latitude": -45.87,
  //   "Longitude": -67.5,
  //   "Temperature": 62.6,
  //   "Wind Speed": 6.93,
  //   "Cluster": 9
  // },
  // {
  //   "City": "namibe",
  //   "Cloudiness": 77,
  //   "Humidity": 71,
  //   "Latitude": -15.2,
  //   "Longitude": 12.15,
  //   "Temperature": 74.34,
  //   "Wind Speed": 10.04,
  //   "Cluster": 2
  // },
  // {
  //   "City": "dingle",
  //   "Cloudiness": 100,
  //   "Humidity": 88,
  //   "Latitude": 11,
  //   "Longitude": 122.67,
  //   "Temperature": 73.38,
  //   "Wind Speed": 15.95,
  //   "Cluster": 2
  // },
  // {
  //   "City": "esperance",
  //   "Cloudiness": 87,
  //   "Humidity": 60,
  //   "Latitude": -33.87,
  //   "Longitude": 121.9,
  //   "Temperature": 68,
  //   "Wind Speed": 10.29,
  //   "Cluster": 9
  // },
  // {
  //   "City": "kaeo",
  //   "Cloudiness": 0,
  //   "Humidity": 59,
  //   "Latitude": -35.1,
  //   "Longitude": 173.78,
  //   "Temperature": 82.99,
  //   "Wind Speed": 11.01,
  //   "Cluster": 3
  // },
  // {
  //   "City": "mae sai",
  //   "Cloudiness": 19,
  //   "Humidity": 100,
  //   "Latitude": 20.43,
  //   "Longitude": 99.88,
  //   "Temperature": 62.96,
  //   "Wind Speed": 1.95,
  //   "Cluster": 10
  // },
  // {
  //   "City": "palmdale",
  //   "Cloudiness": 0,
  //   "Humidity": 30,
  //   "Latitude": 34.58,
  //   "Longitude": -118.12,
  //   "Temperature": 64.8,
  //   "Wind Speed": 12.75,
  //   "Cluster": 4
  // },
  // {
  //   "City": "gat",
  //   "Cloudiness": 75,
  //   "Humidity": 93,
  //   "Latitude": 31.61,
  //   "Longitude": 34.76,
  //   "Temperature": 53.11,
  //   "Wind Speed": 5.82,
  //   "Cluster": 2
  // },
  // {
  //   "City": "praia",
  //   "Cloudiness": 82,
  //   "Humidity": 83,
  //   "Latitude": 14.92,
  //   "Longitude": -23.51,
  //   "Temperature": 69.44,
  //   "Wind Speed": 14.56,
  //   "Cluster": 2
  // },
  // {
  //   "City": "hambantota",
  //   "Cloudiness": 0,
  //   "Humidity": 74,
  //   "Latitude": 6.12,
  //   "Longitude": 81.12,
  //   "Temperature": 78.82,
  //   "Wind Speed": 23.76,
  //   "Cluster": 10
  // },
  // {
  //   "City": "deer lake",
  //   "Cloudiness": 90,
  //   "Humidity": 86,
  //   "Latitude": 49.17,
  //   "Longitude": -57.43,
  //   "Temperature": 26.37,
  //   "Wind Speed": 16.11,
  //   "Cluster": 5
  // },
  // {
  //   "City": "taltal",
  //   "Cloudiness": 96,
  //   "Humidity": 85,
  //   "Latitude": -25.4,
  //   "Longitude": -70.48,
  //   "Temperature": 62.92,
  //   "Wind Speed": 2.33,
  //   "Cluster": 2
  // },
  // {
  //   "City": "te anau",
  //   "Cloudiness": 100,
  //   "Humidity": 71,
  //   "Latitude": -45.42,
  //   "Longitude": 167.72,
  //   "Temperature": 55.56,
  //   "Wind Speed": 3.02,
  //   "Cluster": 2
  // },
  // {
  //   "City": "shubarshi",
  //   "Cloudiness": 48,
  //   "Humidity": 84,
  //   "Latitude": 48.59,
  //   "Longitude": 57.19,
  //   "Temperature": 21.56,
  //   "Wind Speed": 11.59,
  //   "Cluster": 6
  // },
  // {
  //   "City": "fortuna",
  //   "Cloudiness": 1,
  //   "Humidity": 87,
  //   "Latitude": 40.6,
  //   "Longitude": -124.16,
  //   "Temperature": 50.88,
  //   "Wind Speed": 12.75,
  //   "Cluster": 10
  // },
  // {
  //   "City": "yar-sale",
  //   "Cloudiness": 98,
  //   "Humidity": 85,
  //   "Latitude": 66.83,
  //   "Longitude": 70.83,
  //   "Temperature": 16.25,
  //   "Wind Speed": 5.75,
  //   "Cluster": 11
  // },
  // {
  //   "City": "atbasar",
  //   "Cloudiness": 100,
  //   "Humidity": 86,
  //   "Latitude": 51.8,
  //   "Longitude": 68.33,
  //   "Temperature": 17.35,
  //   "Wind Speed": 15.68,
  //   "Cluster": 5
  // },
  // {
  //   "City": "san patricio",
  //   "Cloudiness": 20,
  //   "Humidity": 74,
  //   "Latitude": 19.22,
  //   "Longitude": -104.7,
  //   "Temperature": 84.2,
  //   "Wind Speed": 11.41,
  //   "Cluster": 10
  // },
  // {
  //   "City": "ugoofaaru",
  //   "Cloudiness": 0,
  //   "Humidity": 73,
  //   "Latitude": 5.67,
  //   "Longitude": 73,
  //   "Temperature": 80.64,
  //   "Wind Speed": 13.04,
  //   "Cluster": 10
  // },
  // {
  //   "City": "pak phanang",
  //   "Cloudiness": 54,
  //   "Humidity": 87,
  //   "Latitude": 8.35,
  //   "Longitude": 100.2,
  //   "Temperature": 76.42,
  //   "Wind Speed": 5.73,
  //   "Cluster": 8
  // },
  // {
  //   "City": "kuvandyk",
  //   "Cloudiness": 93,
  //   "Humidity": 96,
  //   "Latitude": 51.48,
  //   "Longitude": 57.36,
  //   "Temperature": 21.79,
  //   "Wind Speed": 8.23,
  //   "Cluster": 5
  // },
  // {
  //   "City": "beringovskiy",
  //   "Cloudiness": 5,
  //   "Humidity": 85,
  //   "Latitude": 63.05,
  //   "Longitude": 179.32,
  //   "Temperature": -11.27,
  //   "Wind Speed": 20.24,
  //   "Cluster": 7
  // },
  // {
  //   "City": "ampanihy",
  //   "Cloudiness": 16,
  //   "Humidity": 84,
  //   "Latitude": -24.7,
  //   "Longitude": 44.75,
  //   "Temperature": 75.54,
  //   "Wind Speed": 8.88,
  //   "Cluster": 10
  // },
  // {
  //   "City": "orsha",
  //   "Cloudiness": 100,
  //   "Humidity": 85,
  //   "Latitude": 54.52,
  //   "Longitude": 30.41,
  //   "Temperature": 36,
  //   "Wind Speed": 8.99,
  //   "Cluster": 5
  // },
  // {
  //   "City": "hervey bay",
  //   "Cloudiness": 0,
  //   "Humidity": 62,
  //   "Latitude": -25.3,
  //   "Longitude": 152.85,
  //   "Temperature": 90.99,
  //   "Wind Speed": 8.05,
  //   "Cluster": 3
  // },
  // {
  //   "City": "belmonte",
  //   "Cloudiness": 0,
  //   "Humidity": 83,
  //   "Latitude": -15.86,
  //   "Longitude": -38.88,
  //   "Temperature": 78.8,
  //   "Wind Speed": 3.36,
  //   "Cluster": 10
  // },
  // {
  //   "City": "macamic",
  //   "Cloudiness": 5,
  //   "Humidity": 76,
  //   "Latitude": 48.75,
  //   "Longitude": -79,
  //   "Temperature": -4,
  //   "Wind Speed": 3.36,
  //   "Cluster": 7
  // },
  // {
  //   "City": "la rioja",
  //   "Cloudiness": 12,
  //   "Humidity": 93,
  //   "Latitude": 42.25,
  //   "Longitude": -2.5,
  //   "Temperature": 34.21,
  //   "Wind Speed": 3.22,
  //   "Cluster": 6
  // },
  // {
  //   "City": "dubovskoye",
  //   "Cloudiness": 100,
  //   "Humidity": 85,
  //   "Latitude": 47.41,
  //   "Longitude": 42.76,
  //   "Temperature": 33.22,
  //   "Wind Speed": 4.59,
  //   "Cluster": 5
  // },
  // {
  //   "City": "morondava",
  //   "Cloudiness": 73,
  //   "Humidity": 96,
  //   "Latitude": -20.28,
  //   "Longitude": 44.28,
  //   "Temperature": 75.7,
  //   "Wind Speed": 2.53,
  //   "Cluster": 2
  // },
  // {
  //   "City": "chapais",
  //   "Cloudiness": 1,
  //   "Humidity": 68,
  //   "Latitude": 49.78,
  //   "Longitude": -74.85,
  //   "Temperature": -14.8,
  //   "Wind Speed": 5.82,
  //   "Cluster": 7
  // },
  // {
  //   "City": "makakilo city",
  //   "Cloudiness": 90,
  //   "Humidity": 83,
  //   "Latitude": 21.35,
  //   "Longitude": -158.09,
  //   "Temperature": 76.95,
  //   "Wind Speed": 9.17,
  //   "Cluster": 2
  // },
  // {
  //   "City": "vyazemskiy",
  //   "Cloudiness": 0,
  //   "Humidity": 80,
  //   "Latitude": 47.54,
  //   "Longitude": 134.75,
  //   "Temperature": 9.37,
  //   "Wind Speed": 10.2,
  //   "Cluster": 7
  // },
  // {
  //   "City": "grindavik",
  //   "Cloudiness": 90,
  //   "Humidity": 100,
  //   "Latitude": 63.84,
  //   "Longitude": -22.43,
  //   "Temperature": 33.8,
  //   "Wind Speed": 23.04,
  //   "Cluster": 5
  // },
  // {
  //   "City": "octeville",
  //   "Cloudiness": 75,
  //   "Humidity": 87,
  //   "Latitude": 49.63,
  //   "Longitude": -1.64,
  //   "Temperature": 47.5,
  //   "Wind Speed": 19.46,
  //   "Cluster": 5
  // },
  // {
  //   "City": "palmer",
  //   "Cloudiness": 20,
  //   "Humidity": 39,
  //   "Latitude": 42.16,
  //   "Longitude": -72.33,
  //   "Temperature": 29.21,
  //   "Wind Speed": 3.36,
  //   "Cluster": 1
  // },
  // {
  //   "City": "roebourne",
  //   "Cloudiness": 0,
  //   "Humidity": 47,
  //   "Latitude": -20.78,
  //   "Longitude": 117.13,
  //   "Temperature": 90.81,
  //   "Wind Speed": 5.53,
  //   "Cluster": 3
  // },
  // {
  //   "City": "saint-augustin",
  //   "Cloudiness": 100,
  //   "Humidity": 93,
  //   "Latitude": 51.23,
  //   "Longitude": -58.65,
  //   "Temperature": 24.64,
  //   "Wind Speed": 19.46,
  //   "Cluster": 5
  // },
  // {
  //   "City": "salalah",
  //   "Cloudiness": 40,
  //   "Humidity": 78,
  //   "Latitude": 17.02,
  //   "Longitude": 54.09,
  //   "Temperature": 73.4,
  //   "Wind Speed": 4.7,
  //   "Cluster": 8
  // },
  // {
  //   "City": "cheremukhovo",
  //   "Cloudiness": 0,
  //   "Humidity": 92,
  //   "Latitude": 60.35,
  //   "Longitude": 59.99,
  //   "Temperature": 20.32,
  //   "Wind Speed": 2.26,
  //   "Cluster": 7
  // },
  // {
  //   "City": "asau",
  //   "Cloudiness": 39,
  //   "Humidity": 82,
  //   "Latitude": 46.43,
  //   "Longitude": 26.4,
  //   "Temperature": 32.54,
  //   "Wind Speed": 5.82,
  //   "Cluster": 6
  // },
  // {
  //   "City": "beloha",
  //   "Cloudiness": 0,
  //   "Humidity": 87,
  //   "Latitude": -25.17,
  //   "Longitude": 45.05,
  //   "Temperature": 72.91,
  //   "Wind Speed": 11.25,
  //   "Cluster": 10
  // },
  // {
  //   "City": "ubinskoye",
  //   "Cloudiness": 100,
  //   "Humidity": 95,
  //   "Latitude": 55.31,
  //   "Longitude": 79.68,
  //   "Temperature": 30.9,
  //   "Wind Speed": 12.33,
  //   "Cluster": 5
  // },
  // {
  //   "City": "muscatine",
  //   "Cloudiness": 90,
  //   "Humidity": 62,
  //   "Latitude": 41.47,
  //   "Longitude": -91.13,
  //   "Temperature": 19.72,
  //   "Wind Speed": 9.17,
  //   "Cluster": 0
  // },
  // {
  //   "City": "saint anthony",
  //   "Cloudiness": 1,
  //   "Humidity": 50,
  //   "Latitude": 45.02,
  //   "Longitude": -93.22,
  //   "Temperature": 5.9,
  //   "Wind Speed": 4.7,
  //   "Cluster": 1
  // },
  // {
  //   "City": "sobolevo",
  //   "Cloudiness": 100,
  //   "Humidity": 87,
  //   "Latitude": 54.43,
  //   "Longitude": 31.9,
  //   "Temperature": 34.5,
  //   "Wind Speed": 6.91,
  //   "Cluster": 5
  // },
  // {
  //   "City": "itarema",
  //   "Cloudiness": 100,
  //   "Humidity": 93,
  //   "Latitude": -2.92,
  //   "Longitude": -39.92,
  //   "Temperature": 75.7,
  //   "Wind Speed": 4.05,
  //   "Cluster": 2
  // },
  // {
  //   "City": "kill",
  //   "Cloudiness": 100,
  //   "Humidity": 94,
  //   "Latitude": 52.18,
  //   "Longitude": -7.33,
  //   "Temperature": 49.15,
  //   "Wind Speed": 11.01,
  //   "Cluster": 5
  // },
  // {
  //   "City": "palembang",
  //   "Cloudiness": 100,
  //   "Humidity": 96,
  //   "Latitude": -2.92,
  //   "Longitude": 104.75,
  //   "Temperature": 74.5,
  //   "Wind Speed": 3.91,
  //   "Cluster": 2
  // },
  // {
  //   "City": "fort frances",
  //   "Cloudiness": 1,
  //   "Humidity": 54,
  //   "Latitude": 48.6,
  //   "Longitude": -93.4,
  //   "Temperature": -1.93,
  //   "Wind Speed": 4.7,
  //   "Cluster": 1
  // },
  // {
  //   "City": "shahpur",
  //   "Cloudiness": 0,
  //   "Humidity": 70,
  //   "Latitude": 16.7,
  //   "Longitude": 76.83,
  //   "Temperature": 67.35,
  //   "Wind Speed": 7.4,
  //   "Cluster": 3
  // },
  // {
  //   "City": "acapulco",
  //   "Cloudiness": 5,
  //   "Humidity": 62,
  //   "Latitude": 16.86,
  //   "Longitude": -99.89,
  //   "Temperature": 84.2,
  //   "Wind Speed": 9.17,
  //   "Cluster": 3
  // },
  // {
  //   "City": "pacific grove",
  //   "Cloudiness": 1,
  //   "Humidity": 48,
  //   "Latitude": 36.62,
  //   "Longitude": -121.92,
  //   "Temperature": 59.77,
  //   "Wind Speed": 9.17,
  //   "Cluster": 3
  // },
  // {
  //   "City": "kozhevnikovo",
  //   "Cloudiness": 91,
  //   "Humidity": 91,
  //   "Latitude": 56.26,
  //   "Longitude": 83.97,
  //   "Temperature": 25,
  //   "Wind Speed": 7.83,
  //   "Cluster": 5
  // },
  // {
  //   "City": "vestmannaeyjar",
  //   "Cloudiness": 100,
  //   "Humidity": 70,
  //   "Latitude": 63.44,
  //   "Longitude": -20.27,
  //   "Temperature": 37.36,
  //   "Wind Speed": 30.31,
  //   "Cluster": 5
  // },
  // {
  //   "City": "masuguru",
  //   "Cloudiness": 47,
  //   "Humidity": 92,
  //   "Latitude": -11.37,
  //   "Longitude": 38.42,
  //   "Temperature": 73.92,
  //   "Wind Speed": 1.9,
  //   "Cluster": 8
  // },
  // {
  //   "City": "boralday",
  //   "Cloudiness": 75,
  //   "Humidity": 92,
  //   "Latitude": 43.36,
  //   "Longitude": 76.86,
  //   "Temperature": 15.8,
  //   "Wind Speed": 4.47,
  //   "Cluster": 11
  // },
  // {
  //   "City": "mortka",
  //   "Cloudiness": 76,
  //   "Humidity": 95,
  //   "Latitude": 59.33,
  //   "Longitude": 66.02,
  //   "Temperature": 25.74,
  //   "Wind Speed": 6.8,
  //   "Cluster": 5
  // },
  // {
  //   "City": "tlalchapa",
  //   "Cloudiness": 0,
  //   "Humidity": 19,
  //   "Latitude": 18.4,
  //   "Longitude": -100.47,
  //   "Temperature": 92.79,
  //   "Wind Speed": 2.26,
  //   "Cluster": 4
  // },
  // {
  //   "City": "washington",
  //   "Cloudiness": 1,
  //   "Humidity": 30,
  //   "Latitude": 47.5,
  //   "Longitude": -120.5,
  //   "Temperature": 39.54,
  //   "Wind Speed": 9.17,
  //   "Cluster": 1
  // },
  // {
  //   "City": "severo-kurilsk",
  //   "Cloudiness": 45,
  //   "Humidity": 84,
  //   "Latitude": 50.68,
  //   "Longitude": 156.12,
  //   "Temperature": 20.08,
  //   "Wind Speed": 10.16,
  //   "Cluster": 6
  // },
  // {
  //   "City": "arcachon",
  //   "Cloudiness": 90,
  //   "Humidity": 100,
  //   "Latitude": 44.59,
  //   "Longitude": -1.05,
  //   "Temperature": 38.44,
  //   "Wind Speed": 2.84,
  //   "Cluster": 5
  // },
  // {
  //   "City": "garwa",
  //   "Cloudiness": 100,
  //   "Humidity": 25,
  //   "Latitude": 24.18,
  //   "Longitude": 83.82,
  //   "Temperature": 56.28,
  //   "Wind Speed": 1.9,
  //   "Cluster": 9
  // },
  // {
  //   "City": "tacoronte",
  //   "Cloudiness": 75,
  //   "Humidity": 87,
  //   "Latitude": 28.48,
  //   "Longitude": -16.41,
  //   "Temperature": 56.59,
  //   "Wind Speed": 9.17,
  //   "Cluster": 2
  // },
  // {
  //   "City": "praia da vitoria",
  //   "Cloudiness": 40,
  //   "Humidity": 62,
  //   "Latitude": 38.73,
  //   "Longitude": -27.07,
  //   "Temperature": 55.4,
  //   "Wind Speed": 25.05,
  //   "Cluster": 8
  // },
  // {
  //   "City": "maldonado",
  //   "Cloudiness": 20,
  //   "Humidity": 78,
  //   "Latitude": -34.67,
  //   "Longitude": -54.92,
  //   "Temperature": 71.6,
  //   "Wind Speed": 2.24,
  //   "Cluster": 10
  // },
  // {
  //   "City": "metsavan",
  //   "Cloudiness": 90,
  //   "Humidity": 86,
  //   "Latitude": 41.2,
  //   "Longitude": 44.23,
  //   "Temperature": 30.2,
  //   "Wind Speed": 1.86,
  //   "Cluster": 5
  // },
  // {
  //   "City": "ribeira grande",
  //   "Cloudiness": 34,
  //   "Humidity": 73,
  //   "Latitude": 38.52,
  //   "Longitude": -28.7,
  //   "Temperature": 51.64,
  //   "Wind Speed": 20.04,
  //   "Cluster": 6
  // },
  // {
  //   "City": "sitka",
  //   "Cloudiness": 90,
  //   "Humidity": 86,
  //   "Latitude": 57.05,
  //   "Longitude": -135.33,
  //   "Temperature": 38.86,
  //   "Wind Speed": 13.87,
  //   "Cluster": 5
  // },
  // {
  //   "City": "henties bay",
  //   "Cloudiness": 100,
  //   "Humidity": 92,
  //   "Latitude": -22.12,
  //   "Longitude": 14.28,
  //   "Temperature": 64.99,
  //   "Wind Speed": 4.9,
  //   "Cluster": 2
  // },
  // {
  //   "City": "marzuq",
  //   "Cloudiness": 0,
  //   "Humidity": 48,
  //   "Latitude": 14.4,
  //   "Longitude": 46.47,
  //   "Temperature": 63.64,
  //   "Wind Speed": 3.6,
  //   "Cluster": 3
  // },
  // {
  //   "City": "pozo colorado",
  //   "Cloudiness": 92,
  //   "Humidity": 49,
  //   "Latitude": -23.49,
  //   "Longitude": -58.8,
  //   "Temperature": 89.44,
  //   "Wind Speed": 2.37,
  //   "Cluster": 9
  // },
  // {
  //   "City": "bay saint louis",
  //   "Cloudiness": 90,
  //   "Humidity": 93,
  //   "Latitude": 30.31,
  //   "Longitude": -89.33,
  //   "Temperature": 59.38,
  //   "Wind Speed": 21.92,
  //   "Cluster": 2
  // },
  // {
  //   "City": "praya",
  //   "Cloudiness": 82,
  //   "Humidity": 83,
  //   "Latitude": 14.92,
  //   "Longitude": -23.51,
  //   "Temperature": 69.44,
  //   "Wind Speed": 14.56,
  //   "Cluster": 2
  // },
  // {
  //   "City": "beira",
  //   "Cloudiness": 27,
  //   "Humidity": 73,
  //   "Latitude": -19.84,
  //   "Longitude": 34.84,
  //   "Temperature": 83.64,
  //   "Wind Speed": 4.79,
  //   "Cluster": 8
  // },
  // {
  //   "City": "broken hill",
  //   "Cloudiness": 55,
  //   "Humidity": 45,
  //   "Latitude": -31.95,
  //   "Longitude": 141.43,
  //   "Temperature": 66.2,
  //   "Wind Speed": 10.29,
  //   "Cluster": 9
  // },
  // {
  //   "City": "chikwawa",
  //   "Cloudiness": 63,
  //   "Humidity": 93,
  //   "Latitude": -16.03,
  //   "Longitude": 34.8,
  //   "Temperature": 67.08,
  //   "Wind Speed": 3.47,
  //   "Cluster": 8
  // },
  // {
  //   "City": "college",
  //   "Cloudiness": 75,
  //   "Humidity": 72,
  //   "Latitude": 64.86,
  //   "Longitude": -147.8,
  //   "Temperature": 16.5,
  //   "Wind Speed": 5.82,
  //   "Cluster": 0
  // },
  // {
  //   "City": "saint-francois",
  //   "Cloudiness": 90,
  //   "Humidity": 75,
  //   "Latitude": 46.42,
  //   "Longitude": 3.91,
  //   "Temperature": 43.75,
  //   "Wind Speed": 6.93,
  //   "Cluster": 5
  // },
  // {
  //   "City": "mago",
  //   "Cloudiness": 100,
  //   "Humidity": 92,
  //   "Latitude": 53.25,
  //   "Longitude": 140.18,
  //   "Temperature": 6.94,
  //   "Wind Speed": 1.12,
  //   "Cluster": 11
  // },
  // {
  //   "City": "arlit",
  //   "Cloudiness": 0,
  //   "Humidity": 19,
  //   "Latitude": 18.74,
  //   "Longitude": 7.39,
  //   "Temperature": 66.22,
  //   "Wind Speed": 13.38,
  //   "Cluster": 4
  // },
  // {
  //   "City": "juegang",
  //   "Cloudiness": 0,
  //   "Humidity": 80,
  //   "Latitude": 32.32,
  //   "Longitude": 121.19,
  //   "Temperature": 48.99,
  //   "Wind Speed": 4.5,
  //   "Cluster": 3
  // },
  // {
  //   "City": "ilo",
  //   "Cloudiness": 87,
  //   "Humidity": 88,
  //   "Latitude": -17.64,
  //   "Longitude": -71.34,
  //   "Temperature": 72.73,
  //   "Wind Speed": 1.52,
  //   "Cluster": 2
  // },
  // {
  //   "City": "carballo",
  //   "Cloudiness": 0,
  //   "Humidity": 100,
  //   "Latitude": 43.21,
  //   "Longitude": -8.69,
  //   "Temperature": 39.85,
  //   "Wind Speed": 5.82,
  //   "Cluster": 6
  // },
  // {
  //   "City": "jiayuguan",
  //   "Cloudiness": 0,
  //   "Humidity": 55,
  //   "Latitude": 39.82,
  //   "Longitude": 98.3,
  //   "Temperature": 19.35,
  //   "Wind Speed": 7.31,
  //   "Cluster": 1
  // },
  // {
  //   "City": "sendhwa",
  //   "Cloudiness": 0,
  //   "Humidity": 49,
  //   "Latitude": 21.68,
  //   "Longitude": 75.1,
  //   "Temperature": 65.05,
  //   "Wind Speed": 1.16,
  //   "Cluster": 3
  // },
  // {
  //   "City": "hay river",
  //   "Cloudiness": 75,
  //   "Humidity": 63,
  //   "Latitude": 60.82,
  //   "Longitude": -115.8,
  //   "Temperature": 28.4,
  //   "Wind Speed": 9.17,
  //   "Cluster": 0
  // },
  // {
  //   "City": "korla",
  //   "Cloudiness": 100,
  //   "Humidity": 88,
  //   "Latitude": 41.76,
  //   "Longitude": 86.15,
  //   "Temperature": 26.01,
  //   "Wind Speed": 4.38,
  //   "Cluster": 5
  // },
  // {
  //   "City": "ahipara",
  //   "Cloudiness": 37,
  //   "Humidity": 84,
  //   "Latitude": -35.17,
  //   "Longitude": 173.17,
  //   "Temperature": 70.09,
  //   "Wind Speed": 9.86,
  //   "Cluster": 8
  // },
  // {
  //   "City": "sesheke",
  //   "Cloudiness": 44,
  //   "Humidity": 97,
  //   "Latitude": -17.48,
  //   "Longitude": 24.3,
  //   "Temperature": 67.12,
  //   "Wind Speed": 3.76,
  //   "Cluster": 8
  // },
  // {
  //   "City": "mehnagar",
  //   "Cloudiness": 40,
  //   "Humidity": 82,
  //   "Latitude": 25.88,
  //   "Longitude": 83.12,
  //   "Temperature": 59,
  //   "Wind Speed": 3.36,
  //   "Cluster": 8
  // },
  // {
  //   "City": "libreville",
  //   "Cloudiness": 20,
  //   "Humidity": 83,
  //   "Latitude": 0.39,
  //   "Longitude": 9.45,
  //   "Temperature": 84.2,
  //   "Wind Speed": 3.36,
  //   "Cluster": 10
  // },
  // {
  //   "City": "port hedland",
  //   "Cloudiness": 0,
  //   "Humidity": 52,
  //   "Latitude": -20.32,
  //   "Longitude": 118.57,
  //   "Temperature": 91.4,
  //   "Wind Speed": 5.82,
  //   "Cluster": 3
  // },
  // {
  //   "City": "san jose",
  //   "Cloudiness": 1,
  //   "Humidity": 31,
  //   "Latitude": 37.34,
  //   "Longitude": -121.89,
  //   "Temperature": 63.54,
  //   "Wind Speed": 4.7,
  //   "Cluster": 4
  // },
  // {
  //   "City": "alyangula",
  //   "Cloudiness": 75,
  //   "Humidity": 79,
  //   "Latitude": -13.85,
  //   "Longitude": 136.42,
  //   "Temperature": 86,
  //   "Wind Speed": 4.7,
  //   "Cluster": 2
  // },
  // {
  //   "City": "tiznit",
  //   "Cloudiness": 0,
  //   "Humidity": 65,
  //   "Latitude": 29.58,
  //   "Longitude": -9.5,
  //   "Temperature": 58.33,
  //   "Wind Speed": 0.74,
  //   "Cluster": 3
  // },
  // {
  //   "City": "oranjemund",
  //   "Cloudiness": 57,
  //   "Humidity": 89,
  //   "Latitude": -28.55,
  //   "Longitude": 16.43,
  //   "Temperature": 66.76,
  //   "Wind Speed": 6.67,
  //   "Cluster": 8
  // },
  // {
  //   "City": "lazaro cardenas",
  //   "Cloudiness": 0,
  //   "Humidity": 54,
  //   "Latitude": 17.96,
  //   "Longitude": -102.2,
  //   "Temperature": 81.01,
  //   "Wind Speed": 4.18,
  //   "Cluster": 3
  // },
  // {
  //   "City": "brae",
  //   "Cloudiness": 100,
  //   "Humidity": 93,
  //   "Latitude": 60.4,
  //   "Longitude": -1.35,
  //   "Temperature": 44.6,
  //   "Wind Speed": 21.92,
  //   "Cluster": 5
  // },
  // {
  //   "City": "bumbuna",
  //   "Cloudiness": 17,
  //   "Humidity": 84,
  //   "Latitude": 9.05,
  //   "Longitude": -11.73,
  //   "Temperature": 69.94,
  //   "Wind Speed": 1.77,
  //   "Cluster": 10
  // },
  // {
  //   "City": "olean",
  //   "Cloudiness": 90,
  //   "Humidity": 67,
  //   "Latitude": 42.08,
  //   "Longitude": -78.43,
  //   "Temperature": 21.2,
  //   "Wind Speed": 4.7,
  //   "Cluster": 0
  // },
  // {
  //   "City": "veraval",
  //   "Cloudiness": 0,
  //   "Humidity": 89,
  //   "Latitude": 20.9,
  //   "Longitude": 70.37,
  //   "Temperature": 66.25,
  //   "Wind Speed": 3.91,
  //   "Cluster": 10
  // },
  // {
  //   "City": "saint-georges",
  //   "Cloudiness": 75,
  //   "Humidity": 88,
  //   "Latitude": 12.06,
  //   "Longitude": -61.75,
  //   "Temperature": 73.4,
  //   "Wind Speed": 4.7,
  //   "Cluster": 2
  // },
  // {
  //   "City": "terra santa",
  //   "Cloudiness": 100,
  //   "Humidity": 97,
  //   "Latitude": -2.1,
  //   "Longitude": -56.49,
  //   "Temperature": 75.58,
  //   "Wind Speed": 1.14,
  //   "Cluster": 2
  // },
  // {
  //   "City": "rio claro",
  //   "Cloudiness": 100,
  //   "Humidity": 88,
  //   "Latitude": -22.41,
  //   "Longitude": -47.56,
  //   "Temperature": 76.44,
  //   "Wind Speed": 3.36,
  //   "Cluster": 2
  // },
  // {
  //   "City": "manadhoo",
  //   "Cloudiness": 0,
  //   "Humidity": 73,
  //   "Latitude": 5.77,
  //   "Longitude": 73.38,
  //   "Temperature": 80.71,
  //   "Wind Speed": 13.87,
  //   "Cluster": 10
  // },
  // {
  //   "City": "weihe",
  //   "Cloudiness": 99,
  //   "Humidity": 89,
  //   "Latitude": 33,
  //   "Longitude": 105.32,
  //   "Temperature": 34.65,
  //   "Wind Speed": 4.36,
  //   "Cluster": 5
  // },
  // {
  //   "City": "atambua",
  //   "Cloudiness": 99,
  //   "Humidity": 82,
  //   "Latitude": -9.11,
  //   "Longitude": 124.89,
  //   "Temperature": 79.03,
  //   "Wind Speed": 3.04,
  //   "Cluster": 2
  // },
  // {
  //   "City": "maningrida",
  //   "Cloudiness": 100,
  //   "Humidity": 82,
  //   "Latitude": -12.07,
  //   "Longitude": 134.27,
  //   "Temperature": 80.17,
  //   "Wind Speed": 15.84,
  //   "Cluster": 2
  // },
  // {
  //   "City": "biak",
  //   "Cloudiness": 68,
  //   "Humidity": 74,
  //   "Latitude": -0.91,
  //   "Longitude": 122.88,
  //   "Temperature": 81.52,
  //   "Wind Speed": 6.38,
  //   "Cluster": 2
  // },
  // {
  //   "City": "shirokiy",
  //   "Cloudiness": 9,
  //   "Humidity": 91,
  //   "Latitude": 49.76,
  //   "Longitude": 129.52,
  //   "Temperature": -3.37,
  //   "Wind Speed": 6.17,
  //   "Cluster": 7
  // },
  // {
  //   "City": "egvekinot",
  //   "Cloudiness": 0,
  //   "Humidity": 87,
  //   "Latitude": 66.32,
  //   "Longitude": -179.17,
  //   "Temperature": -12.41,
  //   "Wind Speed": 9.42,
  //   "Cluster": 7
  // },
  // {
  //   "City": "kapoeta",
  //   "Cloudiness": 18,
  //   "Humidity": 45,
  //   "Latitude": 4.77,
  //   "Longitude": 33.59,
  //   "Temperature": 83.82,
  //   "Wind Speed": 3.87,
  //   "Cluster": 4
  // },
  // {
  //   "City": "lakki marwat",
  //   "Cloudiness": 0,
  //   "Humidity": 71,
  //   "Latitude": 32.61,
  //   "Longitude": 70.91,
  //   "Temperature": 51.49,
  //   "Wind Speed": 9.66,
  //   "Cluster": 3
  // },
  // {
  //   "City": "skjervoy",
  //   "Cloudiness": 94,
  //   "Humidity": 68,
  //   "Latitude": 70.03,
  //   "Longitude": 20.97,
  //   "Temperature": 29.17,
  //   "Wind Speed": 17.43,
  //   "Cluster": 0
  // },
  // {
  //   "City": "zyryanka",
  //   "Cloudiness": 34,
  //   "Humidity": 94,
  //   "Latitude": 65.75,
  //   "Longitude": 150.85,
  //   "Temperature": -15.16,
  //   "Wind Speed": 7.99,
  //   "Cluster": 7
  // },
  // {
  //   "City": "tikrit",
  //   "Cloudiness": 10,
  //   "Humidity": 80,
  //   "Latitude": 34.61,
  //   "Longitude": 43.68,
  //   "Temperature": 55.45,
  //   "Wind Speed": 15.68,
  //   "Cluster": 10
  // },
  // {
  //   "City": "sangar",
  //   "Cloudiness": 99,
  //   "Humidity": 94,
  //   "Latitude": 63.92,
  //   "Longitude": 127.47,
  //   "Temperature": -16.92,
  //   "Wind Speed": 7.87,
  //   "Cluster": 11
  // },
  // {
  //   "City": "gramalote",
  //   "Cloudiness": 40,
  //   "Humidity": 58,
  //   "Latitude": 7.89,
  //   "Longitude": -72.8,
  //   "Temperature": 86,
  //   "Wind Speed": 4.7,
  //   "Cluster": 8
  // },
  // {
  //   "City": "beecher",
  //   "Cloudiness": 1,
  //   "Humidity": 45,
  //   "Latitude": 43.09,
  //   "Longitude": -83.69,
  //   "Temperature": 21.97,
  //   "Wind Speed": 6.93,
  //   "Cluster": 1
  // },
  // {
  //   "City": "palmares do sul",
  //   "Cloudiness": 23,
  //   "Humidity": 78,
  //   "Latitude": -30.26,
  //   "Longitude": -50.51,
  //   "Temperature": 70.34,
  //   "Wind Speed": 5.37,
  //   "Cluster": 10
  // },
  // {
  //   "City": "madison",
  //   "Cloudiness": 90,
  //   "Humidity": 57,
  //   "Latitude": 34.73,
  //   "Longitude": -86.57,
  //   "Temperature": 47.93,
  //   "Wind Speed": 6.93,
  //   "Cluster": 9
  // },
  // {
  //   "City": "gasa",
  //   "Cloudiness": 75,
  //   "Humidity": 93,
  //   "Latitude": 31.5,
  //   "Longitude": 34.47,
  //   "Temperature": 53.94,
  //   "Wind Speed": 5.82,
  //   "Cluster": 2
  // },
  // {
  //   "City": "boddam",
  //   "Cloudiness": 100,
  //   "Humidity": 87,
  //   "Latitude": 57.47,
  //   "Longitude": -1.78,
  //   "Temperature": 44.69,
  //   "Wind Speed": 11.41,
  //   "Cluster": 5
  // },
  // {
  //   "City": "homer",
  //   "Cloudiness": 90,
  //   "Humidity": 78,
  //   "Latitude": 59.64,
  //   "Longitude": -151.55,
  //   "Temperature": 29.7,
  //   "Wind Speed": 6.93,
  //   "Cluster": 0
  // },
  // {
  //   "City": "tucuma",
  //   "Cloudiness": 100,
  //   "Humidity": 86,
  //   "Latitude": -0.18,
  //   "Longitude": -50.05,
  //   "Temperature": 77.2,
  //   "Wind Speed": 9.93,
  //   "Cluster": 2
  // },
  // {
  //   "City": "bosaso",
  //   "Cloudiness": 35,
  //   "Humidity": 84,
  //   "Latitude": 11.28,
  //   "Longitude": 49.18,
  //   "Temperature": 76.05,
  //   "Wind Speed": 11.18,
  //   "Cluster": 8
  // },
  // {
  //   "City": "talakan",
  //   "Cloudiness": 98,
  //   "Humidity": 98,
  //   "Latitude": 50.32,
  //   "Longitude": 130.37,
  //   "Temperature": -5.04,
  //   "Wind Speed": 2.3,
  //   "Cluster": 11
  // },
  // {
  //   "City": "walvis bay",
  //   "Cloudiness": 100,
  //   "Humidity": 92,
  //   "Latitude": -22.96,
  //   "Longitude": 14.51,
  //   "Temperature": 64.99,
  //   "Wind Speed": 10.07,
  //   "Cluster": 2
  // },
  // {
  //   "City": "gulbarga",
  //   "Cloudiness": 0,
  //   "Humidity": 65,
  //   "Latitude": 17.33,
  //   "Longitude": 76.83,
  //   "Temperature": 67.86,
  //   "Wind Speed": 6.33,
  //   "Cluster": 3
  // },
  // {
  //   "City": "santa maria",
  //   "Cloudiness": 0,
  //   "Humidity": 83,
  //   "Latitude": -29.68,
  //   "Longitude": -53.81,
  //   "Temperature": 71.6,
  //   "Wind Speed": 3.36,
  //   "Cluster": 10
  // },
  // {
  //   "City": "ostrovnoy",
  //   "Cloudiness": 99,
  //   "Humidity": 94,
  //   "Latitude": 68.05,
  //   "Longitude": 39.51,
  //   "Temperature": 10.74,
  //   "Wind Speed": 7.96,
  //   "Cluster": 11
  // },
  // {
  //   "City": "nizhneangarsk",
  //   "Cloudiness": 100,
  //   "Humidity": 74,
  //   "Latitude": 55.78,
  //   "Longitude": 109.55,
  //   "Temperature": -1.25,
  //   "Wind Speed": 1.36,
  //   "Cluster": 11
  // },
  // {
  //   "City": "ransang",
  //   "Cloudiness": 6,
  //   "Humidity": 74,
  //   "Latitude": 8.96,
  //   "Longitude": 117.58,
  //   "Temperature": 80.42,
  //   "Wind Speed": 10.92,
  //   "Cluster": 10
  // },
  // {
  //   "City": "tupik",
  //   "Cloudiness": 0,
  //   "Humidity": 93,
  //   "Latitude": 54.43,
  //   "Longitude": 119.93,
  //   "Temperature": -14.78,
  //   "Wind Speed": 1.66,
  //   "Cluster": 7
  // },
  // {
  //   "City": "lensk",
  //   "Cloudiness": 100,
  //   "Humidity": 83,
  //   "Latitude": 60.73,
  //   "Longitude": 114.93,
  //   "Temperature": 0.99,
  //   "Wind Speed": 4.27,
  //   "Cluster": 11
  // },
  // {
  //   "City": "kiunga",
  //   "Cloudiness": 100,
  //   "Humidity": 84,
  //   "Latitude": -6.12,
  //   "Longitude": 141.29,
  //   "Temperature": 81.1,
  //   "Wind Speed": 3.42,
  //   "Cluster": 2
  // },
  // {
  //   "City": "wuning",
  //   "Cloudiness": 1,
  //   "Humidity": 74,
  //   "Latitude": 29.26,
  //   "Longitude": 120.23,
  //   "Temperature": 51.01,
  //   "Wind Speed": 2.1,
  //   "Cluster": 3
  // },
  // {
  //   "City": "hailey",
  //   "Cloudiness": 5,
  //   "Humidity": 45,
  //   "Latitude": 43.52,
  //   "Longitude": -114.32,
  //   "Temperature": 22.5,
  //   "Wind Speed": 4.7,
  //   "Cluster": 1
  // },
  // {
  //   "City": "mitsamiouli",
  //   "Cloudiness": 100,
  //   "Humidity": 71,
  //   "Latitude": -11.38,
  //   "Longitude": 43.28,
  //   "Temperature": 84.33,
  //   "Wind Speed": 2.13,
  //   "Cluster": 2
  // },
  // {
  //   "City": "port lincoln",
  //   "Cloudiness": 100,
  //   "Humidity": 65,
  //   "Latitude": -34.73,
  //   "Longitude": 135.87,
  //   "Temperature": 61.23,
  //   "Wind Speed": 10.65,
  //   "Cluster": 2
  // },
  // {
  //   "City": "arkhara",
  //   "Cloudiness": 46,
  //   "Humidity": 97,
  //   "Latitude": 49.42,
  //   "Longitude": 130.08,
  //   "Temperature": -2.63,
  //   "Wind Speed": 4.45,
  //   "Cluster": 7
  // },
  // {
  //   "City": "raudeberg",
  //   "Cloudiness": 96,
  //   "Humidity": 70,
  //   "Latitude": 61.99,
  //   "Longitude": 5.14,
  //   "Temperature": 42.28,
  //   "Wind Speed": 26.4,
  //   "Cluster": 5
  // },
  // {
  //   "City": "toamasina",
  //   "Cloudiness": 42,
  //   "Humidity": 85,
  //   "Latitude": -18.17,
  //   "Longitude": 49.38,
  //   "Temperature": 78.42,
  //   "Wind Speed": 7.94,
  //   "Cluster": 8
  // },
  // {
  //   "City": "keuruu",
  //   "Cloudiness": 75,
  //   "Humidity": 92,
  //   "Latitude": 62.27,
  //   "Longitude": 24.7,
  //   "Temperature": 25.27,
  //   "Wind Speed": 9.17,
  //   "Cluster": 5
  // },
  // {
  //   "City": "malinovoye ozero",
  //   "Cloudiness": 100,
  //   "Humidity": 95,
  //   "Latitude": 51.68,
  //   "Longitude": 79.78,
  //   "Temperature": 24.94,
  //   "Wind Speed": 15.79,
  //   "Cluster": 5
  // },
  // {
  //   "City": "muskegon",
  //   "Cloudiness": 90,
  //   "Humidity": 56,
  //   "Latitude": 43.3,
  //   "Longitude": -86.13,
  //   "Temperature": 18.27,
  //   "Wind Speed": 4.7,
  //   "Cluster": 0
  // },
  // {
  //   "City": "sechura",
  //   "Cloudiness": 14,
  //   "Humidity": 83,
  //   "Latitude": -5.56,
  //   "Longitude": -80.82,
  //   "Temperature": 75.02,
  //   "Wind Speed": 15.1,
  //   "Cluster": 10
  // },
  // {
  //   "City": "guipavas",
  //   "Cloudiness": 90,
  //   "Humidity": 93,
  //   "Latitude": 48.44,
  //   "Longitude": -4.4,
  //   "Temperature": 47.88,
  //   "Wind Speed": 18.34,
  //   "Cluster": 5
  // },
  // {
  //   "City": "plainview",
  //   "Cloudiness": 1,
  //   "Humidity": 27,
  //   "Latitude": 40.78,
  //   "Longitude": -73.47,
  //   "Temperature": 36.68,
  //   "Wind Speed": 5.82,
  //   "Cluster": 1
  // },
  // {
  //   "City": "komsomolskiy",
  //   "Cloudiness": 0,
  //   "Humidity": 92,
  //   "Latitude": 40.43,
  //   "Longitude": 71.72,
  //   "Temperature": 26.6,
  //   "Wind Speed": 4.7,
  //   "Cluster": 6
  // },
  // {
  //   "City": "kabalo",
  //   "Cloudiness": 42,
  //   "Humidity": 96,
  //   "Latitude": -6.05,
  //   "Longitude": 26.92,
  //   "Temperature": 69.8,
  //   "Wind Speed": 0.92,
  //   "Cluster": 8
  // },
  // {
  //   "City": "rio grande",
  //   "Cloudiness": 1,
  //   "Humidity": 80,
  //   "Latitude": -32.03,
  //   "Longitude": -52.1,
  //   "Temperature": 72.36,
  //   "Wind Speed": 9.75,
  //   "Cluster": 10
  // },
  // {
  //   "City": "katangli",
  //   "Cloudiness": 100,
  //   "Humidity": 91,
  //   "Latitude": 51.71,
  //   "Longitude": 143.23,
  //   "Temperature": 7.36,
  //   "Wind Speed": 4.29,
  //   "Cluster": 11
  // },
  // {
  //   "City": "polovinnoye",
  //   "Cloudiness": 100,
  //   "Humidity": 90,
  //   "Latitude": 54.79,
  //   "Longitude": 65.99,
  //   "Temperature": 24.13,
  //   "Wind Speed": 16.28,
  //   "Cluster": 5
  // },
  // {
  //   "City": "simga",
  //   "Cloudiness": 78,
  //   "Humidity": 72,
  //   "Latitude": 21.63,
  //   "Longitude": 81.7,
  //   "Temperature": 62.6,
  //   "Wind Speed": 2.24,
  //   "Cluster": 2
  // },
  // {
  //   "City": "elizabeth city",
  //   "Cloudiness": 90,
  //   "Humidity": 70,
  //   "Latitude": 36.29,
  //   "Longitude": -76.25,
  //   "Temperature": 42.98,
  //   "Wind Speed": 8.43,
  //   "Cluster": 0
  // },
  // {
  //   "City": "sao felix do xingu",
  //   "Cloudiness": 86,
  //   "Humidity": 95,
  //   "Latitude": -6.64,
  //   "Longitude": -51.99,
  //   "Temperature": 73.92,
  //   "Wind Speed": 2.39,
  //   "Cluster": 2
  // },
  // {
  //   "City": "cam ranh",
  //   "Cloudiness": 40,
  //   "Humidity": 78,
  //   "Latitude": 11.92,
  //   "Longitude": 109.16,
  //   "Temperature": 77,
  //   "Wind Speed": 6.93,
  //   "Cluster": 8
  // },
  // {
  //   "City": "ambon",
  //   "Cloudiness": 40,
  //   "Humidity": 70,
  //   "Latitude": -3.7,
  //   "Longitude": 128.18,
  //   "Temperature": 86,
  //   "Wind Speed": 2.24,
  //   "Cluster": 8
  // },
  // {
  //   "City": "shangrao",
  //   "Cloudiness": 2,
  //   "Humidity": 74,
  //   "Latitude": 28.45,
  //   "Longitude": 117.97,
  //   "Temperature": 46.17,
  //   "Wind Speed": 4.03,
  //   "Cluster": 3
  // },
  // {
  //   "City": "the valley",
  //   "Cloudiness": 40,
  //   "Humidity": 74,
  //   "Latitude": 18.22,
  //   "Longitude": -63.06,
  //   "Temperature": 78.3,
  //   "Wind Speed": 10.29,
  //   "Cluster": 8
  // },
  // {
  //   "City": "novyy urgal",
  //   "Cloudiness": 99,
  //   "Humidity": 88,
  //   "Latitude": 51.07,
  //   "Longitude": 132.56,
  //   "Temperature": 3.29,
  //   "Wind Speed": 3.09,
  //   "Cluster": 11
  // },
  // {
  //   "City": "pandan",
  //   "Cloudiness": 94,
  //   "Humidity": 79,
  //   "Latitude": 14.05,
  //   "Longitude": 124.17,
  //   "Temperature": 77.4,
  //   "Wind Speed": 24.56,
  //   "Cluster": 2
  // },
  // {
  //   "City": "tromso",
  //   "Cloudiness": 75,
  //   "Humidity": 63,
  //   "Latitude": 69.65,
  //   "Longitude": 18.96,
  //   "Temperature": 17.73,
  //   "Wind Speed": 20.8,
  //   "Cluster": 0
  // },
  // {
  //   "City": "mazamari",
  //   "Cloudiness": 90,
  //   "Humidity": 96,
  //   "Latitude": -11.33,
  //   "Longitude": -74.53,
  //   "Temperature": 65.5,
  //   "Wind Speed": 2.44,
  //   "Cluster": 2
  // },
  // {
  //   "City": "aviles",
  //   "Cloudiness": 21,
  //   "Humidity": 81,
  //   "Latitude": 43.55,
  //   "Longitude": -5.92,
  //   "Temperature": 42.33,
  //   "Wind Speed": 8.05,
  //   "Cluster": 6
  // },
  // {
  //   "City": "rong kwang",
  //   "Cloudiness": 100,
  //   "Humidity": 65,
  //   "Latitude": 18.34,
  //   "Longitude": 100.32,
  //   "Temperature": 64.18,
  //   "Wind Speed": 2.19,
  //   "Cluster": 2
  // },
  // {
  //   "City": "dubrovytsya",
  //   "Cloudiness": 35,
  //   "Humidity": 87,
  //   "Latitude": 51.57,
  //   "Longitude": 26.57,
  //   "Temperature": 35.56,
  //   "Wind Speed": 7,
  //   "Cluster": 6
  // },
  // {
  //   "City": "dawson creek",
  //   "Cloudiness": 1,
  //   "Humidity": 62,
  //   "Latitude": 55.77,
  //   "Longitude": -120.24,
  //   "Temperature": 29.26,
  //   "Wind Speed": 4.99,
  //   "Cluster": 1
  // },
  // {
  //   "City": "pekan nenas",
  //   "Cloudiness": 75,
  //   "Humidity": 78,
  //   "Latitude": 1.51,
  //   "Longitude": 103.51,
  //   "Temperature": 79.75,
  //   "Wind Speed": 8.05,
  //   "Cluster": 2
  // },
  // {
  //   "City": "kitimat",
  //   "Cloudiness": 75,
  //   "Humidity": 80,
  //   "Latitude": 54.05,
  //   "Longitude": -128.65,
  //   "Temperature": 34.95,
  //   "Wind Speed": 2.91,
  //   "Cluster": 0
  // },
  // {
  //   "City": "hobyo",
  //   "Cloudiness": 65,
  //   "Humidity": 83,
  //   "Latitude": 5.35,
  //   "Longitude": 48.53,
  //   "Temperature": 76.5,
  //   "Wind Speed": 8.75,
  //   "Cluster": 8
  // },
  // {
  //   "City": "waddan",
  //   "Cloudiness": 0,
  //   "Humidity": 51,
  //   "Latitude": 29.16,
  //   "Longitude": 16.14,
  //   "Temperature": 52.65,
  //   "Wind Speed": 2.59,
  //   "Cluster": 3
  // },
  // {
  //   "City": "katsuura",
  //   "Cloudiness": 75,
  //   "Humidity": 53,
  //   "Latitude": 35.13,
  //   "Longitude": 140.3,
  //   "Temperature": 50.36,
  //   "Wind Speed": 8.05,
  //   "Cluster": 9
  // },
  // {
  //   "City": "mugumu",
  //   "Cloudiness": 74,
  //   "Humidity": 87,
  //   "Latitude": -1.85,
  //   "Longitude": 34.7,
  //   "Temperature": 63.18,
  //   "Wind Speed": 5.12,
  //   "Cluster": 2
  // },
  // {
  //   "City": "gidam",
  //   "Cloudiness": 0,
  //   "Humidity": 51,
  //   "Latitude": 18.98,
  //   "Longitude": 81.4,
  //   "Temperature": 61.72,
  //   "Wind Speed": 1.01,
  //   "Cluster": 3
  // },
  // {
  //   "City": "ulagan",
  //   "Cloudiness": 100,
  //   "Humidity": 94,
  //   "Latitude": 50.63,
  //   "Longitude": 87.96,
  //   "Temperature": 1.69,
  //   "Wind Speed": 5.61,
  //   "Cluster": 11
  // },
  // {
  //   "City": "urumqi",
  //   "Cloudiness": 100,
  //   "Humidity": 73,
  //   "Latitude": 43.8,
  //   "Longitude": 87.6,
  //   "Temperature": 23,
  //   "Wind Speed": 6.71,
  //   "Cluster": 0
  // },
  // {
  //   "City": "lang suan",
  //   "Cloudiness": 1,
  //   "Humidity": 95,
  //   "Latitude": 9.95,
  //   "Longitude": 99.08,
  //   "Temperature": 72.27,
  //   "Wind Speed": 3.78,
  //   "Cluster": 10
  // },
  // {
  //   "City": "lagoa",
  //   "Cloudiness": 14,
  //   "Humidity": 66,
  //   "Latitude": 39.05,
  //   "Longitude": -27.98,
  //   "Temperature": 55.47,
  //   "Wind Speed": 22.21,
  //   "Cluster": 3
  // },
  // {
  //   "City": "tahta",
  //   "Cloudiness": 0,
  //   "Humidity": 72,
  //   "Latitude": 26.77,
  //   "Longitude": 31.5,
  //   "Temperature": 49.12,
  //   "Wind Speed": 7.2,
  //   "Cluster": 3
  // },
  // {
  //   "City": "beohari",
  //   "Cloudiness": 100,
  //   "Humidity": 24,
  //   "Latitude": 24.05,
  //   "Longitude": 81.38,
  //   "Temperature": 62.28,
  //   "Wind Speed": 4.34,
  //   "Cluster": 9
  // },
  // {
  //   "City": "ankazoabo",
  //   "Cloudiness": 66,
  //   "Humidity": 95,
  //   "Latitude": -22.28,
  //   "Longitude": 44.52,
  //   "Temperature": 70.79,
  //   "Wind Speed": 3.11,
  //   "Cluster": 2
  // },
  // {
  //   "City": "longyearbyen",
  //   "Cloudiness": 75,
  //   "Humidity": 66,
  //   "Latitude": 78.22,
  //   "Longitude": 15.64,
  //   "Temperature": 10.4,
  //   "Wind Speed": 26.4,
  //   "Cluster": 0
  // },
  // {
  //   "City": "atar",
  //   "Cloudiness": 1,
  //   "Humidity": 14,
  //   "Latitude": 20.52,
  //   "Longitude": -13.05,
  //   "Temperature": 70.65,
  //   "Wind Speed": 7.16,
  //   "Cluster": 4
  // },
  // {
  //   "City": "aklavik",
  //   "Cloudiness": 90,
  //   "Humidity": 85,
  //   "Latitude": 68.22,
  //   "Longitude": -135.01,
  //   "Temperature": 14.59,
  //   "Wind Speed": 3.36,
  //   "Cluster": 11
  // },
  // {
  //   "City": "totness",
  //   "Cloudiness": 60,
  //   "Humidity": 76,
  //   "Latitude": 5.88,
  //   "Longitude": -56.32,
  //   "Temperature": 78.51,
  //   "Wind Speed": 16.37,
  //   "Cluster": 8
  // },
  // {
  //   "City": "bridgetown",
  //   "Cloudiness": 75,
  //   "Humidity": 73,
  //   "Latitude": 13.1,
  //   "Longitude": -59.62,
  //   "Temperature": 77,
  //   "Wind Speed": 24.16,
  //   "Cluster": 2
  // },
  // {
  //   "City": "west wendover",
  //   "Cloudiness": 1,
  //   "Humidity": 37,
  //   "Latitude": 40.74,
  //   "Longitude": -114.07,
  //   "Temperature": 35.6,
  //   "Wind Speed": 9.17,
  //   "Cluster": 1
  // },
  // {
  //   "City": "deputatskiy",
  //   "Cloudiness": 100,
  //   "Humidity": 92,
  //   "Latitude": 69.3,
  //   "Longitude": 139.9,
  //   "Temperature": -7.19,
  //   "Wind Speed": 3.67,
  //   "Cluster": 11
  // },
  // {
  //   "City": "peniche",
  //   "Cloudiness": 33,
  //   "Humidity": 71,
  //   "Latitude": 39.36,
  //   "Longitude": -9.38,
  //   "Temperature": 49.35,
  //   "Wind Speed": 3.36,
  //   "Cluster": 6
  // },
  // {
  //   "City": "kedrovyy",
  //   "Cloudiness": 40,
  //   "Humidity": 73,
  //   "Latitude": 56.17,
  //   "Longitude": 91.82,
  //   "Temperature": 23,
  //   "Wind Speed": 11.18,
  //   "Cluster": 6
  // },
  // {
  //   "City": "fukue",
  //   "Cloudiness": 20,
  //   "Humidity": 71,
  //   "Latitude": 32.69,
  //   "Longitude": 128.84,
  //   "Temperature": 50.77,
  //   "Wind Speed": 1.12,
  //   "Cluster": 6
  // },
  // {
  //   "City": "jelgava",
  //   "Cloudiness": 90,
  //   "Humidity": 86,
  //   "Latitude": 56.65,
  //   "Longitude": 23.71,
  //   "Temperature": 39.2,
  //   "Wind Speed": 8.05,
  //   "Cluster": 5
  // },
  // {
  //   "City": "hurghada",
  //   "Cloudiness": 0,
  //   "Humidity": 67,
  //   "Latitude": 27.26,
  //   "Longitude": 33.81,
  //   "Temperature": 64.94,
  //   "Wind Speed": 26.73,
  //   "Cluster": 3
  // },
  // {
  //   "City": "kruisfontein",
  //   "Cloudiness": 72,
  //   "Humidity": 46,
  //   "Latitude": -34,
  //   "Longitude": 24.73,
  //   "Temperature": 78.71,
  //   "Wind Speed": 3.96,
  //   "Cluster": 9
  // },
  // {
  //   "City": "les cayes",
  //   "Cloudiness": 0,
  //   "Humidity": 74,
  //   "Latitude": 18.2,
  //   "Longitude": -73.75,
  //   "Temperature": 80.69,
  //   "Wind Speed": 13.58,
  //   "Cluster": 10
  // },
  // {
  //   "City": "berthierville",
  //   "Cloudiness": 1,
  //   "Humidity": 43,
  //   "Latitude": 46.08,
  //   "Longitude": -73.18,
  //   "Temperature": 11.89,
  //   "Wind Speed": 8.05,
  //   "Cluster": 1
  // },
  // {
  //   "City": "grand island",
  //   "Cloudiness": 90,
  //   "Humidity": 85,
  //   "Latitude": 40.92,
  //   "Longitude": -98.34,
  //   "Temperature": 14.83,
  //   "Wind Speed": 13.87,
  //   "Cluster": 11
  // },
  // {
  //   "City": "prieska",
  //   "Cloudiness": 36,
  //   "Humidity": 72,
  //   "Latitude": -29.66,
  //   "Longitude": 22.75,
  //   "Temperature": 71.78,
  //   "Wind Speed": 14.65,
  //   "Cluster": 8
  // },
  // {
  //   "City": "berlevag",
  //   "Cloudiness": 98,
  //   "Humidity": 61,
  //   "Latitude": 70.86,
  //   "Longitude": 29.09,
  //   "Temperature": 31.73,
  //   "Wind Speed": 24.92,
  //   "Cluster": 0
  // },
  // {
  //   "City": "chumikan",
  //   "Cloudiness": 100,
  //   "Humidity": 80,
  //   "Latitude": 54.72,
  //   "Longitude": 135.31,
  //   "Temperature": 5.81,
  //   "Wind Speed": 5.14,
  //   "Cluster": 11
  // },
  // {
  //   "City": "phan thiet",
  //   "Cloudiness": 0,
  //   "Humidity": 74,
  //   "Latitude": 10.93,
  //   "Longitude": 108.1,
  //   "Temperature": 67.39,
  //   "Wind Speed": 3.98,
  //   "Cluster": 10
  // },
  // {
  //   "City": "necochea",
  //   "Cloudiness": 35,
  //   "Humidity": 72,
  //   "Latitude": -38.55,
  //   "Longitude": -58.74,
  //   "Temperature": 60.26,
  //   "Wind Speed": 15.01,
  //   "Cluster": 8
  // },
  // {
  //   "City": "dvinskoy",
  //   "Cloudiness": 100,
  //   "Humidity": 96,
  //   "Latitude": 62.15,
  //   "Longitude": 45.12,
  //   "Temperature": 33.71,
  //   "Wind Speed": 7.52,
  //   "Cluster": 5
  // },
  // {
  //   "City": "nuuk",
  //   "Cloudiness": 43,
  //   "Humidity": 66,
  //   "Latitude": 64.18,
  //   "Longitude": -51.72,
  //   "Temperature": 10.4,
  //   "Wind Speed": 13.87,
  //   "Cluster": 6
  // },
  // {
  //   "City": "ossora",
  //   "Cloudiness": 0,
  //   "Humidity": 84,
  //   "Latitude": 59.24,
  //   "Longitude": 163.07,
  //   "Temperature": 0.25,
  //   "Wind Speed": 8.59,
  //   "Cluster": 7
  // },
  // {
  //   "City": "formosa do rio preto",
  //   "Cloudiness": 60,
  //   "Humidity": 92,
  //   "Latitude": -11.05,
  //   "Longitude": -45.19,
  //   "Temperature": 71.26,
  //   "Wind Speed": 0.65,
  //   "Cluster": 8
  // },
  // {
  //   "City": "maneadero",
  //   "Cloudiness": 1,
  //   "Humidity": 85,
  //   "Latitude": 31.72,
  //   "Longitude": -116.57,
  //   "Temperature": 60.01,
  //   "Wind Speed": 4,
  //   "Cluster": 10
  // },
  // {
  //   "City": "svetlyy",
  //   "Cloudiness": 75,
  //   "Humidity": 100,
  //   "Latitude": 54.67,
  //   "Longitude": 20.13,
  //   "Temperature": 37.4,
  //   "Wind Speed": 6.71,
  //   "Cluster": 5
  // },
  // {
  //   "City": "akyab",
  //   "Cloudiness": 26,
  //   "Humidity": 81,
  //   "Latitude": 20.15,
  //   "Longitude": 92.9,
  //   "Temperature": 61.72,
  //   "Wind Speed": 6.82,
  //   "Cluster": 10
  // },
  // {
  //   "City": "mahibadhoo",
  //   "Cloudiness": 0,
  //   "Humidity": 74,
  //   "Latitude": 3.78,
  //   "Longitude": 72.97,
  //   "Temperature": 80.94,
  //   "Wind Speed": 17.58,
  //   "Cluster": 10
  // },
  // {
  //   "City": "brazzaville",
  //   "Cloudiness": 40,
  //   "Humidity": 100,
  //   "Latitude": -4.27,
  //   "Longitude": 15.28,
  //   "Temperature": 71.6,
  //   "Wind Speed": 2.04,
  //   "Cluster": 8
  // },
  // {
  //   "City": "kamaishi",
  //   "Cloudiness": 75,
  //   "Humidity": 60,
  //   "Latitude": 39.27,
  //   "Longitude": 141.88,
  //   "Temperature": 39.2,
  //   "Wind Speed": 2.24,
  //   "Cluster": 0
  // },
  // {
  //   "City": "gamba",
  //   "Cloudiness": 100,
  //   "Humidity": 87,
  //   "Latitude": -2.65,
  //   "Longitude": 10,
  //   "Temperature": 79.36,
  //   "Wind Speed": 2.66,
  //   "Cluster": 2
  // },
  // {
  //   "City": "keetmanshoop",
  //   "Cloudiness": 80,
  //   "Humidity": 57,
  //   "Latitude": -26.58,
  //   "Longitude": 18.13,
  //   "Temperature": 77.77,
  //   "Wind Speed": 7.65,
  //   "Cluster": 9
  // },
  // {
  //   "City": "darovskoy",
  //   "Cloudiness": 100,
  //   "Humidity": 94,
  //   "Latitude": 58.77,
  //   "Longitude": 47.96,
  //   "Temperature": 32.27,
  //   "Wind Speed": 8.63,
  //   "Cluster": 5
  // },
  // {
  //   "City": "wooster",
  //   "Cloudiness": 1,
  //   "Humidity": 68,
  //   "Latitude": 40.81,
  //   "Longitude": -81.94,
  //   "Temperature": 26.15,
  //   "Wind Speed": 3.36,
  //   "Cluster": 1
  // },
  // {
  //   "City": "nantucket",
  //   "Cloudiness": 1,
  //   "Humidity": 47,
  //   "Latitude": 41.28,
  //   "Longitude": -70.1,
  //   "Temperature": 35.13,
  //   "Wind Speed": 11.41,
  //   "Cluster": 1
  // },
  // {
  //   "City": "vila franca do campo",
  //   "Cloudiness": 40,
  //   "Humidity": 71,
  //   "Latitude": 37.72,
  //   "Longitude": -25.43,
  //   "Temperature": 55.4,
  //   "Wind Speed": 26.4,
  //   "Cluster": 8
  // },
  // {
  //   "City": "parana",
  //   "Cloudiness": 0,
  //   "Humidity": 51,
  //   "Latitude": -31.73,
  //   "Longitude": -60.52,
  //   "Temperature": 77.34,
  //   "Wind Speed": 0.89,
  //   "Cluster": 3
  // },
  // {
  //   "City": "san-pedro",
  //   "Cloudiness": 43,
  //   "Humidity": 83,
  //   "Latitude": 4.75,
  //   "Longitude": -6.64,
  //   "Temperature": 82.31,
  //   "Wind Speed": 9.01,
  //   "Cluster": 8
  // },
  // {
  //   "City": "yarada",
  //   "Cloudiness": 75,
  //   "Humidity": 94,
  //   "Latitude": 17.65,
  //   "Longitude": 83.27,
  //   "Temperature": 69.8,
  //   "Wind Speed": 2.24,
  //   "Cluster": 2
  // },
  // {
  //   "City": "boqueirao",
  //   "Cloudiness": 100,
  //   "Humidity": 78,
  //   "Latitude": -7.5,
  //   "Longitude": -36.13,
  //   "Temperature": 77,
  //   "Wind Speed": 17.22,
  //   "Cluster": 2
  // },
  // {
  //   "City": "sept-iles",
  //   "Cloudiness": 40,
  //   "Humidity": 55,
  //   "Latitude": 50.2,
  //   "Longitude": -66.38,
  //   "Temperature": 8.6,
  //   "Wind Speed": 16.11,
  //   "Cluster": 1
  // },
  // {
  //   "City": "yerbogachen",
  //   "Cloudiness": 99,
  //   "Humidity": 97,
  //   "Latitude": 61.28,
  //   "Longitude": 108.01,
  //   "Temperature": 4.51,
  //   "Wind Speed": 5.79,
  //   "Cluster": 11
  // },
  // {
  //   "City": "bengkulu",
  //   "Cloudiness": 54,
  //   "Humidity": 86,
  //   "Latitude": -3.8,
  //   "Longitude": 102.27,
  //   "Temperature": 73.92,
  //   "Wind Speed": 4.81,
  //   "Cluster": 8
  // },
  // {
  //   "City": "kuandian",
  //   "Cloudiness": 18,
  //   "Humidity": 82,
  //   "Latitude": 40.73,
  //   "Longitude": 124.78,
  //   "Temperature": 23.92,
  //   "Wind Speed": 4.54,
  //   "Cluster": 6
  // },
  // {
  //   "City": "sola",
  //   "Cloudiness": 75,
  //   "Humidity": 74,
  //   "Latitude": -13.88,
  //   "Longitude": 167.55,
  //   "Temperature": 87.8,
  //   "Wind Speed": 8.05,
  //   "Cluster": 2
  // },
  // {
  //   "City": "sao joao dos patos",
  //   "Cloudiness": 100,
  //   "Humidity": 95,
  //   "Latitude": -6.5,
  //   "Longitude": -43.7,
  //   "Temperature": 73.13,
  //   "Wind Speed": 2.17,
  //   "Cluster": 2
  // },
  // {
  //   "City": "egra",
  //   "Cloudiness": 20,
  //   "Humidity": 92,
  //   "Latitude": 50.08,
  //   "Longitude": 12.37,
  //   "Temperature": 31.68,
  //   "Wind Speed": 8.05,
  //   "Cluster": 6
  // },
  // {
  //   "City": "matay",
  //   "Cloudiness": 10,
  //   "Humidity": 86,
  //   "Latitude": 28.42,
  //   "Longitude": 30.78,
  //   "Temperature": 48.15,
  //   "Wind Speed": 5.79,
  //   "Cluster": 6
  // },
  // {
  //   "City": "adrar",
  //   "Cloudiness": 7,
  //   "Humidity": 13,
  //   "Latitude": 20.5,
  //   "Longitude": -10.07,
  //   "Temperature": 70.88,
  //   "Wind Speed": 10.76,
  //   "Cluster": 4
  // },
  // {
  //   "City": "kirakira",
  //   "Cloudiness": 3,
  //   "Humidity": 72,
  //   "Latitude": -10.45,
  //   "Longitude": 161.92,
  //   "Temperature": 83.35,
  //   "Wind Speed": 3.58,
  //   "Cluster": 10
  // },
  // {
  //   "City": "ayorou",
  //   "Cloudiness": 0,
  //   "Humidity": 14,
  //   "Latitude": 14.73,
  //   "Longitude": 0.92,
  //   "Temperature": 72.37,
  //   "Wind Speed": 7.9,
  //   "Cluster": 4
  // },
  // {
  //   "City": "pochutla",
  //   "Cloudiness": 5,
  //   "Humidity": 79,
  //   "Latitude": 15.74,
  //   "Longitude": -96.47,
  //   "Temperature": 84.2,
  //   "Wind Speed": 5.82,
  //   "Cluster": 10
  // },
  // {
  //   "City": "madingou",
  //   "Cloudiness": 100,
  //   "Humidity": 93,
  //   "Latitude": -4.15,
  //   "Longitude": 13.55,
  //   "Temperature": 70.9,
  //   "Wind Speed": 2.3,
  //   "Cluster": 2
  // },
  // {
  //   "City": "san isidro",
  //   "Cloudiness": 75,
  //   "Humidity": 88,
  //   "Latitude": -12.12,
  //   "Longitude": -77.05,
  //   "Temperature": 75.2,
  //   "Wind Speed": 14.99,
  //   "Cluster": 2
  // },
  // {
  //   "City": "waitati",
  //   "Cloudiness": 82,
  //   "Humidity": 84,
  //   "Latitude": -45.75,
  //   "Longitude": 170.57,
  //   "Temperature": 61.5,
  //   "Wind Speed": 20,
  //   "Cluster": 2
  // },
  // {
  //   "City": "medea",
  //   "Cloudiness": 20,
  //   "Humidity": 93,
  //   "Latitude": 36.26,
  //   "Longitude": 2.75,
  //   "Temperature": 41,
  //   "Wind Speed": 2.24,
  //   "Cluster": 6
  // },
  // {
  //   "City": "sorland",
  //   "Cloudiness": 71,
  //   "Humidity": 70,
  //   "Latitude": 67.67,
  //   "Longitude": 12.69,
  //   "Temperature": 35.49,
  //   "Wind Speed": 20.11,
  //   "Cluster": 0
  // },
  // {
  //   "City": "alamos",
  //   "Cloudiness": 85,
  //   "Humidity": 61,
  //   "Latitude": 27.02,
  //   "Longitude": -108.93,
  //   "Temperature": 72.05,
  //   "Wind Speed": 4,
  //   "Cluster": 9
  // },
  // {
  //   "City": "foldes",
  //   "Cloudiness": 100,
  //   "Humidity": 93,
  //   "Latitude": 47.3,
  //   "Longitude": 21.37,
  //   "Temperature": 39.16,
  //   "Wind Speed": 4.7,
  //   "Cluster": 5
  // },
  // {
  //   "City": "burnie",
  //   "Cloudiness": 0,
  //   "Humidity": 55,
  //   "Latitude": -41.07,
  //   "Longitude": 145.92,
  //   "Temperature": 62.94,
  //   "Wind Speed": 15.01,
  //   "Cluster": 3
  // },
  // {
  //   "City": "dudinka",
  //   "Cloudiness": 75,
  //   "Humidity": 85,
  //   "Latitude": 69.41,
  //   "Longitude": 86.18,
  //   "Temperature": 14,
  //   "Wind Speed": 31.32,
  //   "Cluster": 0
  // },
  // {
  //   "City": "lakes entrance",
  //   "Cloudiness": 98,
  //   "Humidity": 67,
  //   "Latitude": -37.88,
  //   "Longitude": 147.98,
  //   "Temperature": 65.68,
  //   "Wind Speed": 3,
  //   "Cluster": 2
  // },
  // {
  //   "City": "saint-joseph",
  //   "Cloudiness": 0,
  //   "Humidity": 60,
  //   "Latitude": -21.37,
  //   "Longitude": 55.62,
  //   "Temperature": 68.68,
  //   "Wind Speed": 8.05,
  //   "Cluster": 3
  // },
  // {
  //   "City": "meadville",
  //   "Cloudiness": 1,
  //   "Humidity": 62,
  //   "Latitude": 41.64,
  //   "Longitude": -80.15,
  //   "Temperature": 24.64,
  //   "Wind Speed": 4.7,
  //   "Cluster": 1
  // },
  // {
  //   "City": "kavaratti",
  //   "Cloudiness": 0,
  //   "Humidity": 69,
  //   "Latitude": 10.57,
  //   "Longitude": 72.64,
  //   "Temperature": 80.82,
  //   "Wind Speed": 6.69,
  //   "Cluster": 10
  // },
  // {
  //   "City": "boden",
  //   "Cloudiness": 0,
  //   "Humidity": 91,
  //   "Latitude": 65.83,
  //   "Longitude": 21.69,
  //   "Temperature": 3.2,
  //   "Wind Speed": 2.28,
  //   "Cluster": 7
  // },
  // {
  //   "City": "vihari",
  //   "Cloudiness": 0,
  //   "Humidity": 74,
  //   "Latitude": 30.03,
  //   "Longitude": 72.35,
  //   "Temperature": 51.71,
  //   "Wind Speed": 9.51,
  //   "Cluster": 3
  // },
  // {
  //   "City": "oussouye",
  //   "Cloudiness": 68,
  //   "Humidity": 83,
  //   "Latitude": 12.48,
  //   "Longitude": -16.55,
  //   "Temperature": 75.2,
  //   "Wind Speed": 4.7,
  //   "Cluster": 2
  // },
  // {
  //   "City": "shahabad",
  //   "Cloudiness": 100,
  //   "Humidity": 62,
  //   "Latitude": 27.65,
  //   "Longitude": 79.95,
  //   "Temperature": 57.81,
  //   "Wind Speed": 7.38,
  //   "Cluster": 9
  // },
  // {
  //   "City": "la reforma",
  //   "Cloudiness": 5,
  //   "Humidity": 37,
  //   "Latitude": 25.08,
  //   "Longitude": -108.05,
  //   "Temperature": 79.23,
  //   "Wind Speed": 6.93,
  //   "Cluster": 4
  // },
  // {
  //   "City": "el alto",
  //   "Cloudiness": 75,
  //   "Humidity": 100,
  //   "Latitude": -4.27,
  //   "Longitude": -81.21,
  //   "Temperature": 62.6,
  //   "Wind Speed": 13.87,
  //   "Cluster": 2
  // },
  // {
  //   "City": "altamont",
  //   "Cloudiness": 1,
  //   "Humidity": 23,
  //   "Latitude": 42.21,
  //   "Longitude": -121.74,
  //   "Temperature": 48.56,
  //   "Wind Speed": 12.75,
  //   "Cluster": 4
  // },
  // {
  //   "City": "sur",
  //   "Cloudiness": 0,
  //   "Humidity": 41,
  //   "Latitude": 22.57,
  //   "Longitude": 59.53,
  //   "Temperature": 68.31,
  //   "Wind Speed": 5.84,
  //   "Cluster": 4
  // },
  // {
  //   "City": "rio gallegos",
  //   "Cloudiness": 20,
  //   "Humidity": 40,
  //   "Latitude": -51.62,
  //   "Longitude": -69.22,
  //   "Temperature": 51.8,
  //   "Wind Speed": 29.97,
  //   "Cluster": 4
  // },
  // {
  //   "City": "starobaltachevo",
  //   "Cloudiness": 100,
  //   "Humidity": 96,
  //   "Latitude": 56,
  //   "Longitude": 55.92,
  //   "Temperature": 29.71,
  //   "Wind Speed": 8.75,
  //   "Cluster": 5
  // },
  // {
  //   "City": "staryy nadym",
  //   "Cloudiness": 100,
  //   "Humidity": 99,
  //   "Latitude": 65.61,
  //   "Longitude": 72.68,
  //   "Temperature": 32.25,
  //   "Wind Speed": 8.01,
  //   "Cluster": 5
  // },
  // {
  //   "City": "yinchuan",
  //   "Cloudiness": 100,
  //   "Humidity": 46,
  //   "Latitude": 38.47,
  //   "Longitude": 106.27,
  //   "Temperature": 26.01,
  //   "Wind Speed": 5.01,
  //   "Cluster": 0
  // },
  // {
  //   "City": "bartica",
  //   "Cloudiness": 40,
  //   "Humidity": 83,
  //   "Latitude": 6.4,
  //   "Longitude": -58.62,
  //   "Temperature": 77,
  //   "Wind Speed": 6.93,
  //   "Cluster": 8
  // },
  // {
  //   "City": "geraldton",
  //   "Cloudiness": 90,
  //   "Humidity": 78,
  //   "Latitude": -28.77,
  //   "Longitude": 114.6,
  //   "Temperature": 75.2,
  //   "Wind Speed": 5.82,
  //   "Cluster": 2
  // },
  // {
  //   "City": "haines junction",
  //   "Cloudiness": 51,
  //   "Humidity": 91,
  //   "Latitude": 60.75,
  //   "Longitude": -137.51,
  //   "Temperature": 21.88,
  //   "Wind Speed": 15.41,
  //   "Cluster": 6
  // },
  // {
  //   "City": "pangnirtung",
  //   "Cloudiness": 36,
  //   "Humidity": 93,
  //   "Latitude": 66.15,
  //   "Longitude": -65.71,
  //   "Temperature": -32.35,
  //   "Wind Speed": 1.07,
  //   "Cluster": 7
  // },
  // {
  //   "City": "isangel",
  //   "Cloudiness": 40,
  //   "Humidity": 74,
  //   "Latitude": -19.55,
  //   "Longitude": 169.27,
  //   "Temperature": 84.2,
  //   "Wind Speed": 6.93,
  //   "Cluster": 8
  // },
  // {
  //   "City": "riviere-au-renard",
  //   "Cloudiness": 20,
  //   "Humidity": 52,
  //   "Latitude": 49,
  //   "Longitude": -64.4,
  //   "Temperature": 15.8,
  //   "Wind Speed": 20.8,
  //   "Cluster": 1
  // },
  // {
  //   "City": "bongor",
  //   "Cloudiness": 25,
  //   "Humidity": 18,
  //   "Latitude": 10.28,
  //   "Longitude": 15.37,
  //   "Temperature": 71.92,
  //   "Wind Speed": 7.74,
  //   "Cluster": 4
  // },
  // {
  //   "City": "malanville",
  //   "Cloudiness": 0,
  //   "Humidity": 16,
  //   "Latitude": 11.87,
  //   "Longitude": 3.39,
  //   "Temperature": 73.78,
  //   "Wind Speed": 10.45,
  //   "Cluster": 4
  // },
  // {
  //   "City": "kalininskaya",
  //   "Cloudiness": 90,
  //   "Humidity": 81,
  //   "Latitude": 45.48,
  //   "Longitude": 38.66,
  //   "Temperature": 32.22,
  //   "Wind Speed": 4.47,
  //   "Cluster": 5
  // },
  // {
  //   "City": "zarand",
  //   "Cloudiness": 90,
  //   "Humidity": 50,
  //   "Latitude": 30.81,
  //   "Longitude": 56.56,
  //   "Temperature": 49.5,
  //   "Wind Speed": 2.26,
  //   "Cluster": 9
  // },
  // {
  //   "City": "arona",
  //   "Cloudiness": 4,
  //   "Humidity": 63,
  //   "Latitude": 28.1,
  //   "Longitude": -16.68,
  //   "Temperature": 58.95,
  //   "Wind Speed": 14.99,
  //   "Cluster": 3
  // },
  // {
  //   "City": "harper",
  //   "Cloudiness": 67,
  //   "Humidity": 94,
  //   "Latitude": 4.38,
  //   "Longitude": -7.72,
  //   "Temperature": 77.27,
  //   "Wind Speed": 3.02,
  //   "Cluster": 2
  // }


];



// Loop through the cities array and create one marker for each city object
for (var i = 0; i < Cities.length; i++) {

  // Conditionals for countries points
  var color = "";
  if (Cities[i].Location > 200) {
    color = "yellow";
  }
  else if (Cities[i].Humidity > 100) {
    color = "blue";
  }
  else if (Cities[i].Cloudiness > 90) {
    color = "green";
  }
  else {
    color = "red";
  }

  // Add circles to map
  L.circle(Cities[i].Location, {
    fillOpacity: 3.75,
    color: "red",
    fillColor: color,
    // Adjust radius
    radius: Cities[i].Cluster * 1500
  }).bindPopup("<h1>" + Cities[i].name + "</h1> <hr> <h3>Points: " + Cities[i].Cluster + "</h3>").addTo(myMap);
}
