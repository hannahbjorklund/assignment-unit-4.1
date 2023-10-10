console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
let name = 'Hannah';
console.log("Setting name variable to 'Hannah':", name);
console.log("Test - should say 'Hello, Hannah!':", helloName(name));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
let firstNumber = 6;
let secondNumber = 10;
console.log("Setting first number:", firstNumber);
console.log("Setting second number:", secondNumber);
console.log("Test - should return 16:", addNumbers(firstNumber, secondNumber));


// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
  return firstNumber*secondNumber*thirdNumber;
}
let thirdNumber = 3;
console.log("Setting third number:", thirdNumber);
console.log("Test - should return 180:", multiplyThree(firstNumber, secondNumber, thirdNumber));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log("Testing -1, should return false:", isPositive(-1));
console.log("Testing 2, should return true:", isPositive(2));
console.log("Testing 0, should return false:", isPositive(0));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  return array[array.length-1];
}
let testArray = [1, 2, 3];
console.log("Creating an array:");
console.table(testArray);
console.log("Test - should return 3:", getLast(testArray));
testArray = [];
console.log("Emptying array:");
console.table(testArray);
console.log("Test - should return undefined:", getLast(testArray));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for(let i = 0; i < array.length; i++){
    if(array[i] == value){
      return true;
    }
  }
  return false;
}
let value = 6;
testArray = [1, 6, 2, 4];
let testArray2 = [0, 8, 7, 9];
console.log("Created two arrays:");
console.table(testArray);
console.table(testArray2);
console.log("Test - look for 6 in array 1. Should return true:", find(value, testArray));
console.log("Test - look for 6 in array 2. Should return false:", find(value, testArray2));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  return(letter == string[0]);
}
let letter = 'a';
let word1 = 'apple';
let word2 = 'pants';
console.log("Test - 'a' and 'apple', should return true:", isFirstLetter(letter, word1));
console.log("Test - 'a' and 'pants', should return false:", isFirstLetter(letter, word2));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  // TODO: return the sum
  return sum;
}
testArray = [5, 10, 15, 20];
console.log("Using test array:");
console.table(testArray);
console.log("Test - return sum. Should return 50:", sumAll(testArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array) {
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] > 0){
      newArray.push(array[i]);
    }
  }
  return newArray;
}
testArray = [0, -3, -1, 1, -5, 7, 10];
console.log("Using test array:");
console.table(testArray);
console.log("Test - should return newArray [1, 7, 10]:", allPositive(testArray));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
// I chose the problem from edabit "Add up the numbers from a single number"
// https://edabit.com/challenge/4gzDuDkompAqujpRi
// Make a function that takes a sum of all the numbers from 1 to the provided number
function sumUpTo(number){
  let sum = 0;
  for(let i = 1; i <= number; i++){
    sum += i;
  }
  return sum;
}
console.log("Test - sum of all numbers 1 to 5. Should equal 15:", sumUpTo(5));

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
