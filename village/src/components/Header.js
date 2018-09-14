import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="navigation-smurf">
        <Link to="/smurfs">
          <button>Formy Smurf</button>
        </Link>
      </div>
      <div className="welcome-smurf">
        <h2>
          Welcome to the land of smurf, where all your wildest dreams can come
          smurf. You can smurf in the smurf, or relax in the smurf while you
          smurf a smurf. Smurfs from all over come here to smurf with their
          favorite smurf, or smurf on smurfs, and even get their smurf on! When
          it comes to Smurf village... you make the smurfs.
        </h2>
      </div>
    </div>
  );
};

export default Header;
