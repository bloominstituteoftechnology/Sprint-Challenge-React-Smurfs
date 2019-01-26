import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smurfs: [],
        };
    }

    componentDidMount() {
        this.fetch();
    }

    fetch = () => {
        axios.get('http://localhost:3333/smurfs')
            .then((response) => {
                this.setState({smurfs: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <nav>
                        <NavLink to="/">Home</NavLink> | <NavLink to="/smurf-form">Form</NavLink>
                    </nav>

                    <Route exact path="/" render={props => <Smurfs smurfs={this.state.smurfs} {...props}/>} />
                    <Route path="/smurf-form" render={props => <SmurfForm refetch={this.fetch} {...props}/>} />
                </div>
            </Router>
        );
    }
}

export default App;
