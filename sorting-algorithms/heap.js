/*
HEAP SORT

*** Description

Heap sort consists of two parts:
1) Build a heap out of the data from the input array
2) Create sorted array by iteratively removing the largest element from the heap and inserting it into the sorted array

*** Exercise

Implement heap sort using the Heap constructor provided.

*** Extra Credit

Now try building heapsort from scratch, without using the Heap constructor. See if you can do everything in place.
(for hints see https://en.wikipedia.org/wiki/Heapsort#Algorithm)

Example:
Note that the array is separated into two portions -
     heap|sorted
[ 7 2 5 1|8 9 10]
swap first value (max) with element at end of heap
[ 1 2 5 7|8 9 10]
heap size has decreased and sorted portion has now grown
[ 1 2 5|7 8 9 10]
heap portion is re-heapified so that the first value is the new max
[ 5 1 2|7 8 9 10]
   heap|sorted
repeat...

*/

var Heap = function() {
  this.storage = [];
};

Heap.prototype.insert = function(value) {
  // Push to storage array
  this.storage.push(value);

  var that = this;

  // Recursive function to handle swaps, input index
  var reheapify = function(index) {

    // Get parent index
    var parentInd = Math.ceil(index/2-1);
    // Base Case : value < parent or parent is null
    if (parentInd < 0 || that.storage[index] <= that.storage[parentInd]) {
      return 'value added to index '+index;
    }
    // Recursive Case: swap with parent and make recursive call
    var temp = that.storage[index];
    that.storage[index] = that.storage[parentInd];
    that.storage[parentInd] = temp;

    return reheapify(parentInd);
  };
  return reheapify(that.storage.length-1);
};

// Heap remove max method on prototype
// Remove the max value from a heap, reorder the heap, and return the max value
Heap.prototype.removeMax = function() {
  // Check if heap is currently empty
  if (this.storage.length === 0) {
    // If nothing to remove then return null
    return null;
  } else if (this.storage.length === 1) {
    // If heap only has one element in it then pop off the lone element in the storage array and return it
    var removed = this.storage.pop();

    return removed;
  }

  // Handle all other cases where heap has more than one node
  // Preserve the max value in order to return it
  var maxValue = this.storage[0];
  // Replace the root node with the last node of the heap and remove the last node
  this.storage[0] = this.storage.pop();

  // Preserve context for inner recursive helper function
  var that = this;

  // Recursive function to restore the heap property of the heap
  var reheapify = function(index) {
    // Set index of max value to current node's index
    var maxIndex = index;

    // Check first child node's value against current node
    if ((2*index + 1 < that.storage.length) && (that.storage[2*index + 1] > that.storage[index])) {
      // If greater then set index of max value to first child node's index
      maxIndex = 2*index + 1;
    }
    // Check second child node's value against current max node
    if ((2*index + 2 < that.storage.length) && (that.storage[2*index + 2] > that.storage[maxIndex])) {
      // If greater then set index of max value to second child node's index
      maxIndex = 2*index + 2;
    }
    // If the index of the max value is not equal to the index of the current node
    // Then swap the nodes and reheapify at the new index of the current node
    if (maxIndex !== index) {
      // Swap node values (here's a nifty way to do so "in place" using the XOR bitwise operator)
      that.storage[index] = that.storage[index] ^ that.storage[maxIndex];
      that.storage[maxIndex] = that.storage[index] ^ that.storage[maxIndex];
      that.storage[index] = that.storage[index] ^ that.storage[maxIndex];

      // Reheapify at new index of current node
      reheapify(maxIndex);
    }
  };

  // Recursively move the swapped node down the heap until it's greater than both of its children
  reheapify(0);

  // Return the removed max value from the heap
  return maxValue;
};
