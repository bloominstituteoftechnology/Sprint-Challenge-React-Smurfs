import React, { Component } from 'react';
import axios from 'axios';
import smurf from './Smurf'
import Smurf from './Smurf';

class DisplayList extends App{
    constructor(props) {
        super(props);
        this.state = {
          smurfs: []
        };
      }

componentDidMount() {
    this.fetchFriends();
}

fetchFriends = () => {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };


  refreshFriends = (response) => {
    this.setState(() => ({ friends: response.data }));
  }

  render(){
    if (!this.state.friends) {
        return <div>Loading friends information...</div>;
    }

    return(
        <div>
            {/* <Smurf props = {this.state.friends}/> */}
            {/* <FriendCard refresh = {this.refreshFriends} boo = {this.state.friends} /> */}
        </div>
    )
    
  }

}
export default DisplayList;