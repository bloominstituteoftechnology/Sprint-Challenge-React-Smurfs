import React, { Component } from 'react';
import axios from 'axios' 
import { Route } from 'react-router-dom'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';
import SmurfUpdate from './components/SmurfUpdate';
import SingleSmurf from './components/SingleSmurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios.get(`http://localhost:3333/smurfs`)
      .then(res => this.setState({smurfs: res.data}))
      .catch(err => console.log(err))
  }

  onUpdate (event){
    const id = event.target.id
    axios.delete(`http://localhost:3333/smurfs/${id}`, {
      
    })
      .then(res => {
        console.log(res)
        //this.setState({smurfs: res.data})
      })
      .catch(err => console.log(err))
  }

  onDelete (event) {
    const id = event.target.id

    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({smurfs: res.data})
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={Header} />
        <Route exact path="/smurfs" 
          render = {props => <SmurfsApp {...props} smurfs={this.state.smurfs} onDelete={this.onDelete.bind(this)}/>} />
        <Route path="/smurfs/:id" component={SmurfUpdate} />
        <Route path="/single/:id" 
          render = {props => <SingleSmurf {...props} smurfs={this.smurfs} />} />
      </div>
    );
  }
}

function SmurfsApp (props){
  return (
    <div className="App">
        <SmurfForm {...props}/>
        <Smurfs {...props}/>
    </div>
  )
}

export default App;
