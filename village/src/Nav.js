import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/smurf-form">Add</Link> 
        </div>
    );
}