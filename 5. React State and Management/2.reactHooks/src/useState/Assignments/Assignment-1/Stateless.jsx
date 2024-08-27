import './App.css'

function Stateless() {
  let counter = 15;
  const increaseValue = ()=>{
    counter++;
    console.log(counter);
  }

  return (
    <>
      <h1>Let me explain the useSate Hook, Sir!</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={increaseValue} >Add Value</button>
      <button >Remove Value</button>
    </>
  )

}

export default Stateless;
