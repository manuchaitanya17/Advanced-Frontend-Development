//QUESTION-1 What will be the output of the following Code Snippet?

import React, {useState} from "react";

const Question1 = () => {
    const [count, setCount] = useState(0);

    //Step-1: Push the setState Function to the UpdateQueue Array, and Schedule the Update.
    setCount(count + 1); 

    //Step-2: Log the Count Value in Console as 0.
    console.log(count); 

    //Step-3: Update the UI with value 0.
    return <h1>{count}</h1>; 

    /* Step-4: Scheduled function will be invoked the state's initial value will be updated to 1,
       re-rendering the function again pusging and scheduling will be done. So the rerebdering
       will happend again and again causing Error. */

  };

  export default Question1;