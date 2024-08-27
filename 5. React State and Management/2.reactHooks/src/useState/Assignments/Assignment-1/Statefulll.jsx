//Assignment-1 Create a Counter Component that increments and decrements a counter value on click.

//Assignment-1 Create a Counter Assignment.

//Step 1: Import Statements: The React library and the useState hook are imported.
import { useState } from "react"
import './App.css'

//Step 2: Create a Function: The createApp function is created.
function Statefull(){

  /* Step 3: Initialize State: When the useState(0) hook is called, React internally creates a State Object in memory 
     (heap) to store the state for this component instance. The initial value of the counter state is set to 0.
     - The counter variable(from Array Object) is assigned the initial state value (0).
     - The setCounter variable is assigned the setValue function provided by React, which is responsible for updating the 
       state. The function is still not defined but the reference of seCounter is assigned to setValue.

       The state object is a plain JavaScript object that might look something like this:
       {
        value: 0,  // The Current State Value
        setValue:  // Function to Update the State
       }    
  */

    let [counter, setCounter] = useState(0); 

    const increaseValue = ()=>{
        setCounter(counter+1);
    }

  // Step 4: Render the Component: The component is rendered using the return statement.
  return (
    <>
      <h1>Manu Chaitanya is the Boss!</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={increaseValue} >Add Value</button>
    </>
  )

  // Step 5: User Interaction: The increaseValue function is called when the button is clicked.
  
  /* Step 6: State Update: Inside the increaseValue function, setCounter(counter + 1) is called. This triggers React's 
     internal state update process:
     - React creates a new state object with the updated value (1 in this case).
     - React compares the new state object with the previous state object to determine if a re-render is needed.
     - If the state has changed, React schedules a re-render of the component. */
  
  /* Step 7: Re-render React re-renders the component with the updated state value (1). The counter variable now holds the
     new state value, and the updated value is displayed in the <h2> element. */
}

export default Statefull;