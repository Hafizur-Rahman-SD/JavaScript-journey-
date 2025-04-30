// Example of Primitive Types
let name = "Hafizur"; // String
let age = 25; // Number
let isStudent = true; // Boolean
let height; // Undefined
let weight = null; // Null

console.log("Primitive Types:");
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Height:", height);
console.log("Weight:", weight);

// Example of Object Types
let person = {
    name: "Hafizur", // String
    age: 25, // Number
    isStudent: true, // Boolean
    height: undefined, // Undefined
    address: {
        city: "Dhaka",
        country: "Bangladesh", // String
        zip: 1229
    }
};

console.log("\nObject Types:");
console.log("Person:", person);
console.log("Person's Name:", person.name);
console.log("Person's City:", person.address.city);