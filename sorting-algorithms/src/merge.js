/*
MERGE SORT

*** Description

Merge sort employs a divide and conquer strategy - merge two sorted subarrays into one sorted array.

Recursive top-down approach:
Recursively break down array into two subarrays and sort them recursively. Subarrays are broken down until they have only 1 element (implying they are sorted).

Iterative bottom-up approach:
Split array into sublists of size 1, merge adjacent sublists into sorted lists, repeat until no more sublists.

*** Exercises

- Implement recursive merge sort (you might want to write a helper function to handle the merge step)
- Implement iterative merge sort
- Identify time complexity
- Identify space complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

Optimization:
- Refactor your iterative solution to be a natural merge sort. This means that the initial subarrays are naturally occurring sorted sequences. How does this impact time complexity and adaptivity?
ex:
input array: [ 1 2 4 5 9 ]
subarrays for regular merge sort: [ [1], [2], [4], [5], [9] ]
subarrays for natural merge sort: [ [1,2], [4,5], [9] ]

*/


/*
Properties:
O(n) extra space for iterative solution
O(n·log(n)) time (for worst and best)
stable - the only stable O(n·log(n)) sorting algorithm
not adaptive

Use cases:
If stabilty is a requirement and using extra space is no concern, merge sort is great because it's simple to implement, it's the only stable O(nlog(n)) sorting algorithm.
*/
function mergeSortRecursive (array) {
  // base case
  if (array.length <= 1) return array;

  // divide and conquer!!
  var leftHalf = array.slice(0, array.length/2);
  var rightHalf = array.slice(array.length/2);
  var leftSorted = mergeSortRecursive(leftHalf);
  var rightSorted = mergeSortRecursive(rightHalf);

  // merge subarrays
  return merge(leftSorted, rightSorted);
};

function mergeSortIterative (array) {
  // create array of subarrays with each element
  var splitArr = array.map(function(element) { return [element]; });

  // while there is more than one subarray
  while (splitArr.length > 1) {
    var result = [];
    // merge adjacent
    for (var i=0; i<splitArr.length; i+=2) {
      // for pairs merge
      if (splitArr[i+1]) result.push(merge(splitArr[i], splitArr[i+1]));
      // for last odd element, just add to results
      else result.push(splitArr[i]);
    }
    // overwrite old splitArr
    splitArr = result;
  }
  return splitArr[0];

};

function merge(left, right) {
  var result = [], iLeft = 0, iRight = 0;

  // while result is not fully populated
  while (result.length < (left.length + right.length)) {
    // if all elements in left have been added, then add remaining right elements
    if (iLeft === left.length) result = result.concat(right.slice(iRight));
    // if all elements in right have been added, then add remaining left elements
    else if (iRight === right.length) result = result.concat(left.slice(iLeft));
    // compare elements in subarrays and add lower of the two to result
    else if (left[iLeft] <= right[iRight]) result.push(left[iLeft++]);
    else result.push(right[iRight++]);
  }
  return result;
}
