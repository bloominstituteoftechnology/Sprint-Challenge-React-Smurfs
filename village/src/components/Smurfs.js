import React, {Component} from 'react';
import Smurf from './Smurf';

class Smurfs extends Component {
    // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
    state = {
        smurfs: this.props.smurfs,
        showUpdateFormObl: this.props.showUpdateFormObl,
    };

    componentWillReceiveProps() {

        this.setState({ smurfs: this.props.smurfs });

    }

    render() {
        return (
            <div className="Smurfs">

                <ul>
                    {this.state.smurfs.map((smurf) => {
                        return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id}
                                      myId={smurf.id} showUpdateFormObl={this.state.showUpdateFormObl} />;

                    })}
                </ul>
            </div>
        );
    }
};



export default  Smurfs;