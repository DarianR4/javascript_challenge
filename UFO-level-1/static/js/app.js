// from data.js
var tableData = data;

var tableBody = d3.select("tbody")

//construct table
function constructTable(dataForTable){

    tableBody.html("")
    dataForTable.forEach((UFOsighting) => {
        var row = tableBody.append("tr");
        Object.entries(UFOsighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
}


//define the click button with a filter feature
function filterButtonClicked(){
    var dateTimeText = d3.select("#datetime").property("value")
    var filteredData = tableData
    if (dateTimeText){
        filteredData = filteredData.filter(UFOsighting => UFOsighting.datetime === dateTimeText)
    }
    constructTable(filteredData);
}


d3.select("#filter-btn").on("click",filterButtonClicked)

constructTable(tableData);