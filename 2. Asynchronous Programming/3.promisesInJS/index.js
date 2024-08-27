//CHAPTER-3 PROMISES IN JAVASCRIPT

/* A. WHAT ARE PROMISES?
  1. Promise is a built-in class in JavaScript. A Promise Object is created using Promise Constructor.
     It's a way to handle Asynchronous Operations in a more manageable and readable way.
     
  2. The Executor Function: The Promise constructor takes a function as an argument. This function is 
     called the executor. The executor function takes two arguments: resolve and reject. resolve and 
     reject are two functions of Promise Class that return Resolved Promise or Rejected Promise as Value.
     let promiseObject = new Promise(Executor(resolve, reject){Code Here});
     
  3. Properties of Promise Class:
     - state: Initially "pending", then changes to either "fulfilled" when resolve is called or "rejected"
       when reject is called.
     - result: Initially undefined, then changes to the value passed to resolve().
     - error: Initially undefined, then changes to the value passed to reject().

  4. Methods of Promise Class:
     - then(): Attaches callbacks for the resolution and/or rejection of the Promise. Promise.then() takes 
       two arguments, a callback for success and another for failure. Both are optional, so we can add a 
       callback for success or failure only. It returns a new Promise. The then() method takes up to two 
       arguments- The first function (often called onFulfilled) is called if the original promise is ful-
       filled, this value is passed to resolve function of the new Promise and it updates the result property
       of the new Promise Object. The second function (often called onRejected) is called if the original 
       promise is rejected. Similarly the error property of the new Promise Object is updated with the error
       returned by the second callback function argument of then().
       
     - catch(): Attaches a callback for only the rejection of the Promise.
     
     - finally(): Attaches a callback to be executed when the Promise is settled (either fulfilled or rejected).
     
  5. A Promise contains both the producing code and calls to the consuming code. "Producing Code" is code that
     can take some time. "Consuming code" is code that must wait for the result.
     
  6. This Executer Function uses setTimeout to simulate an Asynchronous Operation.
  
  7. When we create a Promise, the Executor Function runs immediately. However, the resolution of the Promise 
     (calling resolve or reject) can happen asynchronously. Windows Timer Methods are used to delay the Resolution
     (Changing the state Property)of the Promise. 
     
  8. The then() method doesn't execute its callback function immediately. Instead, it waits for the Promise to be
     resolved (or rejected). */



  // Way-4 Promises
  function myDisplayer4(some) {
    console.log(some);
  }

  //Producing Code
  function myCalculator4(num1, num2) {
    return new Promise((resolve, reject) => {
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        reject('Invalid input: both arguments must be numbers');
      } 
      else {
        let sum = num1 + num2;
        resolve(sum);
      }
    });
  }
  
  //Consuming Code
  myCalculator4("Manu", "Hello").then(function(result) { myDisplayer4(result); }, function(error){ console.error(error); });



  //Way-2 Promises(Window Timer Functions)
  function displayResult(value) {
    console.log(value);
  }

  //Producing Code
  const promiseObject = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve(1000), 10000);
    console.log("I will be executed!");
  });

   console.log(promiseObject);  //Output: Promise {<pending>}
   console.log("But I will be executed!"); 
   //Note: These two lines will execute, will not wait for the promise to be resolved.

   //Consuming Code
   promiseObject.then(function(result){
     displayResult(result);
   });  
   /*Output: 1000(10 Seconds Later Logged to Console) || Note: This line will execute only when the Prmoise is 
     resolved. */
 
   console.log("I will be also executed!");

  









