import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
  return (
    <div>
      <h1>Welcome to the humble village of the Smurfs</h1>
      <Link to="/smurfs">
        <img className="smurfFrontImage" alt="Papa Smurf and friends"  src="https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr02/2013/7/31/15/original-18959-1375299201-13.jpg" />
        <h3>Click here to see the who's living here</h3>
      </Link>
    </div>
  );
};

export default Home;
