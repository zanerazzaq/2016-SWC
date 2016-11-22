var myWeight = [
  {age: 1, weight: 10},
  {age: 10, weight: 70},
  {age: 18, weight: 120},
  {age: 30, weight: 170},
  {age: 45, weight: 160},
];
var svg = d3.select("#svg");

var scaleAge = d3.scaleLinear()
    .domain([0, 70])
    .range([20, 230]);

var scaleWeight = d3.scaleLinear()
    .domain([10, 180])
    .range([230, 20]);

var weightToRadius = d3.scaleLinear()
    .domain([10, 180])
    .range([0, 10]);

function ageToX(datum) {
   return scaleAge(datum.age);
};

function weightToY(datum) {
  return scaleWeight(datum.weight);
};

function circleWidth(datum) {
 return weightToRadius(datum.weight);
}

svg.selectAll("circle")
  .data(myWeight)
  .enter()
  .append("circle")
  .style("cx", ageToX)
  .style("cy", weightToY)
  .style("r", circleWidth)

var axis = d3.axisBottom(ageToX);

svg.append("g")
    .attr("transform", "translate(0,30)")
    .call(axis);
