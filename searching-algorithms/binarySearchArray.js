/*
BINARY SEARCH ARRAY

*** Description

Given a sorted array and a value, determine if the value is in the array using the binary search (divide and conquer) method.

*** Exercises

Write a function that takes a sorted array and a value and returns the index of the value in the array. Return null if the value is not found in the array. What is the time complexity?

Extra credit: Implement the function both iteratively and recursively.

*/

// // Iterative solution
// function binarySearch(array, target) {
//   var lo = 0;
//   var hi = array.length-1;
//   while (lo <= hi) {
//     var mid = Math.floor((hi-lo)/2) + lo;
//     if (target === array[mid]) return mid;
//     else if (target < array[mid]) hi = mid-1;
//     else lo = mid+1;
//   }
//   return null;
// }

// Recursive solution
function binarySearch(array, target) {
  return (function recurse(lo, hi) {
    if (lo > hi) return null;
    var mid = Math.floor((hi-lo)/2) + lo;
    if (target === array[mid]) return mid;
    else if (target < array[mid]) return recurse(lo, mid-1);
    else return recurse(mid+1, hi);
  })(0, array.length-1);
}

var arr = [0,1,2,3,4,5];
console.log(binarySearch(arr, 0), 'should be', 0);
console.log(binarySearch(arr, 1), 'should be', 1);
console.log(binarySearch(arr, 2), 'should be', 2);
console.log(binarySearch(arr, 3), 'should be', 3);
console.log(binarySearch(arr, 4), 'should be', 4);
console.log(binarySearch(arr, 5), 'should be', 5);
console.log(binarySearch(arr, 8), 'should be', null);
