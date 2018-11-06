import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<div className="nav">
			<NavLink to="/" className="link">
				<p>Enter the Village</p>
			</NavLink>
			<NavLink to="/smurf-form" className="link">
				<p>Add a Blue Friend</p>
			</NavLink>
		</div>
	);
};

export default NavBar;