import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Smurf from './Smurf';

class SmurfPage extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render () {
        console.log(this.props.location.state)
        return (
            <div>
                <Link to = '/smurfvillage'>Back to Smurf Villiage</Link>
                <br/>
                <br/>
                <br/>
                <Link to = '/'>Back to Home Page</Link>
                <br/>
                <br/>
                <br/>
                <div className="Smurf">
                    <h3>{this.props.location.state.name}</h3>
                    <strong>{this.props.location.state.height} tall</strong>
                    <p>{this.props.location.state.age} smurf years old</p>
                </div>
            </div>
        );

    }

}
export default SmurfPage