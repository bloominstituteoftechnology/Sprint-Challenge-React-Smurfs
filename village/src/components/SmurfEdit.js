import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SmurfEdit extends React.Component {
    constructor(props) {
        super();
        this.state = {
            smurf: [],
            id: Number(props.match.params.id),
            name: '',
            age: '',
            height: ''
        }
    }

    componentDidMount = () => {
        axios.get('http://localhost:3333/smurfs')
            .then(response => {
                let currentName, currentAge, currentHeight;

                response.data.forEach(smurf => {
                    if (this.state.id === smurf.id) {
                        currentName = smurf.name;
                        currentAge = smurf.age;
                        currentHeight = smurf.height;
                    }
                })
                this.setState({ name: currentName, age: currentAge, height: currentHeight });
            })
            .catch(err => {
                console.error(err);
            });
    }

    updateSmurf = event => {
        event.preventDefault();
        const { name, age, height } = this.state;
        const smurf = { name, age, height };
        axios
            .put(`http://localhost:3333/smurfs/${this.state.id}`, smurf)
            .then(repose => {
                // alert("Update confirmed")
            })
            .catch(err => {
                console.error(err)
            });
    }

    deleteSmurf = () => {
        axios
            .delete(`http://localhost:3333/smurfs/${this.state.id}`)
            .then(response => {

            })
            .catch(err => {
                console.error(err)
            });
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div className="SmurfForm">
                <form onSubmit={this.updateSmurf}>
                    <input
                        className="input"
                        onChange={this.handleInputChange}
                        placeholder="name"
                        value={this.state.name}
                        name="name"
                    />
                    <input
                        className="input"
                        onChange={this.handleInputChange}
                        placeholder="age"
                        value={this.state.age}
                        name="age"
                    />
                    <input
                        className="input"
                        onChange={this.handleInputChange}
                        placeholder="height"
                        value={this.state.height}
                        name="height"
                    />
                    <button className="button button-update" type="submit">Update Smurf</button>
                </form>
                <Link to="/" >
                    <button className="button button-return"> Return </button>
                </Link><div className="space"></div>
                <Link to="/addSmurf" >
                    <button onClick={()=> this.deleteSmurf()} className="button button-delete"> Delete </button>
                </Link>
            </div>
        )
    }
};

export default SmurfEdit;