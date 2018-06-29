import React, { Component } from 'react';
import Smurf from './Smurf';

class SmurfPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: undefined,
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    };
  }

  componentDidUpdate(prevProps) {
    if(prevProps.smurfs !== this.props.smurfs) {

      if (this.props.match) {
        let smurfs = this.props.smurfs.slice();
        let id = Number(this.props.match.params.smurfID);
        this.setState({id: id});
        smurfs = smurfs.filter(item => item.id === id);
        if (smurfs[0]) {
          this.setState({ smurf: {
            name: smurfs[0].name,
            age: smurfs[0].age,
            height: smurfs[0].height
          }});
        }
      }  
    }
  }

  render() {
    return (
      <Smurf
        name={this.state.smurf.name}
        id={this.state.id}
        age={this.state.smurf.age}
        height={this.state.smurf.height}
        onDeleteSmurf={this.props.onDeleteSmurf}
      />
    );
  }
}

export default SmurfPage;
