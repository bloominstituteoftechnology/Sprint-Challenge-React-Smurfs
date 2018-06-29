import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <ul className="nav justify-content-center nav-pills sticky-top">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/smurfs">
            Smurfs
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Header;
