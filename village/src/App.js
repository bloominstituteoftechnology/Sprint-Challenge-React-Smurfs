import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: ''

    };
  }
  handleDeleteSmurf = (event,id) =>{
    Axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(()=>{this.getAllSmurfs()})
    
  }
  handleNewSmurf = event =>{

    let newSmurf = {
                    name:  this.state.name,
                    age:   this.state.age,
                    height:this.state.height     
                   }

    Axios.post('http://localhost:3333/smurfs',newSmurf)
    this.setState({
      name: '',
      age: '',
      height: ''
    });
    this.getAllSmurfs();
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  getAllSmurfs(){
    return Axios.get('http://localhost:3333/smurfs')
    .then((res)=>{
      this.setState({smurfs:res.data},()=>{console.log('whats on state? ', this.state.smurfs)})
    })
    .catch(error => {console.log('an error occured', error)})
  }
  componentDidMount(){
    this.getAllSmurfs();
  }
  render() {
    return (
      <div className="App">
        <NavLink className='btn' to='/'>Home</NavLink>
        <NavLink className='btn' to='/smurf-form'>New Smurf</NavLink>
        <Route exact path='/smurf-form' render={(props)=><SmurfForm {...props} handleInputChange={this.handleInputChange} handleNewSmurf = {this.handleNewSmurf} age={this.state.age} height={this.state.height} name={this.state.name}  /> }></Route>                 
        <Route exact path='/' render={(props)=><Smurfs {...props} smurfs={this.state.smurfs} handleDeleteSmurf={this.handleDeleteSmurf}/>}></Route>
      </div>
    );
  }
}

export default App;
