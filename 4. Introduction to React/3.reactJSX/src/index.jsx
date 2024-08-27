import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//First Example: We required JSX
const reactEleemnt1 = <h1>My name is Manu Chaitanya. I hate my Exes</h1>;

//Secound Example: We don't required JSX
const reactElemetn2 = React.createElement(
	"h1",
	{},
	"My name is Manu Chaitanya. I hate my Exes",
);

ReactDOM.createRoot(document.getElementById("root")).render(reactEleemnt1);
