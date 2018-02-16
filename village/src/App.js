import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

class App extends Component {
	state = {smurfs: [], name: '', age: '', height: '', editSmurf: {}};

  componentDidMount(){
  	axios.get('http://localhost:3333/smurfs')
    .then((res)=>{
      this.setState({smurfs: res.data});
    })
    .catch((err)=>{
      console.log(err);
    });
  }

	render() {
   	return (
      <div className="App">
        <SmurfForm name={this.state.name} age={this.state.age} height={this.state.height}handleInput={this.handleInput} addSmurf={this.addSmurf}/>
        <Smurfs smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} modifySmurf={this.modifySmurf} />
      </div>
    );
  }

  addSmurf = (event)=>{
    event.preventDefault();
    let {name, age, height} = this.state;
    let smurf = {name, age, height}

    axios.post('http://localhost:3333/smurfs', smurf)
    .then((res)=>{
      this.setState({smurfs: res.data});
    })
    .catch((err)=>{
      console.log(err);
    });
      
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  deleteSmurf = (id)=>{
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then((res)=>{
    	let updatedSmurfy = this.state.smurfs.filter((smurf)=>{
    		return smurf.id !== res.data.SmurfRemoved.id;
    	});
      this.setState({smurfs: updatedSmurfy});
    })
    .catch((err)=>{
      console.log(err);
    });
  }

  modifySmurf = (id)=>{
    
    let {name, age, height} = this.state;
    let smurf = {name, age, height}

    axios.post('http://localhost:3333/smurfs/id', smurf)
    .then((res)=>{
      this.setState({smurfs: res.data});
    })
    .catch((err)=>{
      console.log(err);
    });
      
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInput = (event)=>{
  	let name = event.target.name;
  	let value = event.target.value;
    this.setState({
      [name]: value,
    });
  }
}

export default App;
