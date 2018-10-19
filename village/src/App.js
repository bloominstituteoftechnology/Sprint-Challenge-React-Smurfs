import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import {Route, Link, NavLink} from 'react-router-dom';
import {withRouter} from 'react-router';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      newSmurf: {
        name: '',
        age: '',
        height: ''
          },
      prepDelete: false
      
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  prepDelete = () => {
    this.setState({prepDelete: !this.state.prepDelete})
  }

  delete = (id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
         .then(response => this.setState({smurfs: response.data}));

    this.props.history.push('/');
    this.setState({prepDelete: !this.state.prepDelete})
  }
  addSmurf = (smurf) => {
    axios.post('http://localhost:3333/smurfs', smurf)
         .then(response => {
           this.setState({ smurfs: response.data})})
  }

  handleInput = (e) => {
    this.setState({newSmurf: {
                   [e.target.name]: e.target.value 
    }})
  }
  componentDidMount(){
        axios.get('http://localhost:3333/smurfs')
             .then(response => this.setState({smurfs: response.data}));
  }

  render() {
    return (
      <div className="App">
      <header><h1>Smurf Village</h1></header>
      <nav><NavLink to='/'>Home</NavLink><NavLink to='/addSmurf'>Add Smurf</NavLink><div className="delete"onClick={this.prepDelete}>Delete Smurf</div></nav>
      
      <Route exact path='/' render={props =>
                      <Smurfs {...props}
                              smurfs={this.state.smurfs}
                              prepDelete={this.state.prepDelete}
                              delete={this.delete} />
      } />
        
      <Route path='/addSmurf' render={props =>
                              <SmurfForm 
                              {...props}
                              handleInput={this.handleInput} 
                              newSmurf={this.state.newSmurf}
                              addSmurf={this.addSmurf} />
       }/>
      <Route path='/smurfs/:id' render={props => <div className='smurfpage-container'><Smurf {...props} 
                                                  smurf={this.state.smurfs}
                                                  delete={this.delete}
                                                  prepDelete={this.state.prepDelete}
                                                  smurfPage />
                                                  </div>
                                                  }/>
      </div>
    );
  }
}

export default withRouter(App);
