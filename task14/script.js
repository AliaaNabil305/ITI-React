/* let x = 2;
let y = 5;

[x, y] = [y, x];

console.log("x:", x); 
console.log("y:", y); */

/* function findMinMax(...values) {
    const min = Math.min(...values);
    const max = Math.max(...values);
    return [min, max];
  }
  
  const arr = [4, 8, 2, 1, 9];
  
  const [Minimum, Maximum] = findMinMax(...arr);
  
  console.log("Minimum:", Minimum);
  console.log("Maximum:", Maximum); */


  var fruits = ["apple", "strawberry", "banana", "orange", "mango"];
// a
const allStrings = fruits.every(item => typeof item === "string");
console.log("Are all elements strings?", allStrings);

// b
const StartwzA = fruits.some(item => item.startsWith("a"));
console.log("Do some elements start with 'a'?", StartwzA);

// c
const filteredArray = fruits.filter(item => item.startsWith("b") || item.startsWith("s"));
console.log("Filtered array:", filteredArray);

// d
const likeFruit = fruits.map(item => `I like ${item}`);
console.log("Array with 'I like' statements:", likeFruit);
// e
likeFruit.forEach(item => console.log(item));


  
  
  
