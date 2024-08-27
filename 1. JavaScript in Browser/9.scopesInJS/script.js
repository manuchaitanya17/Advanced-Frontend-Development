//CHAPTER-9 SCOPES IN JAVASCRIPT


/* A. INTRODUCTION TO SCOPES
  1. In JavaScript, scope refers to the accessibility of variables, functions, and objects in
     particular parts of your code during runtime. It determines the accessibility of variables,
     functions, and objects in different parts of your code. 

  2. JavaScript has two types of scopes since ES6 update:
     a) Global Scope: Variables declared outside of any function or block, as well as functions
        themselves, are in the global scope. These are accessible from any part of the code, 
        including within functions and other blocks.
     b) Local Scope: Variables declared within a function or a block, such as an if statement or a
        loop, are in the local scope. They are only accessible within the function or block in 
        which they are defined. Local Scope have two types of scopes that are Block Scope and
        Function Scope. */


   //Example-1
   var globalVariable = 'I am a global variable';
   
   
   function myFunction() {
      var localVariable = 'I am a local variable';
      //Note: Local Variable is accessible only within this function.
   }




/* B. INTRODUCTION TO BLOCKS AND BLOCK SCOPE
  1. Blocks is used where JS expects more than one statement as only one statement.
  2. Block Scope: What all variables and functions we can access inside this block.
  3. In JavaScript, a new lexical environment (also known as an execution context) is created not 
     only for functions but also for code blocks such as those defined by if statements, for loops, 
     while loops, and other block statements.
  4. Variables declared with let or const within these block statements are scoped to the block-
     level lexical environment, a concept known as block scope.*/ 


   //Example-1
   if(true)   //Output: Expects a statement over here.
   
   //Example-2
   if (true) console.log("I")     
   
   //Example-3 
   if (true) {
      console.log("am")
      console.log("a")
      console.log("block")
   }       

   //Example-4
   {
       var a = 10;
       let b = 20;
       const c = 30;
       //Note: a, b, c are accessible within this block.
   } 
   /* Note: b, c are not accessible here. The Block Execution Context that was created deleted.
     a is accessible as it is attached with the window object. */




/* C. SHADOWING IN JS
  1. In JavaScript, shadowing occurs when a variable declared within a certain scope has the same
     name as a variable in its outer scope. As a result, the variable in the inner scope "shadows"
     or takes precedence over the variable in the outer scope, effectively hiding it within that 
     scope.

  2. Shadowing can sometimes lead to confusion and unexpected behavior, especially when it's not 
     explicitly intended. It is important to be aware of the concept of shadowing and to avoid
     unintended consequences by using unique variable names or by carefully managing variable scope
     to ensure the expected behavior of the program.
     
   3. Variables declared with var are hoisted to the top of their containing function scope (or 
      global scope if declared outside a function). However, they are not scoped to blocks like if 
      statements or for loops. This means that variables declared with var inside a block are still
      accessible outside that block, within the containing function scope (or global scope if out-
      side a function).
      
    4. In Example-4, x is hoisted in the top most Function's EC. */


   //Example-1
   var a = 100;       //In Global Memory
   let b = 200;       //In Global Memory
   const c = 300;     //In Global Memory
   
   {
      var a = 10;      //In Global Memory
      let b = 20;      //In Block Memory
      const c = 30;    //In Block Memory
      console.log(a)   //Output: 10
      console.log(b)   //Output: 20
      console.log(c)   //Output: 30
   }
   
   console.log(a)      //Output: 10
   console.log(b)      //Output: 200
   console.log(c)      //Output: 300


   //Example-2
   let d1 = 20;     //Global Memory
   {
     var d1 = 30;   //Global Memory, Uncaught SyntaxError: Identifier 'd' has already been declared.
   }


   //Example-3
   function example() {
      
     console.log(x);  //Output: undefined

     if (true) {
       var x = 1;     //x is Hoisted to the Function Scope
       console.log(x); //Output: 1
     }

     console.log(x); //Output: 1 (Accessible Outside the Block)
   }

   example();
   

   //Example-4
   var d2 = 30000;
   {
      let d2 = 40;
   }
   console.log(d2)   //Output: 30000


   //Example-5
   {
      var f = 5000;
      let f = 4000;  
      /* Note: Here JS Compiler will simply check: Now I am declaring a variable using let.
         Is this variable f is declared using any of let, const or var before or not. If
         yes then it will throw an error. If not then it will simply declare it. */
   }


   //Example-6
   {
      let f = 5000;
      var f = 4000;  
      /* Note: Here Hoisting has been done. Here f has been declared on the top of the execution 
         of block with var not let. */
   }




/* B. LEXICAL ENVIORNMENT
  1. In JavaScript, a lexical environment is a structure that holds identifier-variable mappings. It is 
     created when an Execution Context is created. It provides access to the Local Variables and Functions 
     of the Function and also Variables and Functions of its parents Lexical Environment.     
  2. A lexical environment consists of two components:
    a) A Reference to the outer/parent environment: This points to the lexical environment in which the 
       current scope is nested, creating a chain of lexical environments that allows the program to access
       variables and functions defined in the outer scopes.
    b) Environment Record: This component is essentially a mapping of identifiers to specific variables or 
       functions within the current scope. It also contains information about the variables and functions
       declared within that scope.
  3. Lexical environments are created during the compilation phase of JavaScript, where the engine sets 
     up the scope and the association of identifiers with their corresponding values. */





/* C. SCOPE CHAIN
  1. In JavaScript, the scope chain is a mechanism used to resolve the values of variables in the context
     of nested functions. 
  2. When a function is invoked, the JavaScript engine looks up the scope chain to resolve the value of a variable. 
  3. The scope chain is essentially a series of nested lexical environments, each linked to its outer (enclosing)
      lexical environment.
  4. This chain allows the JavaScript engine to look for variables or functions in the current scope and then in the
     outer scopes, if necessary, until it finds the identifier being accessed.
  5. The scope chain is established during the creation of a function and is based on the physical structure of
     the code. 
  6. In this example, the innerFunction has access to its own local variables (innerVariable), variables
      in its outer scope (outerVariable), and even variables in the global scope (globalVariable). 
      This access is possible because of the scope chain, which allows the function to look up identifiers in 
      its local scope and then in the outer scopes.*/

   
   //Example-1
   var globalVariable = 'I am a global variable';
   
   function outerFunction() {
      var outerVariable = 'I am an outer variable';
   
      function innerFunction() {
         var innerVariable = 'I am an inner variable';
         console.log(innerVariable);  // 'I am an inner variable', Output: I am an inner variable
         console.log(outerVariable);  // 'I am an outer variable', Output: I am an outer variable
         console.log(globalVariable); // 'I am a global variable', Output: I am a global variable
      }
      innerFunction();
   }
   
   outerFunction();




/* D. TEMPORAL DEADZONE
  1. let and const are also hoisted but in a different way. For a time being they are in TDZ.
  2. When variables are declared using let and const, they are also hosited just like var in the Global Execution Context
     but they are not given value "undefined" in the place holder. They are given values when the Code Execution takes place.
  3. Unlike variables declared with var, which are initialized with undefined during hoisting, variables declared with 
     let and const are in a "temporal dead zone" until their declaration is encountered during code execution(phase-2).
  4. The temporal dead zone is the time between the declaration of a variable(hoisted in the MA(P1) and its assignment
     in CE(P2).
  5. The variable eww is hoisted in P1 with no value(<not available>) in EC. And it is in TDZ. During code execution we
     have accessed it before declaring hence it gave Reference Error. */
   
   
   console.log(eww); //Reference Error:Cannot access 'eww' before initialization. We can't access a variable in TDZ.
   let eww = 54;





/* F. let/const VS var AND ERRORS
  1. Unlike variables declared with var, which are initialized with undefined during hoisting, variables
     declared with let and const are in a "temporal dead zone" until their declaration is encountered 
     during execution. This means you cannot access them before their declaration point in the code.
      
  2. Variables declared with var are attached to the execution context in which they are declared. If the
     var declaration is within a function, they are attached to that function's execution context. If the
     var declaration is outside of any function (at the global level), they are attached to the global 
     execution context. Variables declared with let and const are not attached to any specific object like 
     window. Instead, they are scoped to the block in which they are defined.
  3. let and const cannot be redeclared, if their is redeclartion then error will be thrown at the time of
     MA(P1), so not a single line gets executed. */


   
   //Example-1
   console.log("This line will not be Executed!"); //Output: Uncaught SyntaxError: Identifier 'a' has already been declared.
   let a1 = 10;
   let a1 = 100;
   
   
   //Example-2
   console.log("This line will not be Executed!"); //Output: Uncaught SyntaxError: Identifier 'a' has already been declared.
   let a2 = 10;
   var a2 = 100;
   
   
   //Example-3
   console.log("This line will not be Executed!"); //Output: Uncaught SyntaxError: Identifier 'a' has already been declared.
   var a3 = 10;
   let a3 = 100;
   
   
   //Example-4
   console.log("This line will be Executed!"); //Output: "Hello"
   var a4 = 10;
   var a4 = 100;

   //Example-5
   const a5 = 5;
   a5 = 6;  //Output: Uncaught TypeError: Assignment to constant variable.

   //Example-6
   const a6;  //Ouput: Uncaught SyntaxError: Missing initializer in const declaration.
   