import React, { Component } from "react";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.postNewSmurf(this.state);
    this.setState({
      name: "",
      age: "",
      height: ""
    });
    this.props.history.push("/smurfs");
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div
        className="SmurfForm"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: '100vh'
        }}
      >
        <form
          onSubmit={this.addSmurf}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: '1px solid black',
            padding: '20px',
            height: '500px',
            borderRadius: '3px',
            boxShadow: '1px 1px 3px 1px rgba(0, 0, 0, 0.2)'
          }}
        >
          <h1>Create New Smurf</h1>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            style={{ width: "300px", margin: "20px", height: "30px", borderRadius: '3px', border: '1px solid black' }}
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            style={{ width: "300px", height: "30px", borderRadius: '3px', border: '1px solid black' }}
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            style={{ width: "300px", margin: "20px", height: "30px", borderRadius: '3px', border: '1px solid black' }}
          />
          <button style={{ width: "300px", height: "30px", borderRadius: '3px', border: '1px solid black' }} type="submit">
            Add to the village
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
