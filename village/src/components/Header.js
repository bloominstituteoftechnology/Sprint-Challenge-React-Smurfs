import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <Link to="/">Home</Link>
      <Link to="/smurfs">Smurfs</Link>
    </Fragment>
  );
};

export default Header;
