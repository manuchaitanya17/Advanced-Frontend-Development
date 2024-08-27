//QUESTION-3 What will be the change so that output updates to +2 everytime in the following Code Snippet?

import { useState, useEffect } from "react";

const Question3 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count=> count+1);
  }, [])

  useEffect(() => {
    setCount(count=> count+1);  //Note: Batching Updates will not be done.
  }, [])


   return <h1>{count}</h1>; 
};

export default Question3;

//Output: 2, 4, 6...