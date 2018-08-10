import React from 'react';
import {Link} from 'react-router-dom'

const Delete = props =>{
    return(
        <div>
            <p>You have chosen: {props.smurfs.name}</p>        
            <button onClick={props.handleDelete}>Kidnap</button>
            <Link to = {'/village'}><button>Add Smurf</button></Link>
        </div>
    )
}

export default Delete