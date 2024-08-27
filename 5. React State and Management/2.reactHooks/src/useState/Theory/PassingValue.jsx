//Step-1 Import useState from React:
import { useState } from "react";
import ReactDOM from "react-dom/client";

function UseState() {

  //Step-2: Initialize useState: 
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
    </>
  );
}
