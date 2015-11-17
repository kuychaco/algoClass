/*

Implement a function that takes in a two-dimensional array of colors that represents a screen, a point in the array, and a color. The function will change the original color of the point to the new color and will fill the surrounding area with the original color in the same fashion.

*/

function paintFill(screen, point, newColor) {
  var originalColor = screen[point.row][point.column];
  function recurse(row, column) {
    screen[row][column] = newColor;
    if (screen[row-1][column] === originalColor) recurse(row-1, column);
    if (screen[row+1][column] === originalColor) recurse(row+1, column);
    if (screen[row][column-1] === originalColor) recurse(row, column-1);
    if (screen[row][column+1] === originalColor) recurse(row, column+1);
  }
  recurse(point.row, point.column);
  return screen;
}
