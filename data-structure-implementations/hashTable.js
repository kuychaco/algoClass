/*

HASH TABLE

Collection of key-value pairs.
Map keys to values for efficient lookup.
Use an array as the underlying data structure.
Hash table should have a size - this will be used by the hashing function to determine what index to map the key to.
A hashing function is used to map the key to an integer, which is the index that the value is to be stored at.
Since our hashing function might map multiple keys to the same integer, we have to deal with collisions by creating buckets at each index of the storage array. These buckets can be arrays or linked lists.


*** Note:

ES6 includes a Map data structure. It differs from the JavaScript object because the keys can be any value (not just strings like for objects), there is a size property, and there is a guaranteed order (the insertion order).

Hash tables are also referred to as hash mapse or dictionaries.


*** Operations:

myMap.set(key, value)
=> myMap object
Store the key-value pair in the storage array.
If the key already exists, replace stored value with new value.
Use the hashing function to map the key to an integer and store the value at the corresponding index.
Account for the possibility of collisions.

myMap.get(key)
=> value associated with key, or undefined if none

myMap.has(key)
=> true/false depending on if a value has been associated with the key

myMap.delete(key)
=> true if a value was associated with the key
=> false if a value was never associated with the key
Remove any value associated to the key

myMap.count()
=> integer number of key/value pairs in hash table

myMap.forEach(callbackFn)
=> no returned value
Invokes callback function once for each key-value pair in the hash table


*** Nightmare mode:

Resize the hash table:
- if the count becomes greater than 75% of the table size, double the table size and redistribute the key/value pairs
- if the count becomes less than 25% of the table size, cut the table size in half and redistribute the key/value pairs

Implement a hash table with a binary search tree.

*/

// 60 min

// Simple hashing function to use in your implementation
function simpleHash(str, tableSize) {
  var hash = 0;
  for (var i=0; i<str.length; i++) {
    hash += str.charCodeAt(i) * (i+1);
  }
  return hash % tableSize;
}
// source: http://pmav.eu/stuff/javascript-hashing-functions/source.html

function HashTable(tableSize) {
  this._size = tableSize;
  this._storage = [];
  this._count = 0;
}

// This is a helper method that will help keep our code DRY
// O(1)
HashTable.prototype.find = function(key) {
  var hash = simpleHash(key, this._size);
  this._storage[hash] = this._storage[hash] || [];
  var bucket = this._storage[hash];
  // iterate through bucket and check if key is present
  var match;
  var matchIndex;
  bucket.forEach(function(item, index) {
    if (item.hasOwnProperty(key)) {
      match = item;
      matchIndex = index;
    }
  });
  return { match: match, bucket: bucket, matchIndex: matchIndex };
};

// O(1)
HashTable.prototype.set = function(key, value) {

  var match = this.find(key).match;
  var bucket = this.find(key).bucket;
  // if match exists, update value
  if (match) {
    match[key] = value;
  }
  // if not, add new object with key/value pair
  else {
    var newItem = {};
    newItem[key] = value;
    this._count++;
    bucket.push(newItem);
  }
  return this;
};

var myMap = new HashTable(10);
console.log(myMap.set('key', 'value'), 'should be HT object');

// O(1)
HashTable.prototype.get = function(key) {
  var match = this.find(key).match;
  // if key is found, match is an object {key: value}
  // if not, match is undefined
  return match && match[key];
};

console.log(myMap.get('key'), 'should be value');
// => value associated with key, or undefined if none

// O(1)
HashTable.prototype.has = function(key) {
  return !!this.find(key).match;
  // !! does type conversion to boolean
  // !!{} => true
  // !!undefined => false
};
console.log(myMap.has('key'), 'should be true');
console.log(myMap.has('foo'), 'should be false');
// => true/false depending on if a value has been associated with the key

// O(1)
HashTable.prototype.delete = function(key) {
  var match = this.find(key).match;
  var bucket = this.find(key).bucket;
  var matchIndex = this.find(key).matchIndex;
  match && bucket.splice(matchIndex, 1);
  if (this._count > 0) this._count--;
  return !!match;
};

console.log(myMap.delete('key'), 'should be true');
console.log(myMap.delete('foo'), 'should be false');
console.log(myMap, 'should have no elements');
// => true if a value was associated with the key
// => false if a value was never associated with the key
// Remove any value associated to the key

// O(1)
HashTable.prototype.count = function() {
  return this._count;
}
// myMap.count()
// => integer number of key/value pairs in hash table

// O(n)
HashTable.prototype.forEach = function(callback) {
  this._storage.forEach(function(bucket) {
    bucket = bucket || [];
    bucket.forEach(function(item) {
      callback(item);
    });
  });
}

myMap.set('foo', 'bar');
myMap.set('fooAgain', 'barAgain');
myMap.forEach(console.log);
