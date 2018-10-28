import React, { Component } from 'react';
import axios from 'axios';

import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

export default class SingleSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: [],
      name: '',
      age: '',
      height: '',
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3333/smurfs/`)
      .then(response =>
        this.setState({
          smurf: response.data.find(
            smurf => `${smurf.id}` === this.props.match.params.id
          ),
        })
      )
      .catch(err => console.log(err));

    // Using GET because <Smurf /> doesn't render when using direct link
    // http://localhost:3000/smurf/:id

    // const smurf = this.props.smurfs.find(
    //   smurf => `${smurf.id}` === this.props.match.params.id
    // );
    // this.setState({ smurf });
  }

  render() {
    return (
      <div>
        {/* Checking for state here will prevent
        TypeError: Cannot read property 'id' of undefined
        when using direct link http://localhost:3000/smurf/:id */}
        {this.state.smurf ? (
          <React.Fragment>
            <SmurfForm
              id={this.state.smurf.id}
              editSmurf={this.props.editSmurf}
            />
            <Smurf
              id={this.state.smurf.id}
              name={this.state.smurf.name}
              age={this.state.smurf.age}
              height={this.state.smurf.height}
              goodbyeSmurf={this.props.goodbyeSmurf}
            />
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}
