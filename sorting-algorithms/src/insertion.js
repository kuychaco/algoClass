/*
INSERTION SORT

Iterate over array and grow a sorted array behind current element.

For each position, compare value of element with previous elements and swap positions if previous element is larger.

*** Exercises

- Implement insertion sort for array of numbers
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)

- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

*** Extra credit
- Implement shell sort, a generalization of insertion sort
(https://en.wikipedia.org/wiki/Shellsort)

*/

var insertionSort = function(array, comparator) {
  comparator = comparator || defaultComparator;

  // start at index 1 as sublist of array[0] is already sorted
  for (var index=1; index<array.length; index++) {
    var value = array[index];
    var compareIndex = index-1;
    // swap with left element while < value
    while (compareIndex > -1 && comparator(array[compareIndex], value) > 0) {
      array = swap(array, compareIndex, index);
      index = compareIndex;
      compareIndex--;
    }
  }
  return array;
};

function defaultComparator(a,b) {
  if (a < b) return -1; // a comes first
  else if (a > b) return 1; // b comes first
  return 0;
};

function swap (arr, i1, i2) {
  var temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
  return arr;
}
