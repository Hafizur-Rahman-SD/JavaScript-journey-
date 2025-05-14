// Chapter 3 - Practice Set Solutions

// Problem 1: Print Marks Using For Loop
console.log("Problem 1: Print Marks Using For Loop");
const marks = { // Object containing student names and their marks
    hafiz: 98,
    rahman: 70,
    aishu: 73,
    abdullah: 85,
};

// Using for loop
const students = Object.keys(marks);
for (let i = 0; i < students.length; i++) { // Loop through the keys of the marks object
    console.log(`${students[i]}: ${marks[students[i]]}`); //// Print the student name and their mark using template literals its important

}

// Problem 2: Print Marks Using For-In Loop
console.log("\nProblem 2: Print Marks Using For-In Loop");
for (let student in marks) {
    console.log(`${student}: ${marks[student]}`);
}

// Problem 3: Try Again Until Correct Number
console.log("\nProblem 3: Try Again Until Correct Number (Simulated)");
function tryUntilCorrect() {
    const correctNumber = 7;
    let attempts = 0;
    let userGuess;
    
    // Simulating user input for demonstration
    const simulatedInputs = [5, 8, 7]; // Last one is correct
    
    while (true) {
        attempts++;
        userGuess = simulatedInputs[attempts-1] || parseInt(prompt("Guess the number:"));
        
        if (userGuess === correctNumber) {
            console.log("Correct!");
            break;
        } else {
            console.log("Try again");
        }
        
        // Safety break for demo
        if (attempts >= 3) break;
    }
}
tryUntilCorrect();

// Problem 4: Function to Find Mean of 5 Numbers
// see here have any problem with the function name and the parameters?

console.log("\nProblem 4: Mean of 5 Numbers");
function calculateMean(a, b, c, d, e,f) {
    return (a + b + c + d + e,f) / 5;
}

const mean = calculateMean(10, 20, 30, 40, 50,60); // Example usage
console.log("Mean of 10, 20, 30, 40, 50,60:", mean);

// Alternative version that works with any number of arguments
function calculateMeanAny() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
}
console.log("Mean of 5, 10, 15,20:", calculateMeanAny(5, 10, 15,20)); // Example usage with any number of arguments