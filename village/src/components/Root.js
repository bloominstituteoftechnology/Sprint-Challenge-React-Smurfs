import React from 'react';
import {Route} from 'react-router-dom';
import Header from './Header';
import App from '../App';
import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs';


const Root = props => {
    return (
        <div>
        <Route exact path='/' component={Header}/>
        <Route path='/smurfs/' component={App} />
        <Route path='/form' component={SmurfForm} />
        <Route path='/smurf' component={Smurfs} />
        </div>
    )
}

export default Root;