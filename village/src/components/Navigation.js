import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="nav">
        <div>
            <Link className="smurf-list" to="/">
            Home
            </Link>
        </div>
             <div>
             <Link className="smurf-form" to="/smurf-form">
             Smurf Form
             </Link>
         </div>
         </div>
    );
};


export default Navigation;