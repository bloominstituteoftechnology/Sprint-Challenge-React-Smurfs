import React from 'react';
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="navDiv">
      <Nav className="appNav">
        <Link to="/" className="addNavLinks homeLink">
          Home
        </Link>

        <Link to="/add" className="addNavLinks">
          Add a Smurf
        </Link>
      </Nav>
    </div>
  );
};

export default Navigation;
