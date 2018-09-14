import React from "react";
import App from "./App";
import { Route, Link, NavLink } from "react-router-dom";

function Home() {
	return (
		<div>
			<NavLink to="/">Welcome to our village!</NavLink>
			<NavLink to="/smurf-village">Smurf List</NavLink>
			<h1>Welcome to smurfs village!</h1>
		</div>
	);
}

export default Home;
