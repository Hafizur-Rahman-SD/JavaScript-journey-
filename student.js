// Problem 1: Write a JS Programm to store name, phone Number and Marks of a student using objects.
// student.js
// Object to store student information

const student = {
    name: "Hafizur Rahman",
    phone: "01605-135004",
    marks: {
        javascript: 85,
        python: 80,
        cProgramming: 80
    }
};

// Displaying the student data
console.log("Student Name:", student.name);
console.log("Phone Number:", student.phone);
console.log("Marks:");
console.log("- JavaScript:", student.marks.javascript);
console.log("- Python:", student.marks.python);
console.log("- C Programming:", student.marks.cProgramming);