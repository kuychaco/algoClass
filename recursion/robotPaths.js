/*

Version 1:
Given the size of a grid (X rows and Y columns), write a function that returns the number of possible paths for a robot to take starting at the top left of the grid and ending at the bottom right? The robot can only move to the right and down.

Version 2:
Now, imagine that the robot can move up, down, left, or right but cannot visit a spot that has already been visited. How many unique paths can the robot take?
Hint: it may be useful to create a grid class and use it to keep track of the state as the robot traverses the grid. What useful methods can you put on your grid class? Can you write an implementation that only uses a single grid?

*/

// Version 1
function robotPathsV1 (rowCount, columnCount) {
  var pathCount = 0;
  function recurse(i, j) {
    if (i === rowCount-1 && j === columnCount-1) pathCount++;
    else {
      if (i<rowCount-1) recurse(i+1, j);
      if (j<columnCount-1) recurse(i, j+1);
    }

  }
  recurse(0, 0);
  return pathCount;
}



// Version 2
var Grid = function(rowCount, colCount) {
  this._grid = [];
  for (var i = 0; i < rowCount; i++) {
    this._grid.push([]);
    for (var j = 0; j < colCount; j++) {
      this._grid[i].push(false);
    }
  }
};
Grid.prototype.togglePiece = function(i, j) {
  this._grid[i][j] = !this._grid[i][j];
};
Grid.prototype.hasBeenVisited = function(i, j) {
  return !!this._grid[i][j];
};


var robotPathsV2 = function(rowCount, colCount) {
  var grid = new Grid(rowCount, colCount);
  var count = 0;
  function recurse(grid, i, j) {
    if (i === rowCount-1 && j === colCount-1) {
      return count++;
    }
    if (i < 0 || j < 0 || i >= rowCount || j >= colCount) { return; }
    if (grid.hasBeenVisited(i, j)) { return; }
    grid.togglePiece(i, j);
    recurse(grid, i+1, j);
    recurse(grid, i, j+1);
    recurse(grid, i-1, j);
    recurse(grid, i, j-1);
    grid.togglePiece(i, j);
  }
  recurse(grid, 0, 0);
  return count;
}
