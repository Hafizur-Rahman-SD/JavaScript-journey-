// A promise-based function to simulate database fetch.
function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(" Data loaded from database....");
      }, 5000); // 5s delay.
    });
  }
  
  // An async function that uses await...
  async function loadData() {
    console.log(" Fetching data...");
    const data = await fetchData(); // Pauses until fetchData resolves.
    console.log(data); // Logs the resolved value
    console.log(" Data usage started");
  }
  
  // Call the async function.
  loadData();
  