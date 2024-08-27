//CHAPTER-8 HOISTING IN JAVASCRIPT

/* A. HOISTING IN JAVASCRIPT-INTRODUCTION
  1. Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of 
     their scope before code execution, in phase-1.
     
  2. This means that no matter where variables and functions are declared, they are moved to the top of their
     scope regardless of whether their scope is global or local. However, it is important to note that 
     JavaScript only hoists the declaration, not the initialization. 
     
  3. The varibales declared with var are given values as undefiend in Phase-1 i.e Memeory Allocation Phase.
     So at the time of Phase-2 i.e Code Execution Phase if ther variable is accesssed before initialisation 
     it returns undefined. 
     
  4. If we talk about functions, if we declare functions using Classical Function of JS, in Phase-1, it 
     stores the complete function as Object. So if it is called before then it returns the value to be called
     very simply. But if we have used Function Expression or Arrow Function then they behave as variabels and 
     they return getName is not a Function. */



//Example-1
getName(); //Output: Namaste Javascript
console.log(x); //Output: undefined

var x = 7;

function getName() {
   console.log("Namaste Javascript");

}


//Example-2
getName(); //Output: Namaste Javascript
console.log(x); //Output: Error: x is not defined

function getName() {
   console.log("Namaste Javascript");

}


//Example-3
getName(); //Output: Error: getName is not a function    
console.log(x);
console.log(getName);

var getName = () => {
   console.log("Namaste Javascript");

}

/* Note: getName will behave like a variable which will store undefined at the time of memory phase. Same in
  Function expression. */



/* B undefined vs not defined 
   1. undefiend is JS Datatype which takes some memory in phase-1, whereas not defined is an Error in JS. 
   2. undefined is a value that is assigned to a variable when the variable is declared but not initialized. */




//Example-1
console.log(a); //Output: undefined 
var a;
console.log(a); //Output: undefined


//Example-2
var c = undefined;
console.log(c); //Output: undefined
//Note: c stores undefined but it's not a good practise.
