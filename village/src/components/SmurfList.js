import React from 'react';
import SmurfCard from './SmurfCard';
import { Link } from 'react-router-dom';
const SmurfList = props => {
    return (
        <Link to={`/smurfs/${props.id}`} >
            <div>
                <SmurfCard name={props.name} age={props.age} height={props.height} />
            </div>
        </Link>
    );
}

export default SmurfList;