import React, { Component } from 'react';

import Smurf from './Smurf';
import {NavLink, Route,Link} from "react-router-dom";
import SmurfForm from "../App";

class Smurfs extends Component {
    constructor(props){
        super(props);
        this.state={

        }

    }


    render() {
        console.log("Creating route for " + this.props.smurfs);

        return (
            <div className="Smurfs">
                <h1>Smurf Village</h1>

                {
                    this.props.smurfs.map(smurf => {
                        return (
                            <div>
                            <Link to={`/${smurf.id}`}> {smurf.name} </Link>
                            </div>
                        );
                    })
                }


            </div>
        );
    }
}

Smurf.defaultProps = {
    smurfs: [],
};

export default Smurfs;
