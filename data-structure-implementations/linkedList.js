/*

LINKED LIST

Comprised of nodes that represent a sequence.
Each node is composed of data and a reference/link to the next node.


*** Operations:

** Part 1

myList.forEach(callbackFn)
invoke callback function with the value of each node

myList.print()
=> string with all values in list (ex: '0, 1, 2, 3')

myList.insertAfter(refNode, value) 
=> value of new node
insert new node associated with value passed in after refNode

myList.removeAfter(refNode) 
=> value of removed node 
remove node after the refNode

myList.insertHead(value)
=> value associated with new head 
insert new head node at the beginning of the list with the value passed in

myList.removeHead()
=> value of removed head node
remove the head node of the linked list

myList.findNode(value)
=> first node that has a value matching what was passed in


* Optimization: 
Say we have a linked list that has 100 items and we want to add an item to the very end. How would you do that with your current implementation? How can you modify the data structure to add an item to the end in constant time?

myList.appendToTail(value)
=> value of tail node
add a new tail node at the end of the list with the associated value passed in

myList.removeTail()
=> value of removed tail node
remove the tail node from the list


** Part 2

Now let's think about creating insertBefore and removeBefore methods for the nodes in our list. Can you think of an efficient way to do so?

Think about time complexity. What would it be for your current implementation of a linked list? 

How can we modify our data structures (Node and Linked List classes) so that we can make these O(1) operations?

Once you've come up with a plan, implement the following methods.

myList.insertBefore(refNode, value) 
=> value of new node inserted
insert new node with associated value before refNode

myList.removeBefore(refNode) 
=> value of removed node
remove node before the refNode passed in



*** Extra Credit:

Implement a circularly linked list:
https://en.wikipedia.org/wiki/Linked_list#Circularly_linked_list

Reimplement stack and queue data structures using linked lists.


 */


// PART 1

function Node(value) {
  this.next = null;
  this.value = value;
}

function LinkedList(headValue) {
  if (headValue === undefined) console.log('Must provide value for first node');
  this.head = new Node(headValue);
}

LinkedList.prototype.forEach = function(callback) {
  // implement me...
};
// Time complexity: 

LinkedList.prototype.print = function() {
  // implement me...
};
// Time complexity: 

LinkedList.prototype.insertAfter = function(node, value) {
  // implement me...
};
// Time complexity: 

LinkedList.prototype.removeAfter = function(node) {
  // implement me...
};
// Time complexity: 

LinkedList.prototype.insertHead = function(value) {
  // implement me...
};
// Time complexity: 

LinkedList.prototype.removeHead = function() {
  // implement me...
}

LinkedList.prototype.findNode = function(value) {
  // implement me...
};
// Time complexity: 

LinkedList.prototype.appendToTail = function(value) {
  // implement me...
};
// Time complexity: 


// PART 2:

LinkedList.prototype.insertBefore = function(node, value) {
  // implement me...
};
// Time complexity: 

LinkedList.prototype.removeBefore = function(node) {
  // implement me...
};
// Time complexity: 


// var myList = new LinkedList(0);

// // PART 1
// console.log(myList.print(), 'should be 0');
// console.log(myList.insertAfter(myList.head, 1), 'should be 1');
// console.log(myList.print(), 'should be 0, 1');
// console.log(myList.insertAfter(myList.head.next, 3), 'should be 3');
// console.log(myList.print(), 'should be 0, 1, 3');
// console.log(myList.insertAfter(myList.head.next, 2), 'should be 2');
// console.log(myList.print(), 'should be 0, 1, 2, 3');
// console.log(myList.removeAfter(myList.head), 'should be 1');
// console.log(myList.print(), 'should be 0, 2, 3');
// console.log(myList.insertHead(-1), 'should be -1');
// console.log(myList.print(), 'should be -1, 0, 2, 3');
// console.log(myList.removeHead(), 'should be -1');
// console.log(myList.print(), 'should be 0, 2, 3');
// console.log(myList.appendToTail(4), 'should be 4');
// console.log(myList.print(), 'should be 0, 2, 3, 4');
// console.log(myList.findNode(0) === myList.head, 'should be true');
// console.log(myList.findNode(3) === myList.head.next.next, 'should be true');
// myList.insertAfter(myList.findNode(2), 2.5);
// console.log(myList.print(), 'should be 0, 2, 2.5, 3, 4');
// myList.removeAfter(myList.findNode(2));
// console.log(myList.print(), 'should be 0, 2, 3, 4');

// // PART 2
// console.log(myList.insertBefore(myList.head.next, 1), 'should be 1');
// console.log(myList.print(), 'should be 0, 1, 2, 3, 4');
// console.log(myList.removeBefore(myList.head.next.next), 'should be 1');
// console.log(myList.print(), 'should be 0, 2, 3, 4');

