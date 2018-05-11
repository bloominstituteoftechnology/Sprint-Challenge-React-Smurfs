import React, { Component } from 'react';
import './App.css';
import { SmurfList, SmurfForm, Navigation, Header } from "./components";
import axios from "axios";
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount = () => {
    axios.get("http://localhost:3333/smurfs")
      .then(res => {
        const smurfs = res.data;
        this.setState({ smurfs });
      })
      .catch(err => console.log(err))
  }

  handleUpdateSmurf = (id, updatedSmurf) => {
    axios.put(`http://localhost:3333/smurfs/${id}`, updatedSmurf)
    .then(res => {
      const smurfs = res.data;
      this.setState({ smurfs });
    })
    .catch(err => console.log(err))
  }
  handleDeleteSmurf = (id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        const smurfs = res.data;
        this.setState({ smurfs });
      })
      .catch(err => console.log(err))
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    const smurfs = this.state.smurfs;
    return (
      <div className="App">
        <Route exact path="/" component={Header}/>
        <Route path="/smurfs" render={props => <div className="whole-app"><Navigation/> <SmurfList smurfs={smurfs}/> <SmurfForm smurfs={smurfs}/></div>}/>
        <Route path="/village" render={props => <div className="whole-app"><Navigation/> <SmurfList smurfs={smurfs}/></div>}/>
        <Route path="/addsmurf" render={props => <div className="whole-app"><Navigation/> <SmurfForm smurfs={smurfs}/></div>}/>
      </div>
    );
  }
}

export default App;
