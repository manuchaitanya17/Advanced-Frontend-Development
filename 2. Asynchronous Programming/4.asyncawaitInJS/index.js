//CHAPTER-4 ASYNC/AWAIT IN JAVASCRIPT

/* A. ASYNC IN PROMISES
  1. async is a keyword used to define asynchronous functions. 
  
  2. When we declare a function as async, JavaScript automatically ensures that the function returns a
     Promise object, complete with all the standard Promise properties and methods.
     
  3. If the async function returns a value that's not a Promise, it will be automatically wrapped in a 
     Resolved Promise. If the function throws an error, it will be wrapped in a Rejected Promise.
     
  4. What about all the Functions and Properties and Argument of Promise Object:
     - Executor Function: The body of your async function becomes the Executor Function.
     - resolve(): Returning a value in an async function is equivalent to calling resolve().
     - reject(): Throwing an error in an async function is equivalent to calling reject().
     - state: Managed internally by the JavaScript engine. state: Initially "pending", changes to 
       "fulfilled" when the async function returns, or "rejected" if it throws an error. 
     - result: Set to the returned value if fulfilled, or to the thrown error if rejected.
     
  4. It's worth noting that if you return a Promise explicitly from an async function, it won't be
     wrapped in another Promise. The function will just pass that Promise through. */


  //Example-1
  async function exampleFunction() {
    return "Hello, World!";
  }

  let returnedPromise = exampleFunction();
  
  console.log(returnedPromise instanceof Promise);  // true
  console.log(returnedPromise.then);                // [Function: then]
  console.log(returnedPromise.catch);               // [Function: catch]
  /* Note: In this example, returnedPromise is a full-fledged Promise object, even though we didn't 
     explicitly create one in our async function. */


  //Example-2
  async function returnExplicitPromise() {
    return Promise.resolve("Explicit Promise");
  }

  function returnRegularPromise() {
    return Promise.resolve("Regular Promise");
  }
  //Note: Both is functionally the same.


  //Example-3
  async function myCalculator4(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('Invalid input: both arguments must be numbers');
    }
    else {
      let sum = num1 + num2;
      return sum;
    }
  }
  
  function myDisplayer4(some) {
    console.log(some);
  }
  
  myCalculator4("Man", "u").then(function(result) { myDisplayer4(result); }, function(error){ console.error(error); });



/* B. AWAIT IN PROMISES
  1. await is an operator used inside async functions to pause execution and wait for a Promise to 
     settle (either resolve or reject) before continuing.
     
  2. The primary purpose of await is to simplify working with Promises and make asynchronous code 
     look and behave more like synchronous code. It allows we to write asynchronous code in a more 
     linear, readable manner.
     
  3. When await is used before a Promise, it pauses the execution of the async function until that
     Promise settles. If the Promise resolves, await returns the Resolved Value. If the Promise rejects,
     await throws an error that can be caught using try/catch. 
     
  4. The "async" keyword does automatically return a Promise Object, it doesn't provide a way to resolve the promise 
     after a specific delay directly within the async function. By explicitly creating a promise, we 
     can control exactly when and how it resolves. */


  //Example-1
  async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("I love You !!");}, 10000);
    });
    console.log(await myPromise);
    console.log("I will be executed after resolving Promise!");
  }

  myDisplay();
  console.log("I will be executed!"); 


  //Example-2
  async function getData(){
       return new Promise((resolve, reject) => {
          setTimeout (() => {
              resolve(455)
           }, 3500);
        })
  }
    
  async function main(){
      console.log("Loading modules")
      console.log("Do something else")
      console.log("Load data")
      let data = await getData()
      console.log(data)
      console.log("process data")
      console.log("task 2")
  }
  main()
