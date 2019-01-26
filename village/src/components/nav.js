import React from 'react';
import {Link} from 'react-router-dom';

const Nav = props => {
  return (
    <div className="navCont">
      <nav>
        <Link to="/">
          <div className="home">Home</div>
        </Link>
        <Link to="/smurf-form">
          <div className="form">Add Smurf</div>
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
