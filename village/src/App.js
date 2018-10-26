import React, { Component } from 'react';
import Axios from 'axios';
import { Route } from 'react-router-dom';
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
    Axios.get(`http://localhost:3333/smurfs`)
        .then(res => this.setState({smurfs: res.data}))
          .then(() => console.log(this.state.smurfs))
          .catch(err => console.log(err));
  }

  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <SmurfForm />
        {/* <Smurfs smurfs={this.state.smurfs} /> */}
        <Route exact path='/' render={(props) => (
          <Smurfs
            {...props}
            smurfs={this.state.smurfs} 
          />
        )}/>

{/* <Route render={(props) => (
  <MyComponent 
    {...props}
    someProp={someData} 
    someOtherProp={moreData} 
  />
)} /> */}



        
      </div>
    );
  }
}

export default App;
