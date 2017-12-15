import React, { Component } from 'react';
//import { deleteSmurf } from '../actions';

class RemoveSmurf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index : this.props.index,
        };
        this.removeSmurf = this.removeSmurf.bind(this);
    }

    removeSmurf() {
        this.props.deleteSmurf(this.state);
    }

    render() {
        return (
            <div>
                <a onClick = {this.removeSmurf} >Remove this smurf #{this.state.index}</a>
            </div>
        );
    };
};
export default RemoveSmurf;