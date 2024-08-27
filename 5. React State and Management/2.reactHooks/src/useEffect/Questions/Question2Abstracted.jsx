//Abstraction of Question-2 

/* Step-1 When the State Object gets created InitialValue(internalState), Setter Function's Reference, Pending 
   State(pendingState), Update Queue(updateQueue) are created. */

let internalState = 0;
let pendingState = internalState;
const updateQueue = [];

function Question2() {

  //Step-2 When the setState Function is called, Update Queue is pushed with Reference and Calls are Scheduled.
  updateQueue.push(() => {
    pendingState = internalState + 1;
    console.log(internalState); 
  });
  
  updateQueue.push(() => {
    pendingState = internalState + 1;
    console.log(internalState); 
  });

  setTimeout(() => {
    updateQueue.forEach(update => update()); //internalState = 0, pendingState = 1
    internalState = pendingState;
    Question2(); 
  }, 0);

  return `<h1>${internalState}</h1>`; 
}

Question2();

// Rendering Question2 -> Render output: 0 -> Component output: <h1>0</h1> -> Running Initial useEffects -> 0 -> 0 -> Rendering Question2 -> Render output: 1 -> Component output: <h1>1</h1>



