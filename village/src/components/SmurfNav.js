import React from 'react';
import { NavLink } from 'react-router-dom';

const SmurfNav = () => {
	return (
		<nav className="SmurfNav">
			<NavLink to="/" exact activeClassName="active" className=".navlink">
				Smurfs List
			</NavLink>
			<NavLink to="/smurf-form" activeClassName="active" className=".navlink">
				New Smurf
			</NavLink>
		</nav>
	);
};

export default SmurfNav;
