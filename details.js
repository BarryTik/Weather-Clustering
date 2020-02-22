var tbody = d3.select("#details")
d3.csv("Weather_Center.txt").then( data => {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].Cloudiness, data[i].Humidity, data[i].Temperature, data[i]["Wind Speed"] );
        var row = tbody.append("tr");
        row.append("td").text(i);
        row.append("td").text(parseFloat(data[i].Cloudiness).toFixed(2));
        row.append("td").text(parseFloat(data[i].Humidity).toFixed(2));
        row.append("td").text(parseFloat(data[i].Temperature).toFixed(2));
        row.append("td").text(parseFloat(data[i]["Wind Speed"]).toFixed(2));
    }
    console.log(1.2344.toFixed(2));
  
});