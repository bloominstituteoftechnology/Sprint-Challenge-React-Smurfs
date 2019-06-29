import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {Route} from 'react-router-dom';
import Nav from './components/Nav';
import Head from './components/Head';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  componentDidMount(){
    axios.get('http://localhost:3333/smurfs')
         .then(res=>{
            this.setState({smurfs:[...res.data]});
         })
         .catch(error=>{
           console.error('Error',error);
         })
  }
  handleCreateOrUpdate=()=>{
    axios.post('http://localhost:3333/smurfs').then(res=>{
      this.setState({smufs:res.data})
    })
    .catch(err=>console.log(err))
  };
  handleDelete=(event,beingDeleted)=>{
    event.preventDefault();
    axios.delete('http://localhost:3333/smurfs/${beingDeleted.id}',beingDeleted)
    .then(res=>{
      this.setState({
        smurfs:[...res.data]
      });
    }).catch(err=>console.log(err))
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
       <Nav/>
       <Route exact path="/" component={Head}/>
       <Route path="/smurfs" component={SmurfForm}/>
       <Route exact path="/smurfs" render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}/>
       
      </div>
    );
  }
}

export default App;
