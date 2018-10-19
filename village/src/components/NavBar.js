import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
	return (
		<div className="navbar-links">
			<Link to={props.location}>{props.name}</Link>
		</div>
	);
};

export default NavBar;
