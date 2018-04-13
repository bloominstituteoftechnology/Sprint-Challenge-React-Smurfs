import React, {Component} from 'react';
import './SmurfCard.css'

import Smurf from './Smurf';

class Smurfs extends Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     this.getSmurfs();
    // }
    //
    // getSmurfs() {
    //
    //     axios.get('http://localhost:3333/smurfs')
    //         .then(response => {
    //             console.log(response.data);
    //             this.setState({smurfs: response.data});
    //         })
    //         .catch(error =>{
    //             console.log(`Error get Smurfs: ${error}`);
    //         })
    // }
    render() {
        return (
            <div className="Smurfs">
                <h1>Smurf Village</h1>
                <div className='SmurfCard__list'>
                    {this.props.smurfs.map(smurf => {
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
                </div>
            </div>
        );
    }
}

export default Smurfs;
