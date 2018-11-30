import React from 'react';

class EditSmurf extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        age: '',
        height: ''
      };
    }
  
    handleInputChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    submitHandler = event => {
      event.preventDefault();
      this.props.editSmurf(this.state, this.props.match.params.id);
      this.props.history.push("/");
    }
  
    render() {
      return (
        <div className="SmurfForm">
          <form onSubmit={this.submitHandler}>
            <input
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.state.name}
              name="name"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="age"
              value={this.state.age}
              name="age"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="height"
              value={this.state.height}
              name="height"
            />
            <button type="submit">Add to the village</button>
          </form>
        </div>
      );
    }
  }

export default EditSmurf;