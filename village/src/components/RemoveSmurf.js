import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

class RemoveSmurf extends Component {

    deleteSmurf = (event) => {
        this.props.deleteSmurf(event.target.value);
    }

    render() {
        return (
            <div>
                <a onClick = {this.deleteSmurf} value = {this.props.index}>Remove this smurf #{this.props.index + 1}</a>
            </div>
        );
    };
};

export default connect(null, { deleteSmurf })(RemoveSmurf);