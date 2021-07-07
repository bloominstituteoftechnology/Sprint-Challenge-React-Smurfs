import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
	return (
		<div className="navbar-links">
			<NavLink to={props.location}>{props.name}</NavLink>
		</div>
	);
};

export default NavBar;
