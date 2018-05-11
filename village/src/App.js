import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        const smurfs = res.data;
        this.setState({ smurfs });
      })
      .catch(err => console.log(err))
  }

  addSmurf = (newSmurf) => {
    axios.post("http://localhost:3333/smurfs", newSmurf)
      .then(res => {
        const smurfs = res.data;
        this.setState({ smurfs });
      })
      .catch(err => console.log(err))
  }

  handleDelete = (id) => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        const smurfs = res.data;
        this.setState({smurfs})
      })
      .catch(err => console.lot(err));
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    const { smurfs } = this.state;
    return (
      <div className="App">
        <SmurfForm addSmurf={this.addSmurf}/>
        <Smurfs smurfs={smurfs} handleDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default App;
