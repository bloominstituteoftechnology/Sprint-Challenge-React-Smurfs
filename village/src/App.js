import React, { Fragment, Component } from 'react';
import axios from 'axios'; 
import {Route, Switch} from 'react-router-dom'; 
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';
import SmurfPage from './components/SmurfPage'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    }
  }
  componentDidMount () {
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({smurfs: response.data})
      })
      .catch (error => console.log(error))

  }

  addingSmurf = (smurf) => {
    console.log(smurf);
    axios.post('http://localhost:3333/smurfs', smurf)
      .then(response => {
        console.log(response)
        this.setState({smurfs: response.data})
      })
      .catch(error => console.log(error))
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  deleteSmurf = (id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
       .then(response => {
         console.log(response)
         this.setState({smurfs:response.data})
       })
  }

  render() {
      console.log(this.state.smurfs); 
    return (
      
      <Fragment>
        
        <div className="App">
          <Switch>
              <Route exact path = "/" component={Header} />
              <Route path = '/smurfvillage' render = {(props) =>  <div><SmurfForm {...props} addSmurf = {this.addingSmurf} /> <Smurfs {...props} smurfs ={this.state.smurfs}  /></div>} />
              <Route path = '/:id' render ={ (props) =><SmurfPage {...props} delete = {this.deleteSmurf} />} />
             
              
              
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default App;
