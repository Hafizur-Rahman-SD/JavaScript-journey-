// Chapter 1 - Practice Set

// Problem 1: Create a variable of type string and try to add a number to it
let str = "Hafizur";  // String
let result = str + 15;  // String + Number becomes String
console.log("Problem 1 Output:", result);  // Output: Hafizur15


// Problem 2: Use typeof operator to find the datatype of the string in the last question
console.log("Problem 2 Output (type of result):", typeof result);  // Output: string

// Problem 3: Create a const object in JavaScript. Can you change it to hold a number later?
const myObj = {
  name: "my Book"
};

// Uncommenting the below line will cause an error
// myObj = 123;  // ❌ Error: Assignment to constant variable

console.log("Problem 3 Output:", myObj);

// Problem 4: Try to add a new key to the const object in Problem 3
myObj.price = 150;  // ✅ Allowed
console.log("Problem 4 Output (after adding new key):", myObj);

// Problem 5: Write a JS program to create a word-meaning dictionary of 5 words
const dictionary = {
  apple: "a fruit",
  book: "a set of pages",
  car: "a vehicle",
  dog: "a domestic animal",
  egg: "food from a bird"
};

console.log("Problem 5 Output (dictionary):", dictionary);
