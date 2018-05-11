import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {Route} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: "",
      age: 0,
      height: '',
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
        axios.get("http://localhost:3333/smurfs")
          .then(response => this.setState({ smurfs: response.data }));
      }
  
  //     handleSubmit(e) {
  //   e.preventDefault();
  //   let newSmurf = {
  //     name: this.state.name,
  //     age: this.state.age,
  //     height: this.state.height
  //   }
  //   axios.post("http://localhost:3333/smurfs", newSmurf)
  //     .then(response => {
  //       let newSmurfArray = response.data.slice();
  //       this.setState({
  //         smurfs: newSmurfArray,
  //         name: "",
  //         age: 0,
  //         height: "",
  //       });
  //     });
  // }
  
  
  
  render() {
    return (
      <div className="App">
        <div className='formStyle'>
          <SmurfForm />
        </div>
        <div className='smurfCard'>
          <Smurfs smurfs={this.state.smurfs} />
        </div>
      </div>
    );
  }
}

export default App;


//The following code has been copied from other files and will be used as reference for completing the challenge.
// componentDidMount() {
//   axios.get("http://localhost:5000/friends")
//     .then(response => this.setState({ friends: response.data }));
// }

// handleInput(e) {
//   this.setState({ [e.target.name]: e.target.value })
// }

// handleSubmit(e) {
//   e.preventDefault();
//   console.log("testing");
//   let newFriend = {
//     name: this.state.name,
//     email: this.state.email,
//     age: this.state.age
//   }
//   axios.post("http://localhost:5000/friends", newFriend)
//     .then(response => {
//       let newFriendArray = response.data.slice();
//       this.setState({
//         friends: newFriendArray,
//         name: "",
//         age: 0,
//         email: ""
//       });
//     });
// }

// render() {
//   return (
//     <div>
//         <div className='App headForm'>
//       <h1>Sign Up!</h1>
//       <AddForm
//       input={this.handleInput.bind(this)}
//       submit={this.handleSubmit.bind(this)}
//       name={this.state.name}
//       age={this.state.age}
//       email={this.state.email}
//       />
//       </div>
//       <div className='friendsBox'>
//       <FriendsList friends={this.state.friends} />
//       </div>
//     </div>
//   )

// }
// }