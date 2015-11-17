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
=> count of stack
add value to collection

myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection

myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection

myStack.count()
=> number of elements in stack


*** Exercises:

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

Create a min method that returns the minimum value in the stack in constant time.

Towers of Hanoi:
You have three vertical rods and N disks of different sizes that can slide onto the rods. Initially the disks are arranged in a stack in ascending order of size on the first rod and your goal is to move all the disks to the last rod given
...

Implement k stacks in a single array of fixed length. Start by first implementing two stacks in an array.

Balanced parens.

function balanced (str) {
  return Array.prototype.reduce.call(str, function(acc, el){
    if (el === '(') {
      return {
        left: acc.left + 1,
        right: acc.right,
        valid: acc.valid
      }
    } else if (el === ')') {
      return {
        left: acc.left,
        right: acc.right + 1,
        valid: ((acc.left <= acc.right + 1) && acc.valid)
      }
    } else {
      return acc
    }
  }, {
    left: 0,
    right: 0,
    valid: true
  })
}

*/

function Stack(capacity) {
  this._capacity = capacity;
  this._storage = {};
  this._count = 0;
}

// O(1)
Stack.prototype.push = function(value) {
  if (this._count < this._capacity) {
    this._storage[this._count++] = value;
    return this._count;
  }
  return 'Max capacity already reached. Remove element before adding a new one.';
};

// O(1)
Stack.prototype.pop = function() {
  var value = this._storage[--this._count];
  delete this._storage[this._count];
  if (this._count < 0) {
    this._count = 0;
  }
  return value;
};

// O(1)
Stack.prototype.peek = function() {
  return this._storage[this._count-1];
}

// O(1)
Stack.prototype.count = function() {
  return this._count;
};


var myStack = new Stack(3);
console.log(myStack.push('a'), 'should be 1');
console.log(myStack.push('b'), 'should be 2');
console.log(myStack.push('c'), 'should be 3');
console.log(myStack.push('d'), 'should be Max capacity reached');
console.log(myStack.pop(), 'should be c');
console.log(myStack.count(), 'should be 2');
console.log(myStack.peek(), 'should be b');
console.log(myStack.count(), 'should be 2');
