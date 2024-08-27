//QUESTION-1 What will be the output of the following Code Snippet?

import { useState, useEffect } from "react";

const Question1 = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    setCount(count + 1);
  }, [])

   return <h1>{count}</h1>;
};

export default Question1;
