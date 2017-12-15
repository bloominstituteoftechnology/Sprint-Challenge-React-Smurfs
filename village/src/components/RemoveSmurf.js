import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

class RemoveSmurf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index : props.index,
        };
        //this.deleteSmurf = this.deleteSmurf.bind(this);
    }

    deleteSmurf = (event) => {
        event.preventDefault();
        this.props.deleteSmurf(this.props.index);
    }

    render() {
        return (
            <div>
                <a onClick = {this.deleteSmurf}>Remove this smurf #{this.state.index + 1}</a>
            </div>
        );
    };
};

export default connect(null, { deleteSmurf })(RemoveSmurf);