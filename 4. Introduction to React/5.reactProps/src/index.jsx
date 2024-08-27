import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


function Cricket(props) {
	return <h2>I am a { props.brand }!</h2>;
}

function ICC() {
	return (
		<>
			<Cricket brand="India" />
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);


ReactDOM.createRoot(document.getElementById('root')).render(
  //Step-2: Calling the Car Function with Actual Argument:
	<Car brand="Ford" />
)