import React from 'react';


function ParentComponent(props) {
  let [counter, setCounter] = useState(0);
  let callback = (valueFromChild) => {
    return setCounter(valueFromChild);
  }
  
  return (
    <div>
      <p>Value of counter: {counter}</p>
      <ChildComponent callbackFunc={callback} counterValue={counter} />
    </div>
  );
}