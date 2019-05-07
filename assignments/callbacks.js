// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

// Higher order function
function getLength(arr, cb) {
  return cb(arr.length);
}

// Function invocation
getLength(items, function(length) {
  console.log(length);
});

// Higher order function
function last(arr, cb) {
  return cb(arr[arr.length - 1]);
}

// Function invocation
last(items, function(lastItem) {
  console.log(lastItem);
});

// Higher order function
function sumNums(x, y, cb) {
  const result = x + y;

  return cb(result);
}

// Function invocation
sumNums(5, 6, function(sum) {
  console.log(sum);
});

// Higher order function
function multiplyNums(x, y, cb) {
  const result = x * y;

  return cb(result);
}

// Function invocation
multiplyNums(8, 7, function(product) {
  console.log(product);
});

// Higher order function
function contains(item, list, cb) {
  let result;

  if (list.includes(item)) {
    result = true;
  } else {
    result = false;
  }

  cb(result);
}

contains('yo-yo', items, function(bool) {
  console.log(bool);
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
