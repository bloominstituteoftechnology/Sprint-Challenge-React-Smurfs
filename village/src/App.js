import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios'
import { runInContext } from 'vm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }


//   resetSmurfState =( ) => {
//     axios
//    .get('http://localhost:3333/smurfs')
//        .then(response =>{
//            this.setState( () => ({smurfs: response.data}));
//            // console.log(response.data)
//        })
//        .then ( response => {
//            console.log(this.state)
//        })
       
//        .catch(error => {
//            console.error('Server Error', error)
//        });
// }
// componentDidMount(){
//   this.resetSmurfState()
// }
componentDidMount = () => {
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      const smurfs = res.data
      this.setState({ smurfs })
    })
    .catch(err => console.error(err))
}

addSmurf = newSmurf => {
  axios
  .post('http://localhost:3333/smurfs', newSmurf)
      .then(res => {
        const smurfs = res.data
        this.setState({ smurfs })
      })
      .catch(err => console.error(err))
  }
  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        const smurfs = res.data;
        this.setState({smurfs})
      })
      .catch(err => console.error(err))
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <NavLink to= '/smurf-form'>Add New Smurf</NavLink>
        <Route 
         path = '/smurf-form'
         render ={() => (
          <SmurfForm reset = {this.resetSmurfState} addSmurf={this.addSmurf}/>

         )}
         />
        {/* <SmurfForm reset = {this.resetSmurfState} addSmurf={this.addSmurf}/> */}
        <h1> HHH</h1>
        <Route
         path ='/'
         render ={ () =>        (<Smurfs smurfs={this.state.smurfs} deleteSmurf={this.state.deleteSmurf} />
        )}
        />
       </div>
    );
  }
}

export default App;
