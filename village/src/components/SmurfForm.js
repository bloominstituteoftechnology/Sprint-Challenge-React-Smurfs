import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  // *****I got this kind of working, it would post the new smurf to the server, but It wouldn't update on the screen unless i
  //     refreshed the page, so re-wrote them on App and passed it down, so the setState would re-render
  // addSmurf = event => {
  //   event.preventDefault();
  //   axios.post(`http://localhost:3333/smurfs`, {
  //     name: this.state.name,
  //     age: this.state.age,
  //     height: this.state.height
  //   })
  //   .then( response => {
  //    this.props.smurfs = response.data;
  //     this.setState({
  //         name: '',
  //         age: '',
  //         height: ''
  //       })  
  //   })
  //   .catch(err => console.log(err));
  // }

  // handleInputChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.props.createSmurfHandler}>
          <input
            onChange={this.props.inputHandler}
            placeholder="name"
            value={this.props.name}
            name="name"
          />
          <input
            onChange={this.props.inputHandler}
            placeholder="age"
            value={this.props.age}
            name="age"
          />
          <input
            onChange={this.props.inputHandler}
            placeholder="height"
            value={this.props.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
