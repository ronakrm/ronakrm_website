// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);


var mydata = [];

function getData(all) {
  var allTextLines = all.split(/\r\n|\n/);
  var headers = allTextLines[0].split(',');
  var lines = [];
  lines.push(headers);

  for (var i=1; i<allTextLines.length; i++) {
      var data = allTextLines[i].split(',');
      if (data.length == headers.length) {
          lines.push(data);
      }
  }
  return lines;
}

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  var params = getQueryParams(document.location.search);

  if (typeof params.bandwidth === 'undefined') {
    var BW = 1000;
  } else {
    var BW = parseInt(params.bandwidth);
  }

  $.get('data.txt', function( data ) {
    mydata = getData(data);
    console.log("gd mydata: ");
    console.log(mydata);
  });

  console.log("mydata: ");
  console.log(mydata);
  console.log("mydata 0: ");
  console.log(mydata[0]);
  console.log("mydata 1: ");
  console.log(mydata[0]);

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales'],
          ['2004',  BW],
          ['2005',  1170],
          ['2006',  660],
          ['2007',  1030]
        ]);

  console.log([
          ['Year', 'Sales'],
          ['2004',  BW],
          ['2005',  1170],
          ['2006',  660],
          ['2007',  1030]
        ]);

  var options = {
    backgroundColor: '#FBFBFB',
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

function main() {
}

$(document).ready(main);