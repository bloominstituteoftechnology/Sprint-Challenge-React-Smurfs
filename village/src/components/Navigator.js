import React from 'react';
import {Link} from 'react-router-dom';

const Navigator = (props) =>{
    return(
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'smurf-form/'}>Add Smurf</Link>
        </div>
    )
}

export default Navigator;