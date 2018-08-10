import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    let url = 'http://localhost:3333/smurfs';
    axios.get(url)
      .then(res => {
        this.setState({smurfs:res.data});
      })
      .catch(err => {
        console.log(err);
      })
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/smurfs/add" component={SmurfForm} />
        <Route exact path="/smurfs" render={props => (
          <Smurfs {...props} smurfs={this.state.smurfs} />
        )} />
      </div>
    );
  }
}

const Home = () => {
  return (
    <div className="home">
      <Link to="/smurfs"> All smurfs! </Link>
      <Link to="/smurfs/add"> Add a smurf! </Link>
    </div>
  )
}

export default App;
