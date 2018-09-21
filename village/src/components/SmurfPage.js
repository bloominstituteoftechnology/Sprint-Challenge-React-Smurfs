import React, {Fragment} from 'react';
import Smurf from './Smurf'

const SmurfPage = (props) => {
    let smurf = props.smurfs.find(smurf => (smurf.id === parseInt(props.match.params.smurfid, 10)));
    return (
        <Fragment>
            <Smurf {...smurf}/>
            <button onClick={() => {props.delete(smurf); props.history.push('/')}}>Delete Me</button>
        </Fragment>


    )
}


export default SmurfPage;