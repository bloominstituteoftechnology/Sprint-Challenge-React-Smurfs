import React from 'react';
import { NavLink } from 'react-router-dom';

const SmurfNav = () => {
	return (
		<nav className="SmurfNav">
			<NavLink to="/">Smurfs List</NavLink>
			<NavLink to="/smurf-form">New Smurf</NavLink>
		</nav>
	);
};

export default SmurfNav;
