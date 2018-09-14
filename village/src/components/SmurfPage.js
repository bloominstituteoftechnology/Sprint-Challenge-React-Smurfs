import React from 'react';
import Smurf from './Smurf'

const SmurfPage = (props) => {
    let singleSmurf = props.smurfs.find(smurf => (smurf.id === parseInt(props.match.params.smurfid, 10)));
    return (
        <Smurf {...singleSmurf}/>

    )
}


export default SmurfPage;