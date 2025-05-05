// Step 1: Simulate getting user
function getUser() {
    return new Promise(resolve => {
      setTimeout(() => resolve(" User found (Hey, I am Your Hafiz)"), 3000);
    });
  }
  
  // Step 2: Simulate validating user
  function validateUser() {
    return new Promise(resolve => {
      setTimeout(() => resolve(" User validated"), 5000);
    });
  }
  
  // Step 3: Simulate showing dashboard
  function showDashboard() {
    return new Promise(resolve => {
      setTimeout(() => resolve(" Dashboard ready"), 2000);
    });
  }
  
  // Chaining the promises
  getUser()
    .then(res => {
      console.log(res); // Log result of getUser
      return validateUser(); // Move to next step
    })
    .then(res => {
      console.log(res); // Log result of validateUser
      return showDashboard(); // Final step
    })
    .then(res => {
      console.log(res); // Log result of showDashboard
    });
  