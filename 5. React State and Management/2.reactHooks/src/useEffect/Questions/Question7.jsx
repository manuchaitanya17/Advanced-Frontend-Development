//QUESTION-7 What will be the output of the following Code Snippet?

import React, { useState } from "react";

function Question7() {
  const [state, setState] = useState({ count: 0 });

  const incrementCount = () => {
    setState((prevState) => ({
      count: prevState.count + 1,
    }));

    setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  return (
    <div>
      <button onClick={incrementCount}>Increment</button>
      <h1>{state.count}</h1>
    </div>
  );
}

export default Question7;
