/*

Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

*/

function findOdd(arr) {
  arr.sort();

  for (var i = 0; i < arr.length;) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 2);
    } else {
      return arr[0];
    };
  };
};

input = [ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]
findOdd(input);

// other solution

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
// ^ XOR Bitwise operator
// Will find two equal bits and cancel them out.
