import React from 'react';
import {  Link} from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Header = () => {
  return (
    <Nav vertical>
      <NavItem><h2>Smufs Up Dude</h2></NavItem>
      <NavLink><Link to="/smurfs"> See the village</Link> <br/></NavLink>
        <NavLink><Link to="/add">Add a smurf</Link></NavLink>
    </Nav>
  )
}

export default Header;
