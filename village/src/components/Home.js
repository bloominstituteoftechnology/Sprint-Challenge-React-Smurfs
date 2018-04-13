import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the humble village of the Smurfs</h1>
      <Link to="/smurfs">
        <h3>Click here to see the who's living here</h3>
      </Link>
    </div>
  );
};

export default Home;
