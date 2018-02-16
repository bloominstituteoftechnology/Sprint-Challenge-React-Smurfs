import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

class App extends Component {
	state = {smurfs: [], name: '', age: '', height: ''};

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
        <SmurfForm name={this.state.name} age={this.state.age} height={this.state.height}handleInput={this.handleInput} addSmurf={this.addSmurf} />
        <Smurfs toggleEdit={this.toggleEdit} edit={this.state.edit} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} modifySmurf={this.modifySmurf} name={this.state.name} age={this.state.age} height={this.state.height} handleInput={this.handleInput}/>
      </div>
    );
  }

  addSmurf = (event)=>{
    event.preventDefault();
    let {name, age, height} = this.state;
    let smurf = {
    	name: this.state.name, 
    	age: this.state.age,
    	height: this.state.height,
    	edit: false
    	}

    axios.post('http://localhost:3333/smurfs', smurf)
    .then((res)=>{
    	console.log(res);
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
    	let updatedSmurf = this.state.smurfs.filter((smurf)=>{
    		return smurf.id !== res.data.SmurfRemoved.id;
    	});
      this.setState({smurfs: updatedSmurf});
    })
    .catch((err)=>{
      console.log(err);
    });
  }

  modifySmurf = (modified)=>{
    axios.put(`http://localhost:3333/smurfs/${modified.id}`, modified)
    .then((res)=>{
    	let copySmurfs = this.state.smurfs;
    	copySmurfs.forEach((smurf, i)=>{
    		if(smurf.id === res.data.id){
    			copySmurfs[i] = res.data;
    		}
    	});
      this.setState({smurfs: copySmurfs});
    })
    .catch((err)=>{
      console.log(err);
    });
  }

  handleInput = (event)=>{
  	let name = event.target.name;
  	let value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  toggleEdit = (id)=>{
		let copySmurfs = this.state.smurfs;
		copySmurfs.forEach((smurf)=>{
			if(smurf.id === id){
				smurf.edit = true;
			}
		});
		this.setState({smurf: copySmurfs});
	}

}

	
export default App;
