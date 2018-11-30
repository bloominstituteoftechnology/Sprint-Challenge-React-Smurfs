import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return(
        <div className='navigation'>
            <nav>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink exact to='/add-a-smurf'>Add Smurf</NavLink>
            </nav>
        </div>
    );
}

export default Navigation;