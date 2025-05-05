// A function that simulates downloading a file and then executes a callback
function downloadFile(filename, callback) {
    // Simulating a 7-second delay (like file downloading)
    setTimeout(() => {
      console.log(` Downloaded: ${filename}`); // Message after download
      callback(); // Calling the function passed as argument
    }, 7000); // Delay of 2000ms = 2 seconds
  }
  
  // Calling downloadFile with a callback function
  downloadFile("chapter9_notes.pdf", () => {
    // This function will be executed after the file is "downloaded"
    console.log("File processing started...");
  });
  