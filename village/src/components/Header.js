import React from 'react';
import { Link,  } from "react-router-dom";

const Header = () => {
  return( 
    <div>
  <h2>You are a welcome guest in the smurf village.</h2>
  
  <Link className="home-button" to={"/"}className="home-button">Home</Link>
  </div>
  );
}
 
export default Header;