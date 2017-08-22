d3.queue()
.defer(d3.json, "girls.json")
.defer(d3.json, "boys.json")
.await(startInit);

function startInit(error, girls, boys) {
	mapInit("map1");
	mapInit("map2");
	corrInit("#girls", girls[0].mat);
	corrInit("#boys", boys[0].mat);
	Legend({
		widthLegend : 	500,
		heightLegend:   100,
    	start_color : '#3498db',
    	end_color : 'yellow'
	});



	var slidersvg = d3.select("#sliderSVG"),
    margin = {right: 50, left: 50},
    width = +slidersvg.attr("width") - margin.left - margin.right,
    height = +slidersvg.attr("height");

	var x = d3.scaleLinear()
	    .domain([1910, 2015])
	    .range([0, width])
	    .clamp(true);

	var slider = slidersvg.append("g")
	    .attr("class", "slider")
	    .attr("transform", "translate(" + margin.left + "," + height / 2 + ")");

	slider.append("line")
	    .attr("class", "track")
	    .attr("x1", x.range()[0])
	    .attr("x2", x.range()[1])
	  	.select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
	    .attr("class", "track-inset")
	  	.select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
	    .attr("class", "track-overlay")
	    .call(d3.drag()
	        .on("start.interrupt", function() { slider.interrupt(); })
	        .on("start drag", function() {
	        						t = Math.round(x.invert(d3.event.x)) - 1910;
	        						girlst = girls[t];
	        						boyst = boys[t];
	        						slider_event(x.invert(d3.event.x), girlst, boyst);
	        					}
				)
	        );

	// slider axis tick labels
	slider.insert("g", ".track-overlay")
	    .attr("class", "ticks")
    	.attr("transform", "translate(0," + 18 + ")")
	  	.selectAll("text")
	  	.data(x.ticks(10))
	  	.enter().append("text")
	    .attr("x", x)
	    .attr("text-anchor", "middle")
	    .text(function(d) { return d; });

	// circle that is selector on slider
	var handle = slider.insert("circle", ".track-overlay")
	    .attr("class", "handle")
	    .attr("r", 9);

	// beginning intro on page load
	slider.transition() // Gratuitous intro!
	    .duration(30000)
	    .ease(d3.easeLinear) // defaults to accelerate/decelerate
	    .tween("hue", function() {
	      var i = d3.interpolate(1910, 2015);
	      return function(t) { 
	      	girlst = girls[Math.round(i(t)) - 1910];
	      	boyst = boys[Math.round(i(t)) - 1910];
	      	slider_event(i(t), girlst, boyst);
      		};
	    });

	function slider_event(val, girls, boys) {
		handle.attr("cx", x(val));
		d3.select('#Year').text(Math.round(val));
		updateCorrs(girls.mat, boys.mat);
		updateMaps(girls.topnames, boys.topnames);
	}

}

function Legend(options) {
	var sides = 30,
	    widthLegend = options.widthLegend,
	    heightLegend = options.heightLegend,
		startColor = options.start_color,
		endColor = options.end_color;

	var maxValue = 1;//d3.max(data, function(layer) { return d3.max(layer, function(d) { return d; }); });
    var minValue = 0;//d3.min(data, function(layer) { return d3.min(layer, function(d) { return d; }); });

   var key = d3.select("#legend")
    .append("svg")
    .attr("width", widthLegend + 2*sides)
    .attr("height", heightLegend);

    var legend = key
    .append("defs")
    .append("svg:linearGradient")
    .attr("id", "gradient")
    .attr("x1", "0%")
    .attr("y1", "100%")
    .attr("x2", "100%")
    .attr("y2", "100%")
    .attr("spreadMethod", "pad");

    legend
    .append("stop")
    .attr("offset", "0%")
    .attr("stop-color", startColor)
    .attr("stop-opacity", 1);

    legend
    .append("stop")
    .attr("offset", "100%")
    .attr("stop-color", endColor)
    .attr("stop-opacity", 1);

    key.append("rect")
    .attr("width", widthLegend)
    .attr("height", heightLegend/2 - 10)
    .style("fill", "url(#gradient)")
    .attr("transform", "translate(" + sides + ",0)");

    var x = d3.scaleLinear()
    .range([widthLegend, 0])
    .domain([minValue, maxValue]);

    key.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(" + sides + ",41)")
    .call(d3.axisBottom(x));
}

