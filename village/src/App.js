import React, { Component } from 'react';
import Village from './components/Village';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

const blankSmurf = {
  photo: '',
  name: '',
  age: '',
  height: '',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurf: {
        photo: '',
        name: '',
        age: '',
        height: '',
      },
      editingId: null,
      activeSmurf: null,
      isEditing: false
    };
  }
  
  componentDidMount(){
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
  }

  getSmurfById = id => {
    axios
      .get(`http://localhost:3333/smurfs/${id}`)
      .then(response => this.setState({activeSmurf: response.data }))
      .catch(error => console.log(error));
  }

  changeHandler = event => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [event.target.name]: event.target.value
      }
    })
  }

  addNewSmurf = () => {
    axios
      .post('http://localhost:3333/smurfs', this.state.smurf)
      .then(response => {
        this.setState({ smurfs: response.data })
      })
      .catch(error => console.log(error));
  }

  deleteSmurf = (ev, id) => {
    ev.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(error => console.log(error));
  };

  updateSmurf = () => {
    axios
      .put(
        `http://localhost:3333/smurfs/${this.state.editingId}`,
        this.state.item
      )
      .then(response => {
        this.setState({
          items: response.data,
          editingId: null,
          isEditing: false,
          smurf: blankSmurf
        });
      })
      .catch(error => console.log(error));
  };

  setUpUpdateForm = (ev, smurf) => {
    ev.preventDefault();
    this.setState({
      smurf, 
      isEditing: true,
      editingId: smurf.id
    });
  };

  


  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav>
          <h1 className = "smurf-village-header">Welcome To Smurf Village</h1>
          <div className = "the-smurfing-nav">
            <NavLink exact to="/smurf-form">
              Add Your Smurfing Smurf
            </NavLink>
            <NavLink exact to="/">
              Village
            </NavLink>
            <NavLink to='/smurfs'>Meet The Smurfs</NavLink>
          </div>
        </nav>

        <Route exact path='/' render={(props) => <Village {...props} />}/>

        <Route exact path='/smurf-form' render={(props) => <SmurfForm {...props} 
        addNewSmurf = {this.addNewSmurf} 
        changeHandler = {this.changeHandler} 
        isEditing={this.state.isEditing}
        updateSmurf={this.updateSmurf}
        smurf = {this.state.smurf} />} />

        <Route exact path='/smurfs' render={(props) => <Smurfs {...props} 
        getSmurfById={this.getSmurfById}
        smurfs={this.state.smurfs} />} />

        <Route path='/smurfs/:id' render={(props) => <Smurf {...props} 
        deleteSmurf={this.deleteSmurf}
        activeSmurf={this.state.activeSmurf}
        smurfs={this.state.smurfs} />} />

      </div>
    );
  }
}

export default App;
