//QUESTION-3 What will be the output of the following Code Snippet?

import React, { useState } from "react";

function Question9() {
  const [text, setText] = useState("Hello");

  const handleClick = () => {
    setText(text + " ' World");
    setText("React");
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <h1>{text}</h1>   
    </div>  
  );
}
export default Question9;

//Output: React(On Click)
