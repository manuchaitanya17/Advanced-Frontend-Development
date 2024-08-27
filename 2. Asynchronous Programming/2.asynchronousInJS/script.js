//CHAPTER-2 ASYNCHRONOUS IN JAVASCRIPT

/* A. ASYNCHRONOUS FUNCTIONS
  1. In the real world, callbacks are most often used with asynchronous functions. A typical example
     is JavaScript setTimeout().
  2. When using the JavaScript function setTimeout(), we can specify a callback function to be 
     executed on time-out.(Already Covered in Window Object(BOM/Basic JavaScript)). */



/* B. ALTERNATIVE TO CALLBACKS 
  1. With asynchronous programming, JavaScript programs can start long-running tasks, and continue 
     running other tasks in parallel.
  2. But, asynchronus programmes are difficult to write and difficult to debug.
  3. Because of this, most modern asynchronous JavaScript methods don't use callbacks. Instead, in
     JavaScript, asynchronous programming is solved using Promises instead. */


   //Example-1
   setTimeout(function() {
      myFunction("I love You !!!"); 
   }, 3000);
   
   function myFunction(value) {
     console.log(value)
   }