//////// Add the data to a table on the webpage /////////

var tableData = data;

// Define a build table function to call on for filters //

function buildTable(data){
var tbody = d3.select("tbody");
tbody.html("");

data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});
}

buildTable(tableData)

// Add input filters for searches by targeting any input changes //

d3.selectAll("input").on("change", function() {
    element = d3.select(this);
    key = element.property("id");
    value = element.property("value");
    filteredData = tableData.filter(row => row[key] === value);
    console.log(filteredData);

    // Set table data to be equal to filtered input //
    tableData = filteredData;

    // Call table function to append
    buildTable(filteredData);
});