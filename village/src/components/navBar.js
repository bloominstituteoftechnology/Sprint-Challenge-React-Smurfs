import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const NavBar = () => {
return(
<div>
<Link className="right" to="/">Home</Link><Link to="/smurf-form/">+ add a smurf</Link>
</div>
);
}

export default NavBar;