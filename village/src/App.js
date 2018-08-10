import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';


const url = 'http://localhost:3333/smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      loading: true
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios.get(url).then(response => {
      this.setState({
        smurfs: response.data,
        loading: false
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  remove(id) {
    console.log(id)
    axios.delete(`${url}/${id}`)
      .then((response) => {
        console.log(response)})
        .catch((error) => {
        console.log(error)});
      window.location.reload();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} func={this.remove}> 
          {this.state.smurfs.map(smurf=><Route key={smurf.id} exact path={`/:id`}
                                                  render={props=>   
                                                    <smurfCard id={smurf.id}
                                                    name={smurf.name}
                                                    age={smurf.age} 
                                                    email={smurf.email}
                                                    {...props}
                                                    />}
                                              />)}
        </Smurfs>
      </div>
    );
  }
}

export default App;
