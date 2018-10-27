import React from 'react';
import { NavLink } from 'react-router-dom';
import './Components.css';

class Navbar extends React.Component {

//this component has some weird errors going on, its saying <div> doesn't have a corresponding tag, but it does 

    render() {
        return(
            <div className="navBar">
            <NavLink className="navLink" to="/smurf-form" >Add a new Smurf</NavLink>
            <NavLink className="navLink" to="/" >Home</NavLink>
            </div>
        )
    }
}

export default Navbar;