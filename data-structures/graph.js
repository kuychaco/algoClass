/*
GRAPHS

Abstract data type

Basic Graph:
Stores nodes (represented by any primitive value) and the neighbors for each node. This implementation represents a graph as an adjacency list (https://en.wikipedia.org/wiki/Adjacency_list).

Here's an example:
1---2---3
 \ /
  4
graph = {
  1: [2, 4],
  2: [1, 3, 4],
  3: [2],
  4: [1, 2]
}

Constraints:
This graph implementation is undirected and can have unconnected nodes.

*** Operations:



*** Nightmare mode:


*/

function Graph () {
  this._nodes = {};
}

/*
This implementation represents a graph with an adjacency list.
Example:
{
  1: [2, 4],
  2: [1, 3, 4],
  3: [2],
  4: [1, 2]
}
*/

Graph.prototype.addNode = function(value) {
  if (value === undefined) return;
  this._nodes[value] = this._nodes[value] || [];
};

Graph.prototype.removeNode = function(value) {
  this._nodes[value].forEach(function(neighbor) {
    var neighborEdges = this._nodes[neighbor];
    var index = neighborEdges.indexOf(value);
    neighborEdges.splice(index, 1);
  })
  delete this._nodes[value];
};

Graph.prototype.contains = function(value) {
  return this._nodes[value] !== undefined;
};

Graph.prototype.addEdge = function(value1, value2) {
  if (!this._nodes[value1] || !this._nodes[value2]) return 'Invalid node value';
  this._nodes[value1].push(value2);
  this._nodes[value2].push(value1);
};

Graph.prototype.removeEdge = function(value1, value2) {
  if (!this._nodes[value1] || !this._nodes[value2]) return 'Invalid node value';
  var value1Neighbors = this._nodes[value1];
  value1Neighbors.splice(value1Neighbors.indexOf(value2), 1);
  var value2Neighbors = this._nodes[value2];
  value2Neighbors.splice(value2Neighbors.indexOf(value1), 1);
};

Graph.prototype.hasEdge = function(value1, value2) {
  return this._nodes[value1].indexOf(value2) > -1;
};

Graph.prototype.forEach = function(fn) {
  for (var node in this._nodes) {
    fn(node, this._nodes[node], this._nodes);
  }
};

var graph = new Graph();

graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);
console.log(graph._nodes, 'should have 5');
graph.removeNode(5);
console.log(graph._nodes, 'should NOT have 5');
console.log(graph.contains(4), 'should be true');
console.log(graph.contains(7), 'should be false');
graph.addEdge(1,2);
graph.addEdge(1,4);
graph.addEdge(3,2);
graph.addEdge(2,4);
graph.addEdge(3,4);
console.log(graph._nodes);
graph.removeEdge(4,3);
console.log(graph._nodes);
console.log(graph.hasEdge(1,2), 'should be true');
console.log(graph.hasEdge(1,3), 'should be false');
graph.forEach(function(node, neighbors) {
  console.log(node, 'has neighbors:', neighbors);
});
