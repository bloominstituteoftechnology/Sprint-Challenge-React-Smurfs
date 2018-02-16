import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  state = {
    smurfs: [],
  };

  render() {
    return (
      <div className="App">
        <SmurfForm onCreate={this.loadSmurfs} />
        <Smurfs
          smurfs={this.state.smurfs}
          onDelete={this.removeSmurf}
          onUpdateName={this.updateName}
          onUpdateAge={this.updateAge}
          onUpdateHeight={this.updateHeight}
        />
      </div>
    );
  }

componentDidMount() {
  this.loadSmurfs();
}
//Get the 411 on smurfs
loadSmurfs = () => {
  axios
  .get('http://localhost:3333/smurfs')
  .then(response => {
    this.setState({
      smurfs: response.data,
    });
  })
  .catch(error => {
    console.error('error getting data');
  });
}

removeSmurfs = id => {
  const endpoint = `http://localhost:5000/friends/${id}`;
  axios
    .delete(endpoint)
    .then(response => {
      console.log('response from delete', response);
      this.setState({ friends: response.data });
    })
    .catch(() => {
      console.error('error deleting');
    });
};

}

export default App;
