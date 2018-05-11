import React from 'react';
import { Route, Link } from 'react-router-dom';
import App from './App'

const Home = () => {
    return (
        <div>
        <h1>Welcome to Smurf Village</h1>
        <Link to="/smurfs">Enter Village</Link>
        </div>
    )
}

export default Home;