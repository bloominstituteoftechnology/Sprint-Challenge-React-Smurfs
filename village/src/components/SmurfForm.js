import React, { Component } from 'react';
// import Smurf from './Smurf';
import Smurfs from './Smurfs';
import EditSmurf from './SmurfEdit'
import axios from 'axios';
import PropTypes from 'prop-types';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      name: '',
      age: '',
      height: '',
      showUpdateForm: false
    };
  }
  componentDidMount() {
		this.getAJAX();
	}
	getAJAX = () => {
		axios
			.get(`http://localhost:3333/smurfs/`)
			.then((response) => {
				this.setState({ lists: response.data });
			})
			.catch((err) => {
				console.log(err);
			});
  }
  showUpdateForm = () => {
		this.setState({ showUpdateForm: !this.state.showUpdateForm });
	};


  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const list = { name: this.state.name, height: this.state.height, age: this.state.age };
		axios
			.post(`http://localhost:3333/smurfs/`, list)
			.then((savedList) => {
				console.log(savedList);
				this.setState({ lists: savedList.data });
				this.getAJAX();
			})
			.catch((err) => {
				console.log(err);
			});
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
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
        <Smurfs smurfs={this.state.lists} getAJAX={this.getAJAX} />      
        {this.state.lists.map((smurf,i) => (
          <EditSmurf key={smurf + i} smurf={smurf} getAJAX={this.getAJAX} />
        ))}

      </div>
    );
  }
}

export default SmurfForm;
