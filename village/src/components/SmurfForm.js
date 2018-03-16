import React, { Component } from 'react';
import axios from "axios";
import { Link, Redirect } from 'react-router-dom';
import { Form, Button, Input } from 'reactstrap';
import './SmurfForm.css';

class SmurfForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      redirect: false,
    };
    this.addSmurf = this.addSmurf.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
  }

  addSmurf(event) {
    // event.preventDefault();
    // add code to create the smurf using the api
    
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    
    
    axios.post("http://localhost:3333/smurfs", newSmurf)
    .then(response => {
      this.setState({
        name: '',
        age: '',
        height: '',
        redirect: true,
      })
      // this.getData();
      console.log(response, 'post');
    })
    .catch(error => {
      console.log(error);
    });
  }


  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  updateAge(event) {
    this.setState({
      age: event.target.value
    });
  }

  updateHeight(event) {
    this.setState({
      height: event.target.value
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/smurfs" />
    }
    return (
      
      <div className="SmurfForm">
        <Form className="d-flex w-50" onSubmit={this.addSmurf}>
          <Input
            onChange={this.updateName}
            placeholder="name"
            value={this.state.name}
            // type="text"
          />
          <Input
            onChange={this.updateAge}
            placeholder="age"
            value={this.state.age}
            // type="number"
          />
          <Input
            onChange={this.updateHeight}
            placeholder="height"
            value={this.state.height}
            // type="number"
          />
          <Button color="danger" type="submit">
              Add Smurf!
              <Link to="/"></Link>
          </Button>
        </Form>
      </div>
    );
  }
}

export default SmurfForm;