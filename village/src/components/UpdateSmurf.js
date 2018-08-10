import React, { Component } from 'react';
import axios from 'axios';

class UpdateSmurf extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            height: '',
            id: 0
        };
    }

    componentDidMount() {
        let url = 'http://localhost:3333/smurfs';
        let id = Number(this.props.match.params.id);
        axios.get(url)
            .then(res => {
                let found = res.data.find(smurf => smurf.id === id);
                this.setState({
                    name: found.name,
                    age: found.age,
                    height: found.height,
                    id: found.id
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render(){
        return ( 
            <div className="SmurfForm">
                <form onSubmit={this.addSmurf}>
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
                    <button type="submit">Add to the village</button>
                </form>
            </div>
        );
    }
}
 
export default UpdateSmurf;