import React, { useRef } from "react";

const UnControlled = () =>{
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

   return (
    <form>
      <input type="text" placeholder="uncontrolled" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </form>
   );
};

export default UnControlled;