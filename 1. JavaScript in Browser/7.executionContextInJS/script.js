//CHAPTER-7 EXECUTION CONTEXT IN JAVASCRIPT


/* A. HOW MEMORY IS MANAGED AND CODE IS COMPILED IN JAVASCRIPT
  1. JavaScript is a synchronous (moves to the next line only when the execution of the current line is 
     completed) and single-threaded (executes one command at a time in a specific order one after another 
     serially) language. To know behind the scene of how JavaScript code gets executed internally, we have to
     know something called EXECUTION CONTEXT and its role in the execution of JavaScript code.

  2. Execution Context: Everything in JavaScript is wrapped inside Execution Context, which is an abstract
     concept (can be treated as a container) that holds the whole information about the environment within 
     which the current JavaScript code is being executed.

  3. When a programe is run a Global Execution Contest gets created. Now, an Execution Context has two 
     components and JavaScript code gets executed in two phases:
     - Memory Allocation Phase/Varibale Environment: In this phase, all the functions and variables of the 
       JavaScript code get stored as a key-value pair inside the memory component of the execution context.
       In the case of a function, JavaScript copied the whole function into the memory block but in the case 
       of variables, it assigns undefined as a value. Refer: memoryCreationPhase.png

     - Code Execution Phase/Thread of Execution: In this phase, the JavaScript code is executed one line at a 
       time inside the Code Component of Execution Context. Here the value to variables are assigned. 
       Functions are skipped. They are executed when they are called. For a function a new Local Execution 
       Context gets created when they are called and the same process gets repeated. Here varibales are the
       parameters and the variables declared inside. The return value is returned to the place where it was
       called and the Local Execution Context gets deleted immediately.

   4. After the Execution of all the codes line by line the Global Execution Context gets deleted. */


var number = 2;
function Square(n) {
   var res = n * n;
   return res;
}
var newNumber = Square(3);


/* 5. In the above JavaScript code, there are two variables named number and newNumber and one function 
      named Square which is returning the square of the number. So when we run this program, Global Execution
      Context is created. So, in the Memory Allocation phase, the memory will be allocated for these 
      variables and functions like this. Refer: memoryAllocation.jpeg 

  6. In the Code Execution Phase, JavaScript being a single thread language again runs through the code line 
     by line and updates the values of function and variables which are stored in the Memory Allocation Phase
     in the Memory Component. So in the code execution phase,  whenever a new function is called, a new 
     Execution Context is created. So, every time a function is invoked in the Code Component,a new Execution
     Context is created inside the previous global execution context. 

  7. So again, before the memory allocation is completed in the Memory Component of the new Execution 
     Context. Then, in the Code Execution Phase of the newly created Execution Context, the global Execution 
     Context will look like the following. Refer: functionExecutionContext 

  8. As we can see, the values are assigned in the memory component after executing the code line by line, 
     i.e. number: 2, res: 4, newNumber: 4. After the return statement of the invoked function, the returned 
     value is assigned in place of undefined in the memory allocation of the previous execution context. 
     After returning the value, the new execution context (temporary) gets completely deleted. Whenever the
     execution encounters the return statement, It gives the control back to the execution context where the 
     function was invoked. Refer: afterFunctionCall.jpg

  9. After executing the first function call when we call the function again, JavaScript creates again 
     another temporary context where the same procedure repeats accordingly (memory execution and code 
     execution). In the end, the global execution context gets deleted just like child execution contexts. 
     The whole execution context for the instance of that function will be deleted. */






