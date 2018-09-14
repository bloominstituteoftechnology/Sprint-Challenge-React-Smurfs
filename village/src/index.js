import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router,
	Route,
	Link,
	NavLink
} from "react-router-dom";

import "./index.css";
import App from "./App";
import Home from "./Home";

function Main() {
	return (
		<div>
			<Route exact path="/" component={Home} />
			<Route exact path="/smurf-village" component={App} />
		</div>
	);
}

ReactDOM.render(
	<Router>
		<Main />
	</Router>,
	document.getElementById("root")
);
