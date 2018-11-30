import React, { Component } from 'react';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smurfs: []
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:3333/smurfs')
            .then(response => {
                console.log(response);
                this.setState({ smurfs: response.data });
            })
            .catch(err => {
                console.log(err);
            });
    }

    addNewSmurf = (e, data) => {
        e.preventDefault();
        axios.post('http://localhost:3333/smurfs', data).then(response => {
            console.log(response);
            this.setState({
                smurfs: response.data
            });
        });
    };
    render() {
        return (
            <div className="App">
                <SmurfForm send={this.addNewSmurf} />
                <Smurfs smurfs={this.state.smurfs} />
            </div>
        );
    }
}

export default App;
