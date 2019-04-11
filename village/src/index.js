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
import SmurfForm from "./components/SmurfForm";

// function Main(props) {
// 	return (
// 		<div>
// 			<Route exact path="/" component={Home} />
// 			<Route path="/smurf-village" component={App} />
// 			<Route
// 				path="/add-smurf"
// 				render={props => (
// 					<SmurfForm
// 						smurfs={props.smurfs}
// 						smurf={props.smurf}
// 						handleInputChange={props.handleInputChange}
// 						addSmurf={props.addSmurf}
// 					/>
// 				)}
// 			/>
// 		</div>
// 	);
// }

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
);
