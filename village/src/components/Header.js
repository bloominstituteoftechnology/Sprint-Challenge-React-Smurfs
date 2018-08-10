import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerWrapper">
      <h2>Welcome to the Smurf Villiage</h2>
      <Link to={"/smurfList"}>
        <img
          src="http://pngimg.com/uploads/door/door_PNG17637.png"
          alt="click door to enter"
        />
        <h4>Enter</h4>
      </Link>
    </div>
  );
};

export default Header;
