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
