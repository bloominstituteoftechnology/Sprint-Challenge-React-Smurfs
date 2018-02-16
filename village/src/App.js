import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  state = {
    smurfs: [],
};

addSmurfs = () => {
     const data = axios.get('http://localhost:3333/smurfs')
			 .then((response) => {
					 console.log('data', response.data);
					 this.setState({smurfs: response.data});
					 })		 
			 .catch((error) => {
					 console.log('there was an error', error);
			 })		 
					 
	    console.log('data', data);
}

componentDidMount = () => {
	this.addSmurfs();
}
	
	render() {
    return (
      <div className="App">
        <SmurfForm onUpdate={this.addSmurfs}/>
        <Smurfs smurfs={this.state.smurfs}/>
      </div>
    );
  }
}

export default App;
