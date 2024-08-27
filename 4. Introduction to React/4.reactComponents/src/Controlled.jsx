import React, { useState } from "react";

 const Controlled = () => {
   const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputText);
   };

   return (
    <form>
      <input
        type="text"
        placeholdere="controlled"
        value={inputText}
        onChange= {(e) => setInputText(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
   )
 }
export default Controlled