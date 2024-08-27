//CHAPTER-3 MEMEORIES IN BROWSERS

/* A. MEMORY SECTIONS IN BROWSERS
1. Heap Memory: The heap is the largest section of memory in the browser, and it is used for dynamic memory 
   allocation. It stores BOM Objects, JS Objects, arrays, and other data structures created during runtime by
   JavaScript Code. Objects allocated on the heap are managed by the browser's garbage collector, which dea-
   llocates memory for objects that are no longer in use.

2. Stack Memory: The stack is a region of memory that stores FUNCTION CALL FRAMES and LOCAL VAIABLES for each
   function invocation. It maintains the execution context of functions, including parameters, local 
   variables,and the return address. As functions are called and returned, their respective call frames are 
   pushed and popped from the stack.

3. Static Memory: The static memory section stores STATIC DATA that persists throughout the lifetime of the 
   BROWSER SESSION. It includes global variables, static variables, and constants declared in the JS Code.
   Static memory is allocated during the initialization phase and remains available until the browser session
   ends.

4. Document Object Model (DOM) Memory: The DOM memory section stores the structured representation of the 
   HTML document loaded in the browser. It includes elements, attributes, and text nodes, organized in a
   hierarchical tree structure. Changes to the DOM, such as adding, removing, or modifying elements, result 
   in updates to the DOM memory.

5. Render Tree: The render tree is a subset of the DOM that STORES the VISUAL ELEMENTS OBEJECTS to be 
   displayed on screen. It includes only the elements that contribute to the visual layout of the web page, 
   such as visible elements and their styling properties. The render tree is used by the browser's rendering
   engine to paint the content of the web page on the screen. */