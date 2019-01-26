import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<div className="nav">
			<NavLink to="/" className="link">
				<p>View Smurfs</p>
			</NavLink>
			<NavLink to="/smurf-form" className="link">
				<p>Add a Smurf</p>
			</NavLink>
		</div>
	);
};

export default NavBar;