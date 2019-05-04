/*
MERGE SORT

*** Description

Like merge sort, quick sort employs a divide and conquer strategy.

It has a partitioning step, in which you pick an element (called a pivot) and partition the array so that all smaller elements come before pivot and all larger elements come after. The pivot will be in its final position. Recursively apply this to the subarray of smaller elements and the subarray of larger elements.

*** Exercises

- Write a partition helper function. For choice of pivot, for a basic implementation, we recommend choosing either the first or last element in the subarray. If you need hints, look up the Lumoto partiton scheme. Test this out before moving forward!
- Implement quicksort iteratively
- Implement quicksort recursively
- Identify time complexity
- Identify space complexity

- Consider implications for choice of pivot (https://en.wikipedia.org/wiki/Quicksort#Choice_of_pivot)

*** Extra Credit

Variants:
- Implement a multi-pivot quicksort (ex: partition into 3 subarrays using 2 pivots)

*/



/*
Properties:
O(n) extra space
O(n^2) time (for few unique keys), but typically O(n·log(n)) if recursion is balanced
not stable
not adaptive

Use cases:
Quicksort is in place and has low overhead. If a stable sort is not necessary. It has a higher worstcase time complexity than merge sort (if pivot is not in center of array)
*/

// ref: https://www.youtube.com/watch?v=SLauY6PpjW4
function quicksort(array, left = 0, right = array.length-1) {

  if(left >= right) return;
  let pvt = array[(left+right)>>1];
  let idx = partition(array, left, right, pvt);
  quicksort(array, left, idx-1);
  quicksort(array, idx, right);
  return array;
}

// Lomuto partition scheme
function partition(arr, left, right, pivot) {
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  return left;
}

function swap (arr, a, b) {
  if(a === b) return;
  arr[a] = arr[a]^arr[b];
  arr[b] = arr[a]^arr[b];
  arr[a] = arr[a]^arr[b];
}

console.log(quicksort([3,2,3,1,2,4,5,5,6]))