import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return(
        <div className='navigation'>
            <nav>
                <NavLink exact to='/'>Home</NavLink>
                <img 
                    className='navigation-logo' 
                    src='https://upload.wikimedia.org/wikipedia/commons/9/94/The_Smurfs_%28film%29_logo.svg' 
                    alt='The Smurfs'
                />
                <NavLink exact to='/add-a-smurf'>Add Smurf</NavLink>
            </nav>
        </div>
    );
}

export default Navigation;