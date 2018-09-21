import React, { Fragment } from 'react';
import SmurfForm from '../SmurfForm';
import Smurfs from '../Smurfs';

export default function RouteFrontPage(props) {
    console.log(props.smurfs)
    
    return (
        <React.Fragment>
            <SmurfForm />
            <Smurfs smurfs={props.smurfs} />
        </React.Fragment>
    )
}