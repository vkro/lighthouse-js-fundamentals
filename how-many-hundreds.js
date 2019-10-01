/*
When this function is given a number, 
it should return how many hundreds fit into that number.


*/


function howManyHundreds(number) {
  // start with original number
  // start with a count of 0
  // as long as what remains of the original number >= 100:
  // subtract 100 from original number
  // count up one
  // return count
  var count = 0; 
  for (let whatsLeft = number; whatsLeft >= 100; count++) {
    whatsLeft = whatsLeft - 100;
  }
  return count;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);