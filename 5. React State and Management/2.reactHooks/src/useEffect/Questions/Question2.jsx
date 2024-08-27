//QUESTION-2 What will be the output of the following Code Snippet?

import { useState, useEffect } from "react";


const Question2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
    console.log(count);
  }, [])

  useEffect(() => {
    setCount(count + 1);  //Batching Updates
    console.log(count);
  }, [])


   return <h1>{count}</h1>; //Answer: Here 1 will be displayed.

   //UseEffect-1 Scheduled Here!
   //UseEffect-2 Scheduled Here!
   //SetTimeout Scheduled for Batched setState Functions.

};

export default Question2;