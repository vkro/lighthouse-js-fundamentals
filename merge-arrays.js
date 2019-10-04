/*
When given two sorted arrays containing numbers, 
returns a sorted array of the numbers from both lists.

array.splice(atIndex, numItemsToDelete, itemToInsert)
*/

function merge(array1, array2) {
  array2.forEach(function(i) {
    array1.push(i);
  })
  return array1.sort();
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);

// for each value in the first array, evaluate it against each value in the second array
// if value1 is <= value2, drop value1 into the index of value2
// return second array


