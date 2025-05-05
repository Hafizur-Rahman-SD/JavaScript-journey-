// A function that returns a Promise for simulating an API call
function fakeAPI() {
    return new Promise((resolve, reject) => {
      const success = true; // Change to false to see rejection
  
      setTimeout(() => {
        if (success) {
          resolve(" API data received"); // Promise resolved
        } else {
          reject(" API failed"); // Promise rejected
        }
      }, 500); // Simulate 1s network delay
    });
  }
  
  // Consuming the promise
  fakeAPI()
    .then((data) => {
      console.log(data); // Will run if promise is resolved
    })
    .catch((err) => {
      console.error(err); // Will run if promise is rejected
    });
  