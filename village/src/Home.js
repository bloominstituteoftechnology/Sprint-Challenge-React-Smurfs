import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1 style={homeStyles}>Welcome to Smurf Village</h1>
            <Link to="/smurfs" ><button style={homeBtn}>Enter Village</button></Link>
            <img className="homeImage" src="http://www.liketotally80s.com/wp-content/uploads/2014/08/smurfs-characters.png" alt="The Smurfs"/>
        </div>
    )
}

const homeStyles = {
    fontFamiy: "Titan-One", 
    color: "#4286f4",
    fontSize: "80px"
}

const homeBtn = {
    textDecoration: "none",
    fontSize: "60px", 
    borderRadius: "20px",
    backgroundColor:" #b899e5",
    color: "white",
}


export default Home;