import React from 'react';
import {Link} from 'react-router-dom';

const Nav=()=>{
    return(
        <div>
            <div className="App">
                <span>
                    <Link to="/">Home</Link>
                </span>
                <span>
                    <Link to ="/smurfs">Smurfs</Link>
                </span>
            </div>
        </div>
    )

}
export default Nav;