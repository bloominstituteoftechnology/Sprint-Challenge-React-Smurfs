import React from 'react';
import axios from 'axios';
import SmurfCard from './SmurfCard';

export default class Smurf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            smurf: null
        };
    }

    componentDidMount() {
        this.fetchSmurf(this.props.match.params.id);
    }

    componentWillReceiveProps(newProps) {
        if (this.props.match.params.id !== newProps.match.params.id) {
            this.fetchSmurf(newProps.match.params.id);
        }
    }

    fetchSmurf = id => {
        axios.get(`http://localhost:3333/smurfs`)
            .then(response => this.setState({ smurf: response.data[id] }))
            .catch(err => { console.log(err) })
    };

    render() {
        console.log('Smurf.js', this.state.smurf);
        if (!this.state.smurf) {
            return <div>Loading smurf information...</div>;
        }

        return (
            <div>
                <SmurfCard smurf={this.state.smurf} />
            </div>
        );
    }
}
