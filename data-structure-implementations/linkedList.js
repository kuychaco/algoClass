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
Insert new head node at the beginning of the list with the value passed in

myList.removeHead()
=> value of removed head node
remove the head node of the linked list

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

function LinkedList(value) {
  this.head = (value !== undefined) ? new Node(value) : null;
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

Node.prototype.insertAfter = function(value) {
  // get reference to former next
  var oldNext = this.next;
  // create new node
  var newNext = new Node(value);
  // store it as the new next
  this.next = newNext;
  // set next for the new node to be the old next
  newNext.next = oldNext;
  return newNext.value;
};

Node.prototype.removeAfter = function() {
  // store reference to removed node
  var removedNode = this.next;
  // get reference to node after removed node
  var newNext = removedNode.next;
  // set newNext as the next node
  this.next = newNext;
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


var myEmptyList = new LinkedList();
var myList = new LinkedList(0);

console.log(myEmptyList, 'should have head === null');
console.log(myList, 'should have head !== null');

console.log(myList.head.insertAfter(1), 'should be 1');
console.log(myList.print(), 'should be 0, 1');
console.log(myList.head.next.insertAfter(3), 'should be 3');
console.log(myList.print(), 'should be 0, 1, 3');
console.log(myList.head.next.insertAfter(2), 'should be 2');
console.log(myList.print(), 'should be 0, 1, 2, 3');
console.log(myList.head.removeAfter(), 'should be 1');
console.log(myList.print(), 'should be 0, 2, 3');
console.log(myList.insertHead(-1), 'should be -1');
console.log(myList.print(), 'should be -1, 0, 2, 3');
console.log(myList.removeHead(), 'should be -1');
console.log(myList.print(), 'should be 0, 2, 3');
