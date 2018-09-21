import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div className="homeContent">
        <h1 className="welcomeText">Welcome to Smurf Village </h1>
        <Link to="/smurfs">Enter</Link>
        </div>
    )
}
export default Home;