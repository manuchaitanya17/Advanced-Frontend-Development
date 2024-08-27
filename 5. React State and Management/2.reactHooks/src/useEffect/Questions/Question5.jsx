//QUESTION-5 What will be the output of the following Code Snippet?

import { useState, useEffect } from "react";

const Question5 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 5);
    console.log(count);
  }, [])

  useEffect(() => {
    setCount(count + 3);  
    console.log(count);
  }, [])


   return <h1>{count}</h1>; 

}

export default Question5;

//Output: 3, 6, 9, 12....