//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

var countDown = function(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
}

//2. Next, try looping just like above except using recursion

var recursiveCountDown = function(n) {
  while (n > 0) {
    console.log(n);
    return recursiveCountDown(--n);
  }
}

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

var exponent = function(base, expo) {
  var val = base;

  while (expo > 1) {
    val *= base
    expo--;
  }

  return val;
}

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

var recursiveExponent = function(base, expo) {
  if (expo === 1) {
    return base;
  }

  return base * recursiveExponent(base, --expo)
}

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

var recursiveMultiplier = function(arr, num) {
  if(arr.length === 0){
    return arr;
  }

  var last = arr.pop();

  recursiveMultiplier(arr, num);

  arr.push(last * num);

  return arr;
}

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

function recursiveReverse(arr) {
  if (arr.length < 1) return arr;
  let last = arr.shift();
  recursiveReverse(arr);
  arr.push(last);
  return arr;
}
