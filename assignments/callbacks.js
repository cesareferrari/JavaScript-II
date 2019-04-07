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


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, function(length) {
  console.log('The array length is:', length);
})




function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

last(items, function(last) {
  console.log('The last item of the array is:', last);
})




function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  result = x + y
  return cb(result)
}

sumNums(3, 5, (result) => { console.log('The result is:', result)});




function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  result = x * y;
  return cb(result);
}

multiplyNums(3, 7, (result) => {console.log('The result is:', result)});




function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  result = list.find(element => element === item);

  if (result === item) {
    return cb(true);
  } else {
    return cb(false);
  }
}

contains('Pencil', items, isFound => {
  if (isFound === true) {
    return console.log('Pencil is found!');
  } else {
    return console.log('Pencil is not found!');
  }
});

contains('Backpack', items, isFound => {
  if (isFound === true) {
    return console.log('Backpack is found!');
  } else {
    return console.log('Backpack is not found!');
  }
});




/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
