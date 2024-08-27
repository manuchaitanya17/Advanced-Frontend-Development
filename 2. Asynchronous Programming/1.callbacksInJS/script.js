//CHAPTER-1 CALLBACKS IN JAVASCRIPT

/* A. INTRODUCTION TO CALLBACKS AND FUNCTION SEQUENCES
  1. A callback is a function passed as an argument to another function.
  2. This technique allows a function to call another function. A callback function can run after another
     function has finished.
  3. JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined. */



/* B. SEQUENCE CONTROL 
  1. Sometimes we would like to have better control over when to execute a function.
  2. This can be achieved by introducing the concept of callback functions. 
  3. Suppose we want to do a calculation, and then display the result. We could call a calculator function 
     (myCalculator), save the result, and then call another function (myDisplayer) to display the result. 
     So lets discuss different ways to achieve this. */


  //Example-1
  // Way-1 Normal Thought Process
  function myCalculator1(num1, num2) {
     let sum = num1 + num2;
     return sum;
   }

   function myDisplayer1(some) {
     console.log(some);
   }

  let result = myCalculator1(5, 5);
  myDisplayer1(result);
  //Note: The problem with the example above, is that we have to call two functions to display the result.


  //Way-2 Function Inside Function (Stack Management)
  function myDisplayer2(some) {
     console.log(some);
  }

  function myCalculator2(num1, num2) {
    let sum = num1 + num2;
    myDisplayer2(sum);
  }

  myCalculator2(5, 5);
  /* Note: The problem with the example, is that we cannot prevent the calculator function from displaying the
    result. */


  //Way-3 Callbacks
  function myDisplayer(some) {
     console.log(some);
  }

  function myCalculator3(num1, num2, myCallback3) {
    let sum = num1 + num2;
    myCallback3(sum);
  }

  myCalculator3(5, 5, myDisplayer);
  /* Note: Using a callback, we could call the calculator function (myCalculator) with a callback (myCallback), and let
    the calculator function run the callback after the calculation is finished. */


  //Example-2
  function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => callback("Manu Chaitanya");
    document.head.append(script);
  }
  
  function callback(arg) {
    console.log("Hello World! " + arg);
  }
  
  loadScript("https://example.com/script.js", callback);


