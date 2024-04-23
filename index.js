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

 // # CREATING AN ARRAY
 // A pair of square brackets [] represents an array in JavaScript. All the elements in the array are comma(,) separated!
 // you can create an array with elements of type String, Boolean, Number, Objects, and even other Arrays.
 // For Example 
 const mixedTypeArray = [400, true, 'HEllOJS', {}];
// OUTPUT - mixedTypeArray
// (4) [400, true, 'HEllOJS', {…}]
// mixedTypeArray[2]
// 'HEllOJS'
// mixedTypeArray.length
// 4

// Creating a "new" Araay
// In JavaScript, the "new" keyword is used to create new objects from constructor functions or classes
// const fruits = ['Apple', 'Orange', 'Mango', 'Banana', 'Grapes']
// const newFruits = new Array('Apple', 'Orange', 'Mango', 'Banana', 'Grapes');


// Functions in javascript ===========( call(), apply() , bind () method )
 
// # CALL METHOD
// call is a function that you use to change the value of this inside a function and execute it with the arguments provided.

// Promises & async/await 

// Promises mean Object That are a way to handle asynchronous operations more easily, especially when dealing with multiple asynchronous tasks.
// * A promise is created by using the Promise constructor  which takes a callback function with resolve and reject parameters! Within the callback, you handle the async operation and call resolve if it succeeded or reject if it failed.
//  Promise object can be:
    //  1) Pending : initial state, neither fulfilled nor rejected.
    //  2) Fulfilled :that the operation was completed successfully.
    //  3)Rejected : hat the operation failed.

// Use the "then" method on a promise to define callbacks for success and failure cases. You can chain multiple then calls to handle transformations or subsequent async actions.
// # How to work Promises
// A “producing code” that does something and takes time. For instance, some code that loads the data over a network.
// A “consuming code” that wants the result of the “producing code” once it’s ready. Many functions may need that result.
// A promise is a special JavaScript object that links the “producing code” and the “consuming code” together.

let promise = new Promise(function(req, res) {
  setTimeout(function(){
    console.log('hello');
  }, 5000)
});

