// Function that accepts a name and a callback
function greetUser(name, callback) {
    // Log a message
    console.log("Preparing to greet user...");
    // Call the callback function with the name
    callback(name);
  }
  
  // The callback function to display the greeting
  function sayHello(userName) {
    console.log(`👋 Hello, ${userName}! Welcome back.`);
  }
  
  // Calling the greetUser with a callback function
  greetUser("Hafizur", sayHello);
  