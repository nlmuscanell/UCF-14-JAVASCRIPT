//////// Add the data to a table on the webpage /////////

// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(data);

// Loop Through `data` and append one table row for each sighting 
// Then, append table cells and add values to each cell
data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

//////// Add input filter for the date searches /////////

// Assign the data from `data.js` to a descriptive variable
var searchDates = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.selectAll("form");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the button and form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputElement);
    console.log(inputValue);

    var filteredData = searchDates.filter(date => date.datetime === inputValue);

    console.log(filteredData);

    // Clear table info before appending filtered data
    tbody.html("");

    // Append filtered data to table
    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
