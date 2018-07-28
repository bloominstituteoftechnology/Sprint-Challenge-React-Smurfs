import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
    <h2>Welcome to the Smurf Village&reg;.</h2>
    <p> The Smurf Village&reg; does not and shall not discriminate on the basis of race, color, religion (creed), gender, gender expression, age, national origin (ancestry), disability, marital status, sexual orientation, or military status, in any of its activities or operations.
    </p>
    <NavLink to="/smurfs" className="nav-link" activeClassName="nav-active">Take me to the Village!</NavLink>
    </div>
  );
}
 
export default Header;