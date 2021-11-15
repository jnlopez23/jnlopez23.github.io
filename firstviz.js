let width = 970
let height = 700
var svg = d3.select("#viz")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .style("width", width)
            .style("height", height)
            svg.append("circle")
            .attr("cx", 50)
            .attr("cy", 50)
            .attr("r", 40)
            .attr("fill", "lavender")
            svg.append("rect")
            .attr("x", 120)
            .attr("y", 10)
            .attr("width", 200)
            .attr("height", 80)
            .attr("fill", "lightblue")
            svg.append("triangle")
            .attr("x", 300)
            .attr("y", 30)
            .attr("width", 200)
            .attr("height", 60)
            .attr("fill", "purple")
data = [40, 40]
all = svg.selectAll()
    .data(data)
    .enter()
all.append("circle")
    .attr("cx", (d, i) => (i + 1) * 100)
    .attr("cy", 200)
    .attr("r", (d, i) => d)
    .attr("fill", "pink")