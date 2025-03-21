//call back
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
  }
  
  function sayBye() {
    console.log("Goodbye, Ayaan!");
  }
  
  greet("Ayaan", sayBye);
  
  //for each
  let names = ["Ayaan", "manish"];
names.forEach(function(name) {
  console.log("Hello, " + name);
});


//filter
let namess= ["Ayaan", "Aryan", "Zayan", "Ayaan"];
let result = namess.filter(name => name === "Ayaan");
console.log(result); // ["Ayaan", "Ayaan"]


//map

let n = ["Ayaan", "Ali"];
let greetings = n.map(name => "Hello, " + name);
console.log(greetings); 
// ["Hello, Ayaan", "Hello, Ali"]
