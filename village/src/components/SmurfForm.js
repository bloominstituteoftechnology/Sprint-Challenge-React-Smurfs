import React, { Component } from 'react';
import axios from 'axios';
import {NavLink, Route} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      id: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    axios.post('http://localhost:3333/smurfs', newSmurf)
    .then( res => console.log("POST",res.status, res.data) )
    .then( this.props.getSmurfs )
    .catch( e => console.log(e) );

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  modifySmurf = () => {
    axios.put(`http://localhost:3333/smurfs/${this.props.id}`, this.state)
    .then( res => console.log("PUT",res.status) )
    .then( this.props.getSmurfs )
    .catch( e => console.log(e) );
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  componentDidMount() {
    console.log(this.props);
    const {name, age, height} = this.props;
    // if( this.props.match.path === `/:id/modify` ) { // DO NOT WORKS
    if( this.props.match.path === `/${this.props.id}/modify` ) {
      console.log("ok");
      this.setState({
        name: name,
        age: age,
        height: height,
        id: this.props.id
      });
    }
    
  }

  render() {
    return (
      <Container
        onChange={this.handleInputChange}
        className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <NavLink to="/">Hide</NavLink> 
          <Route exact path="/"                       render={ props => <button
                                                                            onClick={ this.addSmurf}
                                                                            type="submit">Add to the village
                                                                          </button> }
          />
          <Route exact path={`/${this.props.id}/modify`} render={ props => <button
                                                                            onClick={ this.modifySmurf }
                                                                            type="submit">
                                                                              Modify smurf
                                                                            </button> }
          />
          {/* <button
            onClick={ this.props.match.path === `/${this.props.id}/modify` ? this.modifySmurf : this.addSmurf}
            type="submit">{ this.props.match.path === `/${this.props.id}/modify` ? "Modify smurf" : "Add to the village"}
          </button> */}
        </form>
      </Container>
    );
  }
}

export default SmurfForm;
