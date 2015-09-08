/*

STACK

Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.


*** Operations:

myStack.push(value)
=> size of stack
add value to collection

myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection

myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection

myStack.size()
=> number of elements in stack


*** Nightmare mode:

Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
myStack.push(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the stack:
myStack.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of pops until you get to a certain value:
stack values - (first)2-5-7-3-6-9(last)
myStack.until(7)
=> 4
What's the time complexity?

 */

// 10 min
function Stack(capacity) {
  this._capacity = capacity;
  this._storage = {};
  this._index = 0;
  this._size = 0;
}

// O(1)
Stack.prototype.push = function(value) {
  if (this._size < this._capacity) {
    this._storage[this._index++] = value;
    return ++this._size;
  }
  return 'Max capacity already reached. Remove element before adding a new one.';
};

// O(1)
Stack.prototype.pop = function() {
  var value = this._storage[--this._index];
  delete this._storage[this._index];
  if (this._size > 0) {
    this._size--;
  }
  return value;
};

// O(1)
Stack.prototype.peek = function() {
  return this._storage[this._index-1];
}

// O(1)
Stack.prototype.size = function() {
  return this._size;
};


var myStack = new Stack(3);
console.log(myStack.push('a'), 'should be 1');
console.log(myStack.push('b'), 'should be 2');
console.log(myStack.push('c'), 'should be 3');
console.log(myStack.push('d'), 'should be Max capacity reached');
console.log(myStack.pop(), 'should be c');
console.log(myStack.size(), 'should be 2');
console.log(myStack.peek(), 'should be b');
console.log(myStack.size(), 'should be 2');
