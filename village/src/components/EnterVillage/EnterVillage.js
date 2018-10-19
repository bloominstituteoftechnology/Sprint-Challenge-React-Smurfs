import React from 'react';
import { Link } from 'react-router-dom';

import SmurfBackground from '../../smurf-village.jpg';

import './EnterVillage.css';

const EnterVillage = () => {
    return (
        <div className="enter-village">
            <Link to="/smurfs" className="village-link"><img src={ SmurfBackground } alt="smurf village" className="village" /></Link>
        </div>
    )
}

export default EnterVillage;