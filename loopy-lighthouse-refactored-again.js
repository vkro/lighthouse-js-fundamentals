/* A program that prints the numbers from 100 to 200 to the console, with three exceptions:

If the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
By print, we are referring to console.log.

####

Wrap the code you've written in a function called 
loopyLighthouse(range, multiples, words) that you 
call with 3 parameters.

- range: an array of 2 numbers representing the start and end values for the loop.
- multiples: an array of 2 numbers representing the multiples you want to replace with words.
- words: an array of 2 strings representing the words that will replace the multiples.

*/

function loopyLighthouse(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    let firstMultiple = (i % multiples[0] === 0);
    let secondMultiple = (i % multiples[1] === 0);

    if (firstMultiple && secondMultiple) {
      console.log(words[0] + words[1]);
    } else if (firstMultiple) {
      console.log(words[0]);
    } else if (secondMultiple) {
      console.log(words[1]);
    } else console.log(i);
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
//all the numbers from 15 to 90, except replacing 
//multiples of 2 with "Batty", multiples of 5 with "Beacon", 
//and multiples of 2 and 5 with "BattyBeacon".

loopyLighthouse([0, 20], [5, 4], ["five", "four"]);