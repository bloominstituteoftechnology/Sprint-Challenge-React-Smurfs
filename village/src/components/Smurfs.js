import React, {Component} from 'react';
import axios from 'axios'

import Smurf from './Smurf';

class Smurfs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smurfs: []
        }
    }

    componentDidMount() {
        this.getSmurfs();
    }

    getSmurfs() {

        axios.get('http://localhost:3333/smurfs')
            .then(response => {
                console.log(response.data);
                this.setState({smurfs: response.data});
            })
            .catch(error =>{
                console.log(`Error get Smurfs: ${error}`);
            })
    }
    render() {
        return (
            <div className="Smurfs">
                <h1>Smurf Village</h1>
                <ul>
                    {this.state.smurfs.map(smurf => {
                        return (
                            <Smurf
                                name={smurf.name}
                                id={smurf.id}
                                age={smurf.age}
                                height={smurf.height}
                                key={smurf.id}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Smurfs;
