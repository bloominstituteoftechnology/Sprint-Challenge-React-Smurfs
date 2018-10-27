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
        const singlefriend = this.props.friends.find(user => `${user.id}` === id);

        if (!singlefriend) {
            return null
        }
        return (
            <div className="card">
                <div>
                    <NavLink className="link" to='/friendlist/'>
                        <p>Click Here To go back to Friends.</p>
                    </NavLink>
                    <form onSubmit={this.handleUpdateSubmit}>
                        Name: <input onChange={this.changeHandler} name="name" type="text" />
                        Age: <input onChange={this.changeHandler} name="age" type="text" />
                        Email: <input onChange={this.changeHandler} name="email" type="text" />
                        <input type="submit" value="Update Friend" />
                    </form>
                </div>
                <div>

                    <p className="text">
                        Name: {singlefriend.name}<br />
                        Age: {singlefriend.age}yrs<br />
                        Email: {singlefriend.email}<br />
                    </p>
                </div>

            </div>
        );
    }
}
