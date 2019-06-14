import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-materialize'; 

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
        // To prevent too many API calls, it's probably better to utilize the state of the App, so I refactored that.
        // A flaw of this method is that we need to first mount the API call in our App, so if we have a direct path to
        // this url, there will be a mount error. In that case, it would be better to utilize an API call here.
        // let url = 'http://localhost:3333/smurfs';
        let id = Number(this.props.match.params.id);
        // axios.get(url)
        //     .then(res => {
        //         let found = res.data.find(smurf => smurf.id === id);
        //         this.setState({
        //             name: found.name,
        //             age: found.age,
        //             height: found.height,
        //             id: found.id
        //         })
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
        let found = this.props.smurfs.find(smurf => smurf.id === id);
        this.setState({
            name: found.name,
            age: found.age,
            height: found.height,
            id: found.id
        })
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleUpdate = (event) => {
        event.preventDefault();
        let url = 'http://localhost:3333/smurfs';
        axios.put(`${url}/${this.state.id}`, {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        })
            .then(res => {
                window.location = "/smurfs";
            })
            .catch(err => {
                console.log(err);
            })
    }

    render(){
        return ( 
            <div className="SmurfForm">
                <h3> Update Smurf! </h3>
                <form onSubmit={this.handleUpdate}>
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
                    <Button type="submit">Update Smurf!</Button>
                </form>
            </div>
        );
    }
}
 
export default UpdateSmurf;