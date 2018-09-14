// React
import React from 'react';

// Dependencies
import Axios from 'axios';

export default class EditSmurfForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            smurf: {
                id: 0,
                name: '',
                age: '',
                height: ''
            },
            editedSmurf: {
                name: '',
                age: '',
                height: ''
            }
        };
    }

    componentDidMount() {
        Axios
            .get(`http://localhost:3333/smurfs/${ this.props.match.params.id }`)
            .then(res => this.setState({
                smurf: res.data
            }))
            .catch(err => console.log(err))
    }

    handleInputChange = e => {
        this.setState({ 
            editedSmurf: {
                ...this.state.editedSmurf,
                [e.target.name]: e.target.value
            } 
        });
    }

    editSmurf = event => {
        event.preventDefault();
        
        const editedSmurf = {
            id: this.state.smurf.id,
            name: this.state.editedSmurf.name,
            age: Number(this.state.editedSmurf.age),
            height: this.state.editedSmurf.height
        }
    
        this.props.handleEditedSmurf(editedSmurf);
    
        this.setState({
            editedSmurf: {
                name: '',
                age: '',
                height: ''
            }
        }, () => this.props.history.push('/smurfs'));
    }

    render() {
        return(
            <div className = 'fade-in'>
                <h2>Edit { this.state.smurf.name }</h2>
                <form onSubmit={this.editSmurf}>
                    <input
                        onChange={this.handleInputChange}
                        placeholder={this.state.smurf.name}
                        value={this.state.editedSmurf.name}
                        name="name"
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder={this.state.smurf.age}
                        value={this.state.editedSmurf.age}
                        name="age"
                        type="number"
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder={this.state.smurf.height}
                        value={this.state.editedSmurf.height}
                        name="height"
                    />
                    <button type="submit">Submit Edits</button>
                </form>
            </div>
        );
    }
}