function Matrix(options) {
	var margin = {top: 50, right: 50, bottom: 100, left: 100},
	    width = 250,
	    height = 250,
	    data = options.data,
	    container = options.container,
	    labelsData = options.labels,
	    startColor = options.start_color,
	    endColor = options.end_color;

	var widthLegend = 100;

	if(!data){
		throw new Error('Please pass data');
	}

	if(!Array.isArray(data) || !data.length || !Array.isArray(data[0])){
		throw new Error('It should be a 2-D array');
	}

    var maxValue = 1;//d3.max(data, function(layer) { return d3.max(layer, function(d) { return d; }); });
    var minValue = 0;//d3.min(data, function(layer) { return d3.min(layer, function(d) { return d; }); });

	var numrows = data.length;
	var numcols = data[0].length;

	var svg = d3.select(container).select("#corrcontainer")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
		.append("g")
	    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	var background = svg.append("rect")
	    .style("stroke", "black")
	    .style("stroke-width", "2px")
	    .attr("width", width)
	    .attr("height", height);

	var x = d3.scaleBand()
	    .domain(d3.range(numcols))
	    .range([0, width]);

	var y = d3.scaleBand()
	    .domain(d3.range(numrows))
	    .range([0, height]);

	var colorMap = d3.scaleLinear()
	    .domain([minValue,maxValue])
	    .range([startColor, endColor]);

	var row = svg.selectAll(".row")
	    .data(data)
	  	.enter().append("g")
	    .attr("class", "row")
	    .attr("transform", function(d, i) { return "translate(0," + y(i) + ")"; });

	var cell = row.selectAll(".cell")
	    .data(function(d) { return d; })
			.enter().append("g")
	    .attr("class", "cell")
	    .attr("transform", function(d, i) { return "translate(" + x(i) + ", 0)"; });

	cell.append('rect')
	    .attr("width", x.bandwidth())
	    .attr("height", y.bandwidth())
	    .style("stroke-width", 0);

    cell.append("text")
	    .attr("dy", ".32em")
	    .attr("x", x.bandwidth() / 2)
	    .attr("y", y.bandwidth() / 2)
	    .attr("text-anchor", "middle")
	    .style("fill", function(d, i) { return d >= maxValue/2 ? 'white' : 'black'; })
	    .text(function(d, i) { return d; });

	row.selectAll(".cell")
	    .data(function(d, i) { return data[i]; })
	    .style("fill", colorMap);

	var labels = svg.append('g')
		.attr('class', "labels");

	var columnLabels = labels.selectAll(".column-label")
	    .data(labelsData)
	    .enter().append("g")
	    .attr("class", "column-label")
	    .attr("transform", function(d, i) { return "translate(" + x(i) + "," + height + ")"; });

	columnLabels.append("line")
		.style("stroke", "black")
	    .style("stroke-width", "1px")
	    .attr("x1", x.bandwidth() / 2)
	    .attr("x2", x.bandwidth() / 2)
	    .attr("y1", 0)
	    .attr("y2", 5);

	columnLabels.append("text")
	    .attr("x", 0)
	    .attr("y", y.bandwidth() / 2)
	    .attr("dy", ".82em")
	    .attr("text-anchor", "middle")
	    .attr("transform", "rotate(-30)")
	    .text(function(d, i) { return d; });

	var rowLabels = labels.selectAll(".row-label")
	    .data(labelsData)
	  .enter().append("g")
	    .attr("class", "row-label")
	    .attr("transform", function(d, i) { return "translate(" + 0 + "," + y(i) + ")"; });

	rowLabels.append("line")
		.style("stroke", "black")
	    .style("stroke-width", "1px")
	    .attr("x1", 0)
	    .attr("x2", -5)
	    .attr("y1", y.bandwidth() / 2)
	    .attr("y2", y.bandwidth() / 2);

	rowLabels.append("text")
	    .attr("x", -8)
	    .attr("y", y.bandwidth() / 2)
	    .attr("dy", ".32em")
	    .attr("text-anchor", "end")
	    .text(function(d, i) { return d; });

}

function corrInit(container, data) {
	var labels = ['Alabama', 'Florida', 'Georgia'];
	Matrix({
        container : container,
        data      : data,
        labels    : labels,
        start_color : 'yellow',
        end_color : '#3498db'
    });
}

function mapInit(mapvsvg_id) {
	var mapsvg = d3.select("#" + mapvsvg_id);
	var mapwidth = document.getElementById(mapvsvg_id).width.baseVal.value;
	var mapheight = document.getElementById(mapvsvg_id).height.baseVal.value;

	d3.json("flgaal.json", function(error, uk) {
	  if (error) return console.error(error);

	var subunits = topojson.feature(uk, uk.objects.subunits);
	var projection = d3.geoAlbers()
						.scale(1)
						.translate([0, 0]);
	var path = d3.geoPath()
	    .projection(projection);

    var b = path.bounds(subunits),
    s = .95 / Math.max((b[1][0] - b[0][0]) / mapwidth, (b[1][1] - b[0][1]) / mapheight),
    t = [(mapwidth - s * (b[1][0] + b[0][0])) / 2, (mapheight - s * (b[1][1] + b[0][1])) / 2];

    projection.scale(s).translate(t);

	//var centerX = (path.centroid(0)[0] + path.centroid(1)[0] + path.centroid(2)[0])/3;
	//var centerY = (path.centroid(0)[1] + path.centroid(1)[1] + path.centroid(2)[1])/3;
	//console.log(centerX);
	//console.log(centerY);


	mapsvg.append("path")
	    .datum(subunits)
	    .attr("d", path);

	mapsvg.selectAll(".subunit")
	    .data(topojson.feature(uk, uk.objects.subunits).features)
	  .enter().append("path")
	    .attr("class", function(d) { return "subunit " + d.id; })
	    .attr("d", path);

	mapsvg.append("path")
	    .datum(topojson.mesh(uk, uk.objects.subunits))
	    .attr("d", path)
	    .attr("class", "subunit-boundary");    

	offsets = [ [50,15], //ALnameOffset
				[75,5], //FLnameOffset
				[50,15] ]; //GAnameOffset

	mapsvg.selectAll(".subunit-label")
	    .data(topojson.feature(uk, uk.objects.subunits).features)
	  	.enter()
	  	.append("foreignObject")
	  	.attr("width", 100)
    	.attr("height", 500)
	  	.attr("class", function(d) { return "subunit-label " + d.id; })
	  	.attr("font-size", "small")
	    .attr("transform", function(d, i) {
	     return "translate(" + [path.centroid(d)[0] - offsets[i][0], path.centroid(d)[1] - offsets[i][1]] + ")";
	      })
	  	.append("xhtml:div")
	  	.attr("class", function(d) { return "xhtmldiv " + d.id; })
	  	.append('p')
	  	.attr("class", "babynamesonmap");
	});
}

function updateCorrelation(options) {
	var width = 350,
	    height = 350,
	    data = options.data,
	    container = options.container,
	    startColor = options.start_color,
	    endColor = options.end_color;;

	if(!data){
		throw new Error('Please pass data');
	}

	if(!Array.isArray(data) || !data.length || !Array.isArray(data[0])){
		throw new Error('It should be a 2-D array');
	}

	var maxValue = 1;//d3.max(data, function(layer) { return d3.max(layer, function(d) { return d; }); });
    var minValue = 0;//d3.min(data, function(layer) { return d3.min(layer, function(d) { return d; }); });

	var numrows = data.length;
	var numcols = data[0].length;

	var svg = d3.select(container).select("#corrcontainer");

	var x = d3.scaleBand()
	    .domain(d3.range(numcols))
	    .range([0, width]);

	var y = d3.scaleBand()
	    .domain(d3.range(numrows))
	    .range([0, height]);

	var colorMap = d3.scaleLinear()
	    .domain([minValue,maxValue])
	    .range([startColor, endColor]);

	var row = svg.selectAll(".row")
	    .data(data);

	var cell = row.selectAll(".cell")
	    .data(function(d) { return d; });

    cell.select("text")
	    .style("fill", function(d, i) { return d >= maxValue/2 ? 'white' : 'black'; })
	    .text(function(d, i) { return d; });

	row.selectAll(".cell")
	    .data(function(d, i) { return data[i]; })
	    .style("fill", colorMap);
}

function updateCorrs(girls, boys) {

	updateCorrelation(
		{
	        container : '#girls',
	        data      : girls,
	        start_color : 'yellow',
	        end_color : '#3498db'
		}
	);
	updateCorrelation(
		{
	        container : '#boys',
	        data      : boys,
	        start_color : 'yellow',
	        end_color : '#3498db'
		}
	);
}

function updateMaps(girlnames, boynames ) {

	updateMap("map1", girlnames);
	updateMap("map2", boynames);
}

function updateMap(mapvsvg_id, names) {
	var mapsvg = d3.select("#" + mapvsvg_id);

  	mapsvg.selectAll(".xhtmldiv").select("p")
  		.data(names)
  		.html(function(d) {
  				var cleaned = "";
  				for (i=0; i < d.length; i++) {
  					cleaned += d[i] + "<br />";
  				}
  				return cleaned;
  				});  
}



