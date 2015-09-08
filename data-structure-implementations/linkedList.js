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



*** Nightmare mode:

Implement a circularly linked list:
https://en.wikipedia.org/wiki/Linked_list#Circularly_linked_list


 */


function Node(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
}

function LinkedList(headValue) {
  if (headValue === undefined) console.log('Must provide value for first node');
  this.head = new Node(headValue);
  this.tail = this.head;
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

LinkedList.prototype.insertAfter = function(node, value) {
  // get reference to former next
  var oldNext = node.next;
  // create new node
  var newNext = new Node(value);
  // store it as the new next
  node.next = newNext;
  newNext.prev = node;
  // set next for the new node to be the old next
  newNext.next = oldNext;
  oldNext && (oldNext.prev = newNext); // do this only if oldNext is not null
  // if reference node is tail, set tail to newNext
  if (this.tail === node) this.tail = newNext;
  // set prev properties

  return newNext.value;
};

LinkedList.prototype.removeAfter = function(node) {
  // store reference to removed node
  var removedNode = node.next;
  // if node is tail, then there's nothing to remove
  if (!removedNode) return 'Nothing to remove';

  // get reference to node after removed node
  var newNext = removedNode.next;

  // set references between node and new next
  node.next = newNext;
  newNext.prev = node;

  // remove reference from removed node to linked list
  removedNode.next = null;
  removedNode.prev = null;

  // if removedNode is tail, set tail to node
  if (removedNode === this.tail) this.tail = node;
  return removedNode.value;
};

LinkedList.prototype.insertHead = function(value) {
  var newHead = new Node(value);
  var oldHead = this.head;
  this.head = newHead;
  newHead.next = oldHead;
  oldHead.prev = newHead;
  return this.head.value;
};

LinkedList.prototype.removeHead = function() {
  var oldHead = this.head;
  var newHead = oldHead.next;
  this.head = newHead;
  newHead.prev = null;
  oldHead.next = null;
  return oldHead.value;
}

LinkedList.prototype.findNode = function(value) {
  var node = this.head;
  while (node) {
    if (node.value === value) return node;
    node = node.next;
  }
  return 'No node with value: ' + value + ' found.';
};

LinkedList.prototype.appendToTail = function(value) {
  var newTail = new Node(value);

  // // without myList.tail property: O(n)
  // var node = this.head;
  // while(node.next) {
  //   node = node.next;
  // }
  // node.next = newTail;
  // newTail.prev = node;

  // with myList.tail property: O(1)
  var oldTail = this.tail;
  oldTail.next = newTail;
  newTail.prev = oldTail;
  this.tail = newTail;

  return newTail.value;
};

LinkedList.prototype.insertBefore = function(node, value) {
  var oldPrev = node.prev;
  var newPrev = new Node(value);
  // Set up references between reference node and inserted node
  node.prev = newPrev;
  newPrev.next = node;
  // Set up references between inserted node and old previous node
  newPrev.prev = oldPrev;
  oldPrev.next = newPrev;

  // if node is head, set newPrev as head
  if (node === this.head) this.head = newPrev;

  return newPrev.value;
};

LinkedList.prototype.removeBefore = function(node) {
  var removedNode = node.prev;

  // if node is head, don't do anything
  if (!removedNode) return 'Nothing to remove';

  var newPrev = removedNode.prev;
  // if newPrev is null, then removed node is head, set node to be new head
  if (!newPrev) this.head = node;
  // Set up references between node and new previous node
  // if newPrev is not null, set its next property to node
  newPrev && (newPrev.next = node);
  node.prev = newPrev;
  // Break references from removed node to linked list
  removedNode.next = null;
  removedNode.prev = null;


  return removedNode.value;
};

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
console.log(myList.findNode(0) === myList.head, 'should be true');
console.log(myList.findNode(3) === myList.head.next.next, 'should be true');
myList.insertAfter(myList.findNode(2), 2.5);
console.log(myList.print(), 'should be 0, 2, 2.5, 3, 4');
myList.removeAfter(myList.findNode(2));
console.log(myList.print(), 'should be 0, 2, 3, 4');

console.log(myList.insertBefore(myList.head.next, 1), 'should be 1');
console.log(myList.print(), 'should be 0, 1, 2, 3, 4');
console.log(myList.removeBefore(myList.head.next.next), 'should be 1');
console.log(myList.print(), 'should be 0, 2, 3, 4');


