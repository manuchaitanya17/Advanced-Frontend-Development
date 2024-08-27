import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

function MyApp(){
		return(
				<div>
						<h1>Custom Function! </h1>
				</div>
		)
}



const ReactElementProperties = {
		type: 'a',
		props: {
				href: 'https://manuchaitanya.com', 
				target: '_blank'
		},
		children: `Click me to visit Manu's Website`
}

const reactElement = React.createElement(ReactElement.type, ReactElement.props, ReactElement.children);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Home/>  //OR Home()
	//reactElement
)