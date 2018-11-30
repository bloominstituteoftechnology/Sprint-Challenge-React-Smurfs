import React, { Component } from 'react';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';

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
            }).catch(err => {
                console.log(err);
            });
        });
    };

    removeSmurf = (e, id) => {
        e.preventDefault();
        axios.delete(`http://localhost:3333/${id}`).then(response => {
            console.log(response);
            this.setState({
                smurfs: response.data
            }).catch(err => {
                console.log(err);
            });
        });
    };

    render() {
        return (
            <div className="App">
                <NavBar />
                <Route
                    path="/smurf-form"
                    render={props => (
                        <SmurfForm {...props} smurfs={this.state.smurfs} />
                    )}
                />
                <Route
                    exact
                    path="/"
                    render={props => (
                        <Smurfs {...props} smurfs={this.state.smurfs} />
                    )}
                />
            </div>
        );
    }
}

export default App;
