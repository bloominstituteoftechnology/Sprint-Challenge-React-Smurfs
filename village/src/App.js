import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      postSuccess: '',
      postFail: '',
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

postSmurf = smurf => {
  axios.post('http://localhost:3333/smurfs', smurf)
        .then(res => {
          console.log(res)
          this.setState({
            postSuccess: 'Smurf Added!',
            postFail: '',
          })

          this.setState({ smurfs: res.data });
        })
        .catch(err => {
          this.setState({
            postSuccess: '',
            postFail: 'Add Failed :(',
          })
        });
}

getSmurfs = () => {
  axios.get('http://localhost:3333/smurfs')
        .then(res => {
          this.setState({
            smurfs: res.data
          })
        })
        .catch(err => console.log(err));
}

componentDidMount() {
  this.getSmurfs();
}

  render() {
    return (
      <div className="App">
        <SmurfForm postSmurf={this.postSmurf}/>
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
