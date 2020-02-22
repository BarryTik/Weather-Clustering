var tbody = d3.select("#details")
d3.csv("Weather_Center.csv").then( data => {
    for (var i = 0; i < data.length; i++) {
        var row = tbody.append("tr");
        row.append("td").text(i);
        row.append("td").text(parseFloat(data[i].Cloudiness).toFixed(2));
        row.append("td").text(parseFloat(data[i].Humidity).toFixed(2));
        row.append("td").text(parseFloat(data[i].Temperature).toFixed(2));
        row.append("td").text(parseFloat(data[i]["Wind Speed"]).toFixed(2));
    }
  
});