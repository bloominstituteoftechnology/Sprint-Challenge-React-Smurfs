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

  
  

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  add = (e, obj) => {
    e.preventDefault();
    this.props.addSmurf(e, obj)
    this.setState({name: '', age: '', height: ''})
  }

  render() {
    return (
      <div className="SmurfForm">
        <form updateSmurf={this.props.updateSmurf}
          onSubmit={e =>
            this.add(e, {
              name: this.state.name,
              age: this.state.age,
              height: this.state.height
            }) 
          }
        >
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            required
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            type="text"
            placeholder="age"
            required
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            type="text"
            required
            value={this.state.height}
            name="height"
          />
          <input type="submit" value="Add to the village" />
        </form>
      </div>
    );
  }
}

export default SmurfForm;
