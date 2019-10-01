/* The function takes 3 integer parameters: 
- start
- end
-step
The function should return an array 
of numbers from start to end counting by step.
example: range (0, 10, 2); 
output: [0, 2, 4, 6, 8, 10]

Return an empty array [] if given incorrect parameters such as:
- start, end, or step being undefined
- start being greater than end
- step being 0, or negative
*/


// always include the first number in the array
// loop through the array and return multiples of the step
// do all this if start < end
// if step < 0
// if start, end, and step have values

function range(start, end, step) {
  var some_array = []
  if (start < end && step > 0) {
    for(var i = start; i <= end; i += step){
      some_array.push(i);
    } return some_array
  } else return some_array
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));