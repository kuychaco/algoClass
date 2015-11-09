/*

SET

Abstract data type
Stores unique values in no particular order
No mechanism for retrieving elements
Your set should be able to store any JavaScript primitive

*** Operations:

mySet.count()
=> integer value for the number of values present in set

mySet.add(value)
=> set object

mySet.delete(value)
=> true if value was present and removed
=> false if value was not present

mySet.has(value)
=> true/false

mySet.forEach(callbackFn)
=> no return value
calls callbackFn once for each value in the set


*** Exercises:

Modify your set to take a max capacity and return a string if you try to add an element when there's no more room
mySet.add(value)
=> "Max capacity already reached. Remove element before adding a new one."

Make your set able to take objects, arrays, and functions as values in addition to just primitives.


Note: ES6 has a Set data structure as part of the core language.
 */

function Set(capacity) {
  this._capacity = capacity;
  this._storage = {};
  this._count = 0;
}

// O(1)
Set.prototype.count = function() {
  return this._count;
};

// O(1)
Set.prototype.has = function(value) {
  return !!this._storage[value];
};

// O(1)
Set.prototype.add = function(value) {
  if (this.has(value)) {
    return 'Set already has value';
  }
  else if (this._count < this._capacity) {
    this._storage[value] = true;
    this._count++;
    return this;
  }
  return 'Max capacity already reached. Remove element before adding a new one.'
};

// O(1)
Set.prototype.delete = function(value) {
  if (this._storage[value]) {
    delete this._storage[value];
    this._count--;
    return true;
  }
  return false;
};

// O(n)
Set.prototype.forEach = function(callback) {
  var values = this._storage;
  for (var key in values) {
    callback(key);
  }
};


mySet = new Set(3);
console.log(mySet.add('doe')._storage, 'should have doe');
console.log(mySet.add('ray')._storage, 'should have ray');
console.log(mySet.add('me')._storage, 'should have me');
console.log(mySet.add('fa'), 'should be max capacity reached');
console.log(mySet.count(), 'should be 3');
console.log(mySet.add('doe'), 'should say already has value');
console.log(mySet.count(), 'should be 3');
console.log(mySet.delete('me'), 'should be true');
console.log(mySet.delete('so'), 'should be false');
console.log(mySet.has('doe'), 'should be true');
console.log(mySet.has('tea'), 'should be false');
mySet.forEach(console.log);
