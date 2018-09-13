import React from "react";
import {Link} from 'react-router-dom'

const SmurfNav = () => {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/smurfs">
        <button>Add Smurf Form</button>
      </Link>
    </div>
  );
};

export default SmurfNav;
