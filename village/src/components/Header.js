import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/addsmurf">Add New Smurf</Link>
      <Link to="/smurfs">Smurfs List</Link>
    </div>
  );
};

export default Header;
