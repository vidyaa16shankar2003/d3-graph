// Variables to store user input values
let nodeColor = '#000000'; // Default color
let arrowStyle = 'single'; // Default style

// Variable to keep track of the arrow count
let arrowCount = 0;

// Function to add a node (circle) to the diagram
function addNode() {
  const svg = d3.select('#diagram').select('svg');
  svg
    .append('circle')
    .attr('r', 20)
    .attr('fill', nodeColor)
    .attr('cx', Math.random() * 600)
    .attr('cy', Math.random() * 400)
    .attr('class', 'node');
}

// Function to add an arrow to the diagram
function addArrow() {
  const svg = d3.select('#diagram').select('svg');
  arrowCount++;

  const x1 = 50 + 30 * arrowCount; // Adjust the x1 position
  const y1 = 50 + 30 * arrowCount; // Adjust the y1 position
  const x2 = 100 + 30 * arrowCount; // Adjust the x2 position
  const y2 = 100 + 30 * arrowCount; // Adjust the y2 position

  const line = svg
    .append('line')
    .attr('x1', x1)
    .attr('y1', y1)
    .attr('x2', x2)
    .attr('y2', y2)
    .attr('stroke', nodeColor)
    .attr('class', 'arrow');

  if (arrowStyle === 'single') {
    line.attr('marker-end', 'url(#arrowhead-single)');
  } else if (arrowStyle === 'double') {
    line.attr('marker-end', 'url(#arrowhead-double)');
  }
}

document.getElementById('addNode').addEventListener('click', function () {
  nodeColor = document.getElementById('nodeColor').value;
  addNode();
});

document.getElementById('addArrow').addEventListener('click', function () {
  arrowStyle = document.getElementById('arrowStyle').value;
  addArrow();
});
