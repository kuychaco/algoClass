/*

Write a function that takes a string and returns all permutations of the string. Ensure that there are no duplicates in the output.

*/

function permutations(str) {
  var results = {};
  function recurse(word, remainder) {
    if (remainder.length === 0) {
      return results[word] = true;
    }
    for (var i=0; i<remainder.length; i++) {
      recurse(word + remainder[i], remainder.substr(0, i) + remainder.substr(i+1));
    }
  }
  recurse('', str);
  return Object.keys(results);
}
