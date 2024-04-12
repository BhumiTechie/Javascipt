// HIGHER ORDER FUNCTION
//   #A Higher-Order Function either accepts a function as an argument, returns a function, or both!
//   

// Accepts a function as an argument: A higher-order function can take one or more functions as arguments. This allows the higher-order function to operate on the provided function(s) or use them in some way within its body.
// Returns a function: A higher-order function can generate and return a new function as its output. 
// Higher-order functions are a fundamental concept in functional programming paradigms, enabling powerful and flexible programming techniques such as function composition, partial application, and currying



// First class Function(FCS)

// # ASsigning a function to a variable !

const hello= () =>{
    console.log("Hello JS!")
}

hello(); //We assigned an Anonymous Function in a Variable, then we used that variable to invoke the function by adding parentheses () at the end.


// sECOND - RETURNING A Function
// In this we are returning a function from another function... We can return a function because functions in JavaScript are treated as values!
function second(){
 return () =>{
console.log("this is second function");
 }
}

// Third - Passing a Function as an argument
function sayYes() {
    return "Hello , ";
  }
  function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
  }
  // Pass `sayYes` as an argument to `greeting` function
  greeting(sayYes, "JavaScript!");
// In this that the function we are passing as an argument to another function will be called Callback Function


 // Array In JS
 // JavaScript arrays are resizable and can hold a variety of data types.
 // An array is an ordered list of values that you refer to with a name and an index
