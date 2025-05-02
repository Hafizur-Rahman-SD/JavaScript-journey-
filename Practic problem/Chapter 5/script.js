// Global array for Problem 2
let numbersArray = [];

document.addEventListener('DOMContentLoaded', function() {
    // Problem 1: Add numbers to array
    document.getElementById('problem1-btn').addEventListener('click', function() {
        const arrayInput = document.getElementById('array-input').value;
        const numberToAdd = document.getElementById('number-to-add').value;
        
        // Convert input string to array
        let numbers = arrayInput.split(',').map(item => {
            const num = parseInt(item.trim());
            return isNaN(num) ? 0 : num;
        });
        
        // Add new number
        if (numberToAdd) {
            numbers.push(parseInt(numberToAdd));
        }
        
        const output = `Original array: [${arrayInput}]\n` +
                      `Added number: ${numberToAdd || 'None'}\n` +
                      `New array: [${numbers.join(', ')}]`;
        
        document.getElementById('problem1-output').textContent = output;
    });

    // Problem 2: Add until zero
    document.getElementById('problem2-btn').addEventListener('click', function() {
        const inputNumber = parseInt(document.getElementById('add-until-zero').value);
        
        if (isNaN(inputNumber)) {
            document.getElementById('problem2-output').textContent = 'Please enter a valid number';
            return;
        }
        
        if (inputNumber === 0) {
            const output = `Final array: [${numbersArray.join(', ')}]\n` +
                          `Total numbers added: ${numbersArray.length}\n` +
                          `(Array has been reset)`;
            document.getElementById('problem2-output').textContent = output;
            numbersArray = [];
            return;
        }
        
        numbersArray.push(inputNumber);
        
        const output = `Added number: ${inputNumber}\n` +
                      `Current array: [${numbersArray.join(', ')}]\n` +
                      `Enter 0 to finish and see final result`;
        document.getElementById('problem2-output').textContent = output;
    });

    // Problem 3: Filter divisible by 10
    document.getElementById('problem3-btn').addEventListener('click', function() {
        const inputNumbers = document.getElementById('filter-input').value;
        const numbers = inputNumbers.split(',').map(item => {
            const num = parseInt(item.trim());
            return isNaN(num) ? 0 : num;
        });
        
        const filteredNumbers = numbers.filter(num => num % 10 === 0);
        
        const output = `Original array: [${numbers.join(', ')}]\n` +
                      `Numbers divisible by 10: [${filteredNumbers.join(', ')}]`;
        
        document.getElementById('problem3-output').textContent = output;
    });

    // Problem 4: Square numbers
    document.getElementById('problem4-btn').addEventListener('click', function() {
        const inputNumbers = document.getElementById('square-input').value;
        const numbers = inputNumbers.split(',').map(item => {
            const num = parseInt(item.trim());
            return isNaN(num) ? 0 : num;
        });
        
        const squaredNumbers = numbers.map(num => num * num);
        
        const output = `Original array: [${numbers.join(', ')}]\n` +
                      `Squared array: [${squaredNumbers.join(', ')}]`;
        
        document.getElementById('problem4-output').textContent = output;
    });

    // Problem 5: Calculate factorial
    document.getElementById('problem5-btn').addEventListener('click', function() {
        const n = parseInt(document.getElementById('factorial-input').value);
        
        if (isNaN(n) || n < 1) {
            document.getElementById('problem5-output').textContent = 'Please enter a valid number greater than 0';
            return;
        }
        
        // Create array of first n natural numbers
        const numbers = Array.from({length: n}, (_, i) => i + 1);
        
        // Calculate factorial using reduce
        const factorial = numbers.reduce((acc, curr) => acc * curr, 1);
        
        const output = `First ${n} natural numbers: [${numbers.join(', ')}]\n` +
                      `Factorial of ${n} (${n}!): ${factorial}`;
        
        document.getElementById('problem5-output').textContent = output;
    });
});