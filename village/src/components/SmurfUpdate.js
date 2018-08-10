import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';



const url = 'http://localhost:3333/smurfs';

class SmurfUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email:'',
            id: 0
         }     
    }

componentDidMount () {
    const id = Number(this.props.match.params.id);
    axios.get(url)
    .then(response => {
        let matching = response.data.find(smurf => smurf.id === id);
        this.setState({
            name: matching.name,
            age: matching.age,
            height: matching.height,
            id: matching.id
        });
    })
    .catch(error => {
        console.log(error);
    })
}

handleChange = event => {
    this.setState({ 
        [event.target.name]: event.target.value
    });
}

update = (event) => {
    event.preventDefault();
    const updatedSmurf ={
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
    }
    axios.put(`${url}/${this.state.id}`, updatedSmurf)
    .then(response => {
        console.log(response);
        console.log(response.data);
        window.location = '/smurfs';
    })
    .catch(error => {
        console.log(error);
    })
}

    render() { 
        return ( 
            
            <div>
            <Link to="/">Home</Link>
                <form>
                    <input
                        placeholder='Name'
                        name='name' 
                        value={this.state.name} 
                        onChange={this.handleChange}/>
                    <input
                        name="age"
                        placeholder="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                    <input
                        name="height"
                        placeholder="height"
                        value={this.state.height}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Update</button>
                </form>
                
            </div>
         );
    }
}
 
export default SmurfUpdate;