/*
Implement a function that flattens a nested array.

flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

function flatten(arr) {
  var result = [];
  arr.forEach(function(element) {
    if (!Array.isArray(element)) {
      result.push(element);
    } else {
      result = result.concat(flatten(element));
    }
  });
  return result;
}


console.log(flatten([1,[2],[3, [[4]]]]));
