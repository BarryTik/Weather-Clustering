//assigning colors to clusters from Weather_center.csv
var tbody = d3.select("#details")
var colors;
d3.csv("Weather_Center.csv").then( data => {
    colors = chroma.scale(['red','orange','yellow','green','blue','purple']).colors(data.length);
    //append weather data to table for each city
    for (var i = 0; i < data.length; i++) {
        var row = tbody.append("tr");
        //round weather data to two decimals
        row.append("td").text(i).append("svg").attr("width", 30).attr("height", 20).append("rect").attr("x", 10).attr("y", 0).attr("height", 15).attr("width", 15).style("fill", colors[i]);
        row.append("td").text(parseFloat(data[i].Cloudiness).toFixed(2));
        row.append("td").text(parseFloat(data[i].Humidity).toFixed(2));
        row.append("td").text(parseFloat(data[i].Temperature).toFixed(2));
        row.append("td").text(parseFloat(data[i]["Wind Speed"]).toFixed(2));
    }
  
});