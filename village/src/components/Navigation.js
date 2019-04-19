import React from 'react';

const Navigation = () => {
    return (
        <div>
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