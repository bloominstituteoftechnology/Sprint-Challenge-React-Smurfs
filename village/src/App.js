import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Axios from 'axios';
import './App.css';
import RouteFrontPage from './components/Route/RouteFrontPage';
import RouteSmurfPage from './components/Route/RouteSmurfPage';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    Axios
      .get(`http://localhost:3333/smurfs`).then(res => {
        console.log('API running!')    
        console.log(res);
        this.setState({ smurfs: res.data })
        }).catch(err => {
          console.log('Error trying to get API', err)
    })
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route 
          exact path="/smurfs"
          render={(props) =>(
            <RouteFrontPage 
              {...props} 
              smurfs={this.state.smurfs} />
          )}
        />
        <Route 
          path="/smurfs/:id"
          render={(props) =>(
            <RouteSmurfPage 
            {...props} 
            smurfs={this.state.smurfs} />
          )}
        />
      </div>
    );
  }
}

export default App;
