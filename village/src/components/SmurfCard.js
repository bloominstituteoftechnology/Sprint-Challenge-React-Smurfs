import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css'

export default class SmurfCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: '',
        };
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    handleUpdateSubmit = (event) => {
        event.preventDefault();
        const friend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }
        const id = this.props.match.params.id;
        this.props.update(id, friend)
        event.target.reset();

    }

    render() {
        const id = this.props.match.params.id;
        const smurf = this.props.smurfs.find(smurf => `${smurf.id}` === id);

        if (!smurf) {
            return "Loading Smurf"
        }
        return (
            <div className="card">
                <div>
                    <NavLink className="link" to='/'>
                        <p>Click Here To Go Back To Smurf Village.</p>
                    </NavLink>
                    <form onSubmit={this.addSmurfHandler}>
                        <input
                            onChange={this.changeHandler}
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
                        <button type="submit">Add to the village</button>
                    </form>
                </div>
                <div className="Smurf">
                    
                        <h3>{smurf.name}</h3>
                        <strong>{smurf.height} tall</strong>
                        <p>{smurf.age} smurf years old</p>
                    
                </div>

            </div>
        );
    }
}
