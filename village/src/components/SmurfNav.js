import React from 'react';
import { NavLink } from 'react-router-dom';

const SmurfNav = () => {
	return (
		<nav className="SmurfNav">
			<NavLink to="/" exact activeClassName="active">
				Smurfs List
			</NavLink>
			<NavLink to="/smurf-form" activeClassName="active">
				New Smurf
			</NavLink>
		</nav>
	);
};

export default SmurfNav;
