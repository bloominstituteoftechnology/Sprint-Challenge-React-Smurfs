import React from 'react';
import {Link} from 'react-router-dom';

const Nav=()=>{
    return(
        <div>
            <div className="App">
                <span>
                    <Link to="/">Smurf List</Link>
                </span>
                <span>
                    <Link to ="/smurf-form">Smurf Form</Link>
                </span>
            </div>
        </div>
    )

}
export default Nav;