//QUESTION-4 What will be the output of the following Code Snippet?
 
import {useState, useEffect } from "react";

function Question4() {
const [count, setCount] = useState(0);

const handleClick = () => { 
    setCount(count + 1);

    setTimeout(() => {
        alert(count);
    }, 3000);
};

return(
  <div>
    <button onClick={handleClick}>Click Me</button>
    <h1>{count}</h1>
  </div>
);
}

export default Question4;
