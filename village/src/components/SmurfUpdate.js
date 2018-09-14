import React from'react';
import axios from 'axios';

class SmurfUpdate extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            name: '',
            age: '',
            height: '',
            id: this.props.match.params.id
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        axios
            .put(`http://localhost:3333/smurfs/${this.state.id}`, {
                name: this.state.name,
                age: this.state.age,
                email: this.state.email
            })
            .then(response => {
                window.location = '/smurfs'
            })
            .catch(error => {
                console.log(error);
            });
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" name="name" placeholder="Name" onChange={this.handleChange.bind(this)}/>
                    <input type="number" name="age" placeholder="Age" onChange={this.handleChange.bind(this)}/>
                    <input type="number" name="height" placeholder="Height" onChange={this.handleChange.bind(this)}/>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default SmurfUpdate;