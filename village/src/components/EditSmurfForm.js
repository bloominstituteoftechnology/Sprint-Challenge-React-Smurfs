// React
import React from 'react';

// Dependencies
import Axios from 'axios';

export default class EditSmurfForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        Axios
            .get()

    }

    render() {
        return(
            <div>Edit Smurf Form</div>
        );
    }
}
