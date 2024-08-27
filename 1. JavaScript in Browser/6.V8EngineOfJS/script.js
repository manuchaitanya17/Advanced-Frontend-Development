//CHAPTER-6 JAVACRIPT ENGINE-V8

/* D. JAVASCRIPT ENGINE-V8 ENGINE- https://cabulous.medium.com/how-v8-javascript-engine-works-5393832d80a7
  1. After render tree creation JS code starts being executed. V8 Engine executes the JS Code but before that 
     Host Enviornment is created in render process by the rendering engine. From a high-level view, the V8 
     JavaScript engine execution consists of 5 steps:
      a) Initialize environment in the host
      b) Compile JavaScript codes
      c) Generate bytecodes
      d) Interpret and execute bytecodes
      e) Optimize some bytecodes for better performance

  2. Initialize environment: Technically, this is not part of V8’s job. It is the renderer process of the 
     browser initializes the following two items:
     - Host environment
     - V8 engine
     A browser has multiple renderer processes. Usually, each browser tab has a renderer process and 
     initializes a V8 instance. What is the host environment? In our context, it is the browser. Therefore, 
     we will use the “browser” and the “host environment” interchangeably in this post. However, keep in mind
     that a browser is merely one of the host environments for JavaScript. Another famous one is the Node 
     host environment. The host environment provides everything a JavaScript engine relies on, including:
     - Call stack
     - Heap
     - Callback queue
     - Event loop
     - Web API and Web DOM
     When the host environment and V8 engine are ready, the V8 engine starts its next step.

  3. Compile JavaScript Codes: JS code gets break down into tokens and then there is a syntax check, if there 
     is no error then the code is parsed or otherwise passes a complile time error. 

     - At this step, the V8 engine converts the JavaScript codes to Abstract Syntax Tree (AST). The V8 engine
       doesn’t speak JavaScript language. The script needs to be structured before processing. AST is a tree 
       structure, easy for V8 to digest. Meanwhile, scopes are generated at this step, including the global 
       scope and more scopes at the top of it stored in the host environment’s call stack. Refer: AST.webp. 

     - SCOPES are created after the Abstract Syntax Tree (AST) creation. During the compilation phase, after 
       the parser has generated the AST from the source code, the V8 engine the proceeds to create the 
       necessary data structures to manage and represent the lexical scopes in the program. These scopes are 
       created based on the information gathered from the AST, and they help in managing the accessibility of
       variables and functions throughout the code. 
       Refer- SCOPES IN JS


  4. Generate bytecodes: At this step, the V8 engine takes the AST and Scopes and outputs bytecodes. D8 
     prints the bytecodes generated by V8 based on the AST and scopes from the last step. Refer- 
     d8PrintsByteCode.png. Parameter count 1 means there is one parameter, which is the medium in our case. 
     Then, there are 4 lines of bytecodes for the interpreter to execute. Refer-generateByteCode.webp 

  5(I). Interpret and Execute Machine Codes: The bytecodes are a collection of instructions. At this step, 
        the interpreter will execute each line of bytecodes from top to bottom to machine code. Refer: 
        interpretAndExecute.webp 

  5(II). Compile and execute Machine Codes: This step is parallel to the previous one. When executing the 
         bytecodes, V8 keeps monitoring the codes and looking for opportunities to optimize them.
         When some frequently used bytecodes are detected, V8 marks them as “hot.” Hot codes are then 
         converted to efficient machine codes and consumed by the CPU. What if the optimization fails? The
         compiler de-optimizes codes and let the interpreter executes the original bytecodes. Refer: 
         compileAndExecute.webp */


    const medium = "good ideas";

