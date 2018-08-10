import React, {Component} from 'react';
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
    axios.put(`${url}/${this.state.id}`, {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
    })
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
                <form>
                    <input
                        type="text"
                        placeholder='Name'
                        name='name' 
                        value={this.state.name} 
                        onChange={this.handleChange}/>
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                    <input
                        type="number"
                        name="height"
                        placeholder="Height"
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