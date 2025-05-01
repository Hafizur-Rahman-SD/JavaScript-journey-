//This is a simple for loop that prints the numbers 0 to 4 to the console.
// The loop starts with i = 0 and continues until i is less than 5, incrementing i by 1 each time.

for (let i = 0; i < 5; i++){
    console.log(i)
}


// This is simple for in Loop that prints the properties of an object to the console.
let obj = {
    Hafizur: 21,
    Aishu : 23,
    Arif: 22,  
    Rahim: 24,
    Karim: 25,
    Abdullah: 26,
  }
  for (let a in obj){
    console.log( "Mark of all People:"+a+" "+obj[a]); //Must important to useb+a+ and  obj[a] to get the value of the property
  }

//for of loop
let colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}






  //Do while loop
  let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 50);
// This code will print the numbers 1 to 5 to the console. The loop will continue until i is greater than 50.