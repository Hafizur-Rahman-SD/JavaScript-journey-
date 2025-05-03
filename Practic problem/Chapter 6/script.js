document.addEventListener('DOMContentLoaded', function() {
    // Problem 1: Driving age check
    document.getElementById('problem1-btn').addEventListener('click', function() {
        const age = prompt("Please enter your age:");
        
        if (age === null) {
            document.getElementById('problem1-output').textContent = "You cancelled the prompt.";
            return;
        }
        
        const ageNum = parseInt(age);
        
        if (isNaN(ageNum)) {
            document.getElementById('problem1-output').textContent = "Please enter a valid number.";
            return;
        }
        
        if (ageNum >= 18) {
            document.getElementById('problem1-output').textContent = "You can drive!";
            alert("You can drive!");
        } else {
            document.getElementById('problem1-output').textContent = "You cannot drive.";
            alert("You cannot drive.");
        }
    });

    // Problem 2: Repeat prompt with confirmation
    document.getElementById('problem2-btn').addEventListener('click', function() {
        function checkAge() {
            const age = prompt("Please enter your age:");
            
            if (age === null) {
                document.getElementById('problem2-output').textContent = "You cancelled the prompt.";
                return;
            }
            
            const ageNum = parseInt(age);
            
            if (isNaN(ageNum)) {
                document.getElementById('problem2-output').textContent = "Please enter a valid number.";
                return;
            }
            
            if (ageNum >= 18) {
                document.getElementById('problem2-output').textContent = "You can drive!";
                alert("You can drive!");
            } else {
                document.getElementById('problem2-output').textContent = "You cannot drive.";
                alert("You cannot drive.");
            }
            
            const repeat = confirm("Do you want to check another age?");
            if (repeat) {
                checkAge();
            }
        }
        
        checkAge();
    });

    // Problem 3: Age check with error handling
    document.getElementById('problem3-btn').addEventListener('click', function() {
        const age = prompt("Please enter your age:");
        
        if (age === null) {
            document.getElementById('problem3-output').textContent = "You cancelled the prompt.";
            return;
        }
        
        const ageNum = parseInt(age);
        
        if (isNaN(ageNum)) {
            console.error("Error: Invalid age entered");
            document.getElementById('problem3-output').textContent = "Error: Please enter a valid number.";
            return;
        }
        
        if (ageNum < 0) {
            console.error("Error: Negative age entered");
            document.getElementById('problem3-output').textContent = "Error: Age cannot be negative.";
            return;
        }
        
        if (ageNum >= 18) {
            document.getElementById('problem3-output').textContent = "You can drive!";
            alert("You can drive!");
        } else {
            document.getElementById('problem3-output').textContent = "You cannot drive.";
            alert("You cannot drive.");
        }
    });

    // Problem 4: Redirect to Google
    document.getElementById('problem4-btn').addEventListener('click', function() {
        const inputNumber = parseInt(document.getElementById('redirect-number').value);
        
        if (isNaN(inputNumber)) {
            document.getElementById('problem4-output').textContent = "Please enter a valid number.";
            return;
        }
        
        if (inputNumber > 4) {
            document.getElementById('problem4-output').textContent = `Redirecting to Google... (Number entered: ${inputNumber})`;
            setTimeout(() => {
                window.location.href = "https://www.google.com";
            }, 1000);
        } else {
            document.getElementById('problem4-output').textContent = `Number ${inputNumber} is not greater than 4. No redirect.`;
        }
    });

    // Problem 5: Change background color
    document.getElementById('problem5-btn').addEventListener('click', function() {
        const color = prompt("Enter a color name (e.g., red, yellow, blue) or hex code:");
        
        if (color === null) {
            document.getElementById('problem5-output').textContent = "Background color change cancelled.";
            return;
        }
        
        try {
            document.body.style.backgroundColor = color;
            document.getElementById('problem5-output').textContent = `Background color changed to: ${color}`;
        } catch (e) {
            document.getElementById('problem5-output').textContent = "Invalid color entered. Please try again.";
        }
    });
});