/*
HEAPS

Abstract data type

A max heap is a special type of binary tree that satisfies two properties:

1. Shape property – All nodes which are at the same depth of the tree from the root node are said to be on the same level. Each level of a max heap must be filled with nodes before any nodes can appear on the next level of the max heap. When nodes are added to the next level of the max heap they must be added from left to right.
2. Heap property – In a max heap all nodes are greater than or equal to each of its children nodes.

Heaps are usually implemented in an array. The first element is the root, the next two are the children of the root, and the next four are their children. The children of the node at position n are at positions 2n+1 and 2n+2.


View visualization here: https://presentpath.github.io/heap-visualizer/

*** Operations:

heap.insert(value)
=> undefined
Add value to heap according to the shape and heap property

heap.removeMax()
=> max value
Remove the max value from the heap, reorder the heap, and return the max value

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
    that.storage[index] = that.storage[index] ^ that.storage[parentInd];
    that.storage[parentInd] = that.storage[index] ^ that.storage[parentInd];
    that.storage[index] = that.storage[index] ^ that.storage[parentInd];

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
      // Swap node values
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

// Instantiate heap
var heap = new Heap();

heap.insert(1);
heap.insert(2);
heap.insert(3);
heap.insert(5);
console.log(heap.storage);
