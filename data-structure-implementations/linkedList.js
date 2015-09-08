/*

LINKED LIST

Comprised of nodes that represent a sequence.
Each node is composed of data and a reference/link to the next node.


*** Operations:

** Node methods:

refNode.insertAfter(value)
=> new value
insert new node associated with value passed in after refNode

refNode.removeAfter()
=> value of removed node
remove node after the reference node

** List methods:

myList.insertHead(value)
=> value associated with new head
insert new head node at the beginning of the list with the value passed in

myList.removeHead()
=> value of removed head node
remove the head node of the linked list

* Optimization:
Say we have a linked list that has 100 items and we want to add an item to the very end. How would you do that with your current implementation? How can you modify the data structure to add an item to the end in constant time?

myList.append(value)
=> value of tail node
add a new tail node at the end of the list with the associated value passed in


Now let's think about creating insertBefore and removeBefore methods for the nodes in our list. Can you think of an efficient way to do so?

Think about time complexity. What would it be for your current implementation of a linked list?

How can we modify our data structures (Node and Linked List classes) so that we can make these O(1) operations?

Once you've come up with a plan, implement the following methods.

refNode.insertBefore(value)
=> value of new node inserted
insert new node with associated value before refNode

refNode.removeBefore()
=> value of removed node
remove node before the reference node passed in

myList.appendTail(value)
=> value of new tail
append new node at the end of the list with the associated value

myList.removeTail()
=> value of removed tail node
remove the tail node of the linked list


*** Nightmare mode:

Implement a circularly linked list:
https://en.wikipedia.org/wiki/Linked_list#Circularly_linked_list


 */


// Singly linked list 30 min

function Node(value) {
  this.next = null;
  this.value = value;
}

function LinkedList(headValue) {
  if (headValue === undefined) console.log('Must provide value for first node');
  this.head = new Node(headValue);
}

LinkedList.prototype.forEach = function(callback) {
  var node = this.head;
  while (node) {
    callback(node.value);
    node = node.next;
  }
};

LinkedList.prototype.print = function() {
  var result = [];
  this.forEach(function(value) {
    result.push(value);
  });
  return result.join(', ');
};

LinkedList.prototype.findNode = function(value) {
  var node = this.head;
  while (node) {
    if (node.value === value) return node;
  }
  return 'No node with value: ' + value + ' found.';
};

LinkedList.prototype.insertAfter = function(node, value) {
  // get reference to former next
  var oldNext = node.next;
  // create new node
  var newNext = new Node(value);
  // store it as the new next
  node.next = newNext;
  // set next for the new node to be the old next
  newNext.next = oldNext;
  return newNext.value;
};

LinkedList.prototype.removeAfter = function(node) {
  // store reference to removed node
  var removedNode = node.next;
  // get reference to node after removed node
  var newNext = removedNode.next;
  // set newNext as the next node
  node.next = newNext;
  // remove reference from removed node to linked list
  removedNode.next = null;
  return removedNode.value;
};

LinkedList.prototype.insertHead = function(value) {
  var newHead = new Node(value);
  var oldHead = this.head;
  this.head = newHead;
  newHead.next = oldHead;
  return this.head.value;
};

LinkedList.prototype.removeHead = function() {
  var oldHead = this.head;
  var newHead = oldHead.next;
  this.head = newHead;
  oldHead.next = null;
  return oldHead.value;
}

LinkedList.prototype.appendToTail = function(value) {
  var newTail = new Node(value);

  // without myList.tail property: O(n)
  var node = this.head;
  while(node.next) {
    node = node.next;
  }
  node.next = newTail;

  return newTail.value;
};


var myEmptyList = new LinkedList();
var myList = new LinkedList(0);

console.log(myList.print(), 'should be 0');
console.log(myList.insertAfter(myList.head, 1), 'should be 1');
console.log(myList.print(), 'should be 0, 1');
console.log(myList.insertAfter(myList.head.next, 3), 'should be 3');
console.log(myList.print(), 'should be 0, 1, 3');
console.log(myList.insertAfter(myList.head.next, 2), 'should be 2');
console.log(myList.print(), 'should be 0, 1, 2, 3');
console.log(myList.removeAfter(myList.head), 'should be 1');
console.log(myList.print(), 'should be 0, 2, 3');
console.log(myList.insertHead(-1), 'should be -1');
console.log(myList.print(), 'should be -1, 0, 2, 3');
console.log(myList.removeHead(), 'should be -1');
console.log(myList.print(), 'should be 0, 2, 3');
console.log(myList.appendToTail(4), 'should be 4');
console.log(myList.print(), 'should be 0, 2, 3, 4');


