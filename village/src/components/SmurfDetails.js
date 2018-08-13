import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


class SmurfDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smurf: {},
            name: '',
            age: '',
            height: ''
        };
    }


    componentDidMount() {
        axios
            .get('http://localhost:3333/smurfs')
            .then(response => {
                this.setState(() => ({
                    smurf: response.data.find(smurf => smurf.id == this.props.match.params.id)
                }));
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }

    editSmurf = (event) => {
        event.preventDefault();
        const { name, age, height } = this.state;
        const updatedSmurf = { name, age, height };
        axios.put(`http://localhost:3333/smurfs/${this.props.match.params.id}`, updatedSmurf)
            .then(response => {
                this.setState(() => ({
                    smurf: response.data.find(smurf => smurf.id == this.props.match.params.id)
                }));
                this.props.setSmurfData(response.data);
            })
            .catch(error => this.props.setErrorHandler('Error Editing Smurf!'));

        this.setState({
            name: '',
            age: '',
            height: '',
        });
    }


    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div className="SmurfForm">
                <h3>{this.state.smurf.name}</h3>
                <strong>{this.state.smurf.height} tall</strong>
                <p>{this.state.smurf.age} smurf years old</p>
                <form onSubmit={this.editSmurf}>
                    <input
                        onChange={this.handleInputChange}
                        placeholder="name"
                        value={this.state.name}
                        name="name"
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder="age"
                        value={this.state.age}
                        name="age"
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder="height"
                        value={this.state.height}
                        name="height"
                    />
                    <button type="submit">Edit this smurf</button>
                </form>
                <Link to="/smurfs"><button>Back to the Village</button></Link>
            </div>
        );
    }
}

export default SmurfDetails;
