import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = props => {
    return (
        <div className="nav-container">
            <NavLink exact to="/" className="nav-link" activeClassName="nav-active">Community Policy</NavLink>
            <NavLink to="/village" className="nav-link" activeClassName="nav-active">Smurf Village</NavLink>
            <NavLink to="/addsmurf" className="nav-link" activeClassName="nav-active">Add a Smurf</NavLink>
        </div>
    );
}

export default Navigation;